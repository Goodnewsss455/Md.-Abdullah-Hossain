<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white font-sans selection:bg-orange-500 selection:text-white'); ?>>

<?php wp_body_open(); ?>

<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 bg-transparent">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-[#ff6b6b] rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                <i data-lucide="code-2" size="24"></i>
            </div>
            <span class="text-2xl font-display font-bold tracking-tighter text-white transition-colors" id="logo-text">
                DevCraft
            </span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-10">
            <div class="flex items-center gap-8 text-white/80 font-bold text-sm" id="nav-links">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-white transition-colors">Home</a>
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="hover:text-white transition-colors">About</a>
                <a href="<?php echo esc_url(home_url('/services')); ?>" class="hover:text-white transition-colors">Services</a>
                <a href="<?php echo esc_url(home_url('/pricing')); ?>" class="hover:text-white transition-colors">Pricing</a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="hover:text-white transition-colors">Contact</a>
            </div>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-[#ff6b6b] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-red-500/20">
                Get Free Quote
            </a>
        </div>
    </div>
</nav>

<script>
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.getElementById('nav-links');
        if (window.scrollY > 20) {
            nav.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-lg', 'border-b', 'border-gray-100');
            nav.classList.remove('bg-transparent');
            logoText.classList.add('text-gray-900');
            logoText.classList.remove('text-white');
            navLinks.classList.add('text-gray-600');
            navLinks.classList.remove('text-white/80');
        } else {
            nav.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-lg', 'border-b', 'border-gray-100');
            nav.classList.add('bg-transparent');
            logoText.classList.remove('text-gray-900');
            logoText.classList.add('text-white');
            navLinks.classList.remove('text-gray-600');
            navLinks.classList.add('text-white/80');
        }
    });
</script>
