<article <?php post_class( 'qodef-blog-item qodef-e' ); ?>>
	<div class="qodef-e-inner">
		<div class="qodef-e-media-holder">
			<?php
			// Include post media
			archicon_template_part( 'blog', 'templates/parts/post-info/media' );

			if ( has_post_thumbnail() && ( archicon_is_installed( 'framework' ) && archicon_is_installed( 'core' ) ) ) {
				// Include post date info
				archicon_template_part( 'blog', 'templates/parts/post-info/date', 'custom' );
			}
			?>
		</div>
		<div class="qodef-e-content">
			<div class="qodef-e-top-holder">
				<div class="qodef-e-info">
					<?php
					if ( ! has_post_thumbnail() || ! ( archicon_is_installed( 'framework' ) && archicon_is_installed( 'core' ) ) ) {
						// Include post date info
						archicon_template_part( 'blog', 'templates/parts/post-info/date' );
					}
					// Include post category info
					archicon_template_part( 'blog', 'templates/parts/post-info/categories' );
					// Include post author info
					archicon_template_part( 'blog', 'templates/parts/post-info/author' );
					?>
				</div>
			</div>
			<div class="qodef-e-text">
				<?php
				// Include post title
				archicon_template_part( 'blog', 'templates/parts/post-info/title' );

				// Include post content
				the_content();

				// Hook to include additional content after blog single content
				do_action( 'archicon_action_after_blog_single_content' );
				?>
			</div>
			<div class="qodef-e-bottom-holder">
				<div class="qodef-e-left qodef-e-info">
					<?php
					// Include post tags info
					archicon_template_part( 'blog', 'templates/parts/post-info/tags' );
					?>
				</div>
				<?php if ( archicon_is_installed( 'framework' ) && archicon_is_installed( 'core' ) ) : ?>
					<div class="qodef-e-right qodef-e-info">
						<?php
						// Include post social share
						archicon_template_part( 'blog', 'templates/parts/post-info/social-share' );
						?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</article>
