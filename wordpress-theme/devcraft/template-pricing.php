<?php
/**
 * Template Name: Pricing Page
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
                    <span>Pricing Plans</span>
                </div>
                <h1 class="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-tight">
                    Choose Your <span class="text-orange-500 italic">Service</span> Plan
                </h1>
                <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
                    Transparent pricing plans tailored to your specific business needs. No hidden fees, just excellence.
                </p>
            </div>
        </div>
    </section>

    <!-- Pricing Grid -->
    <section class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $merchant_id = 'YOUR_MERCHANT_ID'; // Replace with your 2Checkout Merchant ID
                $plans = [
                    ['title' => 'Starter', 'price' => '49', 'icon' => 'rocket', 'features' => ['Basic Maintenance', 'Security Updates', 'Daily Backups', 'Email Support'], 'product_code' => 'STARTER_01'],
                    ['title' => 'Professional', 'price' => '149', 'icon' => 'zap', 'features' => ['Advanced Security', 'Speed Optimization', 'Priority Support', 'Custom Development'], 'popular' => true, 'product_code' => 'PROFESSIONAL_01'],
                    ['title' => 'Enterprise', 'price' => '499', 'icon' => 'shield', 'features' => ['Full Management', 'AI Automation', 'Dedicated Expert', '24/7 Support'], 'product_code' => 'ENTERPRISE_01'],
                ];

                foreach ($plans as $index => $plan) : ?>
                    <div class="relative bg-gray-50 rounded-[40px] p-10 border-2 <?php echo isset($plan['popular']) ? 'border-orange-500 shadow-2xl scale-105 z-10' : 'border-gray-100'; ?> hover:shadow-2xl transition-all group" data-aos="fade-up" data-aos-delay="<?php echo $index * 100; ?>">
                        <?php if (isset($plan['popular'])) : ?>
                            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-lg">
                                MOST POPULAR
                            </div>
                        <?php endif; ?>

                        <div class="flex items-center justify-between mb-8">
                            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                                <i data-lucide="<?php echo $plan['icon']; ?>" size="28"></i>
                            </div>
                            <div class="text-right">
                                <div class="flex items-baseline justify-end gap-1">
                                    <span class="text-gray-400 text-lg font-bold">$</span>
                                    <span class="text-4xl font-black text-gray-900"><?php echo $plan['price']; ?></span>
                                </div>
                                <span class="text-gray-400 text-xs font-bold uppercase tracking-widest block mt-1">/ month</span>
                            </div>
                        </div>
                        
                        <h3 class="text-2xl font-display font-bold mb-4 text-gray-900"><?php echo $plan['title']; ?></h3>
                        
                        <div class="space-y-4 mb-10">
                            <?php foreach ($plan['features'] as $feature) : ?>
                                <div class="flex items-center gap-3">
                                    <i data-lucide="check-circle-2" size="18" class="text-orange-500"></i>
                                    <span class="text-sm font-medium text-gray-700 font-sans"><?php echo $feature; ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>

                        <button 
                            onclick="window.location.href='https://secure.2checkout.com/checkout/buy?merchant=<?php echo $merchant_id; ?>&tpl=default&prod=<?php echo $plan['product_code']; ?>&qty=1'"
                            class="w-full py-4 <?php echo isset($plan['popular']) ? 'bg-orange-500' : 'bg-black'; ?> text-white rounded-2xl font-bold hover:opacity-90 transition-all active:scale-95"
                        >
                            Get Started
                        </button>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
