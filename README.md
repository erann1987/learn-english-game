# Learn English — Vocabulary Flashcards

A simple browser-based flashcard game for learning English vocabulary, grouped by categories.

## How to Run

Open `index.html` in any modern browser. No build step or server required.

For local development with live-reload you can use any static file server, for example:

```bash
npx serve .
```

## Project Structure

```
├── index.html          # Entry point
├── css/styles.css      # All styles (CSS custom properties for theming)
├── js/app.js           # Application logic (IIFE, no framework)
├── data/vocabulary.js  # Vocabulary data grouped by category
└── .github/
    └── copilot-instructions.md
```

## Adding Vocabulary

Edit `data/vocabulary.js`. Each category is an object with `category`, `emoji`, and a `words` array.  
Each word entry has `word`, `translation`, and `example`.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ← → | Previous / Next card |
| Space / Enter | Flip card |
| Escape | Back to categories |
