# Learn English — Vocabulary Flashcards 🎓

An interactive browser-based English learning game for Hebrew-speaking kids (ages 6–10). Features vocabulary flashcards with audio pronunciation and a quiz mode.

## How to Run

Open `index.html` in any modern browser. No build step or server required. Works on smartphones, tablets (iPad), and desktops.

For local development with live-reload:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Features

- **8 vocabulary categories**: Colors, Animals, Food, Numbers, Body Parts, Family, Weather, Common Phrases
- **Flashcard mode**: Flip cards to learn words with emoji visuals
- **Quiz mode**: Hear a Hebrew word → pick the correct English translation
- **Audio pronunciation**: Uses Web Speech API — words are spoken aloud automatically
- **Touch-friendly**: Swipe to navigate, large tap targets for small fingers
- **Celebration animations**: Emoji bursts when completing a category
- **Hebrew RTL interface**: All navigation labels in Hebrew

## Project Structure

```
├── index.html              # Entry point (RTL, Hebrew UI)
├── css/styles.css          # Styles with CSS custom properties
├── js/
│   ├── app.js              # Main game logic (IIFE)
│   └── audio.js            # Web Speech API wrapper
├── data/vocabulary.js      # Vocabulary data by category
└── .github/
    └── copilot-instructions.md
```

## Adding Vocabulary

Edit `data/vocabulary.js`. Each category object:
```js
{
  category: "Hebrew name",
  categoryEn: "English name",
  emoji: "🎨",
  words: [
    { word: "english", translation: "עברית", example: "Simple sentence.", emoji: "🔴" }
  ]
}
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ← → | Next / Previous card (RTL) |
| Space / Enter | Flip card / Next quiz question |
| Escape | Back to mode selection |
