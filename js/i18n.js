/* Krishok Bondhu - i18n Engine */

const I18n = {
    currentLang: 'en',

    init() {
        const saved = localStorage.getItem('kb_lang');
        if (saved && translations[saved]) {
            this.currentLang = saved;
        }
        this.applyTranslations();
        this.updateSwitcher();
    },

    setLang(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('kb_lang', lang);
        document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
        this.applyTranslations();
        this.updateSwitcher();
        if (typeof onLanguageChange === 'function') {
            onLanguageChange(lang);
        }
    },

    t(key) {
        const dict = translations[this.currentLang];
        return (dict && dict[key]) || translations.en[key] || key;
    },

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
    },

    updateSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    I18n.init();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            I18n.setLang(this.getAttribute('data-lang'));
        });
    });
});
