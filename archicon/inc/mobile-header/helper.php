<?php

if ( ! function_exists( 'archicon_load_page_mobile_header' ) ) {
	/**
	 * Function which loads page template module
	 */
	function archicon_load_page_mobile_header() {
		// Include mobile header template
		echo apply_filters( 'archicon_filter_mobile_header_template', archicon_get_template_part( 'mobile-header', 'templates/mobile-header' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	add_action( 'archicon_action_page_header_template', 'archicon_load_page_mobile_header' );
}

if ( ! function_exists( 'archicon_register_mobile_navigation_menus' ) ) {
	/**
	 * Function which registers navigation menus
	 */
	function archicon_register_mobile_navigation_menus() {
		$navigation_menus = apply_filters( 'archicon_filter_register_mobile_navigation_menus', array( 'mobile-navigation' => esc_html__( 'Mobile Navigation', 'archicon' ) ) );

		if ( ! empty( $navigation_menus ) ) {
			register_nav_menus( $navigation_menus );
		}
	}

	add_action( 'archicon_action_after_include_modules', 'archicon_register_mobile_navigation_menus' );
}
