<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bengal_studio_wpjm_blocks_block_assets() {
	// Styles.
	wp_enqueue_style(
		'wp_job_manager_blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
} // End function bengal_studio_wpjm_blocks_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'bengal_studio_wpjm_blocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bengal_studio_wpjm_blocks_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'wp_job_manager_blocks-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ) // Version: File modification time.
	);
	// Styles.
	wp_enqueue_style(
		'wp_job_manager_blocks-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
} // End function bengal_studio_wpjm_blocks_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'bengal_studio_wpjm_blocks_editor_assets' );

/**
 * [bengal_studio_query_jobs_by_featured description]
 * @param  [type] $args    [description]
 * @param  [type] $request [description]
 * @return [type]          [description]
 */
function bengal_studio_query_jobs_by_featured( $args, $request ) {
	if ( isset( $request['featured'] ) && ! is_null( $request['featured'] ) ) {
		$args['meta_query'][] = [
			'key'     => '_featured',
			'value'   => '1',
			'compare' => $request['featured'] ? '=' : '!=',
		];
	}

	return $args;
}
add_filter( 'rest_job_listing_query', 'bengal_studio_query_jobs_by_featured', 10, 2 );
