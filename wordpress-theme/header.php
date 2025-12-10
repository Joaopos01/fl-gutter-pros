<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="home">
    <!-- Top Contact Bar -->
    <div class="top-bar">
        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', cleancutgutters_get_phone())); ?>">
            <?php echo cleancutgutters_icon('phone'); ?>
            <?php echo esc_html(cleancutgutters_get_phone()); ?>
        </a>
        <a href="mailto:<?php echo esc_attr(cleancutgutters_get_email()); ?>">
            <?php echo cleancutgutters_icon('mail'); ?>
            <?php echo esc_html(cleancutgutters_get_email()); ?>
        </a>
        <span style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
            Available 24/7
        </span>
    </div>

    <!-- Main Navigation -->
    <nav class="main-nav">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
            <div class="logo-icon">
                <?php echo cleancutgutters_icon('droplets'); ?>
            </div>
            <span>Clean Cut Gutters</span>
        </a>

        <ul class="nav-menu" id="primary-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#stats">Why Us</a></li>
            <li><a href="#warranty">Warranty</a></li>
            <li><a href="#showcase">Our Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact" class="nav-cta">Get a Free Quote</a></li>
        </ul>

        <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Toggle menu">
            <?php echo cleancutgutters_icon('menu'); ?>
        </button>
    </nav>
</header>

<main id="main-content">
