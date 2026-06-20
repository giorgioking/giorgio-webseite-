// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Danke für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    this.reset();
});

// Handle CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function () {
        if (this.textContent.includes('Kaufen')) {
            alert('Vielen Dank für Ihr Interesse! Das Kaufsystem wird bald implementiert.');
        }
    });
});

// Scroll animation for elements (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.detail-card, .features-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});