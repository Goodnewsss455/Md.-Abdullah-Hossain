<?php
/**
 * Template Name: About Page
 */
get_header(); ?>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0a0f1a] text-white">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent"></div>
            <div class="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">
                        <i data-lucide="users" size="14"></i>
                        <span>Our Story</span>
                    </div>
                    <h1 class="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
                        Crafting <span class="text-orange-500 italic">Digital</span> Excellence
                    </h1>
                    <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl font-sans">
                        We are a team of passionate developers and designers dedicated to pushing the boundaries of what's possible in the WordPress ecosystem.
                    </p>
                </div>

                <div class="relative aspect-square" data-aos="fade-left">
                     <div class="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-12 w-full h-full flex items-center justify-center">
                         <i data-lucide="award" size="120" class="text-orange-500 animate-pulse"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-6 border-b border-gray-100">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div class="text-center" data-aos="fade-up">
                    <div class="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="target" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-display font-bold mb-2">250+</h3>
                    <p class="text-gray-500 font-medium">Projects Completed</p>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="award" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-display font-bold mb-2">180+</h3>
                    <p class="text-gray-500 font-medium">Happy Clients</p>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="rocket" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-display font-bold mb-2">5+</h3>
                    <p class="text-gray-500 font-medium">Years Experience</p>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="zap" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-display font-bold mb-2">< 2h</h3>
                    <p class="text-gray-500 font-medium">Support Response</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <section class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div class="rounded-[48px] overflow-hidden shadow-2xl" data-aos="zoom-in">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Our Team" 
                        class="w-full h-full object-cover"
                    >
                </div>

                <div class="space-y-10">
                    <h2 class="text-4xl md:text-5xl font-display font-bold tracking-tight">Driven by <span class="text-orange-500">Innovation</span> and Integrity</h2>
                    <p class="text-lg text-gray-600 leading-relaxed font-sans">
                        Founded with a vision to simplify complex web challenges, DevCraft has grown into a premier digital agency. We believe in transparency, technical precision, and building long-term partnerships with our clients.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100" data-aos="fade-up">
                            <i data-lucide="shield" class="text-blue-500 mb-4" size="32"></i>
                            <h4 class="font-accent font-bold mb-2">Security First</h4>
                            <p class="text-sm text-gray-500">We prioritize the safety of your digital assets above all else.</p>
                        </div>
                        <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                            <i data-lucide="zap" class="text-yellow-500 mb-4" size="32"></i>
                            <h4 class="font-accent font-bold mb-2">Performance Driven</h4>
                            <p class="text-sm text-gray-500">Every line of code is optimized for speed and efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
