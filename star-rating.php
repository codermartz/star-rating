<?php
/*
Plugin Name: Star Rating
Plugin URI: 
Description: Rate content based on importance and usefulness.
Version: 1.0
Author: Ton
Author URI: https://www.guru.com/freelancers/coderprovw/portfolio
Text Domain: star-rating
Requires at least: 5.6
Tested up to: 5.6
License: MIT

Copyright: 2021
*/

// This class should belong to this namespace to prevent any collision from other plugins.
namespace devton;

if ( ! defined( 'ABSPATH' ) ) die( 'Access denied.' );

define( 'STAR_RATING_FILE', __FILE__ );
define( 'STAR_RATING_DIR', __DIR__ );
define( 'STAR_RATING_URL', plugins_url( '', STAR_RATING_FILE ) );
define( 'STAR_RATING_PLUGIN', plugin_basename( STAR_RATING_FILE ) );

/**
 * StarRating class
 *
 * Handles and renders all the necessary actions/features/behaviors of this plugin.
 *
 */
class StarRating {
	// Current version of this plugin
	const VERSION = '1.0';

	// Minimum PHP version required to run this plugin
	const PHP_REQUIRED = '5.3';

	// Minimum WP version required to run this plugin
	const WP_REQUIRED = '5.6';

	// Text domain
	const TEXT_DOMAIN = 'star-rating';

	// Static property of this class that will hold the singleton instance of this class
	protected static $instance = null;

	/**
	 * Constructor
	 */
	public function __construct() {
		register_activation_hook( STAR_RATING_FILE, array( $this , 'activate' ) );
		add_action( 'init', array( $this, 'register_assets' ) );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_assets' ) );
	}

	/**
	 * Registers the star-rating script(s), style(s) and block(s) 
	 *
	 * @return void
	 */
	public function register_assets() {
		$block_path = '/assets/js/block-star-rating.js';
		$block_css_path = '/assets/css/style.css';

		wp_register_script( 'star-rating-js', STAR_RATING_URL . $block_path, array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ), filemtime( STAR_RATING_DIR . $block_path ) );
		wp_register_style( 'star-rating-css', STAR_RATING_URL . $block_css_path, array(), filemtime( STAR_RATING_DIR . $block_css_path ) );

		register_block_type( 'devton/star-rating', [
			'editor_script' => 'star-rating-js',
			'style' => 'star-rating-css',
		] );
	}

	/**
	 * Enqueues the star-rating assets for frontend use
	 *
	 * @return void
	 */
	public function enqueue_assets() {
		if ( ! is_admin() ) {
			wp_enqueue_script( 'star-rating-js' );
			wp_enqueue_style( 'star-rating-css' );
		}
	}

	/**
	 * Creates an instance of this class. Singleton Pattern
	 *
	 * @return object Instance of this class
	 */
	public static function instance() {
		if ( empty( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Runs PHP and WP version checks on activation
	 *
	 * @return void
	 */
	public function activate() {
		$data = get_plugin_data( STAR_RATING_FILE );

		if ( version_compare( PHP_VERSION, self::PHP_REQUIRED, '<' ) ) {
			deactivate_plugins( STAR_RATING_PLUGIN );
			wp_die( __( $data['Name'] . ' requires PHP version ' . self::PHP_REQUIRED . ' or greater.', self::TEXT_DOMAIN ) );
		}

		include ABSPATH . WPINC . '/version.php';
		if ( version_compare( $wp_version, self::WP_REQUIRED, '<' ) ) {
			deactivate_plugins( STAR_RATING_PLUGIN );
			wp_die( __( $data['Name'] . ' requires WordPress version ' . self::WP_REQUIRED . ' or greater.', self::TEXT_DOMAIN ) );
		}
	}
}

/**
 * Creates or make use of the singleton instance of StarRating class
 *
 * @return object
 */
function StarRating() {
	// We are on the same file or namespace so there's no need to use '\devton\StarRating' to call the instance method.
	return StarRating::instance();
}

$GLOBALS[ 'star-rating' ] = StarRating();