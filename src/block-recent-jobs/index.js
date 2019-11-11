/**
 * BLOCK: Recent Jobs
 *
 * Registering a basic block with Gutenberg.
 * Recent Jobs, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';

const {
	__
} = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: Recent Jobs Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('bengal-studio/recent-jobs', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Recent Jobs'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('wp-job-manager-blocks — CGB Block'),
		__('CGB Example'),
		__('create-guten-block'),
	],

	supports: {
		align: ['wide', 'full'],
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit,
});
