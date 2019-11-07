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
		const { displayPostContentRadio, displayPostContent, displayCompanyLogo, postLayout, columns, order, orderBy, types, jobsToShow, excerptLength } = attributes;

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

        // Creates a <p class='wp-block-cgb-block-wp-job-manager-blocks'></p>.
        return (
			<Fragment>
				{ inspectorControls }
				<div className={ this.props.className }>
					<p>— Hello from the backend.</p>
					<p>
						CGB BLOCK: <code>wp-job-manager-blocks</code> is a new Gutenberg block
					</p>
					<p>
						It was created via{ ' ' }
						<code>
							<a href="https://github.com/ahmadawais/create-guten-block">
								create-guten-block
							</a>
						</code>.
					</p>
				</div>
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
