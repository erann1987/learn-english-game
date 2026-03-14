# Copilot Instructions — Learn English Game

## Project Overview

Vocabulary flashcard game built with **plain HTML, CSS, and vanilla JavaScript** — no frameworks, no bundler, no build step. Open `index.html` directly in a browser to run.

## Architecture

- **`data/vocabulary.js`** — Vocabulary data as a global `VOCABULARY` array, loaded via `<script>` tag before `app.js`. Each entry has `category`, `emoji`, and a `words` array of `{ word, translation, example }` objects.
- **`js/app.js`** — All application logic wrapped in an IIFE. Manages state (`currentCategory`, `currentIndex`, `isFlipped`), renders the UI imperatively via DOM manipulation, and handles keyboard/click events.
- **`css/styles.css`** — Single stylesheet using CSS custom properties (`:root` variables) for theming. Flashcard flip uses CSS 3D transforms (`perspective`, `backface-visibility`, `rotateY`).
- **`index.html`** — Static HTML shell. All dynamic content is rendered by `app.js`.

Data flows one way: `vocabulary.js` → `app.js` reads it → DOM updates. There is no state persistence across page reloads.

## Key Conventions

- **No build tools or package manager.** Do not introduce npm, webpack, or similar unless explicitly requested.
- **Global script loading order matters.** `data/vocabulary.js` must be loaded before `js/app.js` in `index.html` because `app.js` reads the global `VOCABULARY` constant.
- **IIFE pattern in app.js.** All logic is inside `(function () { "use strict"; ... })()` to avoid polluting the global scope. New modules should follow the same pattern or use a separate IIFE.
- **Translations are in Hebrew.** The `translation` field in vocabulary data is Hebrew text (RTL). Keep this consistent when adding new words.
- **CSS theming via custom properties.** Colors, radius, and shadows are defined in `:root`. Use these variables instead of hardcoded values.

## Adding Vocabulary

Add entries to `data/vocabulary.js`. Follow the existing structure:
```js
{ word: "example", translation: "דוגמה", example: "This is an example sentence." }
```

## Running Locally

```bash
# Any static file server works. Examples:
npx serve .
python3 -m http.server 8000
```

Or just open `index.html` directly in the browser (file:// protocol works fine).
