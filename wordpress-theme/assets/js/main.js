/**
 * Clean Cut Gutters Theme JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const primaryMenu = document.getElementById('primary-menu');
    
    if (mobileToggle && primaryMenu) {
        mobileToggle.addEventListener('click', function() {
            primaryMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (primaryMenu) {
                    primaryMenu.classList.remove('active');
                }
            }
        });
    });

    // Chat Widget
    const chatToggle = document.querySelector('.chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', function() {
            chatWindow.classList.toggle('active');
        });
    }

    // Animate Elements on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.stat-item, .service-card, .warranty-card');
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        elements.forEach(function(el) {
            observer.observe(el);
        });
    };

    animateOnScroll();

    // Animate Stats Counter
    const animateCounters = function() {
        const counters = document.querySelectorAll('.stat-item h3');
        
        counters.forEach(function(counter) {
            const target = parseInt(counter.innerText);
            if (isNaN(target)) return;
            
            let current = 0;
            const increment = target / 50;
            const duration = 2000;
            const stepTime = duration / 50;

            const updateCounter = function() {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + (counter.innerText.includes('%') ? '%' : '+');
                    setTimeout(updateCounter, stepTime);
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
                }
            };

            // Start animation when element is in view
            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            });

            observer.observe(counter);
        });
    };

    animateCounters();

    // Animate Progress Bars
    const animateProgressBars = function() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(function() {
                        entry.target.style.width = width;
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(function(bar) {
            observer.observe(bar);
        });
    };

    animateProgressBars();

    // Header Background on Scroll
    const header = document.querySelector('.site-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            } else {
                header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)';
            }
        });
    }

    // Form Submission Handler
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you would typically send to a server
            // For now, show a success message
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            this.reset();
        });
    }

});

// Chat Option Handler
function selectChatOption(option) {
    const responses = {
        'services': 'Great! We offer: Gutter Installation, Repair, Cleaning, Guards, and Drainage Solutions. Which interests you?',
        'quote': 'For a quick estimate, please fill out our contact form or call us directly!',
        'call': 'We\'ll call you back shortly! Please leave your number in the contact form.',
        'hours': 'We\'re available 24/7 for emergencies! Regular hours: Mon-Sat 7AM-7PM.'
    };
    
    alert(responses[option] || 'How can we help you?');
}

// Toggle Chat Window
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
        chatWindow.classList.toggle('active');
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('primary-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
