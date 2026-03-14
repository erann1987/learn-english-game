/** Main application logic for the flashcard game. */
(function () {
  "use strict";

  // ---- State ----
  let currentCategory = null;
  let currentIndex = 0;
  let isFlipped = false;

  // ---- DOM refs ----
  const categorySelector = document.getElementById("category-selector");
  const categoryButtons = document.getElementById("category-buttons");
  const flashcardArea = document.getElementById("flashcard-area");
  const flashcard = document.getElementById("flashcard");
  const wordText = document.getElementById("word-text");
  const translationText = document.getElementById("translation-text");
  const exampleText = document.getElementById("example-text");
  const progressLabel = document.getElementById("progress-label");
  const progressBar = document.getElementById("progress-bar");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const flipBtn = document.getElementById("flip-btn");
  const backBtn = document.getElementById("back-btn");

  // ---- Init ----
  function init() {
    renderCategories();
    bindEvents();
  }

  // ---- Render categories ----
  function renderCategories() {
    categoryButtons.innerHTML = "";
    VOCABULARY.forEach(function (cat) {
      const btn = document.createElement("button");
      btn.className = "category-btn";
      btn.textContent = cat.emoji + " " + cat.category;
      btn.addEventListener("click", function () {
        selectCategory(cat);
      });
      categoryButtons.appendChild(btn);
    });
  }

  // ---- Select a category ----
  function selectCategory(cat) {
    currentCategory = cat;
    currentIndex = 0;
    isFlipped = false;
    categorySelector.classList.add("hidden");
    flashcardArea.classList.remove("hidden");
    showCard();
    flashcard.focus();
  }

  // ---- Show current card ----
  function showCard() {
    const words = currentCategory.words;
    const entry = words[currentIndex];
    wordText.textContent = entry.word;
    translationText.textContent = entry.translation;
    exampleText.textContent = entry.example;

    // Reset flip state
    isFlipped = false;
    flashcard.classList.remove("flipped");

    // Update progress
    progressLabel.textContent = (currentIndex + 1) + " / " + words.length;
    progressBar.style.width = ((currentIndex + 1) / words.length * 100) + "%";

    // Enable/disable nav buttons
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === words.length - 1;
  }

  // ---- Navigation ----
  function nextCard() {
    if (currentIndex < currentCategory.words.length - 1) {
      currentIndex++;
      showCard();
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
  }

  function goBack() {
    flashcardArea.classList.add("hidden");
    categorySelector.classList.remove("hidden");
    currentCategory = null;
  }

  // ---- Events ----
  function bindEvents() {
    nextBtn.addEventListener("click", nextCard);
    prevBtn.addEventListener("click", prevCard);
    flipBtn.addEventListener("click", flipCard);
    backBtn.addEventListener("click", goBack);
    flashcard.addEventListener("click", flipCard);

    document.addEventListener("keydown", function (e) {
      if (!currentCategory) return;
      switch (e.key) {
        case "ArrowRight": nextCard(); break;
        case "ArrowLeft": prevCard(); break;
        case " ":
        case "Enter": e.preventDefault(); flipCard(); break;
        case "Escape": goBack(); break;
      }
    });
  }

  // ---- Start ----
  init();
})();
