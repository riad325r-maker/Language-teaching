// words-data.js
// جميع الكلمات مصنفة حسب المستوى مع الجمل والأسئلة

const WORDS_DATA = {
    // ========== المستوى المبتدئ ==========
    beginner: [
        {
            id: 101,
            word: "hello",
            arabic: "مرحباً",
            pronunciation: "هالو",
            example: "Hello, how are you?",
            exampleArabic: "مرحباً، كيف حالك؟",
            category: "تحيات",
            difficulty: "easy",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200"
        },
        {
            id: 102,
            word: "goodbye",
            arabic: "وداعاً",
            pronunciation: "جود باي",
            example: "Say goodbye to your friends.",
            exampleArabic: "قل وداعاً لأصدقائك",
            category: "تحيات"
        },
        {
            id: 103,
            word: "please",
            arabic: "من فضلك",
            pronunciation: "بليز",
            example: "Can you help me, please?",
            exampleArabic: "هل يمكنك مساعدتي، من فضلك؟",
            category: "أدب"
        },
        {
            id: 104,
            word: "thank you",
            arabic: "شكراً لك",
            pronunciation: "ثانك يو",
            example: "Thank you for your help.",
            exampleArabic: "شكراً لك على مساعدتك",
            category: "أدب"
        },
        {
            id: 105,
            word: "yes",
            arabic: "نعم",
            pronunciation: "يس",
            example: "Yes, I understand.",
            exampleArabic: "نعم، أنا أفهم",
            category: "أساسيات"
        },
        {
            id: 106,
            word: "no",
            arabic: "لا",
            pronunciation: "نو",
            example: "No, I don't want to go.",
            exampleArabic: "لا، لا أريد الذهاب",
            category: "أساسيات"
        },
        {
            id: 107,
            word: "name",
            arabic: "اسم",
            pronunciation: "نيم",
            example: "My name is Ahmed.",
            exampleArabic: "اسمي أحمد",
            category: "تعارف"
        },
        {
            id: 108,
            word: "friend",
            arabic: "صديق",
            pronunciation: "فريند",
            example: "He is my best friend.",
            exampleArabic: "هو صديقي المفضل",
            category: "علاقات"
        },
        {
            id: 109,
            word: "family",
            arabic: "عائلة",
            pronunciation: "فاميلي",
            example: "I love my family.",
            exampleArabic: "أنا أحب عائلتي",
            category: "علاقات"
        },
        {
            id: 110,
            word: "mother",
            arabic: "أم",
            pronunciation: "ماذر",
            example: "My mother cooks food.",
            exampleArabic: "أمي تطبخ الطعام",
            category: "عائلة"
        },
        {
            id: 111,
            word: "father",
            arabic: "أب",
            pronunciation: "فاذر",
            example: "My father works hard.",
            exampleArabic: "أبي يعمل بجد",
            category: "عائلة"
        },
        {
            id: 112,
            word: "brother",
            arabic: "أخ",
            pronunciation: "براذر",
            example: "I play with my brother.",
            exampleArabic: "ألعب مع أخي",
            category: "عائلة"
        },
        {
            id: 113,
            word: "sister",
            arabic: "أخت",
            pronunciation: "سيستر",
            example: "My sister is younger.",
            exampleArabic: "أختي أصغر مني",
            category: "عائلة"
        },
        {
            id: 114,
            word: "house",
            arabic: "منزل",
            pronunciation: "هاوس",
            example: "We live in a big house.",
            exampleArabic: "نعيش في منزل كبير",
            category: "مكان"
        },
        {
            id: 115,
            word: "car",
            arabic: "سيارة",
            pronunciation: "كار",
            example: "The car is red.",
            exampleArabic: "السيارة حمراء",
            category: "مواصلات"
        },
        {
            id: 116,
            word: "water",
            arabic: "ماء",
            pronunciation: "ووتر",
            example: "Drink water every day.",
            exampleArabic: "اشرب الماء كل يوم",
            category: "طعام"
        },
        {
            id: 117,
            word: "food",
            arabic: "طعام",
            pronunciation: "فود",
            example: "The food is delicious.",
            exampleArabic: "الطعام لذيذ",
            category: "طعام"
        },
        {
            id: 118,
            word: "eat",
            arabic: "يأكل",
            pronunciation: "إيت",
            example: "I eat breakfast at 7.",
            exampleArabic: "أتناول الفطور الساعة 7",
            category: "أفعال"
        },
        {
            id: 119,
            word: "drink",
            arabic: "يشرب",
            pronunciation: "درينك",
            example: "Drink your milk.",
            exampleArabic: "اشرب حليبك",
            category: "أفعال"
        },
        {
            id: 120,
            word: "sleep",
            arabic: "ينام",
            pronunciation: "سليب",
            example: "Sleep early tonight.",
            exampleArabic: "نم مبكراً الليلة",
            category: "أفعال"
        },
        {
            id: 121,
            word: "go",
            arabic: "يذهب",
            pronunciation: "جو",
            example: "I go to school every day.",
            exampleArabic: "أذهب إلى المدرسة كل يوم",
            category: "أفعال"
        },
        {
            id: 122,
            word: "come",
            arabic: "يأتي",
            pronunciation: "كام",
            example: "Come here, please.",
            exampleArabic: "تعال هنا، من فضلك",
            category: "أفعال"
        },
        {
            id: 123,
            word: "see",
            arabic: "يرى",
            pronunciation: "سي",
            example: "I see the bird.",
            exampleArabic: "أرى الطائر",
            category: "أفعال"
        },
        {
            id: 124,
            word: "look",
            arabic: "ينظر",
            pronunciation: "لوك",
            example: "Look at the picture.",
            exampleArabic: "انظر إلى الصورة",
            category: "أفعال"
        },
        {
            id: 125,
            word: "listen",
            arabic: "يستمع",
            pronunciation: "ليسن",
            example: "Listen to the music.",
            exampleArabic: "استمع إلى الموسيقى",
            category: "أفعال"
        },
        {
            id: 126,
            word: "speak",
            arabic: "يتحدث",
            pronunciation: "سبيك",
            example: "Speak slowly, please.",
            exampleArabic: "تحدث ببطء، من فضلك",
            category: "أفعال"
        },
        {
            id: 127,
            word: "read",
            arabic: "يقرأ",
            pronunciation: "ريد",
            example: "I read books every night.",
            exampleArabic: "أقرأ الكتب كل ليلة",
            category: "أفعال"
        },
        {
            id: 128,
            word: "write",
            arabic: "يكتب",
            pronunciation: "رايت",
            example: "Write your name here.",
            exampleArabic: "اكتب اسمك هنا",
            category: "أفعال"
        },
        {
            id: 129,
            word: "red",
            arabic: "أحمر",
            pronunciation: "ريد",
            example: "The apple is red.",
            exampleArabic: "التفاحة حمراء",
            category: "ألوان"
        },
        {
            id: 130,
            word: "blue",
            arabic: "أزرق",
            pronunciation: "بلو",
            example: "The sky is blue.",
            exampleArabic: "السماء زرقاء",
            category: "ألوان"
        },
        {
            id: 131,
            word: "green",
            arabic: "أخضر",
            pronunciation: "جرين",
            example: "The grass is green.",
            exampleArabic: "العشب أخضر",
            category: "ألوان"
        },
        {
            id: 132,
            word: "yellow",
            arabic: "أصفر",
            pronunciation: "يلو",
            example: "The sun is yellow.",
            exampleArabic: "الشمس صفراء",
            category: "ألوان"
        },
        {
            id: 133,
            word: "big",
            arabic: "كبير",
            pronunciation: "بيج",
            example: "The house is big.",
            exampleArabic: "المنزل كبير",
            category: "صفات"
        },
        {
            id: 134,
            word: "small",
            arabic: "صغير",
            pronunciation: "سمول",
            example: "The cat is small.",
            exampleArabic: "القطة صغيرة",
            category: "صفات"
        },
        {
            id: 135,
            word: "hot",
            arabic: "حار",
            pronunciation: "هوت",
            example: "The coffee is hot.",
            exampleArabic: "القهوة حارة",
            category: "صفات"
        },
        {
            id: 136,
            word: "cold",
            arabic: "بارد",
            pronunciation: "كولد",
            example: "The water is cold.",
            exampleArabic: "الماء بارد",
            category: "صفات"
        },
        {
            id: 137,
            word: "new",
            arabic: "جديد",
            pronunciation: "نيو",
            example: "I have a new car.",
            exampleArabic: "لدي سيارة جديدة",
            category: "صفات"
        },
        {
            id: 138,
            word: "old",
            arabic: "قديم",
            pronunciation: "أولد",
            example: "This is an old book.",
            exampleArabic: "هذا كتاب قديم",
            category: "صفات"
        },
        {
            id: 139,
            word: "good",
            arabic: "جيد",
            pronunciation: "جود",
            example: "This is a good idea.",
            exampleArabic: "هذه فكرة جيدة",
            category: "صفات"
        },
        {
            id: 140,
            word: "bad",
            arabic: "سيء",
            pronunciation: "باد",
            example: "The weather is bad today.",
            exampleArabic: "الطقس سيء اليوم",
            category: "صفات"
        }
    ],

    // ========== المستوى المتوسط ==========
    intermediate: [
        {
            id: 201,
            word: "understand",
            arabic: "يفهم",
            pronunciation: "أندرستاند",
            example: "I understand the lesson now.",
            exampleArabic: "أنا أفهم الدرس الآن",
            category: "أفعال"
        },
        {
            id: 202,
            word: "interesting",
            arabic: "مثير للاهتمام",
            pronunciation: "إينترستينج",
            example: "This book is very interesting.",
            exampleArabic: "هذا الكتاب مثير جداً للاهتمام",
            category: "صفات"
        },
        {
            id: 203,
            word: "different",
            arabic: "مختلف",
            pronunciation: "ديفرنت",
            example: "We have different opinions.",
            exampleArabic: "لدينا آراء مختلفة",
            category: "صفات"
        },
        {
            id: 204,
            word: "important",
            arabic: "مهم",
            pronunciation: "إمبورتنت",
            example: "Education is important.",
            exampleArabic: "التعليم مهم",
            category: "صفات"
        },
        {
            id: 205,
            word: "believe",
            arabic: "يؤمن",
            pronunciation: "بيليف",
            example: "I believe in you.",
            exampleArabic: "أنا أؤمن بك",
            category: "أفعال"
        },
        {
            id: 206,
            word: "remember",
            arabic: "يتذكر",
            pronunciation: "ريميمبر",
            example: "Remember to call me.",
            exampleArabic: "تذكر أن تتصل بي",
            category: "أفعال"
        },
        {
            id: 207,
            word: "forget",
            arabic: "ينسى",
            pronunciation: "فورجيت",
            example: "Don't forget your keys.",
            exampleArabic: "لا تنس مفاتيحك",
            category: "أفعال"
        },
        {
            id: 208,
            word: "promise",
            arabic: "يعد",
            pronunciation: "بروميس",
            example: "I promise to help you.",
            exampleArabic: "أعدك بمساعدتك",
            category: "أفعال"
        },
        {
            id: 209,
            word: "decide",
            arabic: "يقرر",
            pronunciation: "ديسايد",
            example: "I decided to learn English.",
            exampleArabic: "قررت أن أتعلم الإنجليزية",
            category: "أفعال"
        },
        {
            id: 210,
            word: "travel",
            arabic: "يسافر",
            pronunciation: "ترافل",
            example: "I want to travel to London.",
            exampleArabic: "أريد السفر إلى لندن",
            category: "سفر"
        },
        {
            id: 211,
            word: "expensive",
            arabic: "غالي",
            pronunciation: "إكسبنسيف",
            example: "This phone is expensive.",
            exampleArabic: "هذا الهاتف غالي",
            category: "صفات"
        },
        {
            id: 212,
            word: "cheap",
            arabic: "رخيص",
            pronunciation: "تشيب",
            example: "The food here is cheap.",
            exampleArabic: "الطعام هنا رخيص",
            category: "صفات"
        },
        {
            id: 213,
            word: "beautiful",
            arabic: "جميل",
            pronunciation: "بيوتيفل",
            example: "The view is beautiful.",
            exampleArabic: "المنظر جميل",
            category: "صفات"
        },
        {
            id: 214,
            word: "delicious",
            arabic: "لذيذ",
            pronunciation: "ديليشس",
            example: "This pizza is delicious.",
            exampleArabic: "هذه البيتزا لذيذة",
            category: "طعام"
        },
        {
            id: 215,
            word: "hungry",
            arabic: "جائع",
            pronunciation: "هانجري",
            example: "I am hungry. Let's eat.",
            exampleArabic: "أنا جائع. دعنا نأكل",
            category: "مشاعر"
        },
        {
            id: 216,
            word: "thirsty",
            arabic: "عطشان",
            pronunciation: "ثيرستي",
            example: "I'm thirsty. I need water.",
            exampleArabic: "أنا عطشان. أحتاج ماء",
            category: "مشاعر"
        },
        {
            id: 217,
            word: "tired",
            arabic: "متعب",
            pronunciation: "تايرد",
            example: "I'm tired after work.",
            exampleArabic: "أنا متعب بعد العمل",
            category: "مشاعر"
        },
        {
            id: 218,
            word: "excited",
            arabic: "متحمس",
            pronunciation: "إكسايتد",
            example: "I'm excited about the trip.",
            exampleArabic: "أنا متحمس للرحلة",
            category: "مشاعر"
        },
        {
            id: 219,
            word: "bored",
            arabic: "ضجر",
            pronunciation: "بورد",
            example: "I'm bored. Let's do something.",
            exampleArabic: "أنا ضجر. دعنا نفعل شيئاً",
            category: "مشاعر"
        },
        {
            id: 220,
            word: "scared",
            arabic: "خائف",
            pronunciation: "سكارد",
            example: "Don't be scared. It's safe.",
            exampleArabic: "لا تكن خائفاً. إنه آمن",
            category: "مشاعر"
        }
    ],

    // ========== المستوى المتقدم ==========
    advanced: [
        {
            id: 301,
            word: "nevertheless",
            arabic: "مع ذلك",
            pronunciation: "نيفرذايليس",
            example: "It was difficult; nevertheless, I succeeded.",
            exampleArabic: "كان صعباً؛ مع ذلك، نجحت",
            category: "روابط"
        },
        {
            id: 302,
            word: "consequently",
            arabic: "وبالتالي",
            pronunciation: "كونسيكوينتلي",
            example: "He didn't study; consequently, he failed.",
            exampleArabic: "لم يدرس؛ وبالتالي، رسب",
            category: "روابط"
        },
        {
            id: 303,
            word: "significant",
            arabic: "كبير/مهم",
            pronunciation: "سيجنتفيكنت",
            example: "There was a significant change.",
            exampleArabic: "كان هناك تغيير كبير",
            category: "صفات"
        },
        {
            id: 304,
            word: "approximately",
            arabic: "تقريباً",
            pronunciation: "أبروكسيميتلي",
            example: "Approximately 100 people came.",
            exampleArabic: "جاء تقريباً 100 شخص",
            category: "ظروف"
        },
        {
            id: 305,
            word: "controversial",
            arabic: "مثير للجدل",
            pronunciation: "كونتروفيرشل",
            example: "This is a controversial topic.",
            exampleArabic: "هذا موضوع مثير للجدل",
            category: "صفات"
        },
        {
            id: 306,
            word: "sophisticated",
            arabic: "متطور/راقي",
            pronunciation: "سوفيستيكيتد",
            example: "This is a sophisticated machine.",
            exampleArabic: "هذه آلة متطورة",
            category: "صفات"
        },
        {
            id: 307,
            word: "ambiguous",
            arabic: "غامض",
            pronunciation: "أمبيجيويس",
            example: "The message was ambiguous.",
            exampleArabic: "الرسالة كانت غامضة",
            category: "صفات"
        },
        {
            id: 308,
            word: "inevitable",
            arabic: "لا مفر منه",
            pronunciation: "إينيفيتابل",
            example: "Change is inevitable.",
            exampleArabic: "التغيير لا مفر منه",
            category: "صفات"
        },
        {
            id: 309,
            word: "persistent",
            arabic: "مثابر",
            pronunciation: "بيرسيستنت",
            example: "He is persistent in his work.",
            exampleArabic: "هو مثابر في عمله",
            category: "صفات"
        },
        {
            id: 310,
            word: "reluctant",
            arabic: "متردد",
            pronunciation: "ريلاكتنت",
            example: "She was reluctant to speak.",
            exampleArabic: "كانت مترددة في التحدث",
            category: "صفات"
        }
    ],

    // ========== جمل يومية ==========
    daily_phrases: [
        {
            id: 401,
            phrase: "How are you?",
            arabic: "كيف حالك؟",
            pronunciation: "هاو آر يو",
            situation: "تحية",
            level: "مبتدئ"
        },
        {
            id: 402,
            phrase: "I'm fine, thank you",
            arabic: "أنا بخير، شكراً",
            pronunciation: "آيم فاين، ثانك يو",
            situation: "رد على تحية",
            level: "مبتدئ"
        },
        {
            id: 403,
            phrase: "What's your name?",
            arabic: "ما اسمك؟",
            pronunciation: "واتس يور نيم",
            situation: "تعارف",
            level: "مبتدئ"
        },
        {
            id: 404,
            phrase: "Nice to meet you",
            arabic: "تشرفت بمقابلتك",
            pronunciation: "نايس تو ميت يو",
            situation: "تعارف",
            level: "مبتدئ"
        },
        {
            id: 405,
            phrase: "Where are you from?",
            arabic: "من أين أنت؟",
            pronunciation: "وير آر يو فروم",
            situation: "تعارف",
            level: "مبتدئ"
        },
        {
            id: 406,
            phrase: "I am from Egypt",
            arabic: "أنا من مصر",
            pronunciation: "آي آم فروم إيجيبت",
            situation: "تعارف",
            level: "مبتدئ"
        },
        {
            id: 407,
            phrase: "Can you help me?",
            arabic: "هل يمكنك مساعدتي؟",
            pronunciation: "كان يو هلب مي",
            situation: "طلب مساعدة",
            level: "مبتدئ"
        },
        {
            id: 408,
            phrase: "I don't understand",
            arabic: "لا أفهم",
            pronunciation: "آي دونت أندرستاند",
            situation: "تعبير",
            level: "مبتدئ"
        },
        {
            id: 409,
            phrase: "Could you speak slower?",
            arabic: "هل يمكنك التحدث ببطء؟",
            pronunciation: "كود يو سبيك سلاور",
            situation: "طلب توضيح",
            level: "مبتدئ"
        },
        {
            id: 410,
            phrase: "What does this mean?",
            arabic: "ماذا يعني هذا؟",
            pronunciation: "وات داز ذيس مين",
            situation: "استفسار",
            level: "مبتدئ"
        },
        {
            id: 411,
            phrase: "How much is this?",
            arabic: "كم ثمن هذا؟",
            pronunciation: "هاو ماتش إز ذيس",
            situation: "تسوق",
            level: "متوسط"
        },
        {
            id: 412,
            phrase: "I would like to order",
            arabic: "أود أن أطلب",
            pronunciation: "آي وود لايك تو أوردر",
            situation: "مطعم",
            level: "متوسط"
        },
        {
            id: 413,
            phrase: "Can I have the bill?",
            arabic: "هل يمكنني الحصول على الفاتورة؟",
            pronunciation: "كان آي هاف ذا بيل",
            situation: "مطعم",
            level: "متوسط"
        },
        {
            id: 414,
            phrase: "Where is the station?",
            arabic: "أين المحطة؟",
            pronunciation: "وير إز ذا ستيشن",
            situation: "اتجاهات",
            level: "متوسط"
        },
        {
            id: 415,
            phrase: "I'm lost",
            arabic: "أنا تائه",
            pronunciation: "آيم لوست",
            situation: "اتجاهات",
            level: "متوسط"
        }
    ]
};

// دوال مساعدة
function getWordsByLevel(level) {
    if (level === 'مبتدئ' || level === 'beginner') return WORDS_DATA.beginner;
    if (level === 'متوسط' || level === 'intermediate') return WORDS_DATA.intermediate;
    if (level === 'متقدم' || level === 'advanced') return WORDS_DATA.advanced;
    return [];
}

function searchWords(query) {
    query = query.toLowerCase();
    let results = [];
    
    const allWords = [
        ...WORDS_DATA.beginner,
        ...WORDS_DATA.intermediate,
        ...WORDS_DATA.advanced
    ];
    
    return allWords.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.arabic.includes(query)
    );
}

function getWordsByCategory(category) {
    let results = [];
    
    const allWords = [
        ...WORDS_DATA.beginner,
        ...WORDS_DATA.intermediate,
        ...WORDS_DATA.advanced
    ];
    
    return allWords.filter(item => item.category === category);
}

function getDailyPhrasesByLevel(level) {
    if (level === 'all') return WORDS_DATA.daily_phrases;
    return WORDS_DATA.daily_phrases.filter(phrase => phrase.level === level);
}

function getRandomWord() {
    const allWords = [
        ...WORDS_DATA.beginner,
        ...WORDS_DATA.intermediate,
        ...WORDS_DATA.advanced
    ];
    return allWords[Math.floor(Math.random() * allWords.length)];
}

function getRandomPhrase() {
    return WORDS_DATA.daily_phrases[Math.floor(Math.random() * WORDS_DATA.daily_phrases.length)];
}

// نظام التكرار الذكي (Spaced Repetition)
class WordLearningSystem {
    constructor() {
        this.words = [];
        this.reviewQueue = [];
        this.masteredWords = [];
    }

    addWord(word) {
        this.words.push({
            ...word,
            stage: 0, // 0: جديد, 1: مراجعة, 2: متقن
            reviewCount: 0,
            lastReview: null,
            nextReview: new Date()
        });
    }

    getNextReview() {
        const now = new Date();
        return this.words
            .filter(w => w.stage < 2 && new Date(w.nextReview) <= now)
            .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview));
    }

    reviewWord(wordId, correct) {
        const word = this.words.find(w => w.id === wordId);
        if (!word) return;

        word.reviewCount++;
        word.lastReview = new Date();

        if (correct) {
            word.stage = Math.min(word.stage + 1, 2);
        } else {
            word.stage = Math.max(word.stage - 1, 0);
        }

        // جدولة المراجعة التالية
        const days = [1, 3, 7, 14, 30]; // أيام بين المراجعات
        const nextDay = days[word.stage] || 1;
        word.nextReview = new Date(Date.now() + nextDay * 24 * 60 * 60 * 1000);
    }
}