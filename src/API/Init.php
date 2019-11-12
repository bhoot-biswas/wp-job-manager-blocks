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
		if ( isset( $request['keyword'] ) ) {
			$job_manager_keyword = sanitize_text_field( $request['keyword'] );

			if ( ! empty( $job_manager_keyword ) && strlen( $job_manager_keyword ) >= apply_filters( 'job_manager_get_listings_keyword_length_threshold', 2 ) ) {
				$args['s'] = $job_manager_keyword;
			}
		}

		if ( isset( $request['location'] ) && ! empty( $request['location'] ) ) {
			$location_meta_keys = [ 'geolocation_formatted_address', '_job_location', 'geolocation_state_long' ];
			$location_search    = [ 'relation' => 'OR' ];
			foreach ( $location_meta_keys as $meta_key ) {
				$location_search[] = [
					'key'     => $meta_key,
					'value'   => $request['location'],
					'compare' => 'like',
				];
			}
			$args['meta_query'][] = $location_search;
		}

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
