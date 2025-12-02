<?php if ( archicon_is_installed( 'core' ) ): ?>
	<?php
	$blog_list_image = get_post_meta( get_the_ID(), 'qodef_blog_list_image', true );
	$has_image       = ! empty( $blog_list_image ) || has_post_thumbnail();
	?>
	<?php if ( $has_image ) : ?>
		<?php
		$image_dimension     = isset( $image_dimension ) && ! empty( $image_dimension ) ? esc_attr( $image_dimension['size'] ) : 'full';
		$custom_image_width  = isset( $custom_image_width ) && '' !== $custom_image_width ? intval( $custom_image_width ) : 0;
		$custom_image_height = isset( $custom_image_height ) && '' !== $custom_image_height ? intval( $custom_image_height ) : 0;
		?>
		<div class="qodef-e-media-image">
			<?php if ( is_single() ): ?>
				<?php the_post_thumbnail( 'full' ); ?>
			<?php else: ?>
				<a itemprop="url" href="<?php the_permalink(); ?>">
					<?php echo archicon_core_get_list_shortcode_item_image( $image_dimension, $blog_list_image, $custom_image_width, $custom_image_height ); ?>
				</a>
			<?php endif; ?>
		</div>
		<?php
		// Hook to include additional content after blog post featured image
		do_action( 'archicon_action_after_post_thumbnail_image' );
		?>
	<?php endif; ?>
<?php else: ?>
	<?php if ( has_post_thumbnail() ) : ?>
		<div class="qodef-e-media-image">
			<?php if ( ! is_single() ) : ?>
			<a itemprop="url" href="<?php the_permalink(); ?>">
				<?php endif; ?>
				<?php the_post_thumbnail( 'full' ); ?>
				<?php if ( ! is_single() ) : ?>
			</a>
		<?php endif; ?>
			<?php
			// Hook to include additional content after blog post featured image
			do_action( 'archicon_action_after_post_thumbnail_image' );
			?>
		</div>
	<?php endif; ?>
<?php endif; ?>
