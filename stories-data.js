// stories-data.js
// قصص قصيرة لتحسين القراءة والفهم

const STORIES = [
    {
        id: 1,
        title: "Ahmed's Day",
        arabicTitle: "يوم أحمد",
        level: "مبتدئ",
        image: "https://images.unsplash.com/photo-1503676596287-62081e8d3b1c?w=400",
        content: `
            Ahmed is a student. He wakes up at 6:00 AM every day. 
            He washes his face and brushes his teeth. Then he eats breakfast with his family.
            He goes to school at 7:30 AM. He studies math, science, and English.
            After school, he plays football with his friends. He returns home at 5:00 PM.
            He does his homework and watches TV. He goes to bed at 9:00 PM.
        `,
        arabicContent: `
            أحمد طالب. يستيقظ الساعة 6:00 صباحاً كل يوم.
            يغسل وجهه ويفرك أسنانه. ثم يتناول الفطور مع عائلته.
            يذهب إلى المدرسة الساعة 7:30 صباحاً. يدرس الرياضيات والعلوم والإنجليزية.
            بعد المدرسة، يلعب كرة القدم مع أصدقائه. يعود للمنزل الساعة 5:00 مساءً.
            يؤدي واجباته المنزلية ويشاهد التلفاز. يذهب للنوم الساعة 9:00 مساءً.
        `,
        words: ["wakes up", "brushes", "breakfast", "school", "plays", "homework"],
        newWords: [
            { word: "wakes up", arabic: "يستيقظ", pronunciation: "ويكس أب" },
            { word: "brushes", arabic: "يفرك", pronunciation: "براشز" },
            { word: "breakfast", arabic: "فطور", pronunciation: "بريكفاست" }
        ],
        questions: [
            {
                question: "What time does Ahmed wake up?",
                options: ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM"],
                correct: 1,
                explanation: "Ahmed wakes up at 6:00 AM"
            },
            {
                question: "What does Ahmed do after breakfast?",
                options: ["Watches TV", "Goes to school", "Plays football", "Sleeps"],
                correct: 1,
                explanation: "After breakfast, he goes to school"
            },
            {
                question: "What time does Ahmed go to bed?",
                options: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"],
                correct: 1,
                explanation: "He goes to bed at 9:00 PM"
            }
        ]
    },
    {
        id: 2,
        title: "The Lost Cat",
        arabicTitle: "القطة الضائعة",
        level: "مبتدئ",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
        content: `
            Sara has a white cat named Snowy. One day, Snowy went outside and didn't come back.
            Sara looked everywhere. She asked her neighbors, "Have you seen my cat?"
            Nobody saw Snowy. Sara was very sad.
            The next day, she heard a sound from the garden. It was Snowy!
            She was with three small kittens. Sara was very happy.
        `,
        arabicContent: `
            سارة لديها قطة بيضاء اسمها سنوي. في يوم من الأيام، خرجت سنوي ولم تعد.
            بحثت سارة في كل مكان. سألت جيرانها: "هل رأيتم قطتي؟"
            لم ير أحد سنوي. كانت سارة حزينة جداً.
            في اليوم التالي، سمعت صوتاً من الحديقة. كانت سنوي!
            كانت مع ثلاث قطط صغيرة. كانت سارة سعيدة جداً.
        `,
        words: ["cat", "outside", "looked", "neighbors", "sound", "kittens"],
        newWords: [
            { word: "cat", arabic: "قطة", pronunciation: "كات" },
            { word: "outside", arabic: "خارج", pronunciation: "أوتسايد" },
            { word: "neighbors", arabic: "جيران", pronunciation: "نيبرز" }
        ],
        questions: [
            {
                question: "What is the cat's name?",
                options: ["Sara", "Snowy", "White", "Kitty"],
                correct: 1,
                explanation: "The cat's name is Snowy"
            },
            {
                question: "Where did Sara find Snowy?",
                options: ["In the house", "In the garden", "At school", "At the park"],
                correct: 1,
                explanation: "She found Snowy in the garden"
            },
            {
                question: "How many kittens did Snowy have?",
                options: ["One", "Two", "Three", "Four"],
                correct: 2,
                explanation: "Snowy had three kittens"
            }
        ]
    },
    {
        id: 3,
        title: "The Smart Student",
        arabicTitle: "الطالب الذكي",
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400",
        content: `
            Omar was always the best student in his class. He studied hard every day.
            One day, his teacher announced a big exam. All the students were worried.
            Omar helped his classmates study. He explained difficult lessons to them.
            On exam day, everyone did well. The teacher was proud of all of them.
            Omar learned that helping others makes everyone successful.
        `,
        arabicContent: `
            كان عمر دائماً أفضل طالب في فصله. كان يدرس بجد كل يوم.
            في يوم من الأيام، أعلن معلمه عن امتحان كبير. كان جميع الطلاب قلقين.
            ساعد عمر زملاءه في الدراسة. شرح لهم الدروس الصعبة.
            في يوم الامتحان، أدى الجميع بشكل جيد. كان المعلم فخوراً بهم جميعاً.
            تعلم عمر أن مساعدة الآخرين تجعل الجميع ناجحين.
        `,
        words: ["best", "studied", "announced", "worried", "explained", "proud", "successful"],
        newWords: [
            { word: "best", arabic: "أفضل", pronunciation: "بيست" },
            { word: "announced", arabic: "أعلن", pronunciation: "أناونسد" },
            { word: "worried", arabic: "قلق", pronunciation: "وريد" }
        ],
        questions: [
            {
                question: "Why was Omar the best student?",
                options: ["He was lucky", "He studied hard", "He had a tutor", "He didn't sleep"],
                correct: 1,
                explanation: "He studied hard every day"
            },
            {
                question: "How did Omar help his classmates?",
                options: ["Gave them answers", "Explained lessons", "Wrote for them", "Paid them"],
                correct: 1,
                explanation: "He explained difficult lessons to them"
            },
            {
                question: "What did Omar learn?",
                options: ["To study alone", "To help others", "To be quiet", "To be fast"],
                correct: 1,
                explanation: "Helping others makes everyone successful"
            }
        ]
    },
    {
        id: 4,
        title: "A Trip to the Beach",
        arabicTitle: "رحلة إلى الشاطئ",
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1507525425510-56b3e906b5a1?w=400",
        content: `
            Last weekend, my family and I went to the beach. The weather was beautiful.
            We arrived at 10 AM. My brother and I built a big sand castle.
            My mother swam in the sea. My father read a book under an umbrella.
            At noon, we ate sandwiches and drank juice. In the afternoon, we played volleyball.
            We took many photos. We returned home at 6 PM. It was a perfect day.
        `,
        arabicContent: `
            في نهاية الأسبوع الماضي، ذهبت أنا وعائلتي إلى الشاطئ. كان الطقس جميلاً.
            وصلنا الساعة 10 صباحاً. بنيت أنا وأخي قلعة رملية كبيرة.
            سبحت أمي في البحر. قرأ أبي كتاباً تحت مظلة.
            في الظهر، أكلنا ساندويشات وشربنا عصيراً. بعد الظهر، لعبنا كرة الطائرة.
            أخذنا صوراً كثيرة. عدنا للمنزل الساعة 6 مساءً. كان يوماً رائعاً.
        `,
        words: ["weekend", "beach", "weather", "castle", "swam", "volleyball", "perfect"],
        newWords: [
            { word: "beach", arabic: "شاطئ", pronunciation: "بيتش" },
            { word: "castle", arabic: "قلعة", pronunciation: "كاسل" },
            { word: "swam", arabic: "سبح", pronunciation: "سوام" }
        ],
        questions: [
            {
                question: "What did they build?",
                options: ["A house", "A sand castle", "A tent", "A fire"],
                correct: 1,
                explanation: "They built a big sand castle"
            },
            {
                question: "What did the mother do?",
                options: ["Read a book", "Swam in the sea", "Played volleyball", "Slept"],
                correct: 1,
                explanation: "The mother swam in the sea"
            },
            {
                question: "What time did they return home?",
                options: ["4 PM", "5 PM", "6 PM", "7 PM"],
                correct: 2,
                explanation: "They returned home at 6 PM"
            }
        ]
    },
    {
        id: 5,
        title: "The New Restaurant",
        arabicTitle: "المطعم الجديد",
        level: "متوسط",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        content: `
            A new Italian restaurant opened in our neighborhood. My friend Ali invited me to try it.
            The restaurant was very nice. It had red and white tables and soft music.
            We ordered pizza and pasta. The food was delicious.
            The waiter was friendly and helpful. He gave us extra bread.
            We spent two hours there. We decided to come back again next week.
        `,
        arabicContent: `
            افتتح مطعم إيطالي جديد في حينا. دعاني صديقي علي لتجربته.
            كان المطعم جميلاً جداً. كان به طاولات حمراء وبيضاء وموسيقى هادئة.
            طلبنا بيتزا وباستا. كان الطعام لذيذاً.
            كان النادل ودوداً ومفيداً. أعطانا خبزاً إضافياً.
            قضينا ساعتين هناك. قررنا العودة مرة أخرى الأسبوع القادم.
        `,
        words: ["restaurant", "invited", "ordered", "delicious", "waiter", "friendly", "decided"],
        newWords: [
            { word: "restaurant", arabic: "مطعم", pronunciation: "ريستورنت" },
            { word: "invited", arabic: "دعا", pronunciation: "إنفايتد" },
            { word: "delicious", arabic: "لذيذ", pronunciation: "ديليشس" }
        ],
        questions: [
            {
                question: "What kind of restaurant was it?",
                options: ["Chinese", "Italian", "Mexican", "Indian"],
                correct: 1,
                explanation: "It was an Italian restaurant"
            },
            {
                question: "What did they order?",
                options: ["Burger and fries", "Pizza and pasta", "Fish and rice", "Soup and salad"],
                correct: 1,
                explanation: "They ordered pizza and pasta"
            },
            {
                question: "How was the waiter?",
                options: ["Rude", "Friendly", "Busy", "Quiet"],
                correct: 1,
                explanation: "The waiter was friendly and helpful"
            }
        ]
    },
    {
        id: 6,
        title: "The Kindness of Strangers",
        arabicTitle: "لطف الغرباء",
        level: "متقدم",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
        content: `
            Maria was traveling alone for the first time. She was nervous but excited.
            At the airport, she realized she lost her wallet. She felt panic.
            A kind woman saw her distress and asked if she needed help.
            The woman bought Maria a ticket and gave her some money for food.
            Maria was so grateful. She promised to help others in need.
            This experience taught her that kindness exists everywhere.
        `,
        arabicContent: `
            كانت ماريا تسافر بمفردها لأول مرة. كانت متوترة لكن متحمسة.
            في المطار، أدركت أنها فقدت محفظتها. شعرت بالذعر.
            رأت امرأة لطيفة ضيقها وسألت إن كانت تحتاج مساعدة.
            اشترت المرأة تذكرة لماريا وأعطتها بعض المال للطعام.
            كانت ماريا ممتنة جداً. وعدت بمساعدة الآخرين المحتاجين.
            علمتها هذه التجربة أن اللطف موجود في كل مكان.
        `,
        words: ["traveling", "nervous", "excited", "realized", "distress", "grateful", "kindness"],
        newWords: [
            { word: "nervous", arabic: "متوتر", pronunciation: "نيرفس" },
            { word: "distress", arabic: "ضيق", pronunciation: "ديستريس" },
            { word: "grateful", arabic: "ممتن", pronunciation: "جريتفل" }
        ],
        questions: [
            {
                question: "How did Maria feel at first?",
                options: ["Happy and relaxed", "Nervous but excited", "Sad and angry", "Tired and bored"],
                correct: 1,
                explanation: "She was nervous but excited"
            },
            {
                question: "What problem did Maria face?",
                options: ["She missed her flight", "She lost her wallet", "She got sick", "She forgot her passport"],
                correct: 1,
                explanation: "She realized she lost her wallet"
            },
            {
                question: "What did Maria learn from this experience?",
                options: ["To be careful", "To travel with friends", "That kindness exists everywhere", "To carry cash"],
                correct: 2,
                explanation: "She learned that kindness exists everywhere"
            }
        ]
    }
];

// دوال مساعدة
function getStoriesByLevel(level) {
    if (level === 'all') return STORIES;
    return STORIES.filter(story => story.level === level);
}

function getStoryById(id) {
    return STORIES.find(story => story.id === parseInt(id));
}

function searchStories(query) {
    query = query.toLowerCase();
    return STORIES.filter(story => 
        story.title.toLowerCase().includes(query) || 
        story.arabicTitle.includes(query) ||
        story.content.toLowerCase().includes(query)
    );
}

function getNewWordsFromStory(storyId) {
    const story = getStoryById(storyId);
    return story ? story.newWords : [];
}

function getStoryQuestions(storyId) {
    const story = getStoryById(storyId);
    return story ? story.questions : [];
}

// نظام القراءة التفاعلية
class ReadingProgress {
    constructor() {
        this.completedStories = JSON.parse(localStorage.getItem('completedStories')) || [];
        this.storyProgress = JSON.parse(localStorage.getItem('storyProgress')) || {};
    }

    markAsRead(storyId) {
        if (!this.completedStories.includes(storyId)) {
            this.completedStories.push(storyId);
            localStorage.setItem('completedStories', JSON.stringify(this.completedStories));
        }
    }

    saveProgress(storyId, questionIndex, correct) {
        if (!this.storyProgress[storyId]) {
            this.storyProgress[storyId] = {
                attempts: 0,
                correct: 0,
                questions: []
            };
        }
        
        this.storyProgress[storyId].attempts++;
        if (correct) {
            this.storyProgress[storyId].correct++;
        }
        
        this.storyProgress[storyId].questions[questionIndex] = correct;
        localStorage.setItem('storyProgress', JSON.stringify(this.storyProgress));
    }

    getProgress(storyId) {
        return this.storyProgress[storyId] || { attempts: 0, correct: 0, questions: [] };
    }

    getCompletionRate(storyId) {
        const progress = this.getProgress(storyId);
        const story = getStoryById(storyId);
        if (!story || progress.attempts === 0) return 0;
        return (progress.correct / story.questions.length) * 100;
    }
}