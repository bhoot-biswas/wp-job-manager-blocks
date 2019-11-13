<?php
/**
 * Plugin main class.
 *
 * @package BengalStudio\WPJM\Blocks
 */

namespace BengalStudio\WPJM\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin main class.
 */
class Plugin {

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
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * is not allowed to call from outside to prevent from creating multiple instances,
	 * to use the singleton, you have to obtain the instance from Singleton::getInstance() instead
	 */
	private function __construct() {}

	/**
	 * Prevent cloning.
	 */
	private function __clone() {}

	/**
	 * Prevent unserializing.
	 */
	private function __wakeup() {}

	/**
	 * Init the plugin, only if we can detect both Gutenberg and WP Job Manager.
	 */
	public function init() {
		$this->define_constants();
		register_activation_hook( BENGAL_STUDIO_WPJM_BLOCKS_PLUGIN_FILE, array( $this, 'on_activation' ) );
		register_deactivation_hook( BENGAL_STUDIO_WPJM_BLOCKS_PLUGIN_FILE, array( $this, 'on_deactivation' ) );
		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ) );
	}

	/**
	 * Define Constants.
	 */
	protected function define_constants() {
		$this->define( 'BENGAL_STUDIO_WPJM_BLOCKS_ABSPATH', dirname( __DIR__ ) . '/' );
		$this->define( 'BENGAL_STUDIO_WPJM_BLOCKS_DIST_JS_FOLDER', 'dist/' );
		$this->define( 'BENGAL_STUDIO_WPJM_BLOCKS_DIST_CSS_FOLDER', 'dist/' );
		$this->define( 'BENGAL_STUDIO_WPJM_BLOCKS_PLUGIN_FILE', BENGAL_STUDIO_WPJM_BLOCKS_ABSPATH . 'wp-job-manager-blocks.php' );
		// WARNING: Do not directly edit this version number constant.
		// It is updated as part of the prebuild process from the package.json value.
		$this->define( 'BENGAL_STUDIO_WPJM_BLOCKS_VERSION_NUMBER', '1.0.0' );
	}

	/**
	 * Install DB and create cron events when activated.
	 *
	 * @return void
	 */
	public function on_activation() {}

	/**
	 * Remove Blocks for WP Job Manager scheduled actions on deactivate.
	 *
	 * @return void
	 */
	public function on_deactivation() {}

	/**
	 * Setup plugin once all other plugins are loaded.
	 *
	 * @return void
	 */
	public function on_plugins_loaded() {
		$this->load_plugin_textdomain();

		if ( ! $this->check_dependencies() ) {
			add_action( 'admin_init', array( $this, 'deactivate_self' ) );
			add_action( 'admin_notices', array( $this, 'render_dependencies_notice' ) );
			return;
		}

		if ( ! $this->check_build() ) {
			add_action( 'admin_notices', array( $this, 'render_build_notice' ) );
		}

		// Let's roll.
		$this->run();
	}

	/**
	 * Load Localisation files.
	 */
	protected function load_plugin_textdomain() {
		load_plugin_textdomain( 'blocks-for-wp-job-manager', false, basename( dirname( __DIR__ ) ) . '/languages' );
	}

	/**
	 * Load classes.
	 */
	public function run() {
		new Loader();
		new Blocks();
		new API\Init();
	}

	/**
	 * Returns true if all dependencies for the wp-job-manager-blocks plugin are loaded.
	 *
	 * @return bool
	 */
	protected function check_dependencies() {
		$wpjm_minimum_met = class_exists( 'WP_Job_Manager' ) && version_compare( JOB_MANAGER_VERSION, '1.30.0', '>=' );
		if ( ! $wpjm_minimum_met ) {
			return false;
		}

		$wordpress_version = get_bloginfo( 'version' );
		return version_compare( $wordpress_version, '5.2.0', '>=' );
	}

	/**
	 * Returns true if build file exists.
	 *
	 * @return bool
	 */
	protected function check_build() {
		return file_exists( plugin_dir_path( __DIR__ ) . '/dist/blocks.build.js' );
	}

	/**
	 * Deactivates this plugin.
	 */
	public function deactivate_self() {
		deactivate_plugins( plugin_basename( BENGAL_STUDIO_WPJM_BLOCKS_PLUGIN_FILE ) );
		unset( $_GET['activate'] );
	}

	/**
	 * Notify users of the plugin requirements.
	 */
	public function render_dependencies_notice() {
		// The notice varies by WordPress version.
		$wordpress_version    = get_bloginfo( 'version' );
		$has_valid_wp_version = version_compare( $wordpress_version, '5.2.0', '>=' );

		if ( $has_valid_wp_version ) {
			$message = sprintf(
				/* translators: URL of WP Job Manager plugin */
				__( 'The Blocks for WP Job Manager plugin requires <a href="%s">WP Job Manager</a> 1.30.0 or greater to be installed and active.', 'blocks-for-wp-job-manager' ),
				'https://wordpress.org/plugins/wp-job-manager/'
			);
		} else {
			$message = sprintf(
				/* translators: 1: URL of WordPress.org, 2: URL of WP Job Manager plugin */
				__( 'The Blocks for WP Job Manager plugin requires both <a href="%1$s">WordPress</a> 5.2 or greater and <a href="%2$s">WP Job Manager</a> 1.30.0 or greater to be installed and active.', 'blocks-for-wp-job-manager' ),
				'https://wordpress.org/',
				'https://wordpress.org/plugins/wp-job-manager/'
			);
		}
		printf( '<div class="error"><p>%s</p></div>', $message ); /* WPCS: xss ok. */
	}

	/**
	 * Notify users that the plugin needs to be built.
	 */
	public function render_build_notice() {
		$message_one = __( 'You have installed a development version of Blocks for WP Job Manager which requires files to be built. From the plugin directory, run <code>npm install</code> to install dependencies, <code>npm run build</code> to build the files.', 'blocks-for-wp-job-manager' );
		$message_two = sprintf(
			/* translators: 1: URL of GitHub Repository build page */
			__( 'Or you can download a pre-built version of the plugin by visiting <a href="%1$s">the releases page in the repository</a>.', 'blocks-for-wp-job-manager' ),
			'https://github.com/bhoot-biswas/wp-job-manager-blocks/releases'
		);
		printf( '<div class="error"><p>%s %s</p></div>', $message_one, $message_two ); /* WPCS: xss ok. */
	}

	/**
	 * Define constant if not already set.
	 *
	 * @param string      $name  Constant name.
	 * @param string|bool $value Constant value.
	 */
	protected function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}

}
