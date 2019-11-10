/**
 * External dependencies
 */
import {
	isUndefined,
	pickBy,
} from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	Component,
	RawHTML,
	Fragment,
} from '@wordpress/element';
import {
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	Spinner,
	ToggleControl,
	Toolbar,
	RadioControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import {
	addQueryArgs
} from '@wordpress/url';
import {
	__
} from '@wordpress/i18n';
import {
	dateI18n,
	format,
	__experimentalGetSettings
} from '@wordpress/date';
import {
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import {
	withSelect
} from '@wordpress/data';

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
};

class FeaturedJobsEdit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			typesList: [],
		};
	}

	componentDidMount() {
		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/job-types`, CATEGORIES_LIST_QUERY ),
		} ).then(
			( typesList ) => {
				if ( this.isStillMounted ) {
					this.setState( { typesList } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { typesList: [] } );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

    render() {
		const { attributes, setAttributes, featuredJobs, media } = this.props;
		const { typesList } = this.state;
		const { displayPostContentRadio, displayPostContent, displayJobDate, displayCompanyName, displayCompanyLogo, displayLocation, displayType, postLayout, columns, order, orderBy, types, jobsToShow, excerptLength } = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<ToggleControl
						label={ __( 'Show Company Name' ) }
						checked={ displayCompanyName }
						onChange={ ( value ) => setAttributes( { displayCompanyName: value } ) }
					/>
					<ToggleControl
						label={ __( 'Show Company Logo' ) }
						checked={ displayCompanyLogo }
						onChange={ ( value ) => setAttributes( { displayCompanyLogo: value } ) }
					/>
					<ToggleControl
						label={ __( 'Show Location' ) }
						checked={ displayLocation }
						onChange={ ( value ) => setAttributes( { displayLocation: value } ) }
					/>
					<ToggleControl
						label={ __( 'Show Type' ) }
						checked={ displayType }
						onChange={ ( value ) => setAttributes( { displayType: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Sorting and Filtering' ) }>
					<QueryControls
						{ ...{ order, orderBy } }
						numberOfItems={ jobsToShow }
						categoriesList={ typesList }
						selectedCategoryId={ types }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { types: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { jobsToShow: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);

		const hasJobs = Array.isArray( featuredJobs ) && featuredJobs.length;
		if ( ! hasJobs ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
						label={ __( 'Featured Jobs' ) }
					>
						{ ! Array.isArray( featuredJobs ) ?
							<Spinner /> :
							__( 'No jobs found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing jobs from display should be instant.
		const displayJobs = featuredJobs.length > jobsToShow ?
			featuredJobs.slice( 0, jobsToShow ) :
			featuredJobs;

		const dateFormat = __experimentalGetSettings().formats.date;

        return (
			<Fragment>
				{ inspectorControls }
				<ul
					className={ classnames( this.props.className, {
						'bengal-studio-block-featured-jobs__list': true,
						'has-dates': displayJobDate,
					} ) }
				>
					{ displayJobs.map( ( job, i ) => {
						const titleTrimmed = job.title.rendered.trim();
						const jobLocationTrimmed = job.meta._job_location.trim();
						const jobCompanyNameTrimmed = job.meta._company_name.trim();

						const jobTypes = job['job-types'];
						const hasJobTypes = Array.isArray( jobTypes ) && jobTypes.length;
						const featuredMedia = job.featured_media && Array.isArray( media ) && media.length ? media.find( ({ id }) => id === job.featured_media ) : false;

						return (
							<li key={ i }>
								<a href={ job.link } target="_blank" rel="noreferrer noopener">
									{ displayCompanyLogo && featuredMedia &&
										<div className="image">
											<img src={ featuredMedia.media_details.sizes.thumbnail.source_url } alt={ __( 'featured' ) } />
										</div>
									}
									<div className="content">
										<div className="position">
											<h3>
												{ titleTrimmed ? (
													<RawHTML>
														{ titleTrimmed }
													</RawHTML>
												) :
													__( '(no title)' )
												}
											</h3>
										</div>
										<ul className="meta">
											{ displayLocation &&
												<li className="location">
													{ jobLocationTrimmed ? (
														<RawHTML>
															{ jobLocationTrimmed }
														</RawHTML>
													) :
														__( 'Anywhere' )
													}
												</li>
											}

											{ displayCompanyName && jobCompanyNameTrimmed &&
												<li className="company">
													<RawHTML>
														{ jobCompanyNameTrimmed }
													</RawHTML>
												</li>
											}

											{ displayType && hasJobTypes && jobTypes.map( ( type, i ) => {
												const jobType = typesList.find( ({ id }) => id === type );
												return (
													<li className="job-type" key={ i }>
														<RawHTML>
															{ jobType.name }
														</RawHTML>
													</li>
												);
											} ) }

											{ displayJobDate && job.date_gmt &&
												<li className="date">
													<time dateTime={ format( 'c', job.date_gmt ) } className="wp-block-latest-posts__post-date">
														{ dateI18n( dateFormat, job.date_gmt ) }
													</time>
												</li>
											}
										</ul>
									</div>
								</a>
							</li>
						);
					} ) }
				</ul>
			</Fragment>

        );
    }
}

export default withSelect((select, props) => {
	const {
		jobsToShow,
		order,
		orderBy,
		types
	} = props.attributes;
	const {
		getEntityRecords
	} = select('core');

	const featuredJobsQuery = pickBy({
		'job-types': types,
		order,
		orderby: orderBy,
		per_page: jobsToShow,
	}, (value) => !isUndefined(value));

	const featuredJobs = getEntityRecords('postType', 'job_listing', featuredJobsQuery);

	let media = [];
	if(Array.isArray( featuredJobs ) && featuredJobs.length) {
		const mediaIds = featuredJobs.map( job => {
			return job.featured_media;
		});
		const mediaQuery = {
			include: mediaIds,
		};

		media = getEntityRecords('postType', 'attachment', mediaQuery);
	}

	return {
		media,
		featuredJobs,
	};
})(FeaturedJobsEdit);
