# Copilot Instructions — Learn English Game

## Project Overview

Interactive English learning game for **Hebrew-speaking kids (ages 6–10)**. Built with **plain HTML, CSS, and vanilla JavaScript** — no frameworks, no bundler, no build step. Open `index.html` directly in a browser (works on phones, iPads, and desktops).

## Architecture

- **`data/vocabulary.js`** — Vocabulary as a global `VOCABULARY` array, loaded via `<script>` before other JS. Each entry: `{ category (Hebrew), categoryEn, emoji, words: [{ word, translation, example, emoji }] }`.
- **`js/audio.js`** — Web Speech API wrapper (`Audio.speakEnglish()`, `Audio.speakHebrew()`). Slow speech rate (0.75) tuned for young learners. Must load before `app.js`.
- **`js/app.js`** — Main game logic in a single IIFE. Manages four screens: home (category picker) → mode selector → flashcards or quiz. All state is local variables inside the IIFE.
- **`css/styles.css`** — Single stylesheet with CSS custom properties in `:root` for theming. Flashcard flip uses CSS 3D transforms. All touch targets are ≥48px.
- **`index.html`** — Static RTL (`dir="rtl"`, `lang="he"`) HTML shell. Script load order: `vocabulary.js` → `audio.js` → `app.js`.

### Screen Flow
```
Category Selector → Mode Selector → Flashcards (swipe/click through cards)
                                   → Quiz (pick correct English word for Hebrew prompt)
                  ← Back buttons navigate up the hierarchy
```

### Data Flow
`vocabulary.js` (global) → `app.js` reads it → DOM updates. No persistent state — everything resets on page reload.

## Key Conventions

- **No build tools or package manager.** Do not introduce npm/webpack unless explicitly requested.
- **Global script loading order matters.** `vocabulary.js` → `audio.js` → `app.js`. The IIFE in `app.js` depends on the global `VOCABULARY` array and `Audio` object.
- **IIFE pattern.** All logic in `app.js` and `audio.js` is wrapped in IIFEs to avoid polluting the global scope. `Audio` is the only intentional global (exposed as a revealing module).
- **RTL/Hebrew UI.** The document is `dir="rtl"`. Navigation labels and category names are in Hebrew. English content uses `direction: ltr` in CSS. Arrow key navigation is RTL-aware (← = next, → = previous).
- **Kid-friendly design.** Large fonts, big touch targets (48px+), emoji on every word, colorful theme. Sentences should be simple (3–6 words) for the target age group (6–10).
- **Audio auto-plays.** Words are pronounced automatically when a flashcard is shown or a quiz question appears. The 🔊 button lets kids replay.
- **CSS theming via custom properties.** Colors, radius, and shadows are in `:root`. Use variables, not hardcoded values.

## Adding Vocabulary

Add entries to `data/vocabulary.js`. Each word needs all four fields:
```js
{ word: "hello", translation: "שלום", example: "Hello! How are you?", emoji: "👋" }
```
- Keep example sentences **short and simple** (target: 6-year-old reading level)
- Every word must have an `emoji` for visual association
- Categories have both `category` (Hebrew) and `categoryEn` (English) names

## Running Locally

```bash
npx serve .
# or
python3 -m http.server 8000
# or just open index.html directly (file:// works)
```
