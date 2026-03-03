// theme.js
// نظام التحكم بالوضع الليلي والنهاري

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // تطبيق الثيم المحفوظ
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // إنشاء زر الثيم إذا لم يكن موجوداً
        this.createThemeToggle();
        
        // تحديث نص الزر
        this.updateToggleButton();
    }

    createThemeToggle() {
        // التحقق إذا كان الزر موجوداً
        if (document.getElementById('themeToggle')) return;

        const navbar = document.querySelector('.nav-buttons');
        if (!navbar) return;

        const toggleHTML = `
            <div class="theme-toggle" id="themeToggle">
                <button class="theme-toggle-btn ${this.theme === 'light' ? 'active' : ''}" 
                        onclick="themeManager.setTheme('light')">
                    <i class="fas fa-sun"></i>
                </button>
                <button class="theme-toggle-btn ${this.theme === 'dark' ? 'active' : ''}" 
                        onclick="themeManager.setTheme('dark')">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        `;

        navbar.insertAdjacentHTML('afterbegin', toggleHTML);
    }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        this.updateToggleButton();
        
        // تحديث لون شريط العنوان في المتصفحات المحمولة
        this.updateThemeColor();
        
        // إظهار رسالة تأكيد
        this.showThemeToast(theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateToggleButton() {
        const buttons = document.querySelectorAll('.theme-toggle-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if ((this.theme === 'light' && btn.innerHTML.includes('sun')) ||
                (this.theme === 'dark' && btn.innerHTML.includes('moon'))) {
                btn.classList.add('active');
            }
        });
    }

    updateThemeColor() {
        // للمتصفحات المحمولة - تغيير لون شريط العنوان
        const themeColor = this.theme === 'light' ? '#ffffff' : '#0f172a';
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        metaThemeColor.content = themeColor;
    }

    showThemeToast(theme) {
        const message = theme === 'light' ? 'الوضع النهاري مفعل' : 'الوضع الليلي مفعل';
        this.showToast(message, 'info');
    }

    showToast(message, type = 'info') {
        // إنشاء عنصر التوست
        const toast = document.createElement('div');
        toast.className = `alert alert-${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                              type === 'error' ? 'fa-exclamation-circle' : 
                              'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // إضافة التوست للصفحة
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.zIndex = '9999';
        toast.style.minWidth = '200px';
        toast.style.animation = 'slideIn 0.3s ease';
        
        document.body.appendChild(toast);
        
        // إزالة التوست بعد 3 ثواني
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    getCurrentTheme() {
        return this.theme;
    }

    isDarkMode() {
        return this.theme === 'dark';
    }

    isLightMode() {
        return this.theme === 'light';
    }
}

// إنشاء كائن عالمي للتحكم بالثيم
const themeManager = new ThemeManager();

// إضافة أنيميشن للتوست
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// تحديث الثيم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    themeManager.init();
});

// الاستماع لتغييرات الثيم
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        themeManager.setTheme(e.matches ? 'dark' : 'light');
    }
});