<?php
/**
 * Template Name: Contact Page
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
                    <i data-lucide="mail" size="14"></i>
                    <span>Contact Us</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
                    Let's Build Something <span class="text-orange-500 italic">Great</span>
                </h1>
                <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
                    Have a project in mind? We'd love to hear from you. Reach out and let's start a conversation.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <!-- Contact Info -->
                <div class="lg:col-span-1 space-y-12" data-aos="fade-right">
                    <div>
                        <h3 class="text-2xl font-display font-bold mb-6">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                                    <i data-lucide="mail" size="20"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                                    <p class="text-lg font-bold text-gray-900">hello@devcraft.studio</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                                    <i data-lucide="phone" size="20"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                                    <p class="text-lg font-bold text-gray-900">+880 1234 567890</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                                    <i data-lucide="map-pin" size="20"></i>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Visit Us</p>
                                    <p class="text-lg font-bold text-gray-900">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-2xl font-display font-bold mb-6">Follow Us</h3>
                        <div class="flex gap-4">
                            <a href="#" class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><i data-lucide="facebook" size="20"></i></a>
                            <a href="#" class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><i data-lucide="twitter" size="20"></i></a>
                            <a href="#" class="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><i data-lucide="instagram" size="20"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-2" data-aos="fade-left">
                    <div class="bg-gray-50 p-10 md:p-16 rounded-[48px] border border-gray-100 shadow-sm">
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
                                <button type="submit" class="w-full bg-orange-500 text-white py-6 rounded-2xl font-bold text-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-2xl shadow-orange-500/20 group relative overflow-hidden">
                                    <span class="relative z-10">Send Message</span>
                                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
