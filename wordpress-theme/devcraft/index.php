<?php get_header(); ?>

<main>
    <!-- Cinematic Hero Section -->
    <section class="relative pt-48 pb-32 px-6 overflow-hidden bg-[#0a0f1a] text-white">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent"></div>
            <div class="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full"></div>
            <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[#ff6b6b] text-xs font-bold uppercase tracking-widest mb-8">
                        <i data-lucide="zap" size="14"></i>
                        <span>Premium Web Solutions</span>
                    </div>
                    <h1 class="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
                        Elevate Your <span class="text-[#ff6b6b] italic">Digital</span> Presence
                    </h1>
                    <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl font-sans">
                        We craft high-performance WordPress themes and AI-driven solutions that transform your business into a digital powerhouse.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#contact" class="bg-[#ff6b6b] text-white px-10 py-5 rounded-2xl font-bold hover:opacity-90 transition-all active:scale-95 shadow-2xl shadow-red-500/40 relative overflow-hidden group">
                            <span class="relative z-10">Start Your Project</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                        <a href="#services" class="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95">
                            Explore Services
                        </a>
                    </div>
                </div>

                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 blur-[120px] rounded-full animate-pulse"></div>
                    <!-- Placeholder for Lottie (In WP, you would use a plugin or custom JS) -->
                    <div class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] p-12 aspect-square flex items-center justify-center">
                         <i data-lucide="rocket" size="120" class="text-[#ff6b6b] animate-bounce"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Hook for Elementor -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-6">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
