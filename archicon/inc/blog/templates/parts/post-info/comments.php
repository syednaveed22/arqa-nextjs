<?php if ( comments_open() ) { ?>
	<a itemprop="url" href="<?php comments_link(); ?>" class="qodef-e-info-comments-link">
		<?php comments_number( '0 ' . esc_html__( 'Comments', 'archicon' ), '1 ' . esc_html__( 'Comment', 'archicon' ), '% ' . esc_html__( 'Comments', 'archicon' ) ); ?>
	</a><div class="qodef-info-separator-end"></div>
<?php } ?>
