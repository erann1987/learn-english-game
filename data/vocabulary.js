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
      { word: "brown", translation: "חום", example: "The dog is brown.", emoji: "🟤" },
      { word: "gray", translation: "אפור", example: "The elephant is gray.", emoji: "🩶" },
      { word: "gold", translation: "זהב", example: "The crown is gold.", emoji: "🥇" },
      { word: "silver", translation: "כסף", example: "The ring is silver.", emoji: "🥈" },
      { word: "light blue", translation: "תכלת", example: "The sea is light blue.", emoji: "🫧" },
      { word: "dark green", translation: "ירוק כהה", example: "The tree is dark green.", emoji: "🌲" },
      { word: "cream", translation: "שמנת", example: "The wall is cream.", emoji: "🤍" },
      { word: "turquoise", translation: "טורקיז", example: "The water is turquoise.", emoji: "💎" }
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
      { word: "butterfly", translation: "פרפר", example: "The butterfly is beautiful.", emoji: "🦋" },
      { word: "monkey", translation: "קוף", example: "The monkey eats bananas.", emoji: "🐒" },
      { word: "snake", translation: "נחש", example: "The snake is long.", emoji: "🐍" },
      { word: "frog", translation: "צפרדע", example: "The frog can jump.", emoji: "🐸" },
      { word: "duck", translation: "ברווז", example: "The duck swims in the pond.", emoji: "🦆" },
      { word: "sheep", translation: "כבשה", example: "The sheep is soft.", emoji: "🐑" },
      { word: "bear", translation: "דוב", example: "The bear is big.", emoji: "🐻" },
      { word: "turtle", translation: "צב", example: "The turtle is slow.", emoji: "🐢" },
      { word: "penguin", translation: "פינגווין", example: "The penguin likes ice.", emoji: "🐧" }
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
      { word: "chocolate", translation: "שוקולד", example: "I love chocolate!", emoji: "🍫" },
      { word: "tomato", translation: "עגבנייה", example: "The tomato is red.", emoji: "🍅" },
      { word: "potato", translation: "תפוח אדמה", example: "I like potato soup.", emoji: "🥔" },
      { word: "juice", translation: "מיץ", example: "I drink orange juice.", emoji: "🧃" },
      { word: "soup", translation: "מרק", example: "The soup is hot.", emoji: "🍲" },
      { word: "rice", translation: "אורז", example: "I eat rice.", emoji: "🍚" },
      { word: "cheese", translation: "גבינה", example: "I like cheese.", emoji: "🧀" },
      { word: "strawberry", translation: "תות", example: "The strawberry is sweet.", emoji: "🍓" },
      { word: "cookie", translation: "עוגייה", example: "I want a cookie.", emoji: "🍪" }
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
      { word: "ten", translation: "עשר", example: "I have ten fingers.", emoji: "🔟" },
      { word: "eleven", translation: "אחת עשרה", example: "I see eleven birds.", emoji: "🔢" },
      { word: "twelve", translation: "שתים עשרה", example: "There are twelve months.", emoji: "🔢" },
      { word: "thirteen", translation: "שלוש עשרה", example: "I have thirteen crayons.", emoji: "🔢" },
      { word: "fourteen", translation: "ארבע עשרה", example: "I see fourteen flowers.", emoji: "🔢" },
      { word: "fifteen", translation: "חמש עשרה", example: "I count fifteen stars.", emoji: "🔢" },
      { word: "sixteen", translation: "שש עשרה", example: "There are sixteen kids.", emoji: "🔢" },
      { word: "seventeen", translation: "שבע עשרה", example: "I have seventeen books.", emoji: "🔢" },
      { word: "eighteen", translation: "שמונה עשרה", example: "I see eighteen fish.", emoji: "🔢" },
      { word: "nineteen", translation: "תשע עשרה", example: "There are nineteen cups.", emoji: "🔢" },
      { word: "twenty", translation: "עשרים", example: "I can count to twenty!", emoji: "🔢" }
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
      { word: "tooth", translation: "שן", example: "I brush my teeth.", emoji: "🦷" },
      { word: "arm", translation: "זרוע", example: "I move my arm.", emoji: "💪" },
      { word: "leg", translation: "רגל", example: "I run with my legs.", emoji: "🦵" },
      { word: "finger", translation: "אצבע", example: "I point with my finger.", emoji: "☝️" },
      { word: "hair", translation: "שיער", example: "My hair is brown.", emoji: "💇" },
      { word: "back", translation: "גב", example: "My back is strong.", emoji: "🧍" },
      { word: "neck", translation: "צוואר", example: "I wear a scarf on my neck.", emoji: "🧣" },
      { word: "knee", translation: "ברך", example: "I bend my knee.", emoji: "🦵" },
      { word: "shoulder", translation: "כתף", example: "I tap your shoulder.", emoji: "🤷" },
      { word: "belly", translation: "בטן", example: "My belly is full.", emoji: "😋" }
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
      { word: "friend", translation: "חבר", example: "You are my friend!", emoji: "🤝" },
      { word: "uncle", translation: "דוד", example: "My uncle is funny.", emoji: "👨" },
      { word: "aunt", translation: "דודה", example: "My aunt bakes cakes.", emoji: "👩" },
      { word: "cousin", translation: "בן דוד", example: "My cousin plays with me.", emoji: "🧒" },
      { word: "neighbor", translation: "שכן", example: "My neighbor is nice.", emoji: "🏘️" },
      { word: "family", translation: "משפחה", example: "I love my family.", emoji: "👨‍👩‍👧‍👦" },
      { word: "twins", translation: "תאומים", example: "The twins look the same.", emoji: "👯" },
      { word: "pet", translation: "חיית מחמד", example: "My pet is a dog.", emoji: "🐾" }
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
      { word: "moon", translation: "ירח", example: "The moon is bright.", emoji: "🌙" },
      { word: "hot", translation: "חם", example: "Today is very hot.", emoji: "🥵" },
      { word: "cold", translation: "קר", example: "It is cold outside.", emoji: "🥶" },
      { word: "warm", translation: "חמים", example: "The day is warm.", emoji: "🌤️" },
      { word: "fog", translation: "ערפל", example: "I see fog outside.", emoji: "🌫️" },
      { word: "thunder", translation: "רעם", example: "I hear the thunder.", emoji: "⚡" },
      { word: "lightning", translation: "ברק", example: "I see the lightning!", emoji: "🌩️" },
      { word: "storm", translation: "סערה", example: "There is a big storm.", emoji: "🌪️" },
      { word: "ice", translation: "קרח", example: "The ice is slippery.", emoji: "🧊" }
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
      { word: "good night", translation: "לילה טוב", example: "Good night! Sweet dreams!", emoji: "🌙" },
      { word: "how old are you", translation: "בן כמה אתה", example: "How old are you?", emoji: "🎂" },
      { word: "my name is", translation: "השם שלי הוא", example: "My name is Dan.", emoji: "📛" },
      { word: "where is", translation: "איפה", example: "Where is the cat?", emoji: "🔍" },
      { word: "I like", translation: "אני אוהב/ת", example: "I like ice cream.", emoji: "👍" },
      { word: "what is this", translation: "מה זה", example: "What is this?", emoji: "❓" },
      { word: "come here", translation: "בוא הנה", example: "Come here, please!", emoji: "🫳" },
      { word: "let's play", translation: "בוא נשחק", example: "Let's play together!", emoji: "🎮" },
      { word: "I don't know", translation: "אני לא יודע/ת", example: "I don't know the answer.", emoji: "🤷" },
      { word: "see you later", translation: "נתראה אחר כך", example: "See you later!", emoji: "👋" }
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
      { word: "chair", translation: "כיסא", example: "Sit on the chair.", emoji: "💺" },
      { word: "bed", translation: "מיטה", example: "I sleep in my bed.", emoji: "🛏️" },
      { word: "lamp", translation: "מנורה", example: "Turn on the lamp.", emoji: "💡" },
      { word: "mirror", translation: "מראה", example: "I look in the mirror.", emoji: "🪞" },
      { word: "garden", translation: "גינה", example: "I play in the garden.", emoji: "🌻" },
      { word: "floor", translation: "רצפה", example: "The ball is on the floor.", emoji: "🏠" },
      { word: "roof", translation: "גג", example: "The bird is on the roof.", emoji: "🏡" },
      { word: "stairs", translation: "מדרגות", example: "I go up the stairs.", emoji: "🪜" },
      { word: "sofa", translation: "ספה", example: "I sit on the sofa.", emoji: "🛋️" }
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
      { word: "helicopter", translation: "מסוק", example: "The helicopter flies above us.", emoji: "🚁" },
      { word: "scooter", translation: "קורקינט", example: "I ride my scooter.", emoji: "🛴" },
      { word: "subway", translation: "רכבת תחתית", example: "We take the subway.", emoji: "🚇" },
      { word: "motorcycle", translation: "אופנוע", example: "The motorcycle is fast.", emoji: "🏍️" },
      { word: "ambulance", translation: "אמבולנס", example: "The ambulance helps people.", emoji: "🚑" },
      { word: "taxi", translation: "מונית", example: "We go by taxi.", emoji: "🚕" },
      { word: "ship", translation: "אונייה", example: "The ship is on the sea.", emoji: "🚢" },
      { word: "rocket", translation: "טיל", example: "The rocket goes to space.", emoji: "🚀" },
      { word: "tractor", translation: "טרקטור", example: "The tractor is big.", emoji: "🚜" }
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
      { word: "oval", translation: "אליפסה", example: "The egg is an oval shape.", emoji: "🥚" },
      { word: "cross", translation: "צלב", example: "I draw a cross.", emoji: "✝️" },
      { word: "arrow", translation: "חץ", example: "The arrow points right.", emoji: "➡️" },
      { word: "cube", translation: "קוביה", example: "The box is a cube.", emoji: "🧊" },
      { word: "sphere", translation: "כדור", example: "The ball is a sphere.", emoji: "🔮" },
      { word: "cone", translation: "חרוט", example: "The hat looks like a cone.", emoji: "🔺" },
      { word: "crescent", translation: "סהר", example: "The moon is a crescent.", emoji: "🌙" },
      { word: "hexagon", translation: "משושה", example: "The shape has six sides.", emoji: "⬡" }
    ]
  }
];
