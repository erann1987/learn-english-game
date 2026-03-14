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
  var wordText = document.getElementById("word-text");
  var translationText = document.getElementById("translation-text");
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
  var quizWordHe = document.getElementById("quiz-word-he");
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

  // ---- Flashcard Mode ----
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
    cardEmoji.textContent = entry.emoji;
    backEmoji.textContent = entry.emoji;
    wordText.textContent = entry.word;
    translationText.textContent = entry.translation;
    exampleText.textContent = entry.example;

    isFlipped = false;
    flashcard.classList.remove("flipped");

    progressLabel.textContent = (currentIndex + 1) + " / " + words.length;
    progressBar.style.width = ((currentIndex + 1) / words.length * 100) + "%";

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === words.length - 1;

    // Auto-pronounce the word
    Audio.speakEnglish(entry.word);
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
      var entry = currentCategory.words[currentIndex];
      Audio.speakEnglish(entry.example);
    }
  }

  // ---- Quiz Mode ----
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
    quizEmoji.textContent = entry.emoji;
    quizWordHe.textContent = entry.translation;

    // Show hear button for phrase categories
    quizHearBtn.classList.add("hidden");

    // Build 4 choices (1 correct + 3 distractors)
    var allWords = getAllWordsExcept(entry.word);
    var distractors = shuffle(allWords).slice(0, 3).map(function (w) { return w.word; });
    var choices = shuffle(distractors.concat([entry.word]));

    quizChoices.innerHTML = "";
    choices.forEach(function (choice) {
      var btn = document.createElement("button");
      btn.className = "quiz-choice-btn";
      btn.textContent = choice;
      btn.addEventListener("click", function () {
        handleQuizAnswer(btn, choice, entry.word);
      });
      quizChoices.appendChild(btn);
    });

    // Pronounce the Hebrew word then the English
    Audio.speakHebrew(entry.translation);
  }

  function handleQuizAnswer(btn, chosen, correct) {
    if (quizAnswered) return;
    quizAnswered = true;

    // Disable all buttons
    var buttons = quizChoices.querySelectorAll(".quiz-choice-btn");
    buttons.forEach(function (b) {
      b.classList.add("disabled");
      if (b.textContent === correct) b.classList.add("correct");
    });

    if (chosen === correct) {
      quizScore++;
      quizScoreEl.textContent = "⭐ " + quizScore;
      quizFeedbackText.textContent = "!נכון 🎉";
      quizFeedbackText.style.color = "var(--color-success)";
      Audio.speakEnglish(correct);
    } else {
      btn.classList.add("wrong");
      quizFeedbackText.textContent = correct + " :התשובה הנכונה";
      quizFeedbackText.style.color = "var(--color-error)";
      Audio.speakEnglish(correct);
    }

    quizFeedback.classList.remove("hidden");
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
    if (Math.abs(diff) < 50) return; // Too short
    // RTL: swipe left = next, swipe right = prev
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

    // Navigation
    nextBtn.addEventListener("click", nextCard);
    prevBtn.addEventListener("click", prevCard);
    flipBtn.addEventListener("click", flipCard);
    backBtn.addEventListener("click", function () { showScreen("mode"); });
    modeBackBtn.addEventListener("click", function () { showScreen("home"); });
    quizBackBtn.addEventListener("click", function () { showScreen("mode"); });
    quizNextBtn.addEventListener("click", nextQuizQuestion);

    // Flashcard click to flip
    flashcard.addEventListener("click", function (e) {
      if (e.target.closest(".btn-hear")) return;
      flipCard();
    });

    // Audio buttons
    hearFrontBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      Audio.speakEnglish(currentCategory.words[currentIndex].word);
    });
    hearBackBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      Audio.speakEnglish(currentCategory.words[currentIndex].example);
    });
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
          case "ArrowRight": prevCard(); break; // RTL
          case "ArrowLeft": nextCard(); break;  // RTL
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
