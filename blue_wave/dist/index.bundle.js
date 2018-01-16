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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./tooplate_style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./tooplate_style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "body {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tcolor: #666;\r\n\tfont-family: Tahoma, Geneva, sans-serif;\r\n\tfont-size: 13px;\r\n\tline-height: 1.7em;\r\n\tbackground-color: #fff;\r\n\tbackground-image:url(" + __webpack_require__(3) + ");\r\n\tbackground-position: top;\r\n\tbackground-repeat: repeat-x\r\n}\r\n\r\na, a:link, a:visited {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\np {\r\n\tmargin: 0 0 10px 0;\r\n\tpadding: 0;\r\n}\r\n\r\nimg {\r\n\tborder: none;\r\n}\r\n\r\nem {\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n\tfont-style: normal;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 { color: #3779ba; font-weight: normal; }\r\nh1 { font-size: 38px; margin: 0 0 20px 0; padding: 5px 0 }\r\nh2 { font-size: 30px; margin: 0 0 15px 0; padding: 5px 0; }\r\nh3 { font-size: 24px; margin: 0 0 15px; padding: 0; }\r\nh4 { font-size: 18px; margin: 0 0 15px; padding: 0; }\r\nh5 { font-size: 16px; margin: 0 0 10px; padding: 0;  }\r\nh6 { font-size: 14px; margin: 0 0 5px; padding: 0; }\r\n\r\n.cleaner { clear: both }\r\n.h10 { height: 10px }\r\n.h20 { height: 20px }\r\n.h30 { height: 30px }\r\n.h40 { height: 40px }\r\n.h50 { height: 50px }\r\n.h60 { height: 60px }\r\n\r\na.more {\r\n\tclear: both;\r\n\tdisplay: block;\r\n\twidth: 104px;\r\n\theight: 28px;\r\n\tpadding: 3px 0 0 0;\r\n\ttext-align: center;\r\n\tfont-size: 11px;\r\n\tcolor: #000;\r\n\tfont-weight: bold;\r\n\tbackground: url(" + __webpack_require__(4) + ");\r\n}\r\n\r\na.more:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tbackground: url(" + __webpack_require__(5) + ");\r\n}\r\n\r\n.float_l { float: left }\r\n.float_r { float: right }\r\n\r\n.image_wrapper {\r\n\tdisplay: inline-block;\r\n\tborder: 5px solid #fff;\r\n\tbackground: none;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.image_fl {\r\n\tfloat: left;\r\n\tmargin: 3px 15px 0 0;\r\n}\r\n\r\n.image_fr {\r\n\tfloat: right;\r\n\tmargin: 3px 0 0 15px;\r\n}\r\n\r\n.tooplate_list {\r\n\tmargin: 20px 0 20px 20px;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.tooplate_list li {\r\n\tcolor:#e47100;\r\n\tmargin: 0;\r\n\tpadding: 0 0 0 20px;\r\n\t/* background: url(../images/tooplate_list.jpg) no-repeat scroll 0 7px; */\r\n}\r\n\r\n.tooplate_list li a {\r\n\tcolor: #e47100;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.tooplate_list li a:hover {\r\n\tcolor: #e47100;\r\n}\r\n\r\n#tooplate_wrapper {\r\n\twidth: 960px;\r\n\tpadding: 0 9px;\r\n\tmargin: 0 auto;\r\n\tbackground: url(" + __webpack_require__(6) + ") repeat-y\r\n}\r\n\r\n#tooplate_header {\r\n\twidth: 880px;\r\n\theight: 230px;\r\n\tpadding: 0 40px;\r\n\tbackground: url(" + __webpack_require__(7) + ") no-repeat\r\n}\r\n\r\n/* menu */\r\n#tooplate_menu {\r\n\tpadding: 15px 0 0 0;\r\n}\r\n\r\n#tooplate_menu ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n#tooplate_menu ul li {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tdisplay: inline;\r\n}\r\n\r\n#tooplate_menu ul li a {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n\theight: 35px;\r\n\tpadding: 0 5px;\r\n\tmargin: 0 25px 0 0;\r\n\tfont-size: 16px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: #1d364b;\r\n\tfont-weight: normal;\r\n\toutline: none;\r\n}\r\n\r\n#tooplate_menu ul li a:hover, #tooplate_menu ul li .current {\r\n\tcolor: #000;\r\n\tbackground: url(" + __webpack_require__(8) + ") center bottom no-repeat;\r\n}\r\n\r\n/* end of menu */\r\n\r\n#site_title {\r\n\tclear: both;\r\n\tmargin: 40px 0 0 160px;\r\n}\r\n\r\n#site_title h1 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#site_title h1 a {\r\n\tdisplay: block;\r\n\twidth: 300px;\r\n\theight: 55px;\r\n\tcolor: #F60;\r\n\ttext-indent: -10000px;\r\n\tbackground: url(" + __webpack_require__(9) + ") no-repeat;\r\n}\r\n\r\n#site_title h1 span {\r\n\tdisplay: block;\r\n\tfont-size: 16px;\r\n\tcolor: #666;\r\n}\r\n\r\n#tooplate_middle {\r\n\tclear: both;\r\n\twidth: 880px;\r\n\theight: 30px;\r\n\tpadding: 20px 40px;\r\n\tbackground: url(" + __webpack_require__(10) + ") no-repeat;\r\n}\r\n\r\n#search_box {\r\n\tfloat: right;\r\n\twidth: 242px;\r\n\theight: 29px;\r\n\tbackground: url(" + __webpack_require__(11) + ") no-repeat;\r\n}\r\n\r\n#search_box form {\r\n\tclear: both;\r\n\twidth: 242px;\r\n\theight: 29px;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n#searchfield {\r\n\theight: 23px;\r\n\twidth: 200px;\r\n\tpadding: 0 5px 3px 8px;\r\n\tfont-size: 12px;\r\n\tcolor: #fff;\r\n\tline-height: 0;\r\n\tbackground: none;\r\n\tborder: none;\r\n}\r\n\r\n#searchbutton {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tbackground: none;\r\n\tborder: none;\r\n}\r\n\r\n#tooplate_main {\r\n\tclear: both;\r\n\twidth: 880px;\r\n\tpadding: 10px 40px 0;\r\n\tbackground: url(" + __webpack_require__(12) + ") no-repeat top\r\n}\r\n\r\n#slider_wrapper {\r\n\tclear: both;\r\n\twidth: 880px;\r\n\theight: 320px;\r\n\tbackground: url(" + __webpack_require__(13) + ") bottom center no-repeat\r\n}\r\n\r\n#slider {\r\n\toverflow: hidden;\r\n\twidth: 880px;\r\n\theight: 300px;\r\n}\r\n\r\n#tooplate_content {\r\n\tclear: both;\r\n\twidth: 880px;\r\n\tpadding-top: 20px\r\n}\r\n\r\n.col_w880 { clear: both; width: 880px; margin-bottom: 40px; }\r\n.col_w260 { float: left; width: 260px; margin-right: 50px; }\r\n.col_w260b { width: 260px }\r\n.col_w400 { width: 400px }\r\n.col_w570 { width: 570px }\r\n.col_last { margin: 0 }\r\n\r\n.fp_box h2 { font-size: 24px }\r\n\r\n.portfolio h6 { margin-bottom: 0 }\r\n\r\n.home_intro {\r\n\tfont-size: 20px;\r\n\tfont-weight: normal;\r\n\tline-height: 34px;\r\n}\r\n\r\n.home_intro p {\r\n\tfloat: left;\r\n\twidth: 660px;\r\n}\r\n\r\n.home_intro a.learnmore {\r\n\tfloat: right;\r\n\tdisplay: block;\r\n\twidth: 198px;\r\n\theight: 60px;\r\n\tbackground: url(" + __webpack_require__(14) + ") no-repeat;\r\n}\r\n\r\n.home_intro a.learnmore:hover {\r\n\tbackground: url(" + __webpack_require__(15) + ");\r\n}\r\n\r\n.intro {\r\n\tfont-size: 20px;\r\n\tfont-weight: normal;\r\n\tline-height: 34px;\r\n}\r\n\r\n#map img {\r\n\twidth: 300px;\r\n\theight: 200px;\r\n\tborder: 1px solid #999;\r\n\tpadding: 4px;\r\n}\r\n\r\n#gallery {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n#gallery .gallery_box {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\twidth: 205px;\r\n\tmargin: 0 20px 20px 0;\r\n}\r\n\r\n#gallery .lmb {\r\n\tmargin: 0 0 20px 0;\r\n}\r\n\r\n.gallery_box h3 {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.gallery_box h3 a {\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tcolor: #1184df;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.gallery_box p {\r\n\tfont-style: italic;\r\n\tfont-size: 11px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.gallery_box a img {\r\n\tborder: 1px solid #ccc;\r\n\twidth: 175px;\r\n\theight: 120px;\r\n\tpadding: 8px;\r\n}\r\n\r\n.gallery_box a img:hover {\r\n\tbackground: #ccc;\r\n}\r\n\r\n.news_box {\r\n\tclear: both;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.news_box h2 {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.news_box p.date {\r\n\tcolor: #000;\r\n}\r\n\r\n.news_box img {\r\n\tfloat: left;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tpadding: 4px;\r\n\tborder: 1px solid #000;\r\n\tmargin-right: 30px;\r\n}\r\n\r\n.news_box a.more { float: right; }\r\n\r\n.sb_lp_box {\r\n\tclear: both;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.sb_lp_box img {\r\n\tpadding: 9px;\r\n\tborder: 1px solid #ccc;\r\n}\r\n\r\n.post_box {\r\n\tclear: both;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.post_box h2 {\r\n\tfont-size: 20px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.post_box p.post_meta {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.post_box p span.cat a {\r\n\tcolor: #cb5c02;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.post_box img {\r\n\twidth: 550px;\r\n\theight: 160px;\r\n\tborder: 10px solid #eee;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.post_box a.more {\r\n\tfloat: right;\r\n}\r\n\r\n#contact_form {\r\n\tpadding: 0;\r\n\twidth: 400px;\r\n}\r\n\r\n#contact_form form {\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n\r\n#contact_form form .input_field {\r\n\twidth: 280px;\r\n\tcolor: #333;\r\n\tpadding: 5px;\r\n\tborder: 1px solid #ccc;\r\n\tbackground: #fff;\r\n\tfont-family: Tahoma, Geneva, sans-serif;\r\n\tfont-size: 12px;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n#contact_form form label {\r\n\tdisplay: block;\r\n\twidth: 100px;\r\n\tmargin-right: 10px;\r\n\tfont-size: 13px;\r\n\tcolor: #666;\r\n}\r\n\r\n#contact_form form textarea {\r\n\twidth: 388px;\r\n\theight: 200px;\r\n\tpadding: 5px;\r\n\tcolor: #333;\r\n\tborder: 1px solid #ccc;\r\n\tbackground: #fff;\r\n\tfont-family: Tahoma, Geneva, sans-serif;\r\n\tfont-size: 12px;\r\n\tmargin-top: 5px;\r\n}\r\n\r\n#contact_form form .submit_btn {\r\n\tmargin: 10px 0px;\r\n\tpadding: 5px 14px;\r\n\tbackground: #fff;\r\n\tcolor: #333;\r\n\tborder: 1px solid #ccc;\r\n\tfont-size: 13px;\r\n}\r\n\r\n#tooplate_footer {\r\n\tclear: both;\r\n\tpadding: 20px 0;\r\n\ttext-align: center;\r\n\tbackground: #d7e8f9;\r\n}\r\n\r\n#tooplate_footer a { color: #000 }\r\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_body.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_button.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_button_hover.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_wrapper.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_header.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_menu_hover.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_logo.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_middle.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_search.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_main.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_slider.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_learn_more.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/images/tooplate_learn_more_hover.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearText; });
function clearText() {
  console.log("in clearText function");
  // if (field.defaultValue == field.value) {
  //   field.value = '';
  // } else if (field.value == '') {
  //   field.value = field.defaultValue;
  // }
  // return field;
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tooplate_style_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tooplate_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tooplate_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_common__ = __webpack_require__(18);



console.log("index js");

jQuery(document).ready(function () {
  console.log(Object(__WEBPACK_IMPORTED_MODULE_1__js_common__["a" /* clearText */])());
  var sdf;
});

/***/ })
/******/ ]);