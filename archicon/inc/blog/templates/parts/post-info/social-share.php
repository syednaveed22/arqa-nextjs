<?php if ( class_exists( 'ArchiconCore_Social_Share_Shortcode' ) ) { ?>
	<?php
	$params           = array();
	$params['layout'] = 'text';
	$params['title']  = esc_html__( 'Share:', 'archicon' );

	echo ArchiconCore_Social_Share_Shortcode::call_shortcode( $params );
	?>
	<?php
}
