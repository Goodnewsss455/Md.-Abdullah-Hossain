<?php
/**
 * Template Name: Services Page
 */
get_header(); ?>

<main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0a0f1a] text-white">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent"></div>
            <div class="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10 text-center">
            <div data-aos="fade-up">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">
                    <i data-lucide="zap" size="14"></i>
                    <span>Our Expertise</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
                    Premium <span class="text-orange-500 italic">Digital</span> Services
                </h1>
                <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
                    We combine cinematic aesthetics with technical precision to build WordPress solutions that don't just work—they inspire.
                </p>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $services = [
                    ['title' => 'WordPress Development', 'icon' => 'code-2', 'color' => 'orange', 'img' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Malware Removal', 'icon' => 'shield', 'color' => 'red', 'img' => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Bug Fixing', 'icon' => 'bug', 'color' => 'yellow', 'img' => 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Speed Optimization', 'icon' => 'zap', 'color' => 'emerald', 'img' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'Frontend Development', 'icon' => 'layout', 'color' => 'purple', 'img' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000'],
                    ['title' => 'AI Automation', 'icon' => 'bot', 'color' => 'cyan', 'img' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'],
                ];

                foreach ($services as $index => $service) : ?>
                    <div class="group relative h-[450px] rounded-[40px] overflow-hidden border border-gray-100 bg-gray-50" data-aos="fade-up" data-aos-delay="<?php echo $index * 100; ?>">
                        <div class="absolute inset-0 z-0">
                            <img src="<?php echo $service['img']; ?>" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-20 group-hover:opacity-40">
                            <div class="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
                        </div>
                        <div class="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                            <div class="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                                <div class="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 text-<?php echo $service['color']; ?>-500">
                                    <i data-lucide="<?php echo $service['icon']; ?>" size="28"></i>
                                </div>
                                <h3 class="text-2xl font-display font-bold mb-4 tracking-tight text-gray-900"><?php echo $service['title']; ?></h3>
                                <p class="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Premium implementation using industry best practices and cutting-edge technology.
                                </p>
                            </div>
                            <div class="flex items-center justify-between pt-6 border-t border-gray-100">
                                <a href="#" class="flex items-center gap-2 text-gray-900 font-bold text-sm hover:text-orange-500 transition-all">
                                    Learn More <i data-lucide="arrow-right" size="16"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
