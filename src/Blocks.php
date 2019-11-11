<?php
/**
 * Register blocks.
 *
 * @package BengalStudio\WPJM\Blocks
 */

namespace BengalStudio\WPJM\Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register blocks.
 */
class Blocks {

	/**
	 * Class constructor, adds the necessary hooks.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Registers blocks on server.
	 * @return [type] [description]
	 */
	public function register_blocks() {
		$available_blocks = $this->get_available_blocks();

		if ( empty( $available_blocks ) ) {
			return;
		}

		foreach ( $available_blocks as $key => $value ) {
			register_block_type( $key, $value );
		}
	}

	/**
	 * Get available blocks.
	 * @return [type] [description]
	 */
	public function get_available_blocks() {
		return array(
			'bengal-studio/featured-jobs' => array(
				'attributes'      => array(
					'align'              => array(
						'type' => 'string',
						'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
					),
					'className'          => array(
						'type' => 'string',
					),
					'types'              => array(
						'type' => 'string',
					),
					'jobsToShow'         => array(
						'type'    => 'number',
						'default' => 5,
					),
					'displayCompanyName' => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayCompanyLogo' => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayLocation'    => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'displayType'        => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'order'              => array(
						'type'    => 'string',
						'default' => 'desc',
					),
					'orderBy'            => array(
						'type'    => 'string',
						'default' => 'date',
					),
				),
				'render_callback' => array( $this, 'render_featured_jobs' ),
			),
		);
	}

	/**
	 * Renders the `bengal-studio/featured-jobs` block on server.
	 * @param  [type] $attributes [description]
	 * @return [type]             [description]
	 */
	public function render_featured_jobs( $attributes ) {
		wp_enqueue_style( 'wp-job-manager-job-listings' );

		ob_start();

		$args = [
			'posts_per_page' => $attributes['jobsToShow'],
			'orderby'        => $attributes['orderBy'],
			'order'          => $attributes['order'],
			'featured'       => true,
		];

		$class = 'job_listings bengal-studio-block-featured-jobs__list';

		if ( isset( $attributes['align'] ) ) {
			$class .= ' align' . $attributes['align'];
		}

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . $attributes['className'];
		}

		$jobs = get_job_listings( $args );

		if ( $jobs->have_posts() ) : ?>

			<ul class="<?php echo esc_attr( $class ); ?>">

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

}
