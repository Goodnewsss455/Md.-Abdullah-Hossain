    <footer class="bg-[#0a0f1a] text-white py-20 px-6 border-t border-white/5">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="col-span-1 md:col-span-2">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 bg-[#ff6b6b] rounded-xl flex items-center justify-center text-white">
                        <i data-lucide="code-2" size="24"></i>
                    </div>
                    <span class="text-2xl font-bold tracking-tighter"><?php bloginfo('name'); ?></span>
                </div>
                <p class="text-gray-400 max-w-sm leading-relaxed mb-8">
                    Crafting premium digital experiences with technical precision and creative excellence. Your partner in digital transformation.
                </p>
                <div class="flex gap-4">
                    <!-- Social Icons -->
                    <a href="#" class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><i data-lucide="facebook" size="20"></i></a>
                    <a href="#" class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><i data-lucide="twitter" size="20"></i></a>
                    <a href="#" class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#ff6b6b] transition-all"><i data-lucide="instagram" size="20"></i></a>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold mb-8">Quick Links</h4>
                <div class="flex flex-col gap-4 text-gray-400 text-sm font-medium">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-links',
                        'container' => false,
                        'menu_class' => 'flex flex-col gap-4',
                        'fallback_cb' => false
                    ));
                    ?>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold mb-8">Newsletter</h4>
                <p class="text-gray-400 text-sm mb-6">Subscribe to get the latest updates and news.</p>
                <form class="relative">
                    <input type="email" placeholder="Your email" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#ff6b6b] transition-all">
                    <button class="absolute right-2 top-2 bottom-2 bg-[#ff6b6b] px-4 rounded-xl hover:opacity-90 transition-all">
                        <i data-lucide="send" size="18"></i>
                    </button>
                </form>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
