</main>

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Company Info -->
            <div>
                <div class="footer-brand">
                    <div class="logo-icon">
                        <?php echo cleancutgutters_icon('droplets'); ?>
                    </div>
                    <span style="font-size: 1.25rem; font-weight: 700;">Clean Cut Gutters</span>
                </div>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; line-height: 1.7;">
                    Clean Cut Gutters is a licensed and insured gutter company serving homeowners across Florida.
                    We specialize in seamless gutter installation, repair, cleaning, gutter guards and drainage
                    solutions — always with clean, precise workmanship.
                </p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', cleancutgutters_get_phone())); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.8);">
                        <?php echo cleancutgutters_icon('phone'); ?>
                        <?php echo esc_html(cleancutgutters_get_phone()); ?>
                    </a>
                    <a href="mailto:<?php echo esc_attr(cleancutgutters_get_email()); ?>" style="display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.8);">
                        <?php echo cleancutgutters_icon('mail'); ?>
                        <?php echo esc_html(cleancutgutters_get_email()); ?>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#stats">Why Us</a></li>
                    <li><a href="#warranty">Warranty</a></li>
                    <li><a href="#showcase">Our Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <!-- Service Areas -->
            <div class="footer-areas">
                <h4>Service Areas</h4>
                <ul>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Miami</li>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Orlando</li>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Tampa</li>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Jacksonville</li>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Fort Lauderdale</li>
                    <li><?php echo cleancutgutters_icon('map-pin'); ?> Entire Florida</li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Clean Cut Gutters. All rights reserved.</p>
            <div style="display: flex; gap: 1.5rem;">
                <a href="<?php echo esc_url(home_url('/terms')); ?>">Terms & Conditions</a>
                <a href="<?php echo esc_url(home_url('/privacy')); ?>">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>

<!-- Interactive Chat Widget -->
<div class="chat-widget">
    <div class="chat-window" id="chat-window">
        <div class="chat-header">
            <strong>Quick Support</strong>
            <p style="font-size: 0.875rem; opacity: 0.9; margin: 0;">How can we help you today?</p>
        </div>
        <div class="chat-body">
            <div class="chat-options">
                <button class="chat-option" onclick="selectChatOption('services')">
                    🔧 Which service do you need?
                </button>
                <button class="chat-option" onclick="selectChatOption('quote')">
                    💰 Quick estimate in 1 minute
                </button>
                <button class="chat-option" onclick="selectChatOption('call')">
                    📞 Request a callback
                </button>
                <button class="chat-option" onclick="selectChatOption('hours')">
                    🕐 Business hours
                </button>
            </div>
        </div>
    </div>
    <button class="chat-toggle" onclick="toggleChat()" aria-label="Open chat">
        <?php echo cleancutgutters_icon('message'); ?>
    </button>
</div>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('primary-menu');
    menu.classList.toggle('active');
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('active');
}

function selectChatOption(option) {
    const responses = {
        'services': 'Great! We offer: Gutter Installation, Repair, Cleaning, Guards, and Drainage Solutions. Which interests you?',
        'quote': 'For a quick estimate, please call us at <?php echo esc_js(cleancutgutters_get_phone()); ?> or fill out our contact form!',
        'call': 'We\'ll call you back shortly! Please leave your number in the contact form.',
        'hours': 'We\'re available 24/7 for emergencies! Regular hours: Mon-Sat 7AM-7PM.'
    };
    alert(responses[option]);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        document.getElementById('primary-menu').classList.remove('active');
    });
});

// Animate stats on scroll
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item, .service-card, .warranty-card').forEach(el => {
    observer.observe(el);
});
</script>

<?php wp_footer(); ?>
</body>
</html>
