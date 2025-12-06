// ===== LANGUAGE SWITCHING - Beauty Salon Website =====
// Bilingual Support for Persian and English

class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                // Navigation
                'Home': 'Home',
                'Services': 'Services',
                'Gallery': 'Gallery',
                'Testimonials': 'Testimonials',
                'Careers': 'Careers',
                'Contact': 'Contact',
                
                // Hero Section
                'Discover Your Inner Beauty': 'Discover Your Inner Beauty',
                'Experience luxury beauty services in the heart of Dubai': 'Experience luxury beauty services in the heart of Dubai',
                'Book Appointment': 'Book Appointment',
                
                // Services
                'Our Services': 'Our Services',
                'Hair Styling': 'Hair Styling',
                'Professional cuts, colors, and styling for every occasion': 'Professional cuts, colors, and styling for every occasion',
                'Nail Care': 'Nail Care',
                'Manicure, pedicure, and nail art services': 'Manicure, pedicure, and nail art services',
                'Facial Treatments': 'Facial Treatments',
                'Rejuvenating facials and skincare treatments': 'Rejuvenating facials and skincare treatments',
                'Makeup Services': 'Makeup Services',
                'Bridal, party, and everyday makeup': 'Bridal, party, and everyday makeup',
                
                // Virtual Tour
                'Virtual Salon Tour': 'Virtual Salon Tour',
                'Reception': 'Reception',
                'Styling Area': 'Styling Area',
                'Spa Room': 'Spa Room',
                'Nail Station': 'Nail Station',
                
                // Testimonials
                'What Our Clients Say': 'What Our Clients Say',
                'Amazing service! The staff is so professional and friendly. I always leave feeling beautiful and confident.': 'Amazing service! The staff is so professional and friendly. I always leave feeling beautiful and confident.',
                'Regular Client': 'Regular Client',
                'The best beauty salon in Dubai! Their attention to detail and luxury atmosphere is unmatched.': 'The best beauty salon in Dubai! Their attention to detail and luxury atmosphere is unmatched.',
                'VIP Client': 'VIP Client',
                
                // Careers
                'Join Our Team': 'Join Our Team',
                'Build Your Beauty Career with Us': 'Build Your Beauty Career with Us',
                'We\'re always looking for talented individuals passionate about beauty and customer service. Join our team and grow in a supportive, luxury environment.': 'We\'re always looking for talented individuals passionate about beauty and customer service. Join our team and grow in a supportive, luxury environment.',
                'Competitive salary and commission': 'Competitive salary and commission',
                'Professional development opportunities': 'Professional development opportunities',
                'Flexible working hours': 'Flexible working hours',
                'Staff discounts on services': 'Staff discounts on services',
                'Current Openings': 'Current Openings',
                'Senior Hair Stylist': 'Senior Hair Stylist',
                '3+ years experience required': '3+ years experience required',
                'Nail Technician': 'Nail Technician',
                'Certified with portfolio': 'Certified with portfolio',
                'Beauty Consultant': 'Beauty Consultant',
                'Customer service focused': 'Customer service focused',
                
                // Contact
                'Get In Touch': 'Get In Touch',
                'Location': 'Location',
                'Dubai Mall, Downtown Dubai, UAE': 'Dubai Mall, Downtown Dubai, UAE',
                'Phone': 'Phone',
                'Email': 'Email',
                'Hours': 'Hours',
                'Mon-Sun: 9AM - 9PM': 'Mon-Sun: 9AM - 9PM',
                'Select Service': 'Select Service',
                'Hair Styling': 'Hair Styling',
                'Nail Care': 'Nail Care',
                'Facial Treatment': 'Facial Treatment',
                'Makeup': 'Makeup',
                'Send Message': 'Send Message',
                
                // Footer
                'Dubai\'s premier beauty destination': 'Dubai\'s premier beauty destination',
                'Quick Links': 'Quick Links',
                'Follow Us': 'Follow Us',
                'All rights reserved': 'All rights reserved'
            },
            fa: {
                // Navigation
                'Home': 'خانه',
                'Services': 'خدمات',
                'Gallery': 'گالری',
                'Testimonials': 'نظرات',
                'Careers': 'فرصت‌های شغلی',
                'Contact': 'تماس',
                
                // Hero Section
                'Discover Your Inner Beauty': 'زیبایی درونی خود را کشف کنید',
                'Experience luxury beauty services in the heart of Dubai': 'تجربه خدمات زیبایی لوکس در قلب دبی',
                'Book Appointment': 'رزرو وقت',
                
                // Services
                'Our Services': 'خدمات ما',
                'Hair Styling': 'آرایش مو',
                'Professional cuts, colors, and styling for every occasion': 'کوتاهی، رنگ و استایل حرفه‌ای برای هر مناسبت',
                'Nail Care': 'مراقبت از ناخن',
                'Manicure, pedicure, and nail art services': 'مانیکور، پدیکور و نیل آرت',
                'Facial Treatments': 'مراقبت از پوست',
                'Rejuvenating facials and skincare treatments': 'فیشال و درمان‌های جوانسازی پوست',
                'Makeup Services': 'آرایش',
                'Bridal, party, and everyday makeup': 'آرایش عروس، مهمانی و روزانه',
                
                // Virtual Tour
                'Virtual Salon Tour': 'تور مجازی صالون',
                'Reception': 'پذیرش',
                'Styling Area': 'منطقه آرایش',
                'Spa Room': 'اتاق اسپا',
                'Nail Station': 'ایستگاه ناخن',
                
                // Testimonials
                'What Our Clients Say': 'نظرات مشتریان ما',
                'Amazing service! The staff is so professional and friendly. I always leave feeling beautiful and confident.': 'خدمات فوق‌العاده! کارکنان بسیار حرفه‌ای و دوستانه هستند. همیشه با احساس زیبایی و اعتماد به نفس از آنجا خارج می‌شوم.',
                'Regular Client': 'مشتری دائمی',
                'The best beauty salon in Dubai! Their attention to detail and luxury atmosphere is unmatched.': 'بهترین صالون زیبایی در دبی! توجه آنها به جزئیات و فضای لوکس بی‌نظیر است.',
                'VIP Client': 'مشتری ویژه',
                
                // Careers
                'Join Our Team': 'به تیم ما بپیوندید',
                'Build Your Beauty Career with Us': 'حرفه زیبایی خود را با ما بسازید',
                'We\'re always looking for talented individuals passionate about beauty and customer service. Join our team and grow in a supportive, luxury environment.': 'ما همیشه به دنبال افراد با استعداد و علاقه‌مند به زیبایی و خدمات مشتری هستیم. به تیم ما بپیوندید و در محیطی حمایتگر و لوکس رشد کنید.',
                'Competitive salary and commission': 'حقوق و کمیسیون رقابتی',
                'Professional development opportunities': 'فرصت‌های توسعه حرفه‌ای',
                'Flexible working hours': 'ساعات کاری انعطاف‌پذیر',
                'Staff discounts on services': 'تخفیف کارکنان بر خدمات',
                'Current Openings': 'موقعیت‌های فعلی',
                'Senior Hair Stylist': 'آرایشگر ارشد',
                '3+ years experience required': 'حداقل 3 سال تجربه',
                'Nail Technician': 'متخصص ناخن',
                'Certified with portfolio': 'دارای گواهینامه و نمونه کار',
                'Beauty Consultant': 'مشاور زیبایی',
                'Customer service focused': 'متمرکز بر خدمات مشتری',
                
                // Contact
                'Get In Touch': 'ارتباط با ما',
                'Location': 'موقعیت',
                'Dubai Mall, Downtown Dubai, UAE': 'دبی مال، مرکز شهر دبی، امارات متحده عربی',
                'Phone': 'تلفن',
                'Email': 'ایمیل',
                'Hours': 'ساعات کار',
                'Mon-Sun: 9AM - 9PM': 'دوشنبه تا یکشنبه: 9 صبح - 9 شب',
                'Select Service': 'انتخاب خدمات',
                'Hair Styling': 'آرایش مو',
                'Nail Care': 'مراقبت از ناخن',
                'Facial Treatment': 'مراقبت از پوست',
                'Makeup': 'آرایش',
                'Send Message': 'ارسال پیام',
                
                // Footer
                'Dubai\'s premier beauty destination': 'مقصد اصلی زیبایی دبی',
                'Quick Links': 'لینک‌های سریع',
                'Follow Us': 'ما را دنبال کنید',
                'All rights reserved': 'تمامی حقوق محفوظ است'
            }
        };
        
        this.init();
    }
    
    init() {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('salon-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else {
            // Auto-detect language from browser
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.includes('fa') || browserLang.includes('persian')) {
                this.currentLanguage = 'fa';
            }
        }
        
        this.setupEventListeners();
        this.updateLanguage(this.currentLanguage);
    }
    
    setupEventListeners() {
        // Language toggle buttons
        const enBtn = document.getElementById('en-btn');
        const faBtn = document.getElementById('fa-btn');
        
        if (enBtn) {
            enBtn.addEventListener('click', () => this.switchLanguage('en'));
        }
        
        if (faBtn) {
            faBtn.addEventListener('click', () => this.switchLanguage('fa'));
        }
    }
    
    switchLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('salon-language', lang);
            this.updateLanguage(lang);
        }
    }
    
    updateLanguage(lang) {
        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.getElementById(`${lang}-btn`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Update document direction and language
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
        
        // Update all elements with data attributes
        this.updateElements();
        
        // Update placeholders and form elements
        this.updateFormElements(lang);
        
        // Update font family for Persian
        this.updateFonts(lang);
        
        // Trigger custom event for other components
        const languageChangeEvent = new CustomEvent('languageChanged', {
            detail: { language: lang }
        });
        document.dispatchEvent(languageChangeEvent);
    }
    
    updateElements() {
        const lang = this.currentLanguage;
        const translations = this.translations[lang];
        
        // Update elements with data-en and data-fa attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            const englishText = element.getAttribute('data-en');
            const persianText = element.getAttribute('data-fa');
            
            if (lang === 'en' && englishText) {
                element.textContent = englishText;
            } else if (lang === 'fa' && persianText) {
                element.textContent = persianText;
            }
        });
        
        // Update elements by their text content
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li').forEach(element => {
            const currentText = element.textContent.trim();
            if (translations[currentText]) {
                element.textContent = translations[currentText];
            }
        });
    }
    
    updateFormElements(lang) {
        // Update placeholders
        const placeholders = {
            en: {
                'Name | نام': 'Name',
                'Email | ایمیل': 'Email',
                'Phone | تلفن': 'Phone',
                'Message | پیام': 'Message'
            },
            fa: {
                'Name | نام': 'نام',
                'Email | ایمیل': 'ایمیل',
                'Phone | تلفن': 'تلفن',
                'Message | پیام': 'پیام'
            }
        };
        
        document.querySelectorAll('input, textarea').forEach(element => {
            const currentPlaceholder = element.placeholder;
            if (placeholders[lang][currentPlaceholder]) {
                element.placeholder = placeholders[lang][currentPlaceholder];
            }
        });
        
        // Update select options
        document.querySelectorAll('option').forEach(option => {
            const englishText = option.getAttribute('data-en');
            const persianText = option.getAttribute('data-fa');
            
            if (lang === 'en' && englishText) {
                option.textContent = englishText;
            } else if (lang === 'fa' && persianText) {
                option.textContent = persianText;
            }
        });
    }
    
    updateFonts(lang) {
        if (lang === 'fa') {
            // Add Persian font support
            this.addPersianFonts();
            document.body.style.fontFamily = "'Vazir', 'Tahoma', 'Open Sans', sans-serif";
        } else {
            document.body.style.fontFamily = "'Open Sans', sans-serif";
        }
    }
    
    addPersianFonts() {
        // Add Vazir font for Persian text
        if (!document.querySelector('#persian-fonts')) {
            const link = document.createElement('link');
            link.id = 'persian-fonts';
            link.href = 'https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;700&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
        
        // Add Persian-specific styles
        if (!document.querySelector('#persian-styles')) {
            const style = document.createElement('style');
            style.id = 'persian-styles';
            style.textContent = `
                [dir="rtl"] {
                    font-family: 'Vazir', 'Tahoma', 'Open Sans', sans-serif !important;
                }
                
                [dir="rtl"] .hero-title {
                    font-family: 'Vazir', 'Playfair Display', serif !important;
                    line-height: 1.4;
                }
                
                [dir="rtl"] .section-title {
                    font-family: 'Vazir', 'Playfair Display', serif !important;
                }
                
                [dir="rtl"] .logo h2 {
                    font-family: 'Vazir', 'Playfair Display', serif !important;
                }
                
                [dir="rtl"] input,
                [dir="rtl"] textarea,
                [dir="rtl"] select {
                    text-align: right;
                    direction: rtl;
                }
                
                [dir="rtl"] .nav-menu {
                    direction: rtl;
                }
                
                [dir="rtl"] .footer-content {
                    direction: rtl;
                }
                
                /* Improve text readability for Persian */
                [dir="rtl"] p,
                [dir="rtl"] li {
                    line-height: 1.8;
                    text-align: justify;
                }
                
                /* RTL specific animations */
                [dir="rtl"] .service-card:hover {
                    transform: translateY(-10px) translateX(-5px);
                }
                
                [dir="rtl"] .position-card:hover {
                    transform: translateX(-10px);
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Method to get translation for a specific key
    getTranslation(key, lang = this.currentLanguage) {
        return this.translations[lang][key] || key;
    }
    
    // Method to add new translations dynamically
    addTranslation(lang, key, value) {
        if (!this.translations[lang]) {
            this.translations[lang] = {};
        }
        this.translations[lang][key] = value;
    }
    
    // Method for date/time formatting based on language
    formatDateTime(date, lang = this.currentLanguage) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        
        if (lang === 'fa') {
            // Persian calendar formatting
            return new Intl.DateTimeFormat('fa-IR', options).format(date);
        } else {
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
    }
    
    // Method for number formatting
    formatNumber(number, lang = this.currentLanguage) {
        if (lang === 'fa') {
            // Persian/Farsi numerals
            const persianNumbers = '۰۱۲۳۴۵۶۷۸۹';
            return number.toString().replace(/\d/g, (digit) => persianNumbers[digit]);
        } else {
            return new Intl.NumberFormat('en-US').format(number);
        }
    }
}

// Initialize language manager
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
    
    // Listen for language changes to update dynamic content
    document.addEventListener('languageChanged', function(e) {
        const newLang = e.detail.language;
        
        // Update any dynamically generated content
        updateDynamicContent(newLang);
        
        // Update notification messages if any are showing
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            // Could update notification text based on language
            console.log('Language changed to:', newLang);
        });
    });
});

// Global function to change language (can be called from anywhere)
function toggleLanguage(lang) {
    if (window.languageManager) {
        window.languageManager.switchLanguage(lang);
    }
}

// Function to update dynamic content when language changes
function updateDynamicContent(lang) {
    // Update page title
    const titles = {
        en: 'Glamour Palace - Dubai Beauty Salon',
        fa: 'گلامور پالس - صالون زیبایی دبی'
    };
    document.title = titles[lang] || titles.en;
    
    // Update meta description
    const descriptions = {
        en: 'Premium beauty salon in Dubai offering luxury services',
        fa: 'صالون زیبایی لوکس در دبی با ارائه خدمات درجه یک'
    };
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptions[lang] || descriptions.en;
    }
    
    // Update any dynamically generated timestamps
    const timestamps = document.querySelectorAll('.timestamp');
    timestamps.forEach(timestamp => {
        const date = new Date(timestamp.dataset.date);
        if (window.languageManager) {
            timestamp.textContent = window.languageManager.formatDateTime(date, lang);
        }
    });
    
    // Update any numeric displays
    const numbers = document.querySelectorAll('.localized-number');
    numbers.forEach(numberEl => {
        const number = parseInt(numberEl.dataset.number);
        if (window.languageManager && !isNaN(number)) {
            numberEl.textContent = window.languageManager.formatNumber(number, lang);
        }
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, toggleLanguage };
}