<?php
/**
 * Clean Cut Gutters Theme Functions
 *
 * @package CleanCutGutters
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function cleancutgutters_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 100,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'cleancutgutters'),
        'footer'  => __('Footer Menu', 'cleancutgutters'),
    ));
}
add_action('after_setup_theme', 'cleancutgutters_setup');

/**
 * Enqueue Scripts and Styles
 */
function cleancutgutters_scripts() {
    // Google Fonts - Inter
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'cleancutgutters-style',
        get_stylesheet_uri(),
        array('google-fonts'),
        wp_get_theme()->get('Version')
    );

    // Main JavaScript
    wp_enqueue_script(
        'cleancutgutters-scripts',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'cleancutgutters_scripts');

/**
 * Customizer Settings
 */
function cleancutgutters_customize_register($wp_customize) {
    
    // Contact Information Section
    $wp_customize->add_section('contact_info', array(
        'title'    => __('Contact Information', 'cleancutgutters'),
        'priority' => 30,
    ));

    // Phone Number
    $wp_customize->add_setting('phone_number', array(
        'default'           => '(555) 555-5555',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('phone_number', array(
        'label'   => __('Phone Number', 'cleancutgutters'),
        'section' => 'contact_info',
        'type'    => 'text',
    ));

    // Email Address
    $wp_customize->add_setting('email_address', array(
        'default'           => 'info@cleancutgutters.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('email_address', array(
        'label'   => __('Email Address', 'cleancutgutters'),
        'section' => 'contact_info',
        'type'    => 'email',
    ));

    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title'    => __('Hero Section', 'cleancutgutters'),
        'priority' => 35,
    ));

    // Hero Video URL
    $wp_customize->add_setting('hero_video_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('hero_video_url', array(
        'label'       => __('Hero Video URL', 'cleancutgutters'),
        'description' => __('Enter the URL of the background video', 'cleancutgutters'),
        'section'     => 'hero_section',
        'type'        => 'url',
    ));

    // Stats Section
    $wp_customize->add_section('stats_section', array(
        'title'    => __('Statistics', 'cleancutgutters'),
        'priority' => 40,
    ));

    // Projects Completed
    $wp_customize->add_setting('stat_projects', array(
        'default'           => '500',
        'sanitize_callback' => 'absint',
    ));
    $wp_customize->add_control('stat_projects', array(
        'label'   => __('Projects Completed', 'cleancutgutters'),
        'section' => 'stats_section',
        'type'    => 'number',
    ));

    // Client Satisfaction
    $wp_customize->add_setting('stat_satisfaction', array(
        'default'           => '98',
        'sanitize_callback' => 'absint',
    ));
    $wp_customize->add_control('stat_satisfaction', array(
        'label'   => __('Client Satisfaction %', 'cleancutgutters'),
        'section' => 'stats_section',
        'type'    => 'number',
    ));

    // Years Experience
    $wp_customize->add_setting('stat_years', array(
        'default'           => '15',
        'sanitize_callback' => 'absint',
    ));
    $wp_customize->add_control('stat_years', array(
        'label'   => __('Years of Experience', 'cleancutgutters'),
        'section' => 'stats_section',
        'type'    => 'number',
    ));
}
add_action('customize_register', 'cleancutgutters_customize_register');

/**
 * Helper Functions
 */
function cleancutgutters_get_phone() {
    return get_theme_mod('phone_number', '(555) 555-5555');
}

function cleancutgutters_get_email() {
    return get_theme_mod('email_address', 'info@cleancutgutters.com');
}

function cleancutgutters_get_stat($stat) {
    $defaults = array(
        'projects'     => 500,
        'satisfaction' => 98,
        'years'        => 15,
    );
    return get_theme_mod('stat_' . $stat, $defaults[$stat] ?? 0);
}

/**
 * Custom SVG Icons
 */
function cleancutgutters_icon($icon) {
    $icons = array(
        'droplets' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
        'phone' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'mail' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        'map-pin' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
        'check' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        'shield' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        'message' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>',
        'menu' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        'x' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    );
    
    return isset($icons[$icon]) ? $icons[$icon] : '';
}
