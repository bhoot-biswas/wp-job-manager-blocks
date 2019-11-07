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
	RawHTML
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
const MAX_POSTS_COLUMNS = 6;

class FeaturedJobsEdit extends Component {
    render() {
        // Creates a <p class='wp-block-cgb-block-wp-job-manager-blocks'></p>.
        return (
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
        );
    }
}

export default withSelect((select, props) => {
	const {
		jobsToShow,
		order,
		orderBy,
		categories
	} = props.attributes;
	const {
		getEntityRecords
	} = select('core');
	const featuredJobsQuery = pickBy({
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow,
	}, (value) => !isUndefined(value));
	return {
		featuredJobs: getEntityRecords('postType', 'job_listing', featuredJobsQuery),
	};
})(FeaturedJobsEdit);
