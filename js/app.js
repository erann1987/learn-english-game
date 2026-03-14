/** Main application logic for the flashcard game. */
(function () {
  "use strict";

  // ---- State ----
  var currentCategory = null;
  var currentIndex = 0;
  var isFlipped = false;
  var quizWords = [];
  var quizIndex = 0;
  var quizScore = 0;
  var quizAnswered = false;
  var touchStartX = 0;

  // ---- DOM refs ----
  var categorySelector = document.getElementById("category-selector");
  var categoryButtons = document.getElementById("category-buttons");
  var modeSelector = document.getElementById("mode-selector");
  var modeTitle = document.getElementById("mode-title");
  var flashcardArea = document.getElementById("flashcard-area");
  var flashcard = document.getElementById("flashcard");
  var cardEmoji = document.getElementById("card-emoji");
  var backEmoji = document.getElementById("back-emoji");
  var wordTextHe = document.getElementById("word-text-he");
  var wordTextEn = document.getElementById("word-text-en");
  var exampleText = document.getElementById("example-text");
  var progressLabel = document.getElementById("progress-label");
  var progressBar = document.getElementById("progress-bar");
  var prevBtn = document.getElementById("prev-btn");
  var nextBtn = document.getElementById("next-btn");
  var flipBtn = document.getElementById("flip-btn");
  var backBtn = document.getElementById("back-btn");
  var hearFrontBtn = document.getElementById("hear-front-btn");
  var hearBackBtn = document.getElementById("hear-back-btn");
  var modeBackBtn = document.getElementById("mode-back-btn");
  // Quiz
  var quizArea = document.getElementById("quiz-area");
  var quizBackBtn = document.getElementById("quiz-back-btn");
  var quizEmoji = document.getElementById("quiz-emoji");
  var quizHearBtn = document.getElementById("quiz-hear-btn");
  var quizChoices = document.getElementById("quiz-choices");
  var quizFeedback = document.getElementById("quiz-feedback");
  var quizFeedbackText = document.getElementById("quiz-feedback-text");
  var quizNextBtn = document.getElementById("quiz-next-btn");
  var quizScoreEl = document.getElementById("quiz-score");
  var celebration = document.getElementById("celebration");

  // ---- Init ----
  function init() {
    renderCategories();
    bindEvents();
  }

  // ---- Render categories ----
  function renderCategories() {
    categoryButtons.innerHTML = "";
    VOCABULARY.forEach(function (cat) {
      var btn = document.createElement("button");
      btn.className = "category-btn";
      btn.innerHTML =
        '<span class="cat-emoji">' + cat.emoji + '</span>' +
        '<span class="cat-name">' + cat.category + '</span>' +
        '<span class="cat-name-en">' + cat.categoryEn + '</span>';
      btn.addEventListener("click", function () {
        selectCategory(cat);
      });
      categoryButtons.appendChild(btn);
    });
  }

  // ---- Select a category → show mode picker ----
  function selectCategory(cat) {
    currentCategory = cat;
    modeTitle.textContent = cat.emoji + " " + cat.category;
    showScreen("mode");
  }

  // ---- Screen management ----
  function showScreen(screen) {
    categorySelector.classList.add("hidden");
    modeSelector.classList.add("hidden");
    flashcardArea.classList.add("hidden");
    quizArea.classList.add("hidden");
    Audio.stop();

    if (screen === "home") {
      categorySelector.classList.remove("hidden");
    } else if (screen === "mode") {
      modeSelector.classList.remove("hidden");
    } else if (screen === "flashcards") {
      flashcardArea.classList.remove("hidden");
    } else if (screen === "quiz") {
      quizArea.classList.remove("hidden");
    }
  }

  // ========== FLASHCARD MODE ==========
  // Front: Hebrew word + emoji + "hear in English" button
  // Back: English word + example sentence + "hear sentence" button

  function startFlashcards() {
    currentIndex = 0;
    isFlipped = false;
    showScreen("flashcards");
    showCard();
    flashcard.focus();
  }

  function showCard() {
    var words = currentCategory.words;
    var entry = words[currentIndex];

    // Front side: Hebrew + emoji
    cardEmoji.textContent = entry.emoji;
    wordTextHe.textContent = entry.translation;

    // Back side: English + example
    backEmoji.textContent = entry.emoji;
    wordTextEn.textContent = entry.word;
    exampleText.textContent = entry.example;

    isFlipped = false;
    flashcard.classList.remove("flipped");

    progressLabel.textContent = (currentIndex + 1) + " / " + words.length;
    progressBar.style.width = ((currentIndex + 1) / words.length * 100) + "%";

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === words.length - 1;
  }

  function nextCard() {
    if (currentIndex < currentCategory.words.length - 1) {
      currentIndex++;
      showCard();
    } else {
      showCelebration("!כל הכבוד 🎉");
      setTimeout(function () { showScreen("mode"); }, 2200);
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      showCard();
    }
  }

  function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle("flipped");
    if (isFlipped) {
      // Pronounce the English word when flipping to back
      var entry = currentCategory.words[currentIndex];
      Audio.speakEnglish(entry.word);
    }
  }

  // ========== QUIZ MODE ==========
  // Hear English word → pick the correct emoji from the same category

  function startQuiz() {
    quizWords = shuffle(currentCategory.words.slice());
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    quizScoreEl.textContent = "⭐ 0";
    showScreen("quiz");
    showQuizQuestion();
  }

  function showQuizQuestion() {
    quizAnswered = false;
    quizFeedback.classList.add("hidden");
    var entry = quizWords[quizIndex];

    // Hide the prompt emoji so it doesn't give away the answer
    quizEmoji.textContent = "🎧";

    // Build 4 emoji choices from the SAME category
    var sameCatWords = currentCategory.words.filter(function (w) {
      return w.word !== entry.word;
    });
    var distractors = shuffle(sameCatWords).slice(0, 3);
    var choiceEntries = shuffle(distractors.concat([entry]));

    quizChoices.innerHTML = "";
    choiceEntries.forEach(function (choice) {
      var btn = document.createElement("button");
      btn.className = "quiz-choice-btn quiz-choice-emoji";
      btn.textContent = choice.emoji;
      btn.setAttribute("data-word", choice.word);
      btn.addEventListener("click", function () {
        handleQuizAnswer(btn, choice.word, entry.word, entry.emoji, entry.translation);
      });
      quizChoices.appendChild(btn);
    });

    // Pronounce the English word
    Audio.speakEnglish(entry.word);
  }

  function handleQuizAnswer(btn, chosenWord, correctWord, correctEmoji, correctHe) {
    if (chosenWord === correctWord) {
      // Correct! Lock the question and move on
      quizAnswered = true;
      quizScore++;
      quizScoreEl.textContent = "⭐ " + quizScore;
      btn.classList.add("correct");

      // Disable all buttons
      var buttons = quizChoices.querySelectorAll(".quiz-choice-btn");
      buttons.forEach(function (b) { b.classList.add("disabled"); });

      quizFeedbackText.textContent = "!נכון 🎉";
      quizFeedbackText.style.color = "var(--color-success)";
      quizFeedback.classList.remove("hidden");
      quizNextBtn.classList.remove("hidden");
      Audio.speakEnglish(correctWord);
    } else {
      // Wrong — shake the button, mark it out, let them try again
      btn.classList.add("wrong");
      btn.classList.add("disabled");
      btn.style.pointerEvents = "none";

      quizFeedbackText.textContent = "🙁 ...נסה שוב";
      quizFeedbackText.style.color = "var(--color-error)";
      quizFeedback.classList.remove("hidden");
      quizNextBtn.classList.add("hidden");

      // Re-pronounce the word to help them
      Audio.speakEnglish(correctWord);

      // Hide the "try again" message after a moment
      setTimeout(function () {
        if (!quizAnswered) {
          quizFeedback.classList.add("hidden");
        }
      }, 1500);
    }
  }

  function nextQuizQuestion() {
    quizIndex++;
    if (quizIndex >= quizWords.length) {
      var total = quizWords.length;
      var msg = quizScore + "/" + total + " ⭐ ";
      if (quizScore === total) {
        msg += "!מושלם 🏆";
      } else if (quizScore >= total * 0.7) {
        msg += "!כל הכבוד 🎉";
      } else {
        msg += "!נסה שוב 💪";
      }
      showCelebration(msg);
      setTimeout(function () { showScreen("mode"); }, 2500);
    } else {
      showQuizQuestion();
    }
  }

  // ---- Celebration ----
  function showCelebration(message) {
    celebration.classList.remove("hidden");
    celebration.innerHTML = "";

    var msgEl = document.createElement("div");
    msgEl.className = "big-message";
    msgEl.textContent = message;
    celebration.appendChild(msgEl);

    var emojis = ["🌟", "⭐", "🎉", "🎊", "✨", "🏆", "💫", "🥳"];
    for (var i = 0; i < 16; i++) {
      var span = document.createElement("span");
      span.className = "emoji-burst";
      span.textContent = emojis[i % emojis.length];
      var angle = (i / 16) * Math.PI * 2;
      var dist = 120 + Math.random() * 80;
      span.style.setProperty("--tx", Math.cos(angle) * dist + "px");
      span.style.setProperty("--ty", Math.sin(angle) * dist + "px");
      span.style.animationDelay = (Math.random() * 0.3) + "s";
      celebration.appendChild(span);
    }

    setTimeout(function () {
      celebration.classList.add("hidden");
      celebration.innerHTML = "";
    }, 2200);
  }

  // ---- Helpers ----
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function getAllWordsExcept(excludeWord) {
    var all = [];
    VOCABULARY.forEach(function (cat) {
      cat.words.forEach(function (w) {
        if (w.word !== excludeWord) all.push(w);
      });
    });
    return all;
  }

  // ---- Touch swipe for flashcards ----
  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    var diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) < 50) return;
    if (diff < 0) nextCard();
    else prevCard();
  }

  // ---- Events ----
  function bindEvents() {
    // Mode selection
    document.querySelectorAll(".mode-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        if (mode === "flashcards") startFlashcards();
        else if (mode === "quiz") startQuiz();
      });
    });

    // Flashcard navigation
    nextBtn.addEventListener("click", nextCard);
    prevBtn.addEventListener("click", prevCard);
    flipBtn.addEventListener("click", flipCard);
    backBtn.addEventListener("click", function () { showScreen("mode"); });
    modeBackBtn.addEventListener("click", function () { showScreen("home"); });
    quizBackBtn.addEventListener("click", function () { showScreen("mode"); });
    quizNextBtn.addEventListener("click", nextQuizQuestion);

    // Flashcard click to flip (but not on hear buttons)
    flashcard.addEventListener("click", function (e) {
      if (e.target.closest(".btn-hear")) return;
      flipCard();
    });

    // Audio buttons — front: hear English word, back: hear English sentence
    hearFrontBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      Audio.speakEnglish(currentCategory.words[currentIndex].word);
    });
    hearBackBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      Audio.speakEnglish(currentCategory.words[currentIndex].example);
    });

    // Quiz: replay the English word
    quizHearBtn.addEventListener("click", function () {
      Audio.speakEnglish(quizWords[quizIndex].word);
    });

    // Touch swipe on flashcard
    flashcard.addEventListener("touchstart", handleTouchStart, { passive: true });
    flashcard.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Keyboard shortcuts
    document.addEventListener("keydown", function (e) {
      if (!flashcardArea.classList.contains("hidden")) {
        switch (e.key) {
          case "ArrowRight": prevCard(); break;
          case "ArrowLeft": nextCard(); break;
          case " ":
          case "Enter": e.preventDefault(); flipCard(); break;
          case "Escape": showScreen("mode"); break;
        }
      } else if (!quizArea.classList.contains("hidden")) {
        if (e.key === "Escape") showScreen("mode");
        if (quizAnswered && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          nextQuizQuestion();
        }
      }
    });
  }

  // ---- Start ----
  init();
})();
