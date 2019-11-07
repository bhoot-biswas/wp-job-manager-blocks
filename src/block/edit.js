/**
 * External dependencies
 */
import {
	isUndefined,
	pickBy
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
		const { attributes, setAttributes, featuredJobs } = this.props;
		const { typesList } = this.state;
		const { displayPostContentRadio, displayPostContent, displayJobDate, displayCompanyLogo, postLayout, columns, order, orderBy, types, jobsToShow, excerptLength } = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<ToggleControl
						label={ __( 'Show Company Logo' ) }
						checked={ displayCompanyLogo }
						onChange={ ( value ) => setAttributes( { displayCompanyLogo: value } ) }
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

		console.log(displayJobs);

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
						return (
							<li key={ i }>
								<a href={ job.link } target="_blank" rel="noreferrer noopener">
									{ titleTrimmed ? (
										<RawHTML>
											{ titleTrimmed }
										</RawHTML>
									) :
										__( '(no title)' )
									}
								</a>
								{ displayJobDate && job.date_gmt &&
									<time dateTime={ format( 'c', job.date_gmt ) } className="wp-block-latest-posts__post-date">
										{ dateI18n( dateFormat, job.date_gmt ) }
									</time>
								}
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
		types,
		order,
		orderby: orderBy,
		per_page: jobsToShow,
	}, (value) => !isUndefined(value));
	return {
		featuredJobs: getEntityRecords('postType', 'job_listing', featuredJobsQuery),
	};
})(FeaturedJobsEdit);
