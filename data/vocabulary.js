/**
 * Vocabulary data grouped by category.
 * Each word entry has: word, translation, and an example sentence.
 *
 * To add a new category, append an object to the VOCABULARY array.
 * To add words, push entries into a category's `words` array.
 */
const VOCABULARY = [
  {
    category: "Food & Drinks",
    emoji: "🍕",
    words: [
      { word: "apple", translation: "תפוח", example: "I eat an apple every morning." },
      { word: "bread", translation: "לחם", example: "She bought fresh bread from the bakery." },
      { word: "water", translation: "מים", example: "Please drink more water." },
      { word: "cheese", translation: "גבינה", example: "This cheese tastes delicious." },
      { word: "rice", translation: "אורז", example: "We had rice with vegetables for dinner." },
      { word: "coffee", translation: "קפה", example: "He drinks coffee every morning." },
      { word: "chicken", translation: "עוף", example: "The chicken soup is very hot." },
      { word: "sugar", translation: "סוכר", example: "Do you want sugar in your tea?" }
    ]
  },
  {
    category: "Animals",
    emoji: "🐾",
    words: [
      { word: "dog", translation: "כלב", example: "The dog is playing in the park." },
      { word: "cat", translation: "חתול", example: "My cat sleeps all day." },
      { word: "bird", translation: "ציפור", example: "A bird is singing on the tree." },
      { word: "fish", translation: "דג", example: "The fish swims in the river." },
      { word: "horse", translation: "סוס", example: "She rides a horse every weekend." },
      { word: "rabbit", translation: "ארנב", example: "The rabbit jumped over the fence." }
    ]
  },
  {
    category: "Colors",
    emoji: "🎨",
    words: [
      { word: "red", translation: "אדום", example: "The red car is very fast." },
      { word: "blue", translation: "כחול", example: "The sky is blue today." },
      { word: "green", translation: "ירוק", example: "The grass is green in spring." },
      { word: "yellow", translation: "צהוב", example: "She wore a yellow dress." },
      { word: "black", translation: "שחור", example: "He has a black backpack." },
      { word: "white", translation: "לבן", example: "Snow is white and cold." }
    ]
  },
  {
    category: "Family",
    emoji: "👨‍👩‍👧‍👦",
    words: [
      { word: "mother", translation: "אמא", example: "My mother cooks great food." },
      { word: "father", translation: "אבא", example: "My father reads the newspaper." },
      { word: "brother", translation: "אח", example: "My brother is older than me." },
      { word: "sister", translation: "אחות", example: "Her sister lives in another city." },
      { word: "grandmother", translation: "סבתא", example: "Grandmother tells us stories." },
      { word: "grandfather", translation: "סבא", example: "Grandfather planted a tree in the garden." }
    ]
  },
  {
    category: "Weather",
    emoji: "⛅",
    words: [
      { word: "sun", translation: "שמש", example: "The sun is shining brightly." },
      { word: "rain", translation: "גשם", example: "Take an umbrella, it might rain." },
      { word: "wind", translation: "רוח", example: "The wind is blowing strongly today." },
      { word: "cloud", translation: "ענן", example: "A dark cloud covered the sky." },
      { word: "snow", translation: "שלג", example: "Children love playing in the snow." },
      { word: "storm", translation: "סערה", example: "A big storm is coming tonight." }
    ]
  }
];
