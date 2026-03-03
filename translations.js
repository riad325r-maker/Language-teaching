// translations.js
// ملف الترجمة للغتين العربية والإنجليزية

const translations = {
    // ========== اللغة العربية ==========
    ar: {
        // عام
        siteName: "CineLingua",
        home: "الرئيسية",
        lessons: "الدروس",
        stories: "القصص",
        quiz: "الاختبارات",
        dashboard: "لوحة التحكم",
        login: "تسجيل الدخول",
        signup: "ابدأ مجاناً",
        logout: "تسجيل خروج",
        search: "ابحث...",
        save: "حفظ",
        cancel: "إلغاء",
        delete: "حذف",
        edit: "تعديل",
        back: "عودة",
        next: "التالي",
        previous: "السابق",
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        success: "تم بنجاح",
        warning: "تحذير",
        info: "معلومات",
        
        // التنقل
        nav: {
            home: "الرئيسية",
            lessons: "الدروس",
            stories: "القصص",
            quiz: "الاختبارات",
            dashboard: "لوحة التحكم",
            profile: "الملف الشخصي",
            settings: "الإعدادات"
        },

        // الصفحة الرئيسية
        hero: {
            title: "تعلم الإنجليزية بذكاء مع CineLingua",
            subtitle: "منصة تعليمية متكاملة تساعدك على تعلم الإنجليزية من خلال كلمات، جمل، قصص، واختبارات تفاعلية",
            startBtn: "ابدأ رحلتك الآن",
            browseBtn: "استعرض الدروس"
        },

        stats: {
            words: "كلمة",
            stories: "قصة",
            learners: "متعلم"
        },

        features: {
            title: "لماذا تختار CineLingua؟",
            ai: {
                title: "توصيات ذكية",
                desc: "نظامنا يحلل مستواك ويقترح المحتوى المناسب لك"
            },
            pronunciation: {
                title: "تدرب على النطق",
                desc: "استمع للنطق الصحيح للكلمات والجمل"
            },
            progress: {
                title: "تتبع تقدمك",
                desc: "اعرف كم كلمة تعلمت وأزمنة أتقنت"
            }
        },

        howItWorks: {
            title: "كيف يعمل الموقع؟",
            step1: {
                title: "سجل حسابك",
                desc: "أنشئ حساب مجاني وحدد مستواك"
            },
            step2: {
                title: "تعلم الكلمات",
                desc: "تصفح الكلمات المصنفة حسب المستوى"
            },
            step3: {
                title: "اقرأ القصص",
                desc: "طور فهمك للقراءة من خلال القصص"
            },
            step4: {
                title: "اختبر نفسك",
                desc: "أجب على الأسئلة وتتبع تقدمك"
            }
        },

        // صفحة الكلمات
        lessons: {
            title: "تعلم الكلمات والجمل",
            totalWords: "كلمة",
            savedWords: "محفوظة",
            searchPlaceholder: "ابحث عن كلمة...",
            levels: {
                beginner: "مبتدئ",
                intermediate: "متوسط",
                advanced: "متقدم"
            },
            categories: {
                all: "الكل",
                greetings: "تحيات",
                family: "عائلة",
                food: "طعام",
                verbs: "أفعال",
                adjectives: "صفات",
                travel: "سفر",
                business: "أعمال"
            },
            wordCard: {
                listen: "استماع",
                save: "حفظ",
                saved: "محفوظة",
                example: "مثال",
                pronunciation: "النطق"
            },
            dailyPhrases: "جمل يومية",
            noResults: "لا توجد كلمات في هذا التصنيف",
            wordOfDay: "كلمة اليوم"
        },

        // صفحة القصص
        stories: {
            title: "قصص قصيرة لتحسين القراءة",
            subtitle: "اقرأ القصص، تعلم كلمات جديدة، واختبر فهمك",
            searchPlaceholder: "ابحث عن قصة...",
            filters: {
                all: "الكل",
                beginner: "مبتدئ",
                intermediate: "متوسط",
                advanced: "متقدم"
            },
            storyCard: {
                words: "كلمة",
                questions: "سؤال",
                readMore: "اقرأ القصة",
                completed: "مكتمل"
            },
            newWords: "كلمات جديدة في القصة",
            testYourUnderstanding: "اختبر فهمك",
            checkAnswers: "تحقق من الإجابات",
            correctAnswer: "إجابة صحيحة",
            wrongAnswer: "إجابة خاطئة",
            explanation: "شرح",
            tryAgain: "حاول مرة أخرى",
            perfect: "أحسنت! أجبت على جميع الأسئلة بشكل صحيح"
        },

        // صفحة الاختبارات
        quiz: {
            title: "اختبر مستواك",
            subtitle: "اختر نوع الاختبار والمستوى المناسب لك",
            types: {
                vocabulary: "مفردات",
                grammar: "قواعد",
                mixed: "اختبار شامل"
            },
            levels: {
                beginner: "مبتدئ",
                intermediate: "متوسط",
                advanced: "متقدم"
            },
            question: "السؤال",
            of: "من",
            timeLeft: "الوقت المتبقي",
            check: "تحقق",
            next: "التالي",
            previous: "السابق",
            results: {
                excellent: "ممتاز! 🎉",
                veryGood: "جيد جداً! 👍",
                good: "جيد، استمر في التعلم",
                needsWork: "تحتاج للمراجعة، حاول مرة أخرى",
                score: "النتيجة",
                correct: "إجابات صحيحة",
                wrong: "إجابات خاطئة",
                total: "إجمالي الأسئلة",
                review: "مراجعة الإجابات",
                yourAnswer: "إجابتك",
                correctAnswer: "الإجابة الصحيحة",
                notAnswered: "لم تجب",
                retry: "إعادة الاختبار",
                goToLessons: "الدروس"
            }
        },

        // لوحة التحكم
        dashboard: {
            title: "لوحة التحكم",
            welcome: "مرحباً",
            streak: "أيام متتالية",
            continue: "استمر",
            stats: {
                words: "الكلمات المحفوظة",
                stories: "القصص المقروءة",
                achievements: "الإنجازات",
                streak: "أيام متتالية",
                today: "اليوم",
                week: "هذا الأسبوع"
            },
            continueWatching: "أكمل المشاهدة",
            dailyChallenges: "التحديات اليومية",
            recommendations: "اقتراحات لك",
            community: "نشاط المجتمع",
            achievements: "إنجازاتك",
            viewAll: "عرض الكل",
            noData: "لا توجد بيانات",
            progress: {
                title: "تقدمك",
                words: "الكلمات",
                stories: "القصص",
                quizzes: "الاختبارات"
            }
        },

        // التسجيل وتحديد المستوى
        register: {
            title: "مرحباً بك! 👋",
            subtitle: "خطوتين فقط ونعرف مستواك بالضبط",
            steps: {
                account: "المعلومات الأساسية",
                level: "تحديد المستوى",
                result: "النتيجة"
            },
            form: {
                firstName: "الاسم الأول",
                lastName: "اسم العائلة",
                email: "البريد الإلكتروني",
                password: "كلمة المرور",
                confirmPassword: "تأكيد كلمة المرور",
                next: "التالي",
                back: "السابق"
            },
            levelTest: {
                words: "كم كلمة تقريباً تعرف؟",
                beginner: "أقل من 500 (مبتدئ)",
                intermediate: "500 - 1500 (متوسط)",
                advanced: "أكثر من 1500 (متقدم)",
                tenses: "الأزمنة التي تعرفها",
                quickTest: "اختبار سريع",
                question: "اختر الترجمة الصحيحة"
            },
            results: {
                yourLevel: "مستواك",
                words: "كلمة",
                tenses: "أزمنة",
                accuracy: "دقة",
                recommendations: "توصيات مخصصة لك",
                start: "ابدأ رحلتك"
            }
        },

        // الإشعارات
        notifications: {
            title: "الإشعارات",
            markAllRead: "تحديد الكل كمقروء",
            empty: "لا توجد إشعارات",
            types: {
                achievement: "إنجاز جديد",
                challenge: "تحدي جديد",
                reminder: "تذكير",
                tip: "نصيحة"
            }
        },

        // الإنجازات
        achievements: {
            title: "إنجازاتك",
            locked: "مقفل",
            unlocked: "مفتوح",
            progress: "التقدم",
            types: {
                firstWord: "أول كلمة",
                tenWords: "10 كلمات",
                fiftyWords: "50 كلمة",
                firstStory: "أول قصة",
                perfectQuiz: "اختبار كامل",
                sevenDays: "7 أيام متتالية",
                thirtyDays: "30 يوم متتالي"
            }
        },

        // الأخطاء والرسائل
        messages: {
            fillAllFields: "الرجاء ملء جميع الحقول",
            passwordMismatch: "كلمة المرور غير متطابقة",
            passwordTooShort: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
            invalidEmail: "البريد الإلكتروني غير صالح",
            selectAnswer: "الرجاء اختيار إجابة أولاً",
            saved: "تم الحفظ بنجاح",
            removed: "تمت الإزالة بنجاح",
            completed: "تم الإكمال بنجاح",
            error: "حدث خطأ، الرجاء المحاولة مرة أخرى"
        },

        // التذييل
        footer: {
            copyright: "جميع الحقوق محفوظة",
            about: "عن الموقع",
            contact: "اتصل بنا",
            privacy: "سياسة الخصوصية",
            terms: "شروط الاستخدام"
        }
    },

    // ========== اللغة الإنجليزية ==========
    en: {
        // General
        siteName: "CineLingua",
        home: "Home",
        lessons: "Lessons",
        stories: "Stories",
        quiz: "Quiz",
        dashboard: "Dashboard",
        login: "Login",
        signup: "Start Free",
        logout: "Logout",
        search: "Search...",
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        back: "Back",
        next: "Next",
        previous: "Previous",
        loading: "Loading...",
        error: "An error occurred",
        success: "Success",
        warning: "Warning",
        info: "Info",

        // Navigation
        nav: {
            home: "Home",
            lessons: "Lessons",
            stories: "Stories",
            quiz: "Quiz",
            dashboard: "Dashboard",
            profile: "Profile",
            settings: "Settings"
        },

        // Homepage
        hero: {
            title: "Learn English Smartly with CineLingua",
            subtitle: "An integrated learning platform that helps you learn English through words, sentences, stories, and interactive quizzes",
            startBtn: "Start Your Journey Now",
            browseBtn: "Browse Lessons"
        },

        stats: {
            words: "Words",
            stories: "Stories",
            learners: "Learners"
        },

        features: {
            title: "Why Choose CineLingua?",
            ai: {
                title: "Smart Recommendations",
                desc: "Our system analyzes your level and suggests appropriate content"
            },
            pronunciation: {
                title: "Practice Pronunciation",
                desc: "Listen to the correct pronunciation of words and sentences"
            },
            progress: {
                title: "Track Your Progress",
                desc: "Know how many words you've learned and tenses mastered"
            }
        },

        howItWorks: {
            title: "How does it work?",
            step1: {
                title: "Create Account",
                desc: "Create a free account and determine your level"
            },
            step2: {
                title: "Learn Words",
                desc: "Browse words categorized by level"
            },
            step3: {
                title: "Read Stories",
                desc: "Improve your reading comprehension through stories"
            },
            step4: {
                title: "Test Yourself",
                desc: "Answer questions and track your progress"
            }
        },

        // Lessons page
        lessons: {
            title: "Learn Words and Sentences",
            totalWords: "Words",
            savedWords: "Saved",
            searchPlaceholder: "Search for a word...",
            levels: {
                beginner: "Beginner",
                intermediate: "Intermediate",
                advanced: "Advanced"
            },
            categories: {
                all: "All",
                greetings: "Greetings",
                family: "Family",
                food: "Food",
                verbs: "Verbs",
                adjectives: "Adjectives",
                travel: "Travel",
                business: "Business"
            },
            wordCard: {
                listen: "Listen",
                save: "Save",
                saved: "Saved",
                example: "Example",
                pronunciation: "Pronunciation"
            },
            dailyPhrases: "Daily Phrases",
            noResults: "No words in this category",
            wordOfDay: "Word of the Day"
        },

        // Stories page
        stories: {
            title: "Short Stories to Improve Reading",
            subtitle: "Read stories, learn new words, and test your understanding",
            searchPlaceholder: "Search for a story...",
            filters: {
                all: "All",
                beginner: "Beginner",
                intermediate: "Intermediate",
                advanced: "Advanced"
            },
            storyCard: {
                words: "words",
                questions: "questions",
                readMore: "Read Story",
                completed: "Completed"
            },
            newWords: "New Words in this Story",
            testYourUnderstanding: "Test Your Understanding",
            checkAnswers: "Check Answers",
            correctAnswer: "Correct Answer",
            wrongAnswer: "Wrong Answer",
            explanation: "Explanation",
            tryAgain: "Try Again",
            perfect: "Perfect! You answered all questions correctly"
        },

        // Quiz page
        quiz: {
            title: "Test Your Level",
            subtitle: "Choose quiz type and appropriate level",
            types: {
                vocabulary: "Vocabulary",
                grammar: "Grammar",
                mixed: "Mixed Test"
            },
            levels: {
                beginner: "Beginner",
                intermediate: "Intermediate",
                advanced: "Advanced"
            },
            question: "Question",
            of: "of",
            timeLeft: "Time Left",
            check: "Check",
            next: "Next",
            previous: "Previous",
            results: {
                excellent: "Excellent! 🎉",
                veryGood: "Very Good! 👍",
                good: "Good, keep learning",
                needsWork: "Need review, try again",
                score: "Score",
                correct: "Correct Answers",
                wrong: "Wrong Answers",
                total: "Total Questions",
                review: "Review Answers",
                yourAnswer: "Your Answer",
                correctAnswer: "Correct Answer",
                notAnswered: "Not Answered",
                retry: "Retry Quiz",
                goToLessons: "Go to Lessons"
            }
        },

        // Dashboard
        dashboard: {
            title: "Dashboard",
            welcome: "Welcome",
            streak: "Day Streak",
            continue: "Continue",
            stats: {
                words: "Saved Words",
                stories: "Read Stories",
                achievements: "Achievements",
                streak: "Day Streak",
                today: "Today",
                week: "This Week"
            },
            continueWatching: "Continue Watching",
            dailyChallenges: "Daily Challenges",
            recommendations: "Recommendations",
            community: "Community Activity",
            achievements: "Your Achievements",
            viewAll: "View All",
            noData: "No Data",
            progress: {
                title: "Your Progress",
                words: "Words",
                stories: "Stories",
                quizzes: "Quizzes"
            }
        },

        // Registration
        register: {
            title: "Welcome! 👋",
            subtitle: "Two steps and we'll know your exact level",
            steps: {
                account: "Account Info",
                level: "Level Test",
                result: "Result"
            },
            form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                password: "Password",
                confirmPassword: "Confirm Password",
                next: "Next",
                back: "Back"
            },
            levelTest: {
                words: "Approximately how many words do you know?",
                beginner: "Less than 500 (Beginner)",
                intermediate: "500 - 1500 (Intermediate)",
                advanced: "More than 1500 (Advanced)",
                tenses: "Tenses you know",
                quickTest: "Quick Test",
                question: "Choose the correct translation"
            },
            results: {
                yourLevel: "Your Level",
                words: "Words",
                tenses: "Tenses",
                accuracy: "Accuracy",
                recommendations: "Personalized Recommendations",
                start: "Start Your Journey"
            }
        },

        // Notifications
        notifications: {
            title: "Notifications",
            markAllRead: "Mark all as read",
            empty: "No notifications",
            types: {
                achievement: "New Achievement",
                challenge: "New Challenge",
                reminder: "Reminder",
                tip: "Tip"
            }
        },

        // Achievements
        achievements: {
            title: "Your Achievements",
            locked: "Locked",
            unlocked: "Unlocked",
            progress: "Progress",
            types: {
                firstWord: "First Word",
                tenWords: "10 Words",
                fiftyWords: "50 Words",
                firstStory: "First Story",
                perfectQuiz: "Perfect Quiz",
                sevenDays: "7 Day Streak",
                thirtyDays: "30 Day Streak"
            }
        },

        // Messages
        messages: {
            fillAllFields: "Please fill all fields",
            passwordMismatch: "Passwords do not match",
            passwordTooShort: "Password must be at least 6 characters",
            invalidEmail: "Invalid email address",
            selectAnswer: "Please select an answer first",
            saved: "Saved successfully",
            removed: "Removed successfully",
            completed: "Completed successfully",
            error: "An error occurred, please try again"
        },

        // Footer
        footer: {
            copyright: "All rights reserved",
            about: "About",
            contact: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms of Use"
        }
    }
};

// ========================================
// اللغة الحالية
// ========================================
let currentLanguage = localStorage.getItem('language') || 'ar';

// ========================================
// دالة تغيير اللغة
// ========================================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    updatePageLanguage();
    updateDirection();
    
    // تحديث الصفحة إذا كانت في صفحة معينة
    const path = window.location.pathname;
    if (path.includes('dashboard.html')) {
        updateDashboardLanguage();
    } else if (path.includes('lessons.html')) {
        updateLessonsLanguage();
    } else if (path.includes('stories.html')) {
        updateStoriesLanguage();
    } else if (path.includes('quiz.html')) {
        updateQuizLanguage();
    }
    
    // إظهار إشعار
    showLanguageToast();
}

// ========================================
// تحديث اتجاه الصفحة
// ========================================
function updateDirection() {
    const html = document.documentElement;
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
}

// ========================================
// تحديث كل النصوص في الصفحة
// ========================================
function updatePageLanguage() {
    // تحديث زر اللغة
    const langBtn = document.getElementById('currentLang');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
    }
    
    // تحديث كل العناصر اللي فيها data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // تحديث الـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // تحديث الـ titles
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = getTranslation(key);
        if (translation) {
            element.title = translation;
        }
    });
}

// ========================================
// جلب الترجمة
// ========================================
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
    }
    
    return value;
}

// ========================================
// دالة مساعدة للترجمة السريعة
// ========================================
function __(key) {
    return getTranslation(key);
}

// ========================================
// تحديث لوحة التحكم
// ========================================
function updateDashboardLanguage() {
    // تحديث عناصر محددة في لوحة التحكم
    const elements = {
        'welcomeMessage': 'dashboard.welcome',
        'streakText': 'dashboard.streak',
        'continueText': 'dashboard.continue',
        'viewAll': 'dashboard.viewAll'
    };
    
    for (const [id, key] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTranslation(key);
        }
    }
}

// ========================================
// تحديث صفحة الكلمات
// ========================================
function updateLessonsLanguage() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.placeholder = getTranslation('lessons.searchPlaceholder');
    }
}

// ========================================
// تحديث صفحة القصص
// ========================================
function updateStoriesLanguage() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.placeholder = getTranslation('stories.searchPlaceholder');
    }
}

// ========================================
// تحديث صفحة الاختبارات
// ========================================
function updateQuizLanguage() {
    // تحديث عناصر الاختبارات
}

// ========================================
// إظهار إشعار تغيير اللغة
// ========================================
function showLanguageToast() {
    const message = currentLanguage === 'ar' ? 'تم التغيير إلى العربية' : 'Switched to English';
    
    const toast = document.createElement('div');
    toast.className = 'alert alert-info';
    toast.innerHTML = `
        <i class="fas fa-globe"></i>
        <span>${message}</span>
    `;
    toast.style.position = 'fixed';
    toast.style.top = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '9999';
    toast.style.minWidth = '300px';
    toast.style.textAlign = 'center';
    toast.style.animation = 'slideDown 0.3s ease';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// ========================================
// تهيئة الترجمة عند تحميل الصفحة
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    updateDirection();
    updatePageLanguage();
    
    // إضافة الأنماط للحركات
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
            to {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translate(-50%, 0);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
        }
    `;
    document.head.appendChild(style);
});