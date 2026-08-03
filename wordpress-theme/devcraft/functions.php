<?php
/**
 * DevCraft functions and definitions
 */

function devcraft_setup() {
    // Add support for block styles, post thumbnails, and title tag
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('align-wide');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'devcraft'),
        'footer-links' => __('Footer Links', 'devcraft'),
    ));
}
add_action('after_setup_theme', 'devcraft_setup');

function devcraft_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('devcraft-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap', false);
    
    // Enqueue Tailwind CSS
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);
    
    // Custom Tailwind Config
    wp_add_inline_script('tailwind-cdn', "
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Outfit', 'sans-serif'],
                        accent: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        primary: '#ff6b6b',
                        dark: '#0a0f1a',
                    }
                }
            }
        }
    ");

    // Enqueue Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);
    wp_add_inline_script('lucide-icons', 'lucide.createIcons();');

    // Enqueue AOS for animations (to replace Framer Motion)
    wp_enqueue_style('aos-css', 'https://unpkg.com/aos@2.3.1/dist/aos.css');
    wp_enqueue_script('aos-js', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array(), null, true);
    wp_add_inline_script('aos-js', 'AOS.init({ duration: 800, once: true });');

    // Main Stylesheet
    wp_enqueue_style('devcraft-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'devcraft_scripts');

// Allow SVG uploads
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
?>
