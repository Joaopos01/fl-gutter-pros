<?php
/**
 * Front Page Template
 *
 * @package CleanCutGutters
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero" id="hero">
    <?php 
    $video_url = get_theme_mod('hero_video_url', '');
    if ($video_url) : ?>
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
        </video>
    <?php else : ?>
        <div class="hero-video" style="background: linear-gradient(135deg, hsl(173, 82%, 22%), hsl(222, 47%, 11%));"></div>
    <?php endif; ?>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <div class="hero-logo">
            <?php echo cleancutgutters_icon('droplets'); ?>
        </div>
        <h1>Clean Cut Gutters</h1>
    </div>
</section>

<!-- Services Section -->
<section class="services section-padding" id="services">
    <div class="container">
        <div class="section-header">
            <h2>Our Services</h2>
            <p>Professional gutter solutions for every need. Quality workmanship guaranteed.</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">
                    <?php echo cleancutgutters_icon('droplets'); ?>
                </div>
                <h3>Gutter Installation</h3>
                <p>Custom seamless gutters installed with precision. We measure, fabricate on-site, and install for a perfect fit.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <?php echo cleancutgutters_icon('shield'); ?>
                </div>
                <h3>Gutter Repair</h3>
                <p>Fix leaks, sagging, and damage quickly. We restore your gutters to optimal performance.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <?php echo cleancutgutters_icon('check'); ?>
                </div>
                <h3>Gutter Cleaning</h3>
                <p>Remove debris and blockages for proper water flow. Prevent damage and extend gutter life.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <?php echo cleancutgutters_icon('shield'); ?>
                </div>
                <h3>Gutter Guards</h3>
                <p>Install protection systems that keep leaves out while letting water in. Reduce maintenance needs.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <?php echo cleancutgutters_icon('droplets'); ?>
                </div>
                <h3>Drainage Solutions</h3>
                <p>Complete water management including downspout extensions and French drains.</p>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats section-padding" id="stats">
    <div class="container">
        <div class="section-header">
            <h2 style="color: white;">Project Transparency</h2>
            <p style="color: rgba(255,255,255,0.8);">Real numbers that demonstrate our commitment to excellence.</p>
        </div>
        <div class="stats-grid">
            <div class="stat-item">
                <h3><?php echo esc_html(cleancutgutters_get_stat('projects')); ?>+</h3>
                <p>Projects Completed</p>
            </div>
            <div class="stat-item">
                <h3><?php echo esc_html(cleancutgutters_get_stat('satisfaction')); ?>%</h3>
                <p>Client Satisfaction</p>
            </div>
            <div class="stat-item">
                <h3><?php echo esc_html(cleancutgutters_get_stat('years')); ?>+</h3>
                <p>Years Experience</p>
            </div>
            <div class="stat-item">
                <h3>24/7</h3>
                <p>Emergency Support</p>
            </div>
        </div>
        <div class="progress-bars">
            <div class="progress-item">
                <div class="progress-label">
                    <span>On-Time Delivery</span>
                    <span>96%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 96%;"></div>
                </div>
            </div>
            <div class="progress-item">
                <div class="progress-label">
                    <span>Quality Rating</span>
                    <span>98%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 98%;"></div>
                </div>
            </div>
            <div class="progress-item">
                <div class="progress-label">
                    <span>Customer Retention</span>
                    <span>94%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 94%;"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Warranty Section -->
<section class="warranty section-padding" id="warranty">
    <div class="container">
        <div class="section-header">
            <h2>Warranty & Post-Sale Support</h2>
            <p>We don't disappear after installation. Your satisfaction is our ongoing commitment.</p>
        </div>
        <div class="warranty-grid">
            <div class="warranty-card">
                <h3>
                    <?php echo cleancutgutters_icon('check'); ?>
                    Maintenance Checklist
                </h3>
                <ul class="checklist">
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Bi-annual gutter inspection recommended</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Clean gutters after heavy storms</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Check downspouts for proper drainage</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Inspect seams and joints for leaks</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Trim overhanging branches</span>
                    </li>
                </ul>
            </div>
            <div class="warranty-card">
                <h3>
                    <?php echo cleancutgutters_icon('shield'); ?>
                    Our Guarantees
                </h3>
                <ul class="checklist">
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span><strong>10-Year Material Warranty</strong> on all gutters</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span><strong>5-Year Workmanship Warranty</strong> on installation</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span><strong>Lifetime Support</strong> for questions</span>
                    </li>
                    <li>
                        <span class="check-icon"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span><strong>Free Re-inspection</strong> within first year</span>
                    </li>
                </ul>
            </div>
            <div class="warranty-card" style="background: linear-gradient(135deg, hsl(173, 82%, 22%), hsl(173, 82%, 15%)); color: white;">
                <h3 style="color: white;">
                    Annual Cleaning Subscription
                </h3>
                <p style="margin-bottom: 1.5rem; opacity: 0.9;">Keep your gutters in perfect condition year-round with our maintenance plan.</p>
                <ul class="checklist" style="border-color: rgba(255,255,255,0.2);">
                    <li style="border-color: rgba(255,255,255,0.2);">
                        <span class="check-icon" style="color: white;"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>2 professional cleanings per year</span>
                    </li>
                    <li style="border-color: rgba(255,255,255,0.2);">
                        <span class="check-icon" style="color: white;"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>Priority scheduling</span>
                    </li>
                    <li style="border-color: rgba(255,255,255,0.2);">
                        <span class="check-icon" style="color: white;"><?php echo cleancutgutters_icon('check'); ?></span>
                        <span>10% discount on repairs</span>
                    </li>
                </ul>
                <p style="font-size: 1.5rem; font-weight: 700; margin-top: 1.5rem;">$199<span style="font-size: 1rem; font-weight: 400;">/year</span></p>
                <a href="#contact" class="btn" style="background: white; color: hsl(173, 82%, 22%); margin-top: 1rem; width: 100%;">Subscribe Now</a>
            </div>
        </div>
    </div>
</section>

<!-- Showcase Section -->
<section class="showcase section-padding" id="showcase">
    <div class="container">
        <div class="section-header">
            <h2>See Our Work</h2>
            <p>Watch our team in action and see the quality of our installations.</p>
        </div>
        <div class="showcase-content">
            <div class="showcase-video">
                <!-- Placeholder for video - replace src with actual video -->
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: hsl(var(--muted));">
                    <p style="color: hsl(var(--muted-foreground));">Video Coming Soon</p>
                </div>
            </div>
            <div>
                <h3 style="margin-bottom: 1rem;">Professional Installation Process</h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                    Our trained technicians follow a meticulous process to ensure every installation 
                    is perfect. From precise measurements to clean finishing, we take pride in our work.
                </p>
                <div class="showcase-gallery">
                    <div class="gallery-item">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: hsl(var(--muted)); color: hsl(var(--muted-foreground));">Photo 1</div>
                    </div>
                    <div class="gallery-item">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: hsl(var(--muted)); color: hsl(var(--muted-foreground));">Photo 2</div>
                    </div>
                    <div class="gallery-item">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: hsl(var(--muted)); color: hsl(var(--muted-foreground));">Photo 3</div>
                    </div>
                    <div class="gallery-item">
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: hsl(var(--muted)); color: hsl(var(--muted-foreground));">Photo 4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="contact section-padding" id="contact">
    <div class="container">
        <div class="contact-grid">
            <div>
                <h2 style="margin-bottom: 1rem;">Get Your Free Estimate</h2>
                <p style="opacity: 0.9; margin-bottom: 2rem;">
                    Ready to protect your home with professional gutter services? 
                    Fill out the form and we'll get back to you within 24 hours.
                </p>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <?php echo cleancutgutters_icon('check'); ?>
                        <span>Free, no-obligation quotes</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <?php echo cleancutgutters_icon('check'); ?>
                        <span>Same-day response</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <?php echo cleancutgutters_icon('check'); ?>
                        <span>Licensed & insured professionals</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <?php echo cleancutgutters_icon('check'); ?>
                        <span>Financing options available</span>
                    </div>
                </div>
            </div>
            <div class="contact-form">
                <form action="#" method="POST">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="service">Service Needed</label>
                        <select id="service" name="service">
                            <option value="">Select a service</option>
                            <option value="installation">Gutter Installation</option>
                            <option value="repair">Gutter Repair</option>
                            <option value="cleaning">Gutter Cleaning</option>
                            <option value="guards">Gutter Guards</option>
                            <option value="drainage">Drainage Solutions</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Request Free Estimate</button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
