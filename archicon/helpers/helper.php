<?php

if ( ! function_exists( 'archicon_is_installed' ) ) {
	/**
	 * Function that checks if forward plugin installed
	 *
	 * @param string $plugin - plugin name
	 *
	 * @return bool
	 */
	function archicon_is_installed( $plugin ) {

		switch ( $plugin ) {
			case 'framework':
				return class_exists( 'QodeFramework' );
			case 'core':
				return class_exists( 'ArchiconCore' );
			case 'woocommerce':
				return class_exists( 'WooCommerce' );
			case 'gutenberg-page':
				$current_screen = function_exists( 'get_current_screen' ) ? get_current_screen() : array();

				return method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor();
			case 'gutenberg-editor':
				return class_exists( 'WP_Block_Type' );
			default:
				return false;
		}
	}
}

if ( ! function_exists( 'archicon_include_theme_is_installed' ) ) {
	/**
	 * Function that set case is installed element for framework functionality
	 *
	 * @param bool   $installed
	 * @param string $plugin - plugin name
	 *
	 * @return bool
	 */
	function archicon_include_theme_is_installed( $installed, $plugin ) {

		if ( 'theme' === $plugin ) {
			return class_exists( 'Archicon_Handler' );
		}

		return $installed;
	}

	add_filter( 'qode_framework_filter_is_plugin_installed', 'archicon_include_theme_is_installed', 10, 2 );
}

if ( ! function_exists( 'archicon_template_part' ) ) {
	/**
	 * Function that echo module template part.
	 *
	 * @param string $module   name of the module from inc folder
	 * @param string $template full path of the template to load
	 * @param string $slug
	 * @param array  $params   array of parameters to pass to template
	 */
	function archicon_template_part( $module, $template, $slug = '', $params = array() ) {
		echo archicon_get_template_part( $module, $template, $slug, $params ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'archicon_get_template_part' ) ) {
	/**
	 * Function that load module template part.
	 *
	 * @param string $module   name of the module from inc folder
	 * @param string $template full path of the template to load
	 * @param string $slug
	 * @param array  $params   array of parameters to pass to template
	 *
	 * @return string - string containing html of template
	 */
	function archicon_get_template_part( $module, $template, $slug = '', $params = array() ) {
		$available_characters = '/[^A-Za-z0-9\_\-\/]/';

		if ( is_scalar( $module ) ) {
			$module = preg_replace( $available_characters, '', $module );
		} else {
			$module = '';
		}

		if ( is_scalar( $template ) ) {
			$template = preg_replace( $available_characters, '', $template );
		} else {
			$template = '';
		}

		if ( is_scalar( $slug ) ) {
			$slug = preg_replace( $available_characters, '', $slug );
		} else {
			$slug = '';
		}

		// HTML Content from template.
		$html          = '';
		$template_path = ARCHICON_INC_ROOT_DIR . '/' . $module;

		$temp = $template_path . '/' . $template;

		// The array of parameters to pass to the template.
		if ( is_array( $params ) && count( $params ) ) {
			extract( $params, EXTR_SKIP ); // @codingStandardsIgnoreLine
		}

		$template = '';

		if ( ! empty( $temp ) ) {
			if ( ! empty( $slug ) ) {
				$template = "{$temp}-{$slug}.php";

				if ( ! file_exists( $template ) ) {
					$template = $temp . '.php';
				}
			} else {
				$template = $temp . '.php';
			}
		}

		if ( $template ) {
			ob_start();
			include $template; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound
			$html = ob_get_clean();
		}

		return $html;
	}
}

if ( ! function_exists( 'archicon_get_page_id' ) ) {
	/**
	 * Function that returns current page id
	 * Additional conditional is to check if current page is any wp archive page (archive, category, tag, date etc.) and returns -1
	 *
	 * @return int
	 */
	function archicon_get_page_id() {
		$page_id = get_queried_object_id();

		if ( archicon_is_wp_template() ) {
			$page_id = - 1;
		}

		return apply_filters( 'archicon_filter_page_id', $page_id );
	}
}

if ( ! function_exists( 'archicon_is_wp_template' ) ) {
	/**
	 * Function that checks if current page default wp page
	 *
	 * @return bool
	 */
	function archicon_is_wp_template() {
		return is_archive() || is_search() || is_404() || ( is_front_page() && is_home() );
	}
}

if ( ! function_exists( 'archicon_get_ajax_status' ) ) {
	/**
	 * Function that return status from ajax functions
	 *
	 * @param string       $status   - success or error
	 * @param string       $message  - ajax message value
	 * @param string|array $data     - returned value
	 * @param string       $redirect - url address
	 */
	function archicon_get_ajax_status( $status, $message, $data = null, $redirect = '' ) {
		$response = array(
			'status'   => esc_attr( $status ),
			'message'  => esc_html( $message ),
			'data'     => $data,
			'redirect' => ! empty( $redirect ) ? esc_url( $redirect ) : '',
		);

		$output = json_encode( $response );

		exit( $output ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'archicon_get_button_element' ) ) {
	/**
	 * Function that returns button with provided params
	 *
	 * @param array $params - array of parameters
	 *
	 * @return string - string representing button html
	 */
	function archicon_get_button_element( $params ) {
		if ( class_exists( 'ArchiconCore_Button_Shortcode' ) ) {
			return ArchiconCore_Button_Shortcode::call_shortcode( $params );
		} else {
			$link   = isset( $params['link'] ) ? $params['link'] : '#';
			$target = isset( $params['target'] ) ? $params['target'] : '_self';
			$text   = isset( $params['text'] ) ? $params['text'] : '';
			$svg    = archicon_get_svg_icon( 'button-arrow' );

			return '<a itemprop="url" class="qodef-theme-button" href="' . esc_url( $link ) . '" target="' . esc_attr( $target ) . '"><span class="qodef-m-text">' . esc_html( $text ) . '</span><span class="qodef-m-button-icon">' . $svg . '</span></a>';
		}
	}
}

if ( ! function_exists( 'archicon_render_button_element' ) ) {
	/**
	 * Function that render button with provided params
	 *
	 * @param array $params - array of parameters
	 */
	function archicon_render_button_element( $params ) {
		echo archicon_get_button_element( $params ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'archicon_class_attribute' ) ) {
	/**
	 * Function that render class attribute
	 *
	 * @param string|array $class
	 */
	function archicon_class_attribute( $class ) {
		echo archicon_get_class_attribute( $class ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'archicon_get_class_attribute' ) ) {
	/**
	 * Function that return class attribute
	 *
	 * @param string|array $class
	 *
	 * @return string|mixed
	 */
	function archicon_get_class_attribute( $class ) {
		return archicon_is_installed( 'framework' ) ? qode_framework_get_class_attribute( $class ) : '';
	}
}

if ( ! function_exists( 'archicon_get_post_value_through_levels' ) ) {
	/**
	 * Function that returns meta value if exists
	 *
	 * @param string $name    name of option
	 * @param int    $post_id id of
	 *
	 * @return string value of option
	 */
	function archicon_get_post_value_through_levels( $name, $post_id = null ) {
		return archicon_is_installed( 'framework' ) && archicon_is_installed( 'core' ) ? archicon_core_get_post_value_through_levels( $name, $post_id ) : '';
	}
}

if ( ! function_exists( 'archicon_get_space_value' ) ) {
	/**
	 * Function that returns spacing value based on selected option
	 *
	 * @param string $text_value - textual value of spacing
	 *
	 * @return int
	 */
	function archicon_get_space_value( $text_value ) {
		return archicon_is_installed( 'core' ) ? archicon_core_get_space_value( $text_value ) : 0;
	}
}

if ( ! function_exists( 'archicon_wp_kses_html' ) ) {
	/**
	 * Function that does escaping of specific html.
	 * It uses wp_kses function with predefined attributes array.
	 *
	 * @param string $type    - type of html element
	 * @param string $content - string to escape
	 *
	 * @return string escaped output
	 * @see wp_kses()
	 *
	 */
	function archicon_wp_kses_html( $type, $content ) {
		return archicon_is_installed( 'framework' ) ? qode_framework_wp_kses_html( $type, $content ) : $content;
	}
}

if ( ! function_exists( 'archicon_render_svg_icon' ) ) {
	/**
	 * Function that print svg html icon
	 *
	 * @param string $name       - icon name
	 * @param string $class_name - custom html tag class name
	 */
	function archicon_render_svg_icon( $name, $class_name = '' ) {
		echo archicon_get_svg_icon( $name, $class_name ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}

if ( ! function_exists( 'archicon_get_svg_icon' ) ) {
	/**
	 * Returns svg html
	 *
	 * @param string $name       - icon name
	 * @param string $class_name - custom html tag class name
	 *
	 * @return string - string containing svg html
	 */
	function archicon_get_svg_icon( $name, $class_name = '' ) {
		$class = 'qodef-svg--' . $name;
		$class = isset( $class_name ) && ! empty( $class_name ) ? $class . ' ' . $class_name : $class;

		$html = archicon_get_template_part( 'svg', 'templates/' . $name, '', array( 'class' => $class ) );

		// remove white spaces from loaded svg markup
		$html = preg_replace( '~>\s+<~', '><', $html );
		$html = trim( $html );

		return apply_filters( 'archicon_filter_svg_icon', $html, $name );
	}
}

if ( ! function_exists( 'archicon_escape_title_tag' ) ) {
	/**
	 * Function that escape title tag variable for modules
	 *
	 * @param string $title_tag
	 *
	 * @return string
	 */
	function archicon_escape_title_tag( $title_tag ) {
		$allowed_tags = array(
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p',
			'span',
			'ul',
			'ol',
			'div',
		);

		$escaped_title_tag = '';
		$title_tag         = strtolower( sanitize_key( $title_tag ) );

		if ( in_array( $title_tag, $allowed_tags, true ) ) {
			$escaped_title_tag = $title_tag;
		}

		return $escaped_title_tag;
	}
}
