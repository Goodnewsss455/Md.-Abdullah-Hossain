<?php get_header(); ?>

<main class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
                alt="Workspace" 
                class="w-full h-full object-cover opacity-40 blur-sm scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <div data-aos="fade-right">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-medium mb-8">
                    <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span>Professional Web Services — Trusted by 500+ Clients</span>
                </div>

                <h1 class="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                    Expert <span class="text-orange-500">WordPress</span><br />
                    & Web Solutions
                </h1>

                <p class="text-gray-300 text-xl max-w-xl mb-10 leading-relaxed font-sans">
                    We build, secure, optimize, and automate your WordPress & web presence. From custom development to AI automation — one team, all solutions.
                </p>

                <div class="flex flex-wrap items-center gap-6 mb-16">
                    <a href="#contact" class="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2">
                        Get Free Consultation <i data-lucide="arrow-right" size="20"></i>
                    </a>
                    <a href="#about" class="flex items-center gap-3 text-white font-bold text-lg hover:text-orange-500 transition-colors group">
                        <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                            <i data-lucide="info" size="20"></i>
                        </div>
                        About Us
                    </a>
                </div>

                <div class="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <div class="text-3xl font-bold text-white mb-1">500+</div>
                        <div class="text-gray-400 text-sm">Projects Done</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-white mb-1">98%</div>
                        <div class="text-gray-400 text-sm">Satisfaction</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-white mb-1">24/7</div>
                        <div class="text-gray-400 text-sm">Support</div>
                    </div>
                </div>
            </div>

            <div class="relative hidden lg:block" data-aos="fade-left" data-aos-delay="200">
                <div class="absolute -top-24 -left-24 w-72 h-72 z-20 pointer-events-none opacity-50">
                    <i data-lucide="rocket" size="200" class="text-orange-500/20 animate-bounce"></i>
                </div>

                <div class="relative z-10 bg-[#1a1a1a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    <div class="h-8 bg-[#2a2a2a] flex items-center px-4 gap-1.5">
                        <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                        <div class="ml-4 flex-1 bg-black/20 rounded h-5 flex items-center px-3 text-[10px] text-gray-500">
                            devcraft.studio
                        </div>
                    </div>
                    <div class="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                            alt="Expert Developer" 
                            class="w-full aspect-[4/3] object-cover"
                        >
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-4">
                            <div class="text-white font-black text-lg tracking-tighter">MD ABDULLAH</div>
                            <div class="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Lead Developer</div>
                        </div>
                    </div>
                </div>

                <!-- Floating Badges -->
                <div class="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce" style="animation-duration: 4s;">
                    <div class="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                        <i data-lucide="shield" size="24"></i>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">Secured</div>
                        <div class="text-gray-400 text-[10px]">Malware Free</div>
                    </div>
                </div>

                <div class="absolute -right-8 bottom-20 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce" style="animation-duration: 5s; animation-delay: 0.5s;">
                    <div class="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white">
                        <i data-lucide="zap" size="24"></i>
                    </div>
                    <div>
                        <div class="text-white font-bold text-sm">100/100</div>
                        <div class="text-gray-400 text-[10px]">PageSpeed Score</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-orange-500/30 transition-all group" data-aos="fade-up">
                    <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                        <i data-lucide="target" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-bold mb-2">250+</h3>
                    <p class="text-gray-500 font-medium">Projects Completed</p>
                </div>
                <div class="text-center p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-orange-500/30 transition-all group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                        <i data-lucide="star" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-bold mb-2">180+</h3>
                    <p class="text-gray-500 font-medium">Happy Clients</p>
                </div>
                <div class="text-center p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-orange-500/30 transition-all group" data-aos="fade-up" data-aos-delay="200">
                    <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                        <i data-lucide="rocket" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-bold mb-2">5+</h3>
                    <p class="text-gray-500 font-medium">Years Experience</p>
                </div>
                <div class="text-center p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-orange-500/30 transition-all group" data-aos="fade-up" data-aos-delay="300">
                    <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                        <i data-lucide="zap" size="24"></i>
                    </div>
                    <h3 class="text-4xl font-bold mb-2">< 2h</h3>
                    <p class="text-gray-500 font-medium">Support Response</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 px-6 bg-[#0a0f1a] text-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto relative z-10">
            <div class="mb-24 text-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <i data-lucide="zap" size="14"></i>
                    <span>Our Expertise</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
                    Premium <span class="text-orange-500 italic">Digital</span> Services
                </h2>
                <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
                    We combine cinematic aesthetics with technical precision to build WordPress solutions that don't just work—they inspire.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <!-- WordPress Development -->
                <div class="group relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5" data-aos="fade-up">
                    <div class="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent"></div>
                    </div>
                    <div class="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                        <div class="mb-6 transform transition-transform duration-500 group-hover:-translate-y-8">
                            <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 text-orange-400">
                                <i data-lucide="code-2" size="28"></i>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">WordPress Development</h3>
                            <p class="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Custom theme and plugin development tailored to your brand's unique needs.
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-6 border-t border-white/10">
                            <a href="#" class="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all">
                                View Details <i data-lucide="arrow-right" size="16"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Malware Removal -->
                <div class="group relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5" data-aos="fade-up" data-aos-delay="100">
                    <div class="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent"></div>
                    </div>
                    <div class="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                        <div class="mb-6 transform transition-transform duration-500 group-hover:-translate-y-8">
                            <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 text-red-400">
                                <i data-lucide="shield" size="28"></i>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">Malware Removal</h3>
                            <p class="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Comprehensive security audit and malware cleanup for your WordPress site.
                            </p>
                        </div>
                        <div class="flex items-center justify-between pt-6 border-t border-white/10">
                            <a href="#" class="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all">
                                View Details <i data-lucide="arrow-right" size="16"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <div class="bg-white p-12 md:p-20 rounded-[64px] border-2 border-gray-50 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
                <div class="absolute bottom-0 left-0 w-full h-2 bg-orange-500"></div>
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Request a Consultation</h2>
                    <p class="text-gray-500 text-lg font-sans">Tell us about your project and we'll provide a custom strategy.</p>
                </div>

                <form class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-3">
                        <label class="text-sm font-bold text-gray-900 ml-2">Full Name</label>
                        <input type="text" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:outline-none focus:ring-0 focus:border-orange-500 transition-all shadow-sm hover:border-gray-200" placeholder="John Doe">
                    </div>
                    <div class="space-y-3">
                        <label class="text-sm font-bold text-gray-900 ml-2">Email Address</label>
                        <input type="email" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:outline-none focus:ring-0 focus:border-orange-500 transition-all shadow-sm hover:border-gray-200" placeholder="john@example.com">
                    </div>
                    <div class="md:col-span-2 space-y-3">
                        <label class="text-sm font-bold text-gray-900 ml-2">Project Details</label>
                        <textarea rows="5" class="w-full bg-white border-2 border-gray-100 rounded-2xl px-8 py-5 focus:outline-none focus:ring-0 focus:border-orange-500 transition-all shadow-sm hover:border-gray-200 resize-none" placeholder="Tell us about your project goals..."></textarea>
                    </div>
                    <div class="md:col-span-2">
                        <button type="submit" class="w-full bg-[#ff6b6b] text-white py-6 rounded-2xl font-bold text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-red-500/20 group relative overflow-hidden">
                            <span class="relative z-10">Send Message</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
