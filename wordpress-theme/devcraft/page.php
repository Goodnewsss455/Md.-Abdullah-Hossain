<?php get_header(); ?>

<main class="min-h-screen bg-white pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article data-aos="fade-up">
                <header class="mb-12">
                    <h1 class="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-gray-900"><?php the_title(); ?></h1>
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="rounded-[40px] overflow-hidden shadow-2xl mb-12">
                            <?php the_post_thumbnail('full', ['class' => 'w-full h-auto']); ?>
                        </div>
                    <?php endif; ?>
                </header>

                <div class="prose prose-lg max-w-none text-gray-600 font-sans leading-relaxed">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; endif; ?>
    </div>
</main>

<?php get_footer(); ?>
