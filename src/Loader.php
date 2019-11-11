<?php
/**
 * Register the scripts, styles, and includes needed for pieces of the WP Job Manager Blocks experience.
 *
 * @package BengalStudio\WPJM\Blocks
 */

namespace BengalStudio\WPJM\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Loader Class.
 */
class Loader {

	/**
	 * The single instance of the class.
	 * @var [type]
	 */
	private static $instance;

	/**
	 * Get class instance.
	 * @return [type] [description]
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class constructor.
	 */
	public function __construct() {
		// Hook: Frontend assets.
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_block_assets' ) );

		// Hook: Editor assets.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
	}

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 * @return [type] [description]
	 */
	public static function enqueue_block_assets() {
		// Styles.
		wp_enqueue_style(
			'wp_job_manager_blocks-style-css', // Handle.
			self::get_url( 'blocks.style.build.css' ), // Block style CSS.
			array( 'wp-editor' ), // Dependency to include the CSS after it.
			self::get_file_version( 'blocks.style.build.css' ) // Version: File modification time.
		);
	}

	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 * @return [type] [description]
	 */
	public static function enqueue_block_editor_assets() {
		// Scripts.
		wp_enqueue_script(
			'wp_job_manager_blocks-block-js', // Handle.
			self::get_url( 'blocks.build.js' ), // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
			self::get_file_version( 'blocks.build.js' ) // Version: File modification time.
		);

		// Styles.
		wp_enqueue_style(
			'wp_job_manager_blocks-block-editor-css', // Handle.
			self::get_url( 'blocks.editor.build.css' ), // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			self::get_file_version( 'blocks.editor.build.css' ) // Version: File modification time.
		);
	}

	/**
	 * Gets the URL to an asset file.
	 * @param  [type] $file [description]
	 * @return [type]       [description]
	 */
	public static function get_url( $file ) {
		return plugins_url( self::get_path( $file ) . $file, BENGAL_STUDIO_WPJM_BLOCKS_PLUGIN_FILE );
	}

	/**
	 * Gets the file modified time as a cache buster if we're in dev mode, or the plugin version otherwise.
	 * @param  [type] $file [description]
	 * @return [type]       [description]
	 */
	public static function get_file_version( $file ) {
		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
			$file = trim( $file, '/' );
			return filemtime( BENGAL_STUDIO_WPJM_BLOCKS_ABSPATH . self::get_path( $file ) . $file );
		}
		return BENGAL_STUDIO_WPJM_BLOCKS_VERSION_NUMBER;
	}

	/**
	 * Gets the path for the asset depending on file type.
	 * @param  [type] $file [description]
	 * @return [type]       [description]
	 */
	private static function get_path( $file ) {
		return '.css' === substr( $file, -4 ) ? BENGAL_STUDIO_WPJM_BLOCKS_DIST_CSS_FOLDER : BENGAL_STUDIO_WPJM_BLOCKS_DIST_JS_FOLDER;
	}
}
