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
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function bengal_studio_render_featured_jobs( $attributes ) {
	wp_enqueue_style( 'wp-job-manager-job-listings' );

	ob_start();

	$args = [
		'posts_per_page' => $attributes['jobsToShow'],
		'orderby'        => $attributes['orderBy'],
		'order'          => $attributes['order'],
		'featured'       => true,
	];

	$jobs = get_job_listings( $args );

	if ( $jobs->have_posts() ) : ?>

		<ul class="job_listings bengal-studio-block-featured-jobs__list">

			<?php
			while ( $jobs->have_posts() ) :
				$jobs->the_post();
				?>

				<li <?php job_listing_class(); ?>>
					<a href="<?php the_job_permalink(); ?>">
						<?php if ( isset( $attributes['displayCompanyLogo'] ) && $attributes['displayCompanyLogo'] ) : ?>
							<div class="image">
								<?php the_company_logo(); ?>
							</div>
						<?php endif; ?>
						<div class="content">
							<div class="position">
								<h3><?php wpjm_the_job_title(); ?></h3>
							</div>
							<ul class="meta">
								<?php if ( isset( $attributes['displayLocation'] ) && $attributes['displayLocation'] ) : ?>
									<li class="location"><?php the_job_location( false ); ?></li>
								<?php endif; ?>
								<?php if ( isset( $attributes['displayCompanyName'] ) && $attributes['displayCompanyName'] ) : ?>
									<li class="company"><?php the_company_name(); ?></li>
								<?php endif; ?>
								<?php if ( isset( $attributes['displayType'] ) && $attributes['displayType'] ) : ?>
									<?php
									if ( get_option( 'job_manager_enable_types' ) ) :
										$types = wpjm_get_the_job_types();
										if ( ! empty( $types ) ) :
											foreach ( $types as $type ) :
												?>
												<li class="job-type <?php echo esc_attr( sanitize_title( $type->slug ) ); ?>"><?php echo esc_html( $type->name ); ?></li>
												<?php
											endforeach;
										endif;
									endif;
									?>
								<?php endif; ?>
							</ul>
						</div>
					</a>
				</li>

			<?php endwhile; ?>

		</ul>

	<?php else : ?>

		<?php get_job_manager_template_part( 'content-widget', 'no-jobs-found' ); ?>

		<?php
	endif;

	wp_reset_postdata();

	return ob_get_clean();
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function wp_job_manager_blocks_block_assets() {
	// Styles.
	wp_enqueue_style(
		'wp_job_manager_blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
} // End function wp_job_manager_blocks_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'wp_job_manager_blocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function wp_job_manager_blocks_editor_assets() {
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
} // End function wp_job_manager_blocks_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'wp_job_manager_blocks_editor_assets' );

/**
 * Registers the `bengal-studio/featured-jobs` block on server.
 */
function wp_job_manager_blocks_register_block_featured_jobs() {
	register_block_type(
		'bengal-studio/featured-jobs',
		array(
			'attributes'      => array(
				'align'                   => array(
					'type' => 'string',
					'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
				),
				'className'               => array(
					'type' => 'string',
				),
				'types'                   => array(
					'type' => 'string',
				),
				'jobsToShow'              => array(
					'type'    => 'number',
					'default' => 5,
				),
				'displayPostContent'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayPostContentRadio' => array(
					'type'    => 'string',
					'default' => 'excerpt',
				),
				'excerptLength'           => array(
					'type'    => 'number',
					'default' => 55,
				),
				'displayJobDate'          => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayCompanyName'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayCompanyLogo'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayLocation'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'displayType'             => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'postLayout'              => array(
					'type'    => 'string',
					'default' => 'list',
				),
				'columns'                 => array(
					'type'    => 'number',
					'default' => 3,
				),
				'order'                   => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                 => array(
					'type'    => 'string',
					'default' => 'date',
				),
			),
			'render_callback' => 'bengal_studio_render_featured_jobs',
		)
	);
}
add_action( 'init', 'wp_job_manager_blocks_register_block_featured_jobs' );

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
