/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit__ = __webpack_require__(/*! ./edit */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(/*! ./style.scss */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n/**\n * BLOCK: wp-job-manager-blocks\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n/**\n * Internal dependencies\n */\n\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('bengal-studio/block-wp-job-manager-blocks', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('wp-job-manager-blocks - CGB Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('wp-job-manager-blocks — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: __WEBPACK_IMPORTED_MODULE_0__edit__[\"a\" /* default */],\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'\\u2014 Hello from the frontend.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'CGB BLOCK: ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'wp-job-manager-blocks'\n\t\t\t\t),\n\t\t\t\t' is a new Gutenberg block.'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'It was created via',\n\t\t\t\t' ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t'.'\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHdwLWpvYi1tYW5hZ2VyLWJsb2Nrc1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdiZW5nYWwtc3R1ZGlvL2Jsb2NrLXdwLWpvYi1tYW5hZ2VyLWJsb2NrcycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnd3Atam9iLW1hbmFnZXItYmxvY2tzIC0gQ0dCIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCd3cC1qb2ItbWFuYWdlci1ibG9ja3Mg4oCUIENHQiBCbG9jaycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBDb21wb25lbnQuXG4gICovXG5cdGVkaXQ6IGVkaXQsXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQncCcsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdcXHUyMDE0IEhlbGxvIGZyb20gdGhlIGZyb250ZW5kLidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0NHQiBCTE9DSzogJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCd3cC1qb2ItbWFuYWdlci1ibG9ja3MnXG5cdFx0XHRcdCksXG5cdFx0XHRcdCcgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrLidcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0l0IHdhcyBjcmVhdGVkIHZpYScsXG5cdFx0XHRcdCcgJyxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9haG1hZGF3YWlzL2NyZWF0ZS1ndXRlbi1ibG9jaycgfSxcblx0XHRcdFx0XHRcdCdjcmVhdGUtZ3V0ZW4tYmxvY2snXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);\nthrow new Error(\"Cannot find module \\\"classnames\\\"\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_api_fetch__ = __webpack_require__(/*! @wordpress/api-fetch */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_api_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__wordpress_api_fetch__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_url__ = __webpack_require__(/*! @wordpress/url */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__wordpress_url__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wordpress_date__ = __webpack_require__(/*! @wordpress/date */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wordpress_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__wordpress_date__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__wordpress_data__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * External dependencies\n */\n\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n\n\n\n\n\n/**\n * Module Constants\n */\nvar CATEGORIES_LIST_QUERY = {\n\tper_page: -1\n};\nvar MAX_POSTS_COLUMNS = 6;\n\nvar FeaturedJobsEdit = function (_Component) {\n\t_inherits(FeaturedJobsEdit, _Component);\n\n\tfunction FeaturedJobsEdit() {\n\t\t_classCallCheck(this, FeaturedJobsEdit);\n\n\t\treturn _possibleConstructorReturn(this, (FeaturedJobsEdit.__proto__ || Object.getPrototypeOf(FeaturedJobsEdit)).apply(this, arguments));\n\t}\n\n\t_createClass(FeaturedJobsEdit, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\t// Creates a <p class='wp-block-cgb-block-wp-job-manager-blocks'></p>.\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: this.props.className },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'\\u2014 Hello from the backend.'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'CGB BLOCK: ',\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'code',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'wp-job-manager-blocks'\n\t\t\t\t\t),\n\t\t\t\t\t' is a new Gutenberg block'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'It was created via',\n\t\t\t\t\t' ',\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'code',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t{ href: 'https://github.com/ahmadawais/create-guten-block' },\n\t\t\t\t\t\t\t'create-guten-block'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t'.'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn FeaturedJobsEdit;\n}(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_9__wordpress_data__[\"withSelect\"])(function (select, props) {\n\tvar _props$attributes = props.attributes,\n\t    jobsToShow = _props$attributes.jobsToShow,\n\t    order = _props$attributes.order,\n\t    orderBy = _props$attributes.orderBy,\n\t    categories = _props$attributes.categories;\n\n\tvar _select = select('core'),\n\t    getEntityRecords = _select.getEntityRecords;\n\n\tvar featuredJobsQuery = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"pickBy\"])({\n\t\tcategories: categories,\n\t\torder: order,\n\t\torderby: orderBy,\n\t\tper_page: postsToShow\n\t}, function (value) {\n\t\treturn !Object(__WEBPACK_IMPORTED_MODULE_0_lodash__[\"isUndefined\"])(value);\n\t});\n\treturn {\n\t\tfeaturedJobs: getEntityRecords('postType', 'job_listing', featuredJobsQuery)\n\t};\n})(FeaturedJobsEdit));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgcGlja0J5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSYXdIVE1MIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IFBhbmVsQm9keSwgUGxhY2Vob2xkZXIsIFF1ZXJ5Q29udHJvbHMsIFJhbmdlQ29udHJvbCwgU3Bpbm5lciwgVG9nZ2xlQ29udHJvbCwgVG9vbGJhciwgUmFkaW9Db250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XG5pbXBvcnQgeyBhZGRRdWVyeUFyZ3MgfSBmcm9tICdAd29yZHByZXNzL3VybCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBkYXRlSTE4biwgZm9ybWF0LCBfX2V4cGVyaW1lbnRhbEdldFNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRlJztcbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzLCBCbG9ja0NvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbi8qKlxuICogTW9kdWxlIENvbnN0YW50c1xuICovXG52YXIgQ0FURUdPUklFU19MSVNUX1FVRVJZID0ge1xuXHRwZXJfcGFnZTogLTFcbn07XG52YXIgTUFYX1BPU1RTX0NPTFVNTlMgPSA2O1xuXG52YXIgRmVhdHVyZWRKb2JzRWRpdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhGZWF0dXJlZEpvYnNFZGl0LCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBGZWF0dXJlZEpvYnNFZGl0KCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGZWF0dXJlZEpvYnNFZGl0KTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmVhdHVyZWRKb2JzRWRpdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZlYXR1cmVkSm9ic0VkaXQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhGZWF0dXJlZEpvYnNFZGl0LCBbe1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLXdwLWpvYi1tYW5hZ2VyLWJsb2Nrcyc+PC9wPi5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdwJyxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdCdcXHUyMDE0IEhlbGxvIGZyb20gdGhlIGJhY2tlbmQuJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J0NHQiBCTE9DSzogJyxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnY29kZScsXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0J3dwLWpvYi1tYW5hZ2VyLWJsb2Nrcydcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdCcgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J0l0IHdhcyBjcmVhdGVkIHZpYScsXG5cdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdhJyxcblx0XHRcdFx0XHRcdFx0eyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL2FobWFkYXdhaXMvY3JlYXRlLWd1dGVuLWJsb2NrJyB9LFxuXHRcdFx0XHRcdFx0XHQnY3JlYXRlLWd1dGVuLWJsb2NrJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0Jy4nXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEZlYXR1cmVkSm9ic0VkaXQ7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCwgcHJvcHMpIHtcblx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0ICAgIGpvYnNUb1Nob3cgPSBfcHJvcHMkYXR0cmlidXRlcy5qb2JzVG9TaG93LFxuXHQgICAgb3JkZXIgPSBfcHJvcHMkYXR0cmlidXRlcy5vcmRlcixcblx0ICAgIG9yZGVyQnkgPSBfcHJvcHMkYXR0cmlidXRlcy5vcmRlckJ5LFxuXHQgICAgY2F0ZWdvcmllcyA9IF9wcm9wcyRhdHRyaWJ1dGVzLmNhdGVnb3JpZXM7XG5cblx0dmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUnKSxcblx0ICAgIGdldEVudGl0eVJlY29yZHMgPSBfc2VsZWN0LmdldEVudGl0eVJlY29yZHM7XG5cblx0dmFyIGZlYXR1cmVkSm9ic1F1ZXJ5ID0gcGlja0J5KHtcblx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxuXHRcdG9yZGVyOiBvcmRlcixcblx0XHRvcmRlcmJ5OiBvcmRlckJ5LFxuXHRcdHBlcl9wYWdlOiBwb3N0c1RvU2hvd1xuXHR9LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gIWlzVW5kZWZpbmVkKHZhbHVlKTtcblx0fSk7XG5cdHJldHVybiB7XG5cdFx0ZmVhdHVyZWRKb2JzOiBnZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdqb2JfbGlzdGluZycsIGZlYXR1cmVkSm9ic1F1ZXJ5KVxuXHR9O1xufSkoRmVhdHVyZWRKb2JzRWRpdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! dynamic exports provided */
/*! exports used: isUndefined, pickBy */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: Component */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 6 */
/*!******************************!*\
  !*** external "wp.apiFetch" ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.apiFetch;

/***/ }),
/* 7 */
/*!*************************!*\
  !*** external "wp.url" ***!
  \*************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.url;

/***/ }),
/* 8 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 9 */
/*!**************************!*\
  !*** external "wp.date" ***!
  \**************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.date;

/***/ }),
/* 10 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 11 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: withSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),
/* 12 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svZWRpdG9yLnNjc3M/NDlkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2svc3R5bGUuc2Nzcz84MGYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ })
/******/ ]);