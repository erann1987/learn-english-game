/**
 * Vocabulary data grouped by category.
 * Each word entry has: word, translation, and an example sentence.
 *
 * To add a new category, append an object to the VOCABULARY array.
 * To add words, push entries into a category's `words` array.
 */
const VOCABULARY = [
  {
    category: "צבעים",
    categoryEn: "Colors",
    emoji: "🎨",
    words: [
      { word: "red", translation: "אדום", example: "The apple is red.", emoji: "🔴" },
      { word: "blue", translation: "כחול", example: "The sky is blue.", emoji: "🔵" },
      { word: "green", translation: "ירוק", example: "The grass is green.", emoji: "🟢" },
      { word: "yellow", translation: "צהוב", example: "The sun is yellow.", emoji: "🟡" },
      { word: "orange", translation: "כתום", example: "The orange is orange.", emoji: "🟠" },
      { word: "purple", translation: "סגול", example: "The flower is purple.", emoji: "🟣" },
      { word: "pink", translation: "ורוד", example: "The pig is pink.", emoji: "🩷" },
      { word: "black", translation: "שחור", example: "The cat is black.", emoji: "⚫" },
      { word: "white", translation: "לבן", example: "Snow is white.", emoji: "⚪" },
      { word: "brown", translation: "חום", example: "The dog is brown.", emoji: "🟤" }
    ]
  },
  {
    category: "חיות",
    categoryEn: "Animals",
    emoji: "🐾",
    words: [
      { word: "dog", translation: "כלב", example: "The dog says woof!", emoji: "🐶" },
      { word: "cat", translation: "חתול", example: "The cat is sleeping.", emoji: "🐱" },
      { word: "bird", translation: "ציפור", example: "The bird can fly.", emoji: "🐦" },
      { word: "fish", translation: "דג", example: "The fish swims in water.", emoji: "🐟" },
      { word: "horse", translation: "סוס", example: "The horse runs fast.", emoji: "🐴" },
      { word: "rabbit", translation: "ארנב", example: "The rabbit likes carrots.", emoji: "🐰" },
      { word: "cow", translation: "פרה", example: "The cow gives milk.", emoji: "🐄" },
      { word: "lion", translation: "אריה", example: "The lion is the king.", emoji: "🦁" },
      { word: "elephant", translation: "פיל", example: "The elephant is big.", emoji: "🐘" },
      { word: "butterfly", translation: "פרפר", example: "The butterfly is beautiful.", emoji: "🦋" }
    ]
  },
  {
    category: "אוכל ושתייה",
    categoryEn: "Food & Drinks",
    emoji: "🍕",
    words: [
      { word: "apple", translation: "תפוח", example: "I eat an apple.", emoji: "🍎" },
      { word: "bread", translation: "לחם", example: "I like bread.", emoji: "🍞" },
      { word: "water", translation: "מים", example: "I drink water.", emoji: "💧" },
      { word: "milk", translation: "חלב", example: "I drink milk.", emoji: "🥛" },
      { word: "banana", translation: "בננה", example: "The banana is yellow.", emoji: "🍌" },
      { word: "ice cream", translation: "גלידה", example: "I love ice cream!", emoji: "🍦" },
      { word: "pizza", translation: "פיצה", example: "Pizza is yummy!", emoji: "🍕" },
      { word: "cake", translation: "עוגה", example: "The cake is sweet.", emoji: "🎂" },
      { word: "egg", translation: "ביצה", example: "I eat an egg.", emoji: "🥚" },
      { word: "chocolate", translation: "שוקולד", example: "I love chocolate!", emoji: "🍫" }
    ]
  },
  {
    category: "מספרים",
    categoryEn: "Numbers",
    emoji: "🔢",
    words: [
      { word: "one", translation: "אחת", example: "I have one nose.", emoji: "1️⃣" },
      { word: "two", translation: "שתיים", example: "I have two eyes.", emoji: "2️⃣" },
      { word: "three", translation: "שלוש", example: "I have three toys.", emoji: "3️⃣" },
      { word: "four", translation: "ארבע", example: "A dog has four legs.", emoji: "4️⃣" },
      { word: "five", translation: "חמש", example: "I have five fingers.", emoji: "5️⃣" },
      { word: "six", translation: "שש", example: "There are six eggs.", emoji: "6️⃣" },
      { word: "seven", translation: "שבע", example: "Seven days in a week.", emoji: "7️⃣" },
      { word: "eight", translation: "שמונה", example: "An octopus has eight arms.", emoji: "8️⃣" },
      { word: "nine", translation: "תשע", example: "I am nine years old.", emoji: "9️⃣" },
      { word: "ten", translation: "עשר", example: "I have ten fingers.", emoji: "🔟" }
    ]
  },
  {
    category: "גוף",
    categoryEn: "Body Parts",
    emoji: "🧍",
    words: [
      { word: "head", translation: "ראש", example: "I wear a hat on my head.", emoji: "🗣️" },
      { word: "hand", translation: "יד", example: "I wave my hand.", emoji: "✋" },
      { word: "eye", translation: "עין", example: "I see with my eye.", emoji: "👁️" },
      { word: "ear", translation: "אוזן", example: "I hear with my ear.", emoji: "👂" },
      { word: "nose", translation: "אף", example: "I smell with my nose.", emoji: "👃" },
      { word: "mouth", translation: "פה", example: "I eat with my mouth.", emoji: "👄" },
      { word: "foot", translation: "רגל", example: "I walk with my feet.", emoji: "🦶" },
      { word: "tooth", translation: "שן", example: "I brush my teeth.", emoji: "🦷" }
    ]
  },
  {
    category: "משפחה",
    categoryEn: "Family",
    emoji: "👨‍👩‍👧‍👦",
    words: [
      { word: "mom", translation: "אמא", example: "I love my mom.", emoji: "👩" },
      { word: "dad", translation: "אבא", example: "My dad is tall.", emoji: "👨" },
      { word: "brother", translation: "אח", example: "My brother plays with me.", emoji: "👦" },
      { word: "sister", translation: "אחות", example: "My sister is funny.", emoji: "👧" },
      { word: "baby", translation: "תינוק", example: "The baby is small.", emoji: "👶" },
      { word: "grandma", translation: "סבתא", example: "Grandma tells stories.", emoji: "👵" },
      { word: "grandpa", translation: "סבא", example: "Grandpa has a garden.", emoji: "👴" },
      { word: "friend", translation: "חבר", example: "You are my friend!", emoji: "🤝" }
    ]
  },
  {
    category: "מזג אוויר",
    categoryEn: "Weather",
    emoji: "⛅",
    words: [
      { word: "sun", translation: "שמש", example: "The sun is hot.", emoji: "☀️" },
      { word: "rain", translation: "גשם", example: "I see the rain.", emoji: "🌧️" },
      { word: "wind", translation: "רוח", example: "The wind is strong.", emoji: "💨" },
      { word: "cloud", translation: "ענן", example: "The cloud is white.", emoji: "☁️" },
      { word: "snow", translation: "שלג", example: "I play in the snow.", emoji: "❄️" },
      { word: "rainbow", translation: "קשת", example: "I see a rainbow!", emoji: "🌈" },
      { word: "star", translation: "כוכב", example: "I see a star at night.", emoji: "⭐" },
      { word: "moon", translation: "ירח", example: "The moon is bright.", emoji: "🌙" }
    ]
  },
  {
    category: "משפטים",
    categoryEn: "Common Phrases",
    emoji: "💬",
    quizStyle: "text",
    words: [
      { word: "hello", translation: "שלום", example: "Hello! How are you?", emoji: "👋" },
      { word: "goodbye", translation: "להתראות", example: "Goodbye! See you tomorrow!", emoji: "👋" },
      { word: "please", translation: "בבקשה", example: "Can I have water, please?", emoji: "🙏" },
      { word: "thank you", translation: "תודה", example: "Thank you very much!", emoji: "😊" },
      { word: "yes", translation: "כן", example: "Yes, I want to play!", emoji: "✅" },
      { word: "no", translation: "לא", example: "No, thank you.", emoji: "❌" },
      { word: "sorry", translation: "סליחה", example: "I am sorry.", emoji: "😔" },
      { word: "I love you", translation: "אני אוהב/ת אותך", example: "I love you, mom!", emoji: "❤️" },
      { word: "good morning", translation: "בוקר טוב", example: "Good morning, teacher!", emoji: "🌅" },
      { word: "good night", translation: "לילה טוב", example: "Good night! Sweet dreams!", emoji: "🌙" }
    ]
  },
  {
    category: "חדרים בבית",
    categoryEn: "House",
    emoji: "🏠",
    words: [
      { word: "house", translation: "בית", example: "This is my house.", emoji: "🏠" },
      { word: "bedroom", translation: "חדר שינה", example: "I sleep in my bedroom.", emoji: "🛏️" },
      { word: "kitchen", translation: "מטבח", example: "Mom cooks in the kitchen.", emoji: "🍳" },
      { word: "bathroom", translation: "חדר אמבטיה", example: "I brush my teeth in the bathroom.", emoji: "🚿" },
      { word: "door", translation: "דלת", example: "Please close the door.", emoji: "🚪" },
      { word: "window", translation: "חלון", example: "Open the window please.", emoji: "🪟" },
      { word: "table", translation: "שולחן", example: "The food is on the table.", emoji: "🪑" },
      { word: "chair", translation: "כיסא", example: "Sit on the chair.", emoji: "💺" }
    ]
  },
  {
    category: "כלי תחבורה",
    categoryEn: "Transport",
    emoji: "🚗",
    words: [
      { word: "car", translation: "מכונית", example: "Dad drives a car.", emoji: "🚗" },
      { word: "bus", translation: "אוטובוס", example: "I go to school by bus.", emoji: "🚌" },
      { word: "bicycle", translation: "אופניים", example: "I ride my bicycle in the park.", emoji: "🚲" },
      { word: "train", translation: "רכבת", example: "The train is very fast.", emoji: "🚂" },
      { word: "airplane", translation: "מטוס", example: "The airplane flies in the sky.", emoji: "✈️" },
      { word: "boat", translation: "סירה", example: "The boat is on the water.", emoji: "⛵" },
      { word: "truck", translation: "משאית", example: "The truck is very big.", emoji: "🚚" },
      { word: "helicopter", translation: "מסוק", example: "The helicopter flies above us.", emoji: "🚁" }
    ]
  },
  {
    category: "צורות",
    categoryEn: "Shapes",
    emoji: "🔵",
    words: [
      { word: "circle", translation: "עיגול", example: "The ball is a circle.", emoji: "⭕" },
      { word: "square", translation: "ריבוע", example: "The window is a square.", emoji: "⬜" },
      { word: "triangle", translation: "משולש", example: "The roof looks like a triangle.", emoji: "🔺" },
      { word: "star", translation: "כוכב", example: "I drew a star.", emoji: "⭐" },
      { word: "heart", translation: "לב", example: "I drew a heart for mom.", emoji: "❤️" },
      { word: "diamond", translation: "מעוין", example: "The kite is a diamond shape.", emoji: "💎" },
      { word: "rectangle", translation: "מלבן", example: "The door is a rectangle.", emoji: "▬" },
      { word: "oval", translation: "אליפסה", example: "The egg is an oval shape.", emoji: "🥚" }
    ]
  }
];
