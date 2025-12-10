<?php
/**
 * Main Index Template
 * 
 * This is the default template that WordPress falls back to.
 * For the homepage, see front-page.php
 *
 * @package CleanCutGutters
 */

get_header();

// Redirect to front page template for this one-page theme
get_template_part('front-page');

get_footer();
