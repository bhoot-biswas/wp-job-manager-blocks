<?php
/**
 * Plugin Name: WP Job Manager - Blocks
 * Plugin URI: https://bengal-studio.com/plugins/wp-job-manager-blocks/
 * Description: Gutenberg Blocks for WP Job Manager.
 * Author: Bengal Studio
 * Author URI: https://bengal-studio.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
