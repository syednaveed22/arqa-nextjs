<?php
/**
 * Single Product Meta
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/meta.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<div class="product_meta">
	<?php do_action( 'woocommerce_product_meta_start' ); ?>
	<h5 class="qodef-product-meta-title qodef-custom-label"><?php esc_html_e('Info', 'archicon') ?></h5>
	<?php if ( wc_product_sku_enabled() && ( $product->get_sku() || $product->is_type( 'variable' ) ) ) : ?>
		<span class="sku_wrapper">
			<span class="qodef-woo-meta-label"><?php esc_html_e( 'SKU:', 'archicon' ); ?></span>
			<span class="sku qodef-woo-meta-value"><?php echo esc_attr( $sku = $product->get_sku() ) ? $sku : esc_html__( 'N/A', 'archicon' ); ?></span>
		</span>
	<?php endif; ?>

	<?php echo wc_get_product_category_list( $product->get_id(), ', ', '<span class="posted_in"><span class="qodef-woo-meta-label">' . _n( 'Category:', 'Categories:', count( $product->get_category_ids() ), 'archicon' ) . '</span><span class="qodef-woo-meta-value">', '</span></span>' ); ?>

	<?php echo wc_get_product_tag_list( $product->get_id(), ', ', '<span class="tagged_as"><span class="qodef-woo-meta-label">' . _n( 'Tag:', 'Tags:', count( $product->get_tag_ids() ), 'archicon' ) . '</span><span class="qodef-woo-meta-value">', '</span></span>' ); ?>

	<?php do_action( 'woocommerce_product_meta_end' ); ?>
</div>
