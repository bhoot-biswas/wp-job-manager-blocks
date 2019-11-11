<?php

namespace BengalStudio\WPJM\Blocks\API;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Init class.
 */
class Init {

	/**
	 * Boostrap REST API.
	 */
	public function __construct() {
		add_filter( 'rest_job_listing_query', array( $this, 'filter_rest_endpoints' ), 10, 2 );
	}

	/**
	 * Filter REST API endpoints.
	 * @param  [type] $args    [description]
	 * @param  [type] $request [description]
	 * @return [type]          [description]
	 */
	public function filter_rest_endpoints( $args, $request ) {
		if ( isset( $request['featured'] ) && ! is_null( $request['featured'] ) ) {
			$args['meta_query'][] = [
				'key'     => '_featured',
				'value'   => '1',
				'compare' => $request['featured'] ? '=' : '!=',
			];
		}

		return $args;
	}

}
