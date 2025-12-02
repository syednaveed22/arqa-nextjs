<div class="qodef-e-media">
	<?php
	switch ( get_post_format() ) {
		case 'gallery':
			archicon_template_part( 'blog', 'templates/parts/post-format/gallery' );
			break;
		case 'video':
			archicon_template_part( 'blog', 'templates/parts/post-format/video' );
			break;
		case 'audio':
			archicon_template_part( 'blog', 'templates/parts/post-format/audio' );
			break;
		default:
			archicon_template_part( 'blog', 'templates/parts/post-info/image' );
			break;
	}
	?>
</div>
