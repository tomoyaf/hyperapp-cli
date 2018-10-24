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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
const colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (let key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if (key === 'ansi16') {
			key = 'ansi';
		}

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/chalk/index.js":
/*!*************************************!*\
  !*** ./node_modules/chalk/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js");
const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
const stdoutColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js").stdout;

const template = __webpack_require__(/*! ./templates.js */ "./node_modules/chalk/templates.js");

const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel = stdoutColor ? stdoutColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
}

styles.visible = {
	get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, _empty, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript


/***/ }),

/***/ "./node_modules/chalk/templates.js":
/*!*****************************************!*\
  !*** ./node_modules/chalk/templates.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

module.exports = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),

/***/ "./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ "./node_modules/minimist/index.js":
/*!****************************************!*\
  !*** ./node_modules/minimist/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args, opts) {
    if (!opts) opts = {};
    
    var flags = { bools : {}, strings : {}, unknownFn: null };

    if (typeof opts['unknown'] === 'function') {
        flags.unknownFn = opts['unknown'];
    }

    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
      flags.allBools = true;
    } else {
      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {
          flags.bools[key] = true;
      });
    }
    
    var aliases = {};
    Object.keys(opts.alias || {}).forEach(function (key) {
        aliases[key] = [].concat(opts.alias[key]);
        aliases[key].forEach(function (x) {
            aliases[x] = [key].concat(aliases[key].filter(function (y) {
                return x !== y;
            }));
        });
    });

    [].concat(opts.string).filter(Boolean).forEach(function (key) {
        flags.strings[key] = true;
        if (aliases[key]) {
            flags.strings[aliases[key]] = true;
        }
     });

    var defaults = opts['default'] || {};
    
    var argv = { _ : [] };
    Object.keys(flags.bools).forEach(function (key) {
        setArg(key, defaults[key] === undefined ? false : defaults[key]);
    });
    
    var notFlags = [];

    if (args.indexOf('--') !== -1) {
        notFlags = args.slice(args.indexOf('--')+1);
        args = args.slice(0, args.indexOf('--'));
    }

    function argDefined(key, arg) {
        return (flags.allBools && /^--[^=]+$/.test(arg)) ||
            flags.strings[key] || flags.bools[key] || aliases[key];
    }

    function setArg (key, val, arg) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg) === false) return;
        }

        var value = !flags.strings[key] && isNumber(val)
            ? Number(val) : val
        ;
        setKey(argv, key.split('.'), value);
        
        (aliases[key] || []).forEach(function (x) {
            setKey(argv, x.split('.'), value);
        });
    }

    function setKey (obj, keys, value) {
        var o = obj;
        keys.slice(0,-1).forEach(function (key) {
            if (o[key] === undefined) o[key] = {};
            o = o[key];
        });

        var key = keys[keys.length - 1];
        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
            o[key] = value;
        }
        else if (Array.isArray(o[key])) {
            o[key].push(value);
        }
        else {
            o[key] = [ o[key], value ];
        }
    }
    
    function aliasIsBoolean(key) {
      return aliases[key].some(function (x) {
          return flags.bools[x];
      });
    }

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        
        if (/^--.+=/.test(arg)) {
            // Using [\s\S] instead of . because js doesn't support the
            // 'dotall' regex modifier. See:
            // http://stackoverflow.com/a/1068308/13216
            var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
            var key = m[1];
            var value = m[2];
            if (flags.bools[key]) {
                value = value !== 'false';
            }
            setArg(key, value, arg);
        }
        else if (/^--no-.+/.test(arg)) {
            var key = arg.match(/^--no-(.+)/)[1];
            setArg(key, false, arg);
        }
        else if (/^--.+/.test(arg)) {
            var key = arg.match(/^--(.+)/)[1];
            var next = args[i + 1];
            if (next !== undefined && !/^-/.test(next)
            && !flags.bools[key]
            && !flags.allBools
            && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                setArg(key, next, arg);
                i++;
            }
            else if (/^(true|false)$/.test(next)) {
                setArg(key, next === 'true', arg);
                i++;
            }
            else {
                setArg(key, flags.strings[key] ? '' : true, arg);
            }
        }
        else if (/^-[^-]+/.test(arg)) {
            var letters = arg.slice(1,-1).split('');
            
            var broken = false;
            for (var j = 0; j < letters.length; j++) {
                var next = arg.slice(j+2);
                
                if (next === '-') {
                    setArg(letters[j], next, arg)
                    continue;
                }
                
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
                    setArg(letters[j], next.split('=')[1], arg);
                    broken = true;
                    break;
                }
                
                if (/[A-Za-z]/.test(letters[j])
                && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                    setArg(letters[j], next, arg);
                    broken = true;
                    break;
                }
                
                if (letters[j+1] && letters[j+1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j+2), arg);
                    broken = true;
                    break;
                }
                else {
                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
                }
            }
            
            var key = arg.slice(-1)[0];
            if (!broken && key !== '-') {
                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])
                && !flags.bools[key]
                && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                    setArg(key, args[i+1], arg);
                    i++;
                }
                else if (args[i+1] && /true|false/.test(args[i+1])) {
                    setArg(key, args[i+1] === 'true', arg);
                    i++;
                }
                else {
                    setArg(key, flags.strings[key] ? '' : true, arg);
                }
            }
        }
        else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(
                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
                );
            }
            if (opts.stopEarly) {
                argv._.push.apply(argv._, args.slice(i + 1));
                break;
            }
        }
    }
    
    Object.keys(defaults).forEach(function (key) {
        if (!hasKey(argv, key.split('.'))) {
            setKey(argv, key.split('.'), defaults[key]);
            
            (aliases[key] || []).forEach(function (x) {
                setKey(argv, x.split('.'), defaults[key]);
            });
        }
    });
    
    if (opts['--']) {
        argv['--'] = new Array();
        notFlags.forEach(function(key) {
            argv['--'].push(key);
        });
    }
    else {
        notFlags.forEach(function(key) {
            argv._.push(key);
        });
    }

    return argv;
};

function hasKey (obj, keys) {
    var o = obj;
    keys.slice(0,-1).forEach(function (key) {
        o = (o[key] || {});
    });

    var key = keys[keys.length - 1];
    return key in o;
}

function isNumber (x) {
    if (typeof x === 'number') return true;
    if (/^0x[0-9a-f]+$/i.test(x)) return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}



/***/ }),

/***/ "./node_modules/simple-git/node_modules/debug/src/browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/simple-git/node_modules/debug/src/browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/simple-git/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/simple-git/node_modules/debug/src/common.js":
/*!******************************************************************!*\
  !*** ./node_modules/simple-git/node_modules/debug/src/common.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/simple-git/node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/simple-git/node_modules/debug/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/simple-git/node_modules/debug/src/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/simple-git/node_modules/debug/src/browser.js");
} else {
	module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/simple-git/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/simple-git/node_modules/debug/src/node.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/node_modules/debug/src/node.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(/*! tty */ "tty");
const util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/simple-git/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ "./node_modules/simple-git/node_modules/ms/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/simple-git/node_modules/ms/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/simple-git/promise.js":
/*!********************************************!*\
  !*** ./node_modules/simple-git/promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
   throw new ReferenceError("Promise wrappers must be enabled to use the promise API");
}

function asyncWrapper (fn, git, chain) {
   return function () {
      var args = [].slice.call(arguments);

      if (typeof args[args.length] === 'function') {
         throw new TypeError(
            "Promise interface requires that handlers are not supplied inline, " +
            "trailing function not allowed in call to " + fn);
      }

      return chain.then(function () {
         return new Promise(function (resolve, reject) {
            args.push(function (err, result) {
               if (err) {
                  reject(new Error(err));
               }
               else {
                  resolve(result);
               }
            });

            git[fn].apply(git, args);
         });
      });
   };
}

function syncWrapper (fn, git, api) {
   return function () {
      git[fn].apply(git, arguments);

      return api;
   };
}

function isAsyncCall (fn) {
   return /^[^\)]+then\s*\)/.test(fn) || /\._run\(/.test(fn);
}

module.exports = function (baseDir) {

   var git;
   var chain = Promise.resolve();

   try {
      git = __webpack_require__(/*! ./src */ "./node_modules/simple-git/src/index.js")(baseDir);
   }
   catch (e) {
      chain = Promise.reject(e);
   }

   return Object.keys(git.constructor.prototype).reduce(function (api, fn) {
      if (/^_|then/.test(fn)) {
         return api;
      }

      if (isAsyncCall(git[fn])) {
         api[fn] = asyncWrapper(fn, git, chain);
      }

      else {
         api[fn] = syncWrapper(fn, git, api);
      }

      return api;

   }, {});

};


/***/ }),

/***/ "./node_modules/simple-git/src/git.js":
/*!********************************************!*\
  !*** ./node_modules/simple-git/src/git.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

   'use strict';

   var debug = __webpack_require__(/*! debug */ "./node_modules/simple-git/node_modules/debug/src/index.js")('simple-git');
   var deferred = __webpack_require__(/*! ./util/deferred */ "./node_modules/simple-git/src/util/deferred.js");
   var exists = __webpack_require__(/*! ./util/exists */ "./node_modules/simple-git/src/util/exists.js");
   var NOOP = function () {};

   /**
    * Git handling for node. All public functions can be chained and all `then` handlers are optional.
    *
    * @param {string} baseDir base directory for all processes to run
    *
    * @param {Object} ChildProcess The ChildProcess module
    * @param {Function} Buffer The Buffer implementation to use
    *
    * @constructor
    */
   function Git (baseDir, ChildProcess, Buffer) {
      this._baseDir = baseDir;
      this._runCache = [];

      this.ChildProcess = ChildProcess;
      this.Buffer = Buffer;
   }

   /**
    * @type {string} The command to use to reference the git binary
    */
   Git.prototype._command = 'git';

   /**
    * @type {[key: string]: string} An object of key=value pairs to be passed as environment variables to the
    *                               spawned child process.
    */
   Git.prototype._env = null;

   /**
    * @type {Function} An optional handler to use when a child process is created
    */
   Git.prototype._outputHandler = null;

   /**
    * @type {boolean} Property showing whether logging will be silenced - defaults to true in a production environment
    */
   Git.prototype._silentLogging = /prod/.test("development");

   /**
    * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
    * the system path, or a fully qualified path to the executable.
    *
    * @param {string} command
    * @returns {Git}
    */
   Git.prototype.customBinary = function (command) {
      this._command = command;
      return this;
   };

   /**
    * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
    * a single object to entirely replace the current environment variables.
    *
    * @param {string|Object} name
    * @param {string} [value]
    * @returns {Git}
    */
   Git.prototype.env = function (name, value) {
      if (arguments.length === 1 && typeof name === 'object') {
         this._env = name;
      }
      else {
         (this._env = this._env || {})[name] = value;
      }

      return this;
   };

   /**
    * Sets the working directory of the subsequent commands.
    *
    * @param {string} workingDirectory
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.cwd = function (workingDirectory, then) {
      var git = this;
      var next = Git.trailingFunctionArgument(arguments);

      return this.exec(function () {
         git._baseDir = workingDirectory;
         if (!exists(workingDirectory, exists.FOLDER)) {
            Git.exception(git, 'Git.cwd: cannot change to non-directory "' + workingDirectory + '"', next);
         }
         else {
            next && next(null, workingDirectory);
         }
      });
   };

   /**
    * Sets a handler function to be called whenever a new child process is created, the handler function will be called
    * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
    *
    * @example
    * require('simple-git')
    *    .outputHandler(function (command, stdout, stderr) {
    *       stdout.pipe(process.stdout);
    *    })
    *    .checkout('https://github.com/user/repo.git');
    *
    * @see http://nodejs.org/api/child_process.html#child_process_class_childprocess
    * @see http://nodejs.org/api/stream.html#stream_class_stream_readable
    * @param {Function} outputHandler
    * @returns {Git}
    */
   Git.prototype.outputHandler = function (outputHandler) {
      this._outputHandler = outputHandler;
      return this;
   };

   /**
    * Initialize a git repo
    *
    * @param {Boolean} [bare=false]
    * @param {Function} [then]
    */
   Git.prototype.init = function (bare, then) {
      var commands = ['init'];
      var next = Git.trailingFunctionArgument(arguments);

      if (bare === true) {
         commands.push('--bare');
      }

      return this._run(commands, function (err) {
         next && next(err);
      });
   };

   /**
    * Check the status of the local repo
    *
    * @param {Function} [then]
    */
   Git.prototype.status = function (then) {
      return this._run(
         ['status', '--porcelain', '-b', '-u'],
         Git._responseHandler(then, 'StatusSummary')
      );
   };

   /**
    * List the stash(s) of the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stashList = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || ';;;;';
      var command = [
         "stash",
         "list",
         "--pretty=format:%H %ai %s%d %aN %ae".replace(/\s+/g, splitter) + __webpack_require__(/*! ./responses/ListLogSummary */ "./node_modules/simple-git/src/responses/ListLogSummary.js").COMMIT_BOUNDARY
      ];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
      }

      return this._run(command,
         Git._responseHandler(handler, 'ListLogSummary', splitter)
      );
   };

   /**
    * Stash the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stash = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ["stash"];

      if (Array.isArray(options)) {
         command = command.concat(options);
      }
      else {
         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * Clone a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {String[]} [options] Optional array of options to pass through to the clone command
    * @param {Function} [then]
    */
   Git.prototype.clone = function (repoPath, localPath, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['clone'].concat(Git.trailingArrayArgument(arguments));

      for (var i = 0, iMax = arguments.length; i < iMax; i++) {
         if (typeof arguments[i] === 'string') {
            command.push(arguments[i]);
         }
      }

      return this._run(command, function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Mirror a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {Function} [then]
    */
   Git.prototype.mirror = function (repoPath, localPath, then) {
      return this.clone(repoPath, localPath, ['--mirror'], then);
   };

   /**
    * Moves one or more files to a new destination.
    *
    * @see https://git-scm.com/docs/git-mv
    *
    * @param {string|string[]} from
    * @param {string} to
    * @param {Function} [then]
    */
   Git.prototype.mv = function (from, to, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = [].concat(from);
      command.unshift('mv', '-v');
      command.push(to);

      this._run(command, Git._responseHandler(handler, 'MoveSummary'))
   };

   /**
    * Internally uses pull and tags to get the list of tags then checks out the latest tag.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkoutLatestTag = function (then) {
      var git = this;
      return this.pull(function() {
         git.tags(function(err, tags) {
            git.checkout(tags.latest, then);
         });
      });
   };

   /**
    * Adds one or more files to source control
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.add = function (files, then) {
      return this._run(['add'].concat(files), function (err, data) {
         then && then(err);
      });
   };

   /**
    * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
    * files will be committed.
    *
    * @param {string|string[]} message
    * @param {string|string[]} [files]
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.commit = function (message, files, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = ['commit'];

      [].concat(message).forEach(function (message) {
         command.push('-m', message);
      });

      [].push.apply(command, [].concat(typeof files === "string" || Array.isArray(files) ? files : []));

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(
         command,
         Git._responseHandler(handler, 'CommitSummary')
      );
   };

   /**
    * Gets a function to be used for logging.
    *
    * @param {string} level
    * @param {string} [message]
    *
    * @returns {Function}
    * @private
    */
   Git.prototype._getLog = function (level, message) {
      var log = this._silentLogging ? NOOP : console[level].bind(console);
      if (arguments.length > 1) {
         log(message);
      }
      return log;
   };

   /**
    * Pull the updated contents of the current repo
    *
    * @param {string} [remote] When supplied must also include the branch
    * @param {string} [branch] When supplied must also include the remote
    * @param {Object} [options] Optionally include set of options to merge into the command
    * @param {Function} [then]
    */
   Git.prototype.pull = function (remote, branch, options, then) {
      var command = ["pull"];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(command, Git._responseHandler(handler, 'PullSummary'));
   };

   /**
    * Fetch the updated contents of the current repo.
    *
    * @example
    *   .fetch('upstream', 'master') // fetches from master on remote named upstream
    *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
    *
    * @param {string} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.fetch = function (remote, branch, then) {
      var command = ["fetch"];
      var next = Git.trailingFunctionArgument(arguments);
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      return this._run(
         command,
         Git._responseHandler(next, 'FetchSummary'),
         {
            concatStdErr: true
         }
      );
   };

   /**
    * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
    * a production environment.
    *
    * @param {boolean} silence
    * @returns {Git}
    */
   Git.prototype.silent = function (silence) {
      this._silentLogging = !!silence;
      return this;
   };

   /**
    * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
    * sort the tags by that property instead of using the default semantic versioning sort.
    *
    * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
    *
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.tags = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);

      var command = ['-l'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      var hasCustomSort = command.some(function (option) {
         return /^--sort=/.test(option);
      });

      return this.tag(
         command,
         Git._responseHandler(next, 'TagList', [hasCustomSort])
      );
   };

   /**
    * Rebases the current working copy. Options can be supplied either as an array of string parameters
    * to be sent to the `git rebase` command, or a standard options object.
    *
    * @param {Object|String[]} [options]
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.rebase = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ['rebase'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      })
   };

   /**
    * Reset a repo
    *
    * @param {string|string[]} [mode=soft] Either an array of arguments supported by the 'git reset' command, or the
    *                                        string value 'soft' or 'hard' to set the reset mode.
    * @param {Function} [then]
    */
   Git.prototype.reset = function (mode, then) {
      var command = ['reset'];
      var next = Git.trailingFunctionArgument(arguments);
      if (next === mode || typeof mode === 'string' || !mode) {
         var modeStr = ['mixed', 'soft', 'hard'].includes(mode) ? mode : 'soft';
         command.push('--' + modeStr);
      }
      else if (Array.isArray(mode)) {
         command.push.apply(command, mode);
      }

      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Revert one or more commits in the local working copy
    *
    * @param {string} commit The commit to revert. Can be any hash, offset (eg: `HEAD~2`) or range (eg: `master~5..master~2`)
    * @param {Object} [options] Optional options object
    * @param {Function} [then]
    */
   Git.prototype.revert = function (commit, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['revert'];

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof commit !== 'string') {
         return this.exec(function () {
            next && next(new TypeError("Commit must be a string"));
         });
      }

      command.push(commit);
      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Add a lightweight tag to the head of the current branch
    *
    * @param {string} name
    * @param {Function} [then]
    */
   Git.prototype.addTag = function (name, then) {
      if (typeof name !== "string") {
         return this.exec(function () {
            then && then(new TypeError("Git.addTag requires a tag name"));
         });
      }

      return this.tag([name], then);
   };

   /**
    * Add an annotated tag to the head of the current branch
    *
    * @param {string} tagName
    * @param {string} tagMessage
    * @param {Function} [then]
    */
   Git.prototype.addAnnotatedTag = function (tagName, tagMessage, then) {
      return this.tag(['-a', '-m', tagMessage, tagName], function (err) {
         then && then(err);
      });
   };

   /**
    * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
    * by supplying either a string or array of strings as the `what` parameter.
    *
    * @param {string|string[]} what One or more commands to pass to `git checkout`
    * @param {Function} [then]
    */
   Git.prototype.checkout = function (what, then) {
      var command = ['checkout'];
      command = command.concat(what);

      return this._run(command, function (err, data) {
         then && then(err, !err && this._parseCheckout(data));
      });
   };

   /**
    * Check out a remote branch
    *
    * @param {string} branchName name of branch
    * @param {string} startPoint (e.g origin/development)
    * @param {Function} [then]
    */
   Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
      return this.checkout(['-b', branchName, startPoint], then);
   };

   /**
    * Check out a local branch
    *
    * @param {string} branchName of branch
    * @param {Function} [then]
    */
   Git.prototype.checkoutLocalBranch = function (branchName, then) {
      return this.checkout(['-b', branchName], then);
   };

   /**
    * Delete a local branch
    *
    * @param {string} branchName name of branch
    * @param {Function} [then]
    */
   Git.prototype.deleteLocalBranch = function (branchName, then) {
      return this.branch(['-d', branchName], then);
   };

   /**
    * List all branches
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.branch = function (options, then) {
      var isDelete, responseHandler;
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['branch'];
      if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      if (!arguments.length || next === options) {
         command.push('-a', '-v');
      }

      isDelete = ['-d', '-D', '--delete'].reduce(function (isDelete, flag) {
         return isDelete || command.indexOf(flag) > 0;
      }, false);

      responseHandler = isDelete
         ? Git._responseHandler(next, 'BranchDeleteSummary', false)
         : Git._responseHandler(next, 'BranchSummary');

      return this._run(command, responseHandler);
   };

   /**
    * Return list of local branches
    *
    * @param {Function} [then]
    */
   Git.prototype.branchLocal = function (then) {
      return this.branch(['-v'], then);
   };

   /**
    * Add config to local git instance
    *
    * @param {string} key configuration key (e.g user.name)
    * @param {string} value for the given key (e.g your name)
    * @param {Function} [then]
    */
   Git.prototype.addConfig = function (key, value, then) {
      return this._run(['config', '--local', key, value], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Executes any command against the git binary.
    *
    * @param {string[]|Object} commands
    * @param {Function} [then]
    *
    * @returns {Git}
    */
   Git.prototype.raw = function (commands, then) {
      var command = [];
      if (Array.isArray(commands)) {
         command = commands.slice(0);
      }
      else {
         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      }

      var next = Git.trailingFunctionArgument(arguments);

      if (!command.length) {
         return this.exec(function () {
            next && next(new Error('Raw: must supply one or more command to execute'), null);
         });
      }

      return this._run(command, function (err, data) {
         next && next(err, !err && data || null);
      });
   };

   /**
    * Add a submodule
    *
    * @param {string} repo
    * @param {string} path
    * @param {Function} [then]
    */
   Git.prototype.submoduleAdd = function (repo, path, then) {
      return this._run(['submodule', 'add', repo, path], function (err) {
         then && then(err);
      });
   };

   /**
    * Update submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleUpdate = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleUpdate: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['update'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Initialize submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleInit = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleInit: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['init'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Call any `git submodule` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.subModule = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.subModule requires an array of arguments"));
         });
      }

      if (options[0] !== 'submodule') {
         options.unshift('submodule');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * List remote
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.listRemote = function (args, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var data = next === args || args === undefined ? [] : args;

      if (typeof data === 'string') {
         this._getLog('warn', 'Git#listRemote: args should be supplied as an array of individual arguments');
      }

      return this._run(['ls-remote'].concat(data), function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Adds a remote to the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
      return this._run(['remote', 'add', remoteName, remoteRepo], function (err) {
         then && then(err);
      });
   };

   /**
    * Removes an entry from the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.removeRemote = function (remoteName, then) {
      return this._run(['remote', 'remove', remoteName], function (err) {
         then && then(err);
      });
   };

   /**
    * Gets the currently available remotes, setting the optional verbose argument to true includes additional
    * detail on the remotes themselves.
    *
    * @param {boolean} [verbose=false]
    * @param {Function} [then]
    */
   Git.prototype.getRemotes = function (verbose, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var args = verbose === true ? ['-v'] : [];

      return this.remote(args, function (err, data) {
         next && next(err, !err && function () {
            return data.trim().split('\n').filter(Boolean).reduce(function (remotes, remote) {
               var detail = remote.trim().split(/\s+/);
               var name = detail.shift();

               if (!remotes[name]) {
                  remotes[name] = remotes[remotes.length] = {
                     name: name,
                     refs: {}
                  };
               }

               if (detail.length) {
                  remotes[name].refs[detail.pop().replace(/[^a-z]/g, '')] = detail.pop();
               }

               return remotes;
            }, []).slice(0);
         }());
      });
   };

   /**
    * Call any `git remote` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.remote = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.remote requires an array of arguments"));
         });
      }

      if (options[0] !== 'remote') {
         options.unshift('remote');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
    * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
    *
    * @param {string} from
    * @param {string} to
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.mergeFromTo = function (from, to, options, then) {
      var commands = [
         from,
         to
      ];
      var callback = Git.trailingFunctionArgument(arguments);

      if (Array.isArray(options)) {
         commands = commands.concat(options);
      }

      return this.merge(commands, callback);
   };

   /**
    * Runs a merge, `options` can be either an array of arguments
    * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
    * or an options object.
    *
    * Conflicts during the merge result in an error response,
    * the response type whether it was an error or success will be a MergeSummary instance.
    * When successful, the MergeSummary has all detail from a the PullSummary
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    * @returns {*}
    *
    * @see ./responses/MergeSummary.js
    * @see ./responses/PullSummary.js
    */
   Git.prototype.merge = function (options, then) {
      var self = this;
      var userHandler = Git.trailingFunctionArgument(arguments) || NOOP;
      var mergeHandler = function (err, mergeSummary) {
         if (!err && mergeSummary.failed) {
            return Git.fail(self, mergeSummary, userHandler);
         }

         userHandler(err, mergeSummary);
      };

      var command = [];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));

      if (command[0] !== 'merge') {
         command.unshift('merge');
      }

      if (command.length === 1) {
         return this.exec(function () {
            then && then(new TypeError("Git.merge requires at least one option"));
         });
      }

      return this._run(command, Git._responseHandler(mergeHandler, 'MergeSummary'), {
         concatStdErr: true
      });
   };

   /**
    * Call any `git tag` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.tag = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.tag requires an array of arguments"));
         });
      }

      if (options[0] !== 'tag') {
         options.unshift('tag');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * Updates repository server info
    *
    * @param {Function} [then]
    */
   Git.prototype.updateServerInfo = function (then) {
      return this._run(["update-server-info"], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Pushes the current committed changes to a remote, optionally specify the names of the remote and branch to use
    * when pushing. Supply multiple options as an array of strings in the first argument - see examples below.
    *
    * @param {string|string[]} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.push = function (remote, branch, then) {
      var command = [];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (command[0] !== 'push') {
         command.unshift('push');
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
    * default configured remote spec.
    *
    * @param {string} [remote]
    * @param {Function} [then]
    */
   Git.prototype.pushTags = function (remote, then) {
      var command = ['push'];
      if (typeof remote === "string") {
         command.push(remote);
      }
      command.push('--tags');

      then = typeof arguments[arguments.length - 1] === "function" ? arguments[arguments.length - 1] : null;

      return this._run(command, function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Removes the named files from source control.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rm = function (files, then) {
      return this._rm(files, '-f', then);
   };

   /**
    * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
    * completely remove the files, use `rm`.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rmKeepLocal = function (files, then) {
      return this._rm(files, '--cached', then);
   };

   /**
    * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
    * size, and type.
    *
    * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.catFile = function (options, then) {
      return this._catFile('utf-8', arguments);
   };

   /**
    * Equivalent to `catFile` but will return the native `Buffer` of content from the git command's stdout.
    *
    * @param {string[]} options
    * @param then
    */
   Git.prototype.binaryCatFile = function (options, then) {
      return this._catFile('buffer', arguments);
   };

   Git.prototype._catFile = function (format, args) {
      var handler = Git.trailingFunctionArgument(args);
      var command = ['cat-file'];
      var options = args[0];

      if (typeof options === 'string') {
         throw new TypeError('Git#catFile: options must be supplied as an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, data);
      }, {
         format: format
      });
   };

   /**
    * Return repository changes.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.diff = function (options, then) {
      var command = ['diff'];

      if (typeof options === 'string') {
         command[0] += ' ' + options;
         this._getLog('warn',
            'Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, data);
      });
   };

   Git.prototype.diffSummary = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['--stat=4096'];

      if (options && options !== next) {
         command.push.apply(command, [].concat(options));
      }

      return this.diff(command, Git._responseHandler(next, 'DiffSummary'));
   };

   /**
    * Wraps `git rev-parse`. Primarily used to convert friendly commit references (ie branch names) to SHA1 hashes.
    *
    * Options should be an array of string options compatible with the `git rev-parse`
    *
    * @param {string|string[]} [options]
    * @param {Function} [then]
    *
    * @see http://git-scm.com/docs/git-rev-parse
    */
   Git.prototype.revparse = function (options, then) {
      var command = ['rev-parse'];

      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#revparse: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, data);
      });
   };

   /**
    * Show various types of objects, for example the file at a certain commit
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.show = function (options, then) {
      var args = [].slice.call(arguments, 0);
      var handler = typeof args[args.length - 1] === "function" ? args.pop() : null;
      var command = ['show'];
      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#show: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * @param {string} mode Required parameter "n" or "f"
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.clean = function (mode, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof mode !== 'string' || !/[nf]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean mode parameter ("n" or "f") is required'));
         });
      }

      if (/[^dfinqxX]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean unknown option found in ' + JSON.stringify(mode)));
         });
      }

      var command = ['clean', '-' + mode];
      if (Array.isArray(options)) {
         command = command.concat(options);
      }

      if (command.some(interactiveMode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean interactive mode is not supported'));
         });
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });

      function interactiveMode (option) {
         if (/^-[^\-]/.test(option)) {
            return option.indexOf('i') > 0;
         }

         return option === '--interactive';
      }
   };

   /**
    * Call a simple function at the next step in the chain.
    * @param {Function} [then]
    */
   Git.prototype.exec = function (then) {
      this._run([], function () {
         typeof then === 'function' && then();
      });
      return this;
   };

   /**
    * Deprecated means of adding a regular function call at the next step in the chain. Use the replacement
    * Git#exec, the Git#then method will be removed in version 2.x
    *
    * @see exec
    * @deprecated
    */
   Git.prototype.then = function (then) {
      this._getLog(
         'warn',
         "\nGit#then is deprecated after version 1.72 and will be removed in version 2.x"
         + "\nPlease switch to using Git#exec to run arbitrary functions as part of the command chain.\n"
      );
      return this.exec(then);
   };

   /**
    * Show commit logs from `HEAD` to the first commit.
    * If provided between `options.from` and `options.to` tags or branch.
    *
    * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
    *
    * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
    *
    * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
    * For any other set of options, supply options as an array of strings to be appended to the git log command.
    *
    * @param {Object|string[]} [options]
    * @param {string} [options.from] The first commit to include
    * @param {string} [options.to] The most recent commit to include
    * @param {string} [options.file] A single file to include in the result
    *
    * @param {Function} [then]
    */
   Git.prototype.log = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || ';';
      var format = opt.format || {
         hash: '%H',
         date: '%ai',
         message: '%s%d',
         author_name: '%aN',
         author_email: '%ae'
      };

      var fields = Object.keys(format);
      var formatstr = fields.map(function (k) {
         return format[k];
      }).join(splitter);
      var command = ["log", "--pretty=format:" + formatstr + __webpack_require__(/*! ./responses/ListLogSummary */ "./node_modules/simple-git/src/responses/ListLogSummary.js").COMMIT_BOUNDARY];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
         opt = {};
      }
      else if (typeof arguments[0] === "string" || typeof arguments[1] === "string") {
         this._getLog('warn',
            'Git#log: supplying to or from as strings is now deprecated, switch to an options configuration object');
         opt = {
            from: arguments[0],
            to: arguments[1]
         };
      }

      if (opt.n || opt['max-count']) {
         command.push("--max-count=" + (opt.n || opt['max-count']));
      }

      if (opt.from && opt.to) {
         command.push(opt.from + "..." + opt.to);
      }

      if (opt.file) {
         command.push("--follow", options.file);
      }

      'splitter n max-count file from to --pretty format'.split(' ').forEach(function (key) {
         delete opt[key];
      });

      Git._appendOptions(command, opt);

      return this._run(command, Git._responseHandler(handler, 'ListLogSummary', [splitter, fields]));
   };

   /**
    * Clears the queue of pending commands and returns the wrapper instance for chaining.
    *
    * @returns {Git}
    */
   Git.prototype.clearQueue = function () {
      this._runCache.length = 0;
      return this;
   };

   /**
    * Check if a pathname or pathnames are excluded by .gitignore
    *
    * @param {string|string[]} pathnames
    * @param {Function} [then]
    */
   Git.prototype.checkIgnore = function (pathnames, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ["check-ignore"];

      if (handler !== pathnames) {
         command = command.concat(pathnames);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && this._parseCheckIgnore(data));
      });
   };

   /**
    * Validates that the current repo is a Git repo.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkIsRepo = function (then) {
      function onError (exitCode, stdErr, done, fail) {
         if (exitCode === 128 && /(Not a git repository|Kein Git-Repository)/i.test(stdErr)) {
            return done(false);
         }

         fail(stdErr);
      }

      function handler (err, isRepo) {
         then && then(err, String(isRepo).trim() === 'true');
      }

      return this._run(['rev-parse', '--is-inside-work-tree'], handler, {onError: onError});
   };

   Git.prototype._rm = function (_files, options, then) {
      var files = [].concat(_files);
      var args = ['rm', options];
      args.push.apply(args, files);

      return this._run(args, function (err) {
         then && then(err);
      });
   };

   Git.prototype._parseCheckout = function (checkout) {
      // TODO
   };

   /**
    * Parser for the `check-ignore` command - returns each
    * @param {string} [files]
    * @returns {string[]}
    */
   Git.prototype._parseCheckIgnore = function (files) {
      return files.split(/\n/g).filter(Boolean).map(function (file) {
         return file.trim()
      });
   };

   /**
    * Schedules the supplied command to be run, the command should not include the name of the git binary and should
    * be an array of strings passed as the arguments to the git binary.
    *
    * @param {string[]} command
    * @param {Function} then
    * @param {Object} [opt]
    * @param {boolean} [opt.concatStdErr=false] Optionally concatenate stderr output into the stdout
    * @param {boolean} [opt.format="utf-8"] The format to use when reading the content of stdout
    * @param {Function} [opt.onError] Optional error handler for this command - can be used to allow non-clean exits
    *                                  without killing the remaining stack of commands
    * @param {number} [opt.onError.exitCode]
    * @param {string} [opt.onError.stdErr]
    *
    * @returns {Git}
    */
   Git.prototype._run = function (command, then, opt) {
      if (typeof command === "string") {
         command = command.split(" ");
      }
      this._runCache.push([command, then, opt || {}]);
      this._schedule();

      return this;
   };

   Git.prototype._schedule = function () {
      if (!this._childProcess && this._runCache.length) {
         var git = this;
         var Buffer = git.Buffer;
         var task = git._runCache.shift();

         var command = task[0];
         var then = task[1];
         var options = task[2];

         debug(command);

         var result = deferred();

         var attempted = false;
         var attemptClose = function attemptClose (e) {

            // closing when there is content, terminate immediately
            if (attempted || stdErr.length || stdOut.length) {
               result.resolve(e);
               attempted = true;
            }

            // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
            if (!attempted) {
               attempted = true;
               setTimeout(attemptClose.bind(this, e), 50);
            }

         };

         var stdOut = [];
         var stdErr = [];
         var spawned = git.ChildProcess.spawn(git._command, command.slice(0), {
            cwd: git._baseDir,
            env: git._env
         });

         spawned.stdout.on('data', function (buffer) {
            stdOut.push(buffer);
         });

         spawned.stderr.on('data', function (buffer) {
            stdErr.push(buffer);
         });

         spawned.on('error', function (err) {
            stdErr.push(new Buffer(err.stack, 'ascii'));
         });

         spawned.on('close', attemptClose);
         spawned.on('exit', attemptClose);

         result.promise.then(function (exitCode) {
            function done (output) {
               then.call(git, null, output);
            }

            function fail (error) {
               Git.fail(git, error, then);
            }

            delete git._childProcess;

            if (exitCode && stdErr.length && options.onError) {
               options.onError(exitCode, Buffer.concat(stdErr).toString('utf-8'), done, fail);
            }
            else if (exitCode && stdErr.length) {
               fail(Buffer.concat(stdErr).toString('utf-8'));
            }
            else {
               if (options.concatStdErr) {
                  [].push.apply(stdOut, stdErr);
               }

               var stdOutput = Buffer.concat(stdOut);
               if (options.format !== 'buffer') {
                  stdOutput = stdOutput.toString(options.format || 'utf-8');
               }

               done(stdOutput);
            }

            process.nextTick(git._schedule.bind(git));
         });

         git._childProcess = spawned;

         if (git._outputHandler) {
            git._outputHandler(command[0], git._childProcess.stdout, git._childProcess.stderr);
         }
      }
   };

   /**
    * Handles an exception in the processing of a command.
    */
   Git.fail = function (git, error, handler) {
      git._getLog('error', error);
      git._runCache.length = 0;
      if (typeof handler === 'function') {
         handler.call(git, error, null);
      }
   };

   /**
    * Given any number of arguments, returns the last argument if it is a function, otherwise returns null.
    * @returns {Function|null}
    */
   Git.trailingFunctionArgument = function (args) {
      var trailing = args[args.length - 1];
      return (typeof trailing === "function") ? trailing : null;
   };

   /**
    * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is null.
    * @returns {Object|null}
    */
   Git.trailingOptionsArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Object]' ? options : null;
   };

   /**
    * Given any number of arguments, returns the trailing options array argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is an empty array.
    * @returns {Array}
    */
   Git.trailingArrayArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Array]' ? options : [];
   };

   /**
    * Mutates the supplied command array by merging in properties in the options object. When the
    * value of the item in the options object is a string it will be concatenated to the key as
    * a single `name=value` item, otherwise just the name will be used.
    *
    * @param {string[]} command
    * @param {Object} options
    * @private
    */
   Git._appendOptions = function (command, options) {
      if (options === null) {
         return;
      }

      Object.keys(options).forEach(function (key) {
         var value = options[key];
         if (typeof value === 'string') {
            command.push(key + '=' + value);
         }
         else {
            command.push(key);
         }
      });
   };

   /**
    * Given the type of response and the callback to receive the parsed response,
    * uses the correct parser and calls back the callback.
    *
    * @param {Function} callback
    * @param {string} type
    * @param {Object[]} [args]
    *
    * @private
    */
   Git._responseHandler = function (callback, type, args) {
      return function (error, data) {
         if (typeof callback !== 'function') {
            return;
         }

         if (error) {
            callback(error, null);
            return;
         }

         var handler = __webpack_require__("./node_modules/simple-git/src/responses sync recursive ^\\.\\/.*$")("./" + type);
         var result = handler.parse.apply(handler, [data].concat(args === undefined ? [] : args));

         callback(null, result);
      };

   };

   /**
    * Marks the git instance as having had a fatal exception by clearing the pending queue of tasks and
    * logging to the console.
    *
    * @param git
    * @param error
    * @param callback
    */
   Git.exception = function (git, error, callback) {
      git._runCache.length = 0;
      if (typeof callback === 'function') {
         callback(error instanceof Error ? error : new Error(error));
      }

      git._getLog('error', error);
   };

   module.exports = Git;

}());


/***/ }),

/***/ "./node_modules/simple-git/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-git/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var Git = __webpack_require__(/*! ./git */ "./node_modules/simple-git/src/git.js");

var ChildProcess = __webpack_require__(/*! child_process */ "child_process");
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer;
var exists = __webpack_require__(/*! ./util/exists */ "./node_modules/simple-git/src/util/exists.js");

module.exports = function (baseDir) {

    if (baseDir && !exists(baseDir, exists.FOLDER)) {
        throw new Error("Cannot use simple-git on a directory that does not exist.");
    }

    return new Git(baseDir || process.cwd(), ChildProcess, Buffer);
};



/***/ }),

/***/ "./node_modules/simple-git/src/responses sync recursive ^\\.\\/.*$":
/*!*************************************************************!*\
  !*** ./node_modules/simple-git/src/responses sync ^\.\/.*$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BranchDeleteSummary": "./node_modules/simple-git/src/responses/BranchDeleteSummary.js",
	"./BranchDeleteSummary.js": "./node_modules/simple-git/src/responses/BranchDeleteSummary.js",
	"./BranchSummary": "./node_modules/simple-git/src/responses/BranchSummary.js",
	"./BranchSummary.js": "./node_modules/simple-git/src/responses/BranchSummary.js",
	"./CommitSummary": "./node_modules/simple-git/src/responses/CommitSummary.js",
	"./CommitSummary.js": "./node_modules/simple-git/src/responses/CommitSummary.js",
	"./DiffSummary": "./node_modules/simple-git/src/responses/DiffSummary.js",
	"./DiffSummary.js": "./node_modules/simple-git/src/responses/DiffSummary.js",
	"./FetchSummary": "./node_modules/simple-git/src/responses/FetchSummary.js",
	"./FetchSummary.js": "./node_modules/simple-git/src/responses/FetchSummary.js",
	"./FileStatusSummary": "./node_modules/simple-git/src/responses/FileStatusSummary.js",
	"./FileStatusSummary.js": "./node_modules/simple-git/src/responses/FileStatusSummary.js",
	"./ListLogSummary": "./node_modules/simple-git/src/responses/ListLogSummary.js",
	"./ListLogSummary.js": "./node_modules/simple-git/src/responses/ListLogSummary.js",
	"./MergeSummary": "./node_modules/simple-git/src/responses/MergeSummary.js",
	"./MergeSummary.js": "./node_modules/simple-git/src/responses/MergeSummary.js",
	"./MoveSummary": "./node_modules/simple-git/src/responses/MoveSummary.js",
	"./MoveSummary.js": "./node_modules/simple-git/src/responses/MoveSummary.js",
	"./PullSummary": "./node_modules/simple-git/src/responses/PullSummary.js",
	"./PullSummary.js": "./node_modules/simple-git/src/responses/PullSummary.js",
	"./StatusSummary": "./node_modules/simple-git/src/responses/StatusSummary.js",
	"./StatusSummary.js": "./node_modules/simple-git/src/responses/StatusSummary.js",
	"./TagList": "./node_modules/simple-git/src/responses/TagList.js",
	"./TagList.js": "./node_modules/simple-git/src/responses/TagList.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/simple-git/src/responses sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/simple-git/src/responses/BranchDeleteSummary.js":
/*!**********************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/BranchDeleteSummary.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = BranchDeletion;

function BranchDeletion (branch, hash) {
   this.branch = branch;
   this.hash = hash;
   this.success = hash !== null;
}

BranchDeletion.deleteSuccessRegex = /(\S+)\s+\(\S+\s([^\)]+)\)/;
BranchDeletion.deleteErrorRegex = /^error[^']+'([^']+)'/;

BranchDeletion.parse = function (data, asArray) {
   var result;
   var branchDeletions = data.trim().split('\n').map(function (line) {
         if (result = BranchDeletion.deleteSuccessRegex.exec(line)) {
            return new BranchDeletion(result[1], result[2]);
         }
         else if (result = BranchDeletion.deleteErrorRegex.exec(line)) {
            return new BranchDeletion(result[1], null);
         }
      })
      .filter(Boolean);

   return asArray ? branchDeletions : branchDeletions.pop();
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/BranchSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/BranchSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = BranchSummary;

function BranchSummary () {
   this.detached = false;
   this.current = '';
   this.all = [];
   this.branches = {};
}

BranchSummary.prototype.push = function (current, detached, name, commit, label) {
   if (current) {
      this.detached = detached;
      this.current = name;
   }
   this.all.push(name);
   this.branches[name] = {
      current: current,
      name: name,
      commit: commit,
      label: label
   };
};

BranchSummary.detachedRegex = /^(\*?\s+)\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/;
BranchSummary.branchRegex = /^(\*?\s+)(\S+)\s+([a-z0-9]+)\s(.*)$/;

BranchSummary.parse = function (commit) {
   var branchSummary = new BranchSummary();

   commit.split('\n')
      .forEach(function (line) {
         var detached = true;
         var branch = BranchSummary.detachedRegex.exec(line);
         if (!branch) {
            detached = false;
            branch = BranchSummary.branchRegex.exec(line);
         }

         if (branch) {
            branchSummary.push(
               branch[1].charAt(0) === '*',
               detached,
               branch[2],
               branch[3],
               branch[4]
            );
         }
      });

   return branchSummary;
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/CommitSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/CommitSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = CommitSummary;

function CommitSummary () {
   this.branch = '';
   this.commit = '';
   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };
   this.author = null;
}

var COMMIT_BRANCH_MESSAGE_REGEX = /\[([^\s]+) ([^\]]+)/;
var COMMIT_AUTHOR_MESSAGE_REGEX = /\s*Author:\s(.+)/i;

function setBranchFromCommit (commitSummary, commitData) {
   if (commitData) {
      commitSummary.branch = commitData[1];
      commitSummary.commit = commitData[2];
   }
}

function setSummaryFromCommit (commitSummary, commitData) {
   if (commitSummary.branch && commitData) {
      commitSummary.summary.changes = commitData[1] || 0;
      commitSummary.summary.insertions = commitData[2] || 0;
      commitSummary.summary.deletions = commitData[3] || 0;
   }
}

function setAuthorFromCommit (commitSummary, commitData) {
   var parts = commitData[1].split('<');
   var email = parts.pop();

   if (email.indexOf('@') <= 0) {
      return;
   }

   commitSummary.author = {
      email: email.substr(0, email.length - 1),
      name: parts.join('<').trim()
   };
}

CommitSummary.parse = function (commit) {
   var lines = commit.trim().split('\n');
   var commitSummary = new CommitSummary();

   setBranchFromCommit(commitSummary, COMMIT_BRANCH_MESSAGE_REGEX.exec(lines.shift()));

   if (COMMIT_AUTHOR_MESSAGE_REGEX.test(lines[0])) {
      setAuthorFromCommit(commitSummary, COMMIT_AUTHOR_MESSAGE_REGEX.exec(lines.shift()));
   }

   setSummaryFromCommit(commitSummary, /(\d+)[^,]*(?:,\s*(\d+)[^,]*)?(?:,\s*(\d+))?/g.exec(lines.shift()));

   return commitSummary;
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/DiffSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/DiffSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = DiffSummary;

/**
 * The DiffSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function DiffSummary () {
   this.files = [];
   this.insertions = 0;
   this.deletions = 0;
}

/**
 * Number of lines added
 * @type {number}
 */
DiffSummary.prototype.insertions = 0;

/**
 * Number of lines deleted
 * @type {number}
 */
DiffSummary.prototype.deletions = 0;

DiffSummary.parse = function (text) {
   var line, handler;

   var lines = text.trim().split('\n');
   var status = new DiffSummary();

   var summary = lines.pop();
   if (summary) {
      summary.trim().split(', ').slice(1).forEach(function (text) {
         var summary = /(\d+)\s([a-z]+)/.exec(text);
         if (summary) {
            status[summary[2].replace(/s$/, '') + 's'] = parseInt(summary[1], 10);
         }
      });
   }

   while (line = lines.shift()) {
      textFileChange(line, status.files) || binaryFileChange(line, status.files);
   }

   return status;
};

function textFileChange (line, files) {
   line = line.trim().match(/^(.+)\s+\|\s+(\d+)\s+([+\-]+)$/);
   if (line) {
      files.push({
         file: line[1].trim(),
         changes: parseInt(line[2], 10),
         insertions: line[3].replace(/\-/g, '').length,
         deletions: line[3].replace(/\+/g, '').length,
         binary: false
      });

      return true;
   }
}

function binaryFileChange (line, files) {
   line = line.match(/^(.+) \| Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
   if (line) {
      files.push({
         file: line[1].trim(),
         before: +line[2],
         after: +line[3],
         binary: true
      });
      return true;
   }
}


/***/ }),

/***/ "./node_modules/simple-git/src/responses/FetchSummary.js":
/*!***************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/FetchSummary.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FetchSummary (raw) {
   this.raw = raw;

   this.remote = null;
   this.branches = [];
   this.tags = [];
}

FetchSummary.parsers = [
   [
      /From (.+)$/, function (fetchSummary, matches) {
         fetchSummary.remote = matches[0];
      }
   ],
   [
      /\* \[new branch\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.branches.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ],
   [
      /\* \[new tag\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.tags.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ]
];

FetchSummary.parse = function (data) {
   var fetchSummary = new FetchSummary(data);

   String(data)
      .trim()
      .split('\n')
      .forEach(function (line) {
         var original = line.trim();
         FetchSummary.parsers.some(function (parser) {
            var parsed = parser[0].exec(original);
            if (parsed) {
               parser[1](fetchSummary, parsed.slice(1));
               return true;
            }
         });
      });

   return fetchSummary;
};

module.exports = FetchSummary;


/***/ }),

/***/ "./node_modules/simple-git/src/responses/FileStatusSummary.js":
/*!********************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/FileStatusSummary.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FileStatusSummary (path, index, working_dir) {
   this.path = path;
   this.index = index;
   this.working_dir = working_dir;

   if ('R' === index + working_dir) {
      var detail = FileStatusSummary.fromPathRegex.exec(path) || [null, path, path];
      this.from = detail[1];
      this.path = detail[2];
   }
}

FileStatusSummary.fromPathRegex = /^(.+) -> (.+)$/;

FileStatusSummary.prototype = {
   path: '',
   from: ''
};

module.exports = FileStatusSummary;


/***/ }),

/***/ "./node_modules/simple-git/src/responses/ListLogSummary.js":
/*!*****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/ListLogSummary.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = ListLogSummary;

/**
 * The ListLogSummary is returned as a response to getting `git().log()` or `git().stashList()`
 *
 * @constructor
 */
function ListLogSummary (all) {
   this.all = all;
   this.latest = all.length && all[0] || null;
   this.total = all.length;
}

/**
 * Detail for each of the log lines
 * @type {ListLogLine[]}
 */
ListLogSummary.prototype.all = null;

/**
 * Most recent entry in the log
 * @type {ListLogLine}
 */
ListLogSummary.prototype.latest = null;

/**
 * Number of items in the log
 * @type {number}
 */
ListLogSummary.prototype.total = 0;

function ListLogLine (line, fields) {
   for (var k = 0; k < fields.length; k++) {
      this[fields[k]] = line[k];
   }
}

ListLogSummary.COMMIT_BOUNDARY = '------------------------ >8 ------------------------';

ListLogSummary.parse = function (text, splitter, fields) {
   fields = fields || ['hash', 'date', 'message', 'author_name', 'author_email'];
   return new ListLogSummary(
      text
         .trim()
         .split(ListLogSummary.COMMIT_BOUNDARY + '\n')
         .map(function (item) {
            return item.replace(ListLogSummary.COMMIT_BOUNDARY, '')
         })
         .filter(Boolean)
         .map(function (item) {
            return new ListLogLine(item.trim().split(splitter), fields);
         })
   );
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/MergeSummary.js":
/*!***************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/MergeSummary.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = MergeSummary;

var PullSummary = __webpack_require__(/*! ./PullSummary */ "./node_modules/simple-git/src/responses/PullSummary.js");

function MergeConflict (reason, file) {
   this.reason = reason;
   this.file = file;
}

MergeConflict.prototype.toString = function () {
   return this.file + ':' + this.reason;
};

function MergeSummary () {
   PullSummary.call(this);

   this.conflicts = [];
   this.merges = [];
}

MergeSummary.prototype = Object.create(PullSummary.prototype);

MergeSummary.prototype.result = 'success';

MergeSummary.prototype.toString = function () {
   if (this.conflicts.length) {
      return 'CONFLICTS: ' + this.conflicts.join(', ');
   }
   return 'OK';
};

Object.defineProperty(MergeSummary.prototype, 'failed', {
   get: function () {
      return this.conflicts.length > 0;
   }
});

MergeSummary.parsers = [
   {
      test: /^Auto-merging\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.merges.push(result[1]);
      }
   },
   {
      test: /^CONFLICT\s+\((.+)\).+ in (.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.conflicts.push(new MergeConflict(result[1], result[2]));
      }
   },
   {
      test: /^Automatic merge failed;\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.reason = result[1];
      }
   }
];

MergeSummary.parse = function (output) {
   let mergeSummary = new MergeSummary();

   output.trim().split('\n').forEach(function (line) {
      for (var i = 0, iMax = MergeSummary.parsers.length; i < iMax; i++) {
         let parser = MergeSummary.parsers[i];

         var result = parser.test.exec(line);
         if (result) {
            parser.handle(result, mergeSummary);
            break;
         }
      }
   });

   let pullSummary = PullSummary.parse(output);
   if (pullSummary.summary.changes) {
      Object.assign(mergeSummary, pullSummary);
   }

   return mergeSummary;
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/MoveSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/MoveSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = MoveSummary;

/**
 * The MoveSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function MoveSummary () {
   this.moves = [];
   this.sources = {};
}

MoveSummary.SUMMARY_REGEX = /^Renaming (.+) to (.+)$/;

MoveSummary.parse = function (text) {
   var lines = text.split('\n');
   var summary = new MoveSummary();

   for (var i = 0, iMax = lines.length, line; i < iMax; i++) {
      line = MoveSummary.SUMMARY_REGEX.exec(lines[i].trim());

      if (line) {
         summary.moves.push({
            from: line[1],
            to: line[2]
         });
      }
   }

   return summary;
};


/***/ }),

/***/ "./node_modules/simple-git/src/responses/PullSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/PullSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = PullSummary;

/**
 * The PullSummary is returned as a response to getting `git().pull()`
 *
 * @constructor
 */
function PullSummary () {
   this.files = [];
   this.insertions = {};
   this.deletions = {};

   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };

   this.created = [];
   this.deleted = [];
}

/**
 * Array of files that were created
 * @type {string[]}
 */
PullSummary.prototype.created = null;

/**
 * Array of files that were deleted
 * @type {string[]}
 */
PullSummary.prototype.deleted = null;

/**
 * The array of file paths/names that have been modified in any part of the pulled content
 * @type {string[]}
 */
PullSummary.prototype.files = null;

/**
 * A map of file path to number to show the number of insertions per file.
 * @type {Object}
 */
PullSummary.prototype.insertions = null;

/**
 * A map of file path to number to show the number of deletions per file.
 * @type {Object}
 */
PullSummary.prototype.deletions = null;

/**
 * Overall summary of changes/insertions/deletions and the number associated with each
 * across all content that was pulled.
 * @type {Object}
 */
PullSummary.prototype.summary = null;

PullSummary.FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
PullSummary.SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
PullSummary.ACTION_REGEX = /(create|delete) mode \d+ (.+)/;

PullSummary.parse = function (text) {
   var pullSummary = new PullSummary;
   var lines = text.split('\n');

   while (lines.length) {
      var line = lines.shift().trim();
      if (!line) {
         continue;
      }

      update(pullSummary, line) || summary(pullSummary, line) || action(pullSummary, line);
   }

   return pullSummary;
};

function update (pullSummary, line) {

   var update = PullSummary.FILE_UPDATE_REGEX.exec(line);
   if (!update) {
      return false;
   }

   pullSummary.files.push(update[1]);

   var insertions = update[2].length;
   if (insertions) {
      pullSummary.insertions[update[1]] = insertions;
   }

   var deletions = update[3].length;
   if (deletions) {
      pullSummary.deletions[update[1]] = deletions;
   }

   return true;
}

function summary (pullSummary, line) {
   if (!pullSummary.files.length) {
      return false;
   }

   var update = PullSummary.SUMMARY_REGEX.exec(line);
   if (!update || (update[3] === undefined && update[5] === undefined)) {
      return false;
   }

   pullSummary.summary.changes = +update[1] || 0;
   pullSummary.summary.insertions = +update[3] || 0;
   pullSummary.summary.deletions = +update[5] || 0;

   return true;
}

function action (pullSummary, line) {

   var match = PullSummary.ACTION_REGEX.exec(line);
   if (!match) {
      return false;
   }

   var file = match[2];

   if (pullSummary.files.indexOf(file) < 0) {
      pullSummary.files.push(file);
   }

   var container = (match[1] === 'create') ? pullSummary.created : pullSummary.deleted;
   container.push(file);

   return true;
}


/***/ }),

/***/ "./node_modules/simple-git/src/responses/StatusSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/StatusSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {




var FileStatusSummary = __webpack_require__(/*! ./FileStatusSummary */ "./node_modules/simple-git/src/responses/FileStatusSummary.js");

module.exports = StatusSummary;

/**
 * The StatusSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function StatusSummary () {
   this.not_added = [];
   this.conflicted = [];
   this.created = [];
   this.deleted = [];
   this.modified = [];
   this.renamed = [];
   this.files = [];
   this.staged = [];
}


/**
 * Number of commits ahead of the tracked branch
 * @type {number}
 */
StatusSummary.prototype.ahead = 0;

/**
 * Number of commits behind the tracked branch
 * @type {number}
 */
StatusSummary.prototype.behind = 0;

/**
 * Name of the current branch
 * @type {null}
 */
StatusSummary.prototype.current = null;

/**
 * Name of the branch being tracked
 * @type {string}
 */
StatusSummary.prototype.tracking = null;

/**
 * All files represented as an array of objects containing the `path` and status in `index` and
 * in the `working_dir`.
 *
 * @type {Array}
 */
StatusSummary.prototype.files = null;

/**
 * Gets whether this StatusSummary represents a clean working branch.
 *
 * @return {boolean}
 */
StatusSummary.prototype.isClean = function () {
   return 0 === Object.keys(this).filter(function (name) {
      return Array.isArray(this[name]) && this[name].length;
   }, this).length;
};

StatusSummary.parsers = {
   '##': function (line, status) {
      var aheadReg = /ahead (\d+)/;
      var behindReg = /behind (\d+)/;
      var currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
      var trackingReg = /\.{3}(\S*)/;
      var regexResult;

      regexResult = aheadReg.exec(line);
      status.ahead = regexResult && +regexResult[1] || 0;

      regexResult = behindReg.exec(line);
      status.behind = regexResult && +regexResult[1] || 0;

      regexResult = currentReg.exec(line);
      status.current = regexResult && regexResult[1];

      regexResult = trackingReg.exec(line);
      status.tracking = regexResult && regexResult[1];
   },

   '??': function (line, status) {
      status.not_added.push(line);
   },

   A: function (line, status) {
      status.created.push(line);
   },

   AM: function (line, status) {
      status.created.push(line);
   },

   D: function (line, status) {
      status.deleted.push(line);
   },

   M: function (line, status, indexState) {
      status.modified.push(line);

      if (indexState === 'M') {
         status.staged.push(line);
      }
   },

   R: function (line, status) {
      var detail = /^(.+) -> (.+)$/.exec(line) || [null, line, line];

      status.renamed.push({
         from: detail[1],
         to: detail[2]
      });
   },

   UU: function (line, status) {
      status.conflicted.push(line);
   }
};

StatusSummary.parsers.MM = StatusSummary.parsers.M;

StatusSummary.parse = function (text) {
   var file, linestr;

   var lines = text.trim().split('\n');
   var status = new StatusSummary();

   while (linestr = lines.shift()) {
      file = splitLine(linestr);

      if (!file) {
         continue;
      }

      if (file.handler) {
         file.handler(file.path, status, file.index, file.workingDir);
      }

      if (file.code !== '##') {
         status.files.push(new FileStatusSummary(file.path, file.index, file.workingDir));
      }
   }

   return status;
};


function splitLine (lineStr) {
   var line = lineStr.trim().match(/(..?)(\s+)(.*)/);
   if (!line || !line[1].trim()) {
      line = lineStr.trim().match(/(..?)\s+(.*)/);
   }

   if (!line) {
      return;
   }

   var code = line[1];
   if (line[2].length > 1) {
      code += ' ';
   }
   if (code.length === 1 && line[2].length === 1) {
      code = ' ' + code;
   }

   return {
      raw: code,
      code: code.trim(),
      index: code.charAt(0),
      workingDir: code.charAt(1),
      handler: StatusSummary.parsers[code.trim()],
      path: line[3]
   };
}


/***/ }),

/***/ "./node_modules/simple-git/src/responses/TagList.js":
/*!**********************************************************!*\
  !*** ./node_modules/simple-git/src/responses/TagList.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = TagList;

function TagList (tagList, latest) {
   this.latest = latest;
   this.all = tagList
}

TagList.parse = function (data, customSort) {
   var number = function (input) {
      if (typeof input === 'string') {
         return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
      }

      return 0;
   };

   var tags = data
      .trim()
      .split('\n')
      .map(function (item) { return item.trim(); })
      .filter(Boolean);

   if (!customSort) {
      tags.sort(function (tagA, tagB) {
         var partsA = tagA.split('.');
         var partsB = tagB.split('.');

         if (partsA.length === 1 || partsB.length === 1) {
            return tagA - tagB > 0 ? 1 : -1;
         }

         for (var i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
            var a = number(partsA[i]);
            var b = number(partsB[i]);

            var diff = a - b;
            if (diff) {
               return diff > 0 ? 1 : -1;
            }
         }

         return 0;
      });
   }

   var latest = customSort ? tags[0] : tags.filter(function (tag) { return tag.indexOf('.') >= 0; }).pop();

   return new TagList(tags, latest);
};


/***/ }),

/***/ "./node_modules/simple-git/src/util/deferred.js":
/*!******************************************************!*\
  !*** ./node_modules/simple-git/src/util/deferred.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function deferred () {
   var d = {};
   d.promise = new Promise(function (resolve, reject) {
      d.resolve = resolve;
      d.reject = reject
   });

   return d;
};


/***/ }),

/***/ "./node_modules/simple-git/src/util/exists.js":
/*!****************************************************!*\
  !*** ./node_modules/simple-git/src/util/exists.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var fs = __webpack_require__(/*! fs */ "fs");

function exists (path, isFile, isDirectory) {
   try {
      var matches = false;
      var stat = fs.statSync(path);

      matches = matches || isFile && stat.isFile();
      matches = matches || isDirectory && stat.isDirectory();

      return matches;
   }
   catch (e) {
      if (e.code === 'ENOENT') {
         return false;
      }

      throw e;
   }
}

module.exports = function (path, type) {
   if (!type) {
      return exists(path, true, true);
   }

   return exists(path, type & 1, type & 2);
};

module.exports.FILE = 1;

module.exports.FOLDER = 2;


/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const hasFlag = __webpack_require__(/*! has-flag */ "./node_modules/has-flag/index.js");

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/hyperapp-cli.ts":
/*!*****************************!*\
  !*** ./src/hyperapp-cli.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var clone = function (name) {
    var git = __webpack_require__(/*! simple-git/promise */ "./node_modules/simple-git/promise.js");
    var chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/index.js");
    var exec = __webpack_require__(/*! child_process */ "child_process").exec;
    var remote = "https://github.com/tomoyaf/hyperapp-boilerplate.git";
    console.log(chalk.green('git clone' + " " + remote + " ./" + name));
    git().silent(true)
        .clone(remote, name)
        .then(function () {
        console.log('finished');
        console.log(chalk.green('cd ./' + name + ' && yarn && yarn new && git init'));
        exec('cd ./' + name + " && yarn && yarn new && git init", function (err, stdout, stderr) {
            if (err) {
                console.log(err);
            }
            console.log(stdout);
        });
    })
        .catch(function (err) { return console.error('failed: ', err); });
};
module.exports = {
    commands: function () {
        ;
        return {
            new: function (_a) {
                var name = _a.name;
                console.log(name);
                clone(name);
                return name === undefined;
            },
            help: function () {
                console.log('help me');
            }
        };
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/index.js");
var hyperapp = __webpack_require__(/*! ./hyperapp-cli */ "./src/hyperapp-cli.ts");
var n = +process.argv[2];
var argv = __webpack_require__(/*! minimist */ "./node_modules/minimist/index.js")(process.argv.slice(2))['_'];
if (argv.length > 1) {
    console.log(hyperapp.commands()[argv[0]]({ name: argv[1] }));
}
else {
    console.log(argv);
    console.log(chalk.red('Oops!'));
    hyperapp.commands()['help']();
}


/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fuc2ktc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFsay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhbGsvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pbmltaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvZ2l0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0JyYW5jaERlbGV0ZVN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9CcmFuY2hTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvQ29tbWl0U3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0RpZmZTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvRmV0Y2hTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvRmlsZVN0YXR1c1N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9MaXN0TG9nU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL01lcmdlU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL01vdmVTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvUHVsbFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvVGFnTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvdXRpbC9kZWZlcnJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvdXRpbC9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5cGVyYXBwLWNsaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0dHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixnQkFBZ0IsT0FBTyxRQUFRO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsaUJBQWlCLE9BQU8sT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9CLGdCQUFnQixRQUFRLE9BQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFOztBQUV0RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLEVBQUUsVUFBVSxFQUFFO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhO0FBQzVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ24yQkEsa0JBQWtCLG1CQUFPLENBQUMsa0VBQWU7QUFDekMsWUFBWSxtQkFBTyxDQUFDLHNEQUFTOztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3REFBd0QsdUNBQXVDO0FBQy9GLHNEQUFzRCxxQ0FBcUM7O0FBRTNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7OztBQzdFQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZTs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0ZZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYiw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOztBQUVBLGlCQUFpQixXQUFXLGNBQWM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMU9BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBTyxDQUFDLDRFQUFVOztBQUVuQyxPQUFPLFdBQVc7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOzs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsSUFBSTs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyQkFBMkI7O0FBRW5DO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRCxzQkFBc0IsV0FBVyxJQUFJLEtBQUs7O0FBRTFDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3REYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERhO0FBQ2I7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsNkVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxVQUFVO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcklBLHdCQUF3QixtQkFBTyxDQUFDLHlGQUFxQjs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNB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SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2I7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0VBQW9CO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQyxvQ0FBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLCtCQUErQix1Q0FBdUMsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ2E7QUFDYixZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0IsZUFBZSxtQkFBTyxDQUFDLDZDQUFnQjtBQUN2QztBQUNBLFdBQVcsbUJBQU8sQ0FBQyxrREFBVTtBQUM3QjtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBjb2xvckNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG5cbmNvbnN0IHdyYXBBbnNpMTYgPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb2RlID0gZm4uYXBwbHkoY29sb3JDb252ZXJ0LCBhcmd1bWVudHMpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHtjb2RlICsgb2Zmc2V0fW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kyNTYgPSAoZm4sIG9mZnNldCkgPT4gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb2RlID0gZm4uYXBwbHkoY29sb3JDb252ZXJ0LCBhcmd1bWVudHMpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07NTske2NvZGV9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTE2bSA9IChmbiwgb2Zmc2V0KSA9PiBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJnYiA9IGZuLmFwcGx5KGNvbG9yQ29udmVydCwgYXJndW1lbnRzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzI7JHtyZ2JbMF19OyR7cmdiWzFdfTske3JnYlsyXX1tYDtcbn07XG5cbmZ1bmN0aW9uIGFzc2VtYmxlU3R5bGVzKCkge1xuXHRjb25zdCBjb2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdG1vZGlmaWVyOiB7XG5cdFx0XHRyZXNldDogWzAsIDBdLFxuXHRcdFx0Ly8gMjEgaXNuJ3Qgd2lkZWx5IHN1cHBvcnRlZCBhbmQgMjIgZG9lcyB0aGUgc2FtZSB0aGluZ1xuXHRcdFx0Ym9sZDogWzEsIDIyXSxcblx0XHRcdGRpbTogWzIsIDIyXSxcblx0XHRcdGl0YWxpYzogWzMsIDIzXSxcblx0XHRcdHVuZGVybGluZTogWzQsIDI0XSxcblx0XHRcdGludmVyc2U6IFs3LCAyN10sXG5cdFx0XHRoaWRkZW46IFs4LCAyOF0sXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiBbOSwgMjldXG5cdFx0fSxcblx0XHRjb2xvcjoge1xuXHRcdFx0YmxhY2s6IFszMCwgMzldLFxuXHRcdFx0cmVkOiBbMzEsIDM5XSxcblx0XHRcdGdyZWVuOiBbMzIsIDM5XSxcblx0XHRcdHllbGxvdzogWzMzLCAzOV0sXG5cdFx0XHRibHVlOiBbMzQsIDM5XSxcblx0XHRcdG1hZ2VudGE6IFszNSwgMzldLFxuXHRcdFx0Y3lhbjogWzM2LCAzOV0sXG5cdFx0XHR3aGl0ZTogWzM3LCAzOV0sXG5cdFx0XHRncmF5OiBbOTAsIDM5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRyZWRCcmlnaHQ6IFs5MSwgMzldLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IFs5MiwgMzldLFxuXHRcdFx0eWVsbG93QnJpZ2h0OiBbOTMsIDM5XSxcblx0XHRcdGJsdWVCcmlnaHQ6IFs5NCwgMzldLFxuXHRcdFx0bWFnZW50YUJyaWdodDogWzk1LCAzOV0sXG5cdFx0XHRjeWFuQnJpZ2h0OiBbOTYsIDM5XSxcblx0XHRcdHdoaXRlQnJpZ2h0OiBbOTcsIDM5XVxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0YmdCbGFjazogWzQwLCA0OV0sXG5cdFx0XHRiZ1JlZDogWzQxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuOiBbNDIsIDQ5XSxcblx0XHRcdGJnWWVsbG93OiBbNDMsIDQ5XSxcblx0XHRcdGJnQmx1ZTogWzQ0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGE6IFs0NSwgNDldLFxuXHRcdFx0YmdDeWFuOiBbNDYsIDQ5XSxcblx0XHRcdGJnV2hpdGU6IFs0NywgNDldLFxuXG5cdFx0XHQvLyBCcmlnaHQgY29sb3Jcblx0XHRcdGJnQmxhY2tCcmlnaHQ6IFsxMDAsIDQ5XSxcblx0XHRcdGJnUmVkQnJpZ2h0OiBbMTAxLCA0OV0sXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBbMTAyLCA0OV0sXG5cdFx0XHRiZ1llbGxvd0JyaWdodDogWzEwMywgNDldLFxuXHRcdFx0YmdCbHVlQnJpZ2h0OiBbMTA0LCA0OV0sXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IFsxMDUsIDQ5XSxcblx0XHRcdGJnQ3lhbkJyaWdodDogWzEwNiwgNDldLFxuXHRcdFx0YmdXaGl0ZUJyaWdodDogWzEwNywgNDldXG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZpeCBodW1hbnNcblx0c3R5bGVzLmNvbG9yLmdyZXkgPSBzdHlsZXMuY29sb3IuZ3JheTtcblxuXHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBPYmplY3Qua2V5cyhzdHlsZXMpKSB7XG5cdFx0Y29uc3QgZ3JvdXAgPSBzdHlsZXNbZ3JvdXBOYW1lXTtcblxuXHRcdGZvciAoY29uc3Qgc3R5bGVOYW1lIG9mIE9iamVjdC5rZXlzKGdyb3VwKSkge1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBncm91cFtzdHlsZU5hbWVdO1xuXG5cdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRcdFx0b3BlbjogYFxcdTAwMUJbJHtzdHlsZVswXX1tYCxcblx0XHRcdFx0Y2xvc2U6IGBcXHUwMDFCWyR7c3R5bGVbMV19bWBcblx0XHRcdH07XG5cblx0XHRcdGdyb3VwW3N0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuXHRcdFx0Y29kZXMuc2V0KHN0eWxlWzBdLCBzdHlsZVsxXSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgZ3JvdXBOYW1lLCB7XG5cdFx0XHR2YWx1ZTogZ3JvdXAsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgJ2NvZGVzJywge1xuXHRcdFx0dmFsdWU6IGNvZGVzLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGFuc2kyYW5zaSA9IG4gPT4gbjtcblx0Y29uc3QgcmdiMnJnYiA9IChyLCBnLCBiKSA9PiBbciwgZywgYl07XG5cblx0c3R5bGVzLmNvbG9yLmNsb3NlID0gJ1xcdTAwMUJbMzltJztcblx0c3R5bGVzLmJnQ29sb3IuY2xvc2UgPSAnXFx1MDAxQls0OW0nO1xuXG5cdHN0eWxlcy5jb2xvci5hbnNpID0ge1xuXHRcdGFuc2k6IHdyYXBBbnNpMTYoYW5zaTJhbnNpLCAwKVxuXHR9O1xuXHRzdHlsZXMuY29sb3IuYW5zaTI1NiA9IHtcblx0XHRhbnNpMjU2OiB3cmFwQW5zaTI1NihhbnNpMmFuc2ksIDApXG5cdH07XG5cdHN0eWxlcy5jb2xvci5hbnNpMTZtID0ge1xuXHRcdHJnYjogd3JhcEFuc2kxNm0ocmdiMnJnYiwgMClcblx0fTtcblxuXHRzdHlsZXMuYmdDb2xvci5hbnNpID0ge1xuXHRcdGFuc2k6IHdyYXBBbnNpMTYoYW5zaTJhbnNpLCAxMClcblx0fTtcblx0c3R5bGVzLmJnQ29sb3IuYW5zaTI1NiA9IHtcblx0XHRhbnNpMjU2OiB3cmFwQW5zaTI1NihhbnNpMmFuc2ksIDEwKVxuXHR9O1xuXHRzdHlsZXMuYmdDb2xvci5hbnNpMTZtID0ge1xuXHRcdHJnYjogd3JhcEFuc2kxNm0ocmdiMnJnYiwgMTApXG5cdH07XG5cblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbG9yQ29udmVydCkpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yQ29udmVydFtrZXldICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VpdGUgPSBjb2xvckNvbnZlcnRba2V5XTtcblxuXHRcdGlmIChrZXkgPT09ICdhbnNpMTYnKSB7XG5cdFx0XHRrZXkgPSAnYW5zaSc7XG5cdFx0fVxuXG5cdFx0aWYgKCdhbnNpMTYnIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaVtrZXldID0gd3JhcEFuc2kxNihzdWl0ZS5hbnNpMTYsIDApO1xuXHRcdFx0c3R5bGVzLmJnQ29sb3IuYW5zaVtrZXldID0gd3JhcEFuc2kxNihzdWl0ZS5hbnNpMTYsIDEwKTtcblx0XHR9XG5cblx0XHRpZiAoJ2Fuc2kyNTYnIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaTI1NltrZXldID0gd3JhcEFuc2kyNTYoc3VpdGUuYW5zaTI1NiwgMCk7XG5cdFx0XHRzdHlsZXMuYmdDb2xvci5hbnNpMjU2W2tleV0gPSB3cmFwQW5zaTI1NihzdWl0ZS5hbnNpMjU2LCAxMCk7XG5cdFx0fVxuXG5cdFx0aWYgKCdyZ2InIGluIHN1aXRlKSB7XG5cdFx0XHRzdHlsZXMuY29sb3IuYW5zaTE2bVtrZXldID0gd3JhcEFuc2kxNm0oc3VpdGUucmdiLCAwKTtcblx0XHRcdHN0eWxlcy5iZ0NvbG9yLmFuc2kxNm1ba2V5XSA9IHdyYXBBbnNpMTZtKHN1aXRlLnJnYiwgMTApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbi8vIE1ha2UgdGhlIGV4cG9ydCBpbW11dGFibGVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRnZXQ6IGFzc2VtYmxlU3R5bGVzXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGVzY2FwZVN0cmluZ1JlZ2V4cCA9IHJlcXVpcmUoJ2VzY2FwZS1zdHJpbmctcmVnZXhwJyk7XG5jb25zdCBhbnNpU3R5bGVzID0gcmVxdWlyZSgnYW5zaS1zdHlsZXMnKTtcbmNvbnN0IHN0ZG91dENvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKS5zdGRvdXQ7XG5cbmNvbnN0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxuY29uc3QgaXNTaW1wbGVXaW5kb3dzVGVybSA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgIShwcm9jZXNzLmVudi5URVJNIHx8ICcnKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ3h0ZXJtJyk7XG5cbi8vIGBzdXBwb3J0c0NvbG9yLmxldmVsYCDihpIgYGFuc2lTdHlsZXMuY29sb3JbbmFtZV1gIG1hcHBpbmdcbmNvbnN0IGxldmVsTWFwcGluZyA9IFsnYW5zaScsICdhbnNpJywgJ2Fuc2kyNTYnLCAnYW5zaTE2bSddO1xuXG4vLyBgY29sb3ItY29udmVydGAgbW9kZWxzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgQ2hhbGsgQVBJIGR1ZSB0byBjb25mbGljdHMgYW5kIHN1Y2hcbmNvbnN0IHNraXBNb2RlbHMgPSBuZXcgU2V0KFsnZ3JheSddKTtcblxuY29uc3Qgc3R5bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gYXBwbHlPcHRpb25zKG9iaiwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHQvLyBEZXRlY3QgbGV2ZWwgaWYgbm90IHNldCBtYW51YWxseVxuXHRjb25zdCBzY0xldmVsID0gc3Rkb3V0Q29sb3IgPyBzdGRvdXRDb2xvci5sZXZlbCA6IDA7XG5cdG9iai5sZXZlbCA9IG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZCA/IHNjTGV2ZWwgOiBvcHRpb25zLmxldmVsO1xuXHRvYmouZW5hYmxlZCA9ICdlbmFibGVkJyBpbiBvcHRpb25zID8gb3B0aW9ucy5lbmFibGVkIDogb2JqLmxldmVsID4gMDtcbn1cblxuZnVuY3Rpb24gQ2hhbGsob3B0aW9ucykge1xuXHQvLyBXZSBjaGVjayBmb3IgdGhpcy50ZW1wbGF0ZSBoZXJlIHNpbmNlIGNhbGxpbmcgYGNoYWxrLmNvbnN0cnVjdG9yKClgXG5cdC8vIGJ5IGl0c2VsZiB3aWxsIGhhdmUgYSBgdGhpc2Agb2YgYSBwcmV2aW91c2x5IGNvbnN0cnVjdGVkIGNoYWxrIG9iamVjdFxuXHRpZiAoIXRoaXMgfHwgISh0aGlzIGluc3RhbmNlb2YgQ2hhbGspIHx8IHRoaXMudGVtcGxhdGUpIHtcblx0XHRjb25zdCBjaGFsayA9IHt9O1xuXHRcdGFwcGx5T3B0aW9ucyhjaGFsaywgb3B0aW9ucyk7XG5cblx0XHRjaGFsay50ZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gY2hhbGtUYWcuYXBwbHkobnVsbCwgW2NoYWxrLnRlbXBsYXRlXS5jb25jYXQoYXJncykpO1xuXHRcdH07XG5cblx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhbGssIENoYWxrLnByb3RvdHlwZSk7XG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLnRlbXBsYXRlLCBjaGFsayk7XG5cblx0XHRjaGFsay50ZW1wbGF0ZS5jb25zdHJ1Y3RvciA9IENoYWxrO1xuXG5cdFx0cmV0dXJuIGNoYWxrLnRlbXBsYXRlO1xuXHR9XG5cblx0YXBwbHlPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xufVxuXG4vLyBVc2UgYnJpZ2h0IGJsdWUgb24gV2luZG93cyBhcyB0aGUgbm9ybWFsIGJsdWUgY29sb3IgaXMgaWxsZWdpYmxlXG5pZiAoaXNTaW1wbGVXaW5kb3dzVGVybSkge1xuXHRhbnNpU3R5bGVzLmJsdWUub3BlbiA9ICdcXHUwMDFCWzk0bSc7XG59XG5cbmZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMpKSB7XG5cdGFuc2lTdHlsZXNba2V5XS5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlc1trZXldLmNsb3NlKSwgJ2cnKTtcblxuXHRzdHlsZXNba2V5XSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBjb2RlcyA9IGFuc2lTdHlsZXNba2V5XTtcblx0XHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyA/IHRoaXMuX3N0eWxlcy5jb25jYXQoY29kZXMpIDogW2NvZGVzXSwgdGhpcy5fZW1wdHksIGtleSk7XG5cdFx0fVxuXHR9O1xufVxuXG5zdHlsZXMudmlzaWJsZSA9IHtcblx0Z2V0KCkge1xuXHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyB8fCBbXSwgdHJ1ZSwgJ3Zpc2libGUnKTtcblx0fVxufTtcblxuYW5zaVN0eWxlcy5jb2xvci5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlcy5jb2xvci5jbG9zZSksICdnJyk7XG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMuY29sb3IuYW5zaSkpIHtcblx0aWYgKHNraXBNb2RlbHMuaGFzKG1vZGVsKSkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cblx0c3R5bGVzW21vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBsZXZlbCA9IHRoaXMubGV2ZWw7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBvcGVuID0gYW5zaVN0eWxlcy5jb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0XHRcdFx0Y29uc3QgY29kZXMgPSB7XG5cdFx0XHRcdFx0b3Blbixcblx0XHRcdFx0XHRjbG9zZTogYW5zaVN0eWxlcy5jb2xvci5jbG9zZSxcblx0XHRcdFx0XHRjbG9zZVJlOiBhbnNpU3R5bGVzLmNvbG9yLmNsb3NlUmVcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIGJ1aWxkLmNhbGwodGhpcywgdGhpcy5fc3R5bGVzID8gdGhpcy5fc3R5bGVzLmNvbmNhdChjb2RlcykgOiBbY29kZXNdLCB0aGlzLl9lbXB0eSwgbW9kZWwpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG59XG5cbmFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZVJlID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlKSwgJ2cnKTtcbmZvciAoY29uc3QgbW9kZWwgb2YgT2JqZWN0LmtleXMoYW5zaVN0eWxlcy5iZ0NvbG9yLmFuc2kpKSB7XG5cdGlmIChza2lwTW9kZWxzLmhhcyhtb2RlbCkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGJnTW9kZWwgPSAnYmcnICsgbW9kZWxbMF0udG9VcHBlckNhc2UoKSArIG1vZGVsLnNsaWNlKDEpO1xuXHRzdHlsZXNbYmdNb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3QgbGV2ZWwgPSB0aGlzLmxldmVsO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y29uc3Qgb3BlbiA9IGFuc2lTdHlsZXMuYmdDb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblx0XHRcdFx0Y29uc3QgY29kZXMgPSB7XG5cdFx0XHRcdFx0b3Blbixcblx0XHRcdFx0XHRjbG9zZTogYW5zaVN0eWxlcy5iZ0NvbG9yLmNsb3NlLFxuXHRcdFx0XHRcdGNsb3NlUmU6IGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZVJlXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBidWlsZC5jYWxsKHRoaXMsIHRoaXMuX3N0eWxlcyA/IHRoaXMuX3N0eWxlcy5jb25jYXQoY29kZXMpIDogW2NvZGVzXSwgdGhpcy5fZW1wdHksIG1vZGVsKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBwcm90byA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCgpID0+IHt9LCBzdHlsZXMpO1xuXG5mdW5jdGlvbiBidWlsZChfc3R5bGVzLCBfZW1wdHksIGtleSkge1xuXHRjb25zdCBidWlsZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBhcHBseVN0eWxlLmFwcGx5KGJ1aWxkZXIsIGFyZ3VtZW50cyk7XG5cdH07XG5cblx0YnVpbGRlci5fc3R5bGVzID0gX3N0eWxlcztcblx0YnVpbGRlci5fZW1wdHkgPSBfZW1wdHk7XG5cblx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGJ1aWxkZXIsICdsZXZlbCcsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBzZWxmLmxldmVsO1xuXHRcdH0sXG5cdFx0c2V0KGxldmVsKSB7XG5cdFx0XHRzZWxmLmxldmVsID0gbGV2ZWw7XG5cdFx0fVxuXHR9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoYnVpbGRlciwgJ2VuYWJsZWQnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5lbmFibGVkO1xuXHRcdH0sXG5cdFx0c2V0KGVuYWJsZWQpIHtcblx0XHRcdHNlbGYuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTZWUgYmVsb3cgZm9yIGZpeCByZWdhcmRpbmcgaW52aXNpYmxlIGdyZXkvZGltIGNvbWJpbmF0aW9uIG9uIFdpbmRvd3Ncblx0YnVpbGRlci5oYXNHcmV5ID0gdGhpcy5oYXNHcmV5IHx8IGtleSA9PT0gJ2dyYXknIHx8IGtleSA9PT0gJ2dyZXknO1xuXG5cdC8vIGBfX3Byb3RvX19gIGlzIHVzZWQgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdGJ1aWxkZXIuX19wcm90b19fID0gcHJvdG87IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxuXHRyZXR1cm4gYnVpbGRlcjtcbn1cblxuZnVuY3Rpb24gYXBwbHlTdHlsZSgpIHtcblx0Ly8gU3VwcG9ydCB2YXJhZ3MsIGJ1dCBzaW1wbHkgY2FzdCB0byBzdHJpbmcgaW4gY2FzZSB0aGVyZSdzIG9ubHkgb25lIGFyZ1xuXHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXHRjb25zdCBhcmdzTGVuID0gYXJncy5sZW5ndGg7XG5cdGxldCBzdHIgPSBTdHJpbmcoYXJndW1lbnRzWzBdKTtcblxuXHRpZiAoYXJnc0xlbiA9PT0gMCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmIChhcmdzTGVuID4gMSkge1xuXHRcdC8vIERvbid0IHNsaWNlIGBhcmd1bWVudHNgLCBpdCBwcmV2ZW50cyBWOCBvcHRpbWl6YXRpb25zXG5cdFx0Zm9yIChsZXQgYSA9IDE7IGEgPCBhcmdzTGVuOyBhKyspIHtcblx0XHRcdHN0ciArPSAnICcgKyBhcmdzW2FdO1xuXHRcdH1cblx0fVxuXG5cdGlmICghdGhpcy5lbmFibGVkIHx8IHRoaXMubGV2ZWwgPD0gMCB8fCAhc3RyKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VtcHR5ID8gJycgOiBzdHI7XG5cdH1cblxuXHQvLyBUdXJucyBvdXQgdGhhdCBvbiBXaW5kb3dzIGRpbW1lZCBncmF5IHRleHQgYmVjb21lcyBpbnZpc2libGUgaW4gY21kLmV4ZSxcblx0Ly8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9jaGFsay9pc3N1ZXMvNThcblx0Ly8gSWYgd2UncmUgb24gV2luZG93cyBhbmQgd2UncmUgZGVhbGluZyB3aXRoIGEgZ3JheSBjb2xvciwgdGVtcG9yYXJpbHkgbWFrZSAnZGltJyBhIG5vb3AuXG5cdGNvbnN0IG9yaWdpbmFsRGltID0gYW5zaVN0eWxlcy5kaW0ub3Blbjtcblx0aWYgKGlzU2ltcGxlV2luZG93c1Rlcm0gJiYgdGhpcy5oYXNHcmV5KSB7XG5cdFx0YW5zaVN0eWxlcy5kaW0ub3BlbiA9ICcnO1xuXHR9XG5cblx0Zm9yIChjb25zdCBjb2RlIG9mIHRoaXMuX3N0eWxlcy5zbGljZSgpLnJldmVyc2UoKSkge1xuXHRcdC8vIFJlcGxhY2UgYW55IGluc3RhbmNlcyBhbHJlYWR5IHByZXNlbnQgd2l0aCBhIHJlLW9wZW5pbmcgY29kZVxuXHRcdC8vIG90aGVyd2lzZSBvbmx5IHRoZSBwYXJ0IG9mIHRoZSBzdHJpbmcgdW50aWwgc2FpZCBjbG9zaW5nIGNvZGVcblx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdHN0ciA9IGNvZGUub3BlbiArIHN0ci5yZXBsYWNlKGNvZGUuY2xvc2VSZSwgY29kZS5vcGVuKSArIGNvZGUuY2xvc2U7XG5cblx0XHQvLyBDbG9zZSB0aGUgc3R5bGluZyBiZWZvcmUgYSBsaW5lYnJlYWsgYW5kIHJlb3BlblxuXHRcdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPU1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFsay9jaGFsay9wdWxsLzkyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG4vZywgYCR7Y29kZS5jbG9zZX0kJiR7Y29kZS5vcGVufWApO1xuXHR9XG5cblx0Ly8gUmVzZXQgdGhlIG9yaWdpbmFsIGBkaW1gIGlmIHdlIGNoYW5nZWQgaXQgdG8gd29yayBhcm91bmQgdGhlIFdpbmRvd3MgZGltbWVkIGdyYXkgaXNzdWVcblx0YW5zaVN0eWxlcy5kaW0ub3BlbiA9IG9yaWdpbmFsRGltO1xuXG5cdHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGNoYWxrVGFnKGNoYWxrLCBzdHJpbmdzKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShzdHJpbmdzKSkge1xuXHRcdC8vIElmIGNoYWxrKCkgd2FzIGNhbGxlZCBieSBpdHNlbGYgb3Igd2l0aCBhIHN0cmluZyxcblx0XHQvLyByZXR1cm4gdGhlIHN0cmluZyBpdHNlbGYgYXMgYSBzdHJpbmcuXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5qb2luKCcgJyk7XG5cdH1cblxuXHRjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXHRjb25zdCBwYXJ0cyA9IFtzdHJpbmdzLnJhd1swXV07XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0cGFydHMucHVzaChTdHJpbmcoYXJnc1tpIC0gMV0pLnJlcGxhY2UoL1t7fVxcXFxdL2csICdcXFxcJCYnKSk7XG5cdFx0cGFydHMucHVzaChTdHJpbmcoc3RyaW5ncy5yYXdbaV0pKTtcblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZShjaGFsaywgcGFydHMuam9pbignJykpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGFsay5wcm90b3R5cGUsIHN0eWxlcyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhbGsoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5tb2R1bGUuZXhwb3J0cy5zdXBwb3J0c0NvbG9yID0gc3Rkb3V0Q29sb3I7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7IC8vIEZvciBUeXBlU2NyaXB0XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBURU1QTEFURV9SRUdFWCA9IC8oPzpcXFxcKHVbYS1mXFxkXXs0fXx4W2EtZlxcZF17Mn18LikpfCg/Olxceyh+KT8oXFx3Kyg/OlxcKFteKV0qXFwpKT8oPzpcXC5cXHcrKD86XFwoW14pXSpcXCkpPykqKSg/OlsgXFx0XXwoPz1cXHI/XFxuKSkpfChcXH0pfCgoPzoufFtcXHJcXG5cXGZdKSs/KS9naTtcbmNvbnN0IFNUWUxFX1JFR0VYID0gLyg/Ol58XFwuKShcXHcrKSg/OlxcKChbXildKilcXCkpPy9nO1xuY29uc3QgU1RSSU5HX1JFR0VYID0gL14oWydcIl0pKCg/OlxcXFwufCg/IVxcMSlbXlxcXFxdKSopXFwxJC87XG5jb25zdCBFU0NBUEVfUkVHRVggPSAvXFxcXCh1W2EtZlxcZF17NH18eFthLWZcXGRdezJ9fC4pfChbXlxcXFxdKS9naTtcblxuY29uc3QgRVNDQVBFUyA9IG5ldyBNYXAoW1xuXHRbJ24nLCAnXFxuJ10sXG5cdFsncicsICdcXHInXSxcblx0Wyd0JywgJ1xcdCddLFxuXHRbJ2InLCAnXFxiJ10sXG5cdFsnZicsICdcXGYnXSxcblx0Wyd2JywgJ1xcdiddLFxuXHRbJzAnLCAnXFwwJ10sXG5cdFsnXFxcXCcsICdcXFxcJ10sXG5cdFsnZScsICdcXHUwMDFCJ10sXG5cdFsnYScsICdcXHUwMDA3J11cbl0pO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShjKSB7XG5cdGlmICgoY1swXSA9PT0gJ3UnICYmIGMubGVuZ3RoID09PSA1KSB8fCAoY1swXSA9PT0gJ3gnICYmIGMubGVuZ3RoID09PSAzKSkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGMuc2xpY2UoMSksIDE2KSk7XG5cdH1cblxuXHRyZXR1cm4gRVNDQVBFUy5nZXQoYykgfHwgYztcbn1cblxuZnVuY3Rpb24gcGFyc2VBcmd1bWVudHMobmFtZSwgYXJncykge1xuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGNvbnN0IGNodW5rcyA9IGFyZ3MudHJpbSgpLnNwbGl0KC9cXHMqLFxccyovZyk7XG5cdGxldCBtYXRjaGVzO1xuXG5cdGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG5cdFx0aWYgKCFpc05hTihjaHVuaykpIHtcblx0XHRcdHJlc3VsdHMucHVzaChOdW1iZXIoY2h1bmspKTtcblx0XHR9IGVsc2UgaWYgKChtYXRjaGVzID0gY2h1bmsubWF0Y2goU1RSSU5HX1JFR0VYKSkpIHtcblx0XHRcdHJlc3VsdHMucHVzaChtYXRjaGVzWzJdLnJlcGxhY2UoRVNDQVBFX1JFR0VYLCAobSwgZXNjYXBlLCBjaHIpID0+IGVzY2FwZSA/IHVuZXNjYXBlKGVzY2FwZSkgOiBjaHIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENoYWxrIHRlbXBsYXRlIHN0eWxlIGFyZ3VtZW50OiAke2NodW5rfSAoaW4gc3R5bGUgJyR7bmFtZX0nKWApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlKHN0eWxlKSB7XG5cdFNUWUxFX1JFR0VYLmxhc3RJbmRleCA9IDA7XG5cblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xuXHRsZXQgbWF0Y2hlcztcblxuXHR3aGlsZSAoKG1hdGNoZXMgPSBTVFlMRV9SRUdFWC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRjb25zdCBuYW1lID0gbWF0Y2hlc1sxXTtcblxuXHRcdGlmIChtYXRjaGVzWzJdKSB7XG5cdFx0XHRjb25zdCBhcmdzID0gcGFyc2VBcmd1bWVudHMobmFtZSwgbWF0Y2hlc1syXSk7XG5cdFx0XHRyZXN1bHRzLnB1c2goW25hbWVdLmNvbmNhdChhcmdzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBidWlsZFN0eWxlKGNoYWxrLCBzdHlsZXMpIHtcblx0Y29uc3QgZW5hYmxlZCA9IHt9O1xuXG5cdGZvciAoY29uc3QgbGF5ZXIgb2Ygc3R5bGVzKSB7XG5cdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBsYXllci5zdHlsZXMpIHtcblx0XHRcdGVuYWJsZWRbc3R5bGVbMF1dID0gbGF5ZXIuaW52ZXJzZSA/IG51bGwgOiBzdHlsZS5zbGljZSgxKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgY3VycmVudCA9IGNoYWxrO1xuXHRmb3IgKGNvbnN0IHN0eWxlTmFtZSBvZiBPYmplY3Qua2V5cyhlbmFibGVkKSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGVuYWJsZWRbc3R5bGVOYW1lXSkpIHtcblx0XHRcdGlmICghKHN0eWxlTmFtZSBpbiBjdXJyZW50KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gQ2hhbGsgc3R5bGU6ICR7c3R5bGVOYW1lfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZW5hYmxlZFtzdHlsZU5hbWVdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnRbc3R5bGVOYW1lXS5hcHBseShjdXJyZW50LCBlbmFibGVkW3N0eWxlTmFtZV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudCA9IGN1cnJlbnRbc3R5bGVOYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoY2hhbGssIHRtcCkgPT4ge1xuXHRjb25zdCBzdHlsZXMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gW107XG5cdGxldCBjaHVuayA9IFtdO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdHRtcC5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYLCAobSwgZXNjYXBlQ2hhciwgaW52ZXJzZSwgc3R5bGUsIGNsb3NlLCBjaHIpID0+IHtcblx0XHRpZiAoZXNjYXBlQ2hhcikge1xuXHRcdFx0Y2h1bmsucHVzaCh1bmVzY2FwZShlc2NhcGVDaGFyKSk7XG5cdFx0fSBlbHNlIGlmIChzdHlsZSkge1xuXHRcdFx0Y29uc3Qgc3RyID0gY2h1bmsuam9pbignJyk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0Y2h1bmtzLnB1c2goc3R5bGVzLmxlbmd0aCA9PT0gMCA/IHN0ciA6IGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoc3RyKSk7XG5cdFx0XHRzdHlsZXMucHVzaCh7aW52ZXJzZSwgc3R5bGVzOiBwYXJzZVN0eWxlKHN0eWxlKX0pO1xuXHRcdH0gZWxzZSBpZiAoY2xvc2UpIHtcblx0XHRcdGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRm91bmQgZXh0cmFuZW91cyB9IGluIENoYWxrIHRlbXBsYXRlIGxpdGVyYWwnKTtcblx0XHRcdH1cblxuXHRcdFx0Y2h1bmtzLnB1c2goYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShjaHVuay5qb2luKCcnKSkpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdHN0eWxlcy5wb3AoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2h1bmsucHVzaChjaHIpO1xuXHRcdH1cblx0fSk7XG5cblx0Y2h1bmtzLnB1c2goY2h1bmsuam9pbignJykpO1xuXG5cdGlmIChzdHlsZXMubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGVyck1zZyA9IGBDaGFsayB0ZW1wbGF0ZSBsaXRlcmFsIGlzIG1pc3NpbmcgJHtzdHlsZXMubGVuZ3RofSBjbG9zaW5nIGJyYWNrZXQke3N0eWxlcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKFxcYH1cXGApYDtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcblx0fVxuXG5cdHJldHVybiBjaHVua3Muam9pbignJyk7XG59O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZGlmO1xuXHR2YXIgZ2RpZjtcblx0dmFyIGJkaWY7XG5cdHZhciBoO1xuXHR2YXIgcztcblxuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gcyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gY29udmVydC5ncmF5LmhzdiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0dmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHR2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG52YXIgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0dmFyIHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIHVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdHZhciBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0dmFyIGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAodmFyIGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHR2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHR2YXIgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdHZhciBjb252ZXJzaW9uID0ge307XG5cblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdHZhciBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIG5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmdzLCBvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gICAgXG4gICAgdmFyIGZsYWdzID0geyBib29scyA6IHt9LCBzdHJpbmdzIDoge30sIHVua25vd25GbjogbnVsbCB9O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRzWyd1bmtub3duJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmxhZ3MudW5rbm93bkZuID0gb3B0c1sndW5rbm93biddO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0c1snYm9vbGVhbiddID09PSAnYm9vbGVhbicgJiYgb3B0c1snYm9vbGVhbiddKSB7XG4gICAgICBmbGFncy5hbGxCb29scyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIFtdLmNvbmNhdChvcHRzWydib29sZWFuJ10pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBmbGFncy5ib29sc1trZXldID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICB2YXIgYWxpYXNlcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9wdHMuYWxpYXMgfHwge30pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBhbGlhc2VzW2tleV0gPSBbXS5jb25jYXQob3B0cy5hbGlhc1trZXldKTtcbiAgICAgICAgYWxpYXNlc1trZXldLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGFsaWFzZXNbeF0gPSBba2V5XS5jb25jYXQoYWxpYXNlc1trZXldLmZpbHRlcihmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ICE9PSB5O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIFtdLmNvbmNhdChvcHRzLnN0cmluZykuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBmbGFncy5zdHJpbmdzW2tleV0gPSB0cnVlO1xuICAgICAgICBpZiAoYWxpYXNlc1trZXldKSB7XG4gICAgICAgICAgICBmbGFncy5zdHJpbmdzW2FsaWFzZXNba2V5XV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgIH0pO1xuXG4gICAgdmFyIGRlZmF1bHRzID0gb3B0c1snZGVmYXVsdCddIHx8IHt9O1xuICAgIFxuICAgIHZhciBhcmd2ID0geyBfIDogW10gfTtcbiAgICBPYmplY3Qua2V5cyhmbGFncy5ib29scykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHNldEFyZyhrZXksIGRlZmF1bHRzW2tleV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogZGVmYXVsdHNba2V5XSk7XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIG5vdEZsYWdzID0gW107XG5cbiAgICBpZiAoYXJncy5pbmRleE9mKCctLScpICE9PSAtMSkge1xuICAgICAgICBub3RGbGFncyA9IGFyZ3Muc2xpY2UoYXJncy5pbmRleE9mKCctLScpKzEpO1xuICAgICAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmluZGV4T2YoJy0tJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFyZ0RlZmluZWQoa2V5LCBhcmcpIHtcbiAgICAgICAgcmV0dXJuIChmbGFncy5hbGxCb29scyAmJiAvXi0tW149XSskLy50ZXN0KGFyZykpIHx8XG4gICAgICAgICAgICBmbGFncy5zdHJpbmdzW2tleV0gfHwgZmxhZ3MuYm9vbHNba2V5XSB8fCBhbGlhc2VzW2tleV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QXJnIChrZXksIHZhbCwgYXJnKSB7XG4gICAgICAgIGlmIChhcmcgJiYgZmxhZ3MudW5rbm93bkZuICYmICFhcmdEZWZpbmVkKGtleSwgYXJnKSkge1xuICAgICAgICAgICAgaWYgKGZsYWdzLnVua25vd25GbihhcmcpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gIWZsYWdzLnN0cmluZ3Nba2V5XSAmJiBpc051bWJlcih2YWwpXG4gICAgICAgICAgICA/IE51bWJlcih2YWwpIDogdmFsXG4gICAgICAgIDtcbiAgICAgICAgc2V0S2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpLCB2YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICAoYWxpYXNlc1trZXldIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBzZXRLZXkoYXJndiwgeC5zcGxpdCgnLicpLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEtleSAob2JqLCBrZXlzLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbyA9IG9iajtcbiAgICAgICAga2V5cy5zbGljZSgwLC0xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChvW2tleV0gPT09IHVuZGVmaW5lZCkgb1trZXldID0ge307XG4gICAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIga2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAob1trZXldID09PSB1bmRlZmluZWQgfHwgZmxhZ3MuYm9vbHNba2V5XSB8fCB0eXBlb2Ygb1trZXldID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob1trZXldKSkge1xuICAgICAgICAgICAgb1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb1trZXldID0gWyBvW2tleV0sIHZhbHVlIF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYWxpYXNJc0Jvb2xlYW4oa2V5KSB7XG4gICAgICByZXR1cm4gYWxpYXNlc1trZXldLnNvbWUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4gZmxhZ3MuYm9vbHNbeF07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgICAgIFxuICAgICAgICBpZiAoL14tLS4rPS8udGVzdChhcmcpKSB7XG4gICAgICAgICAgICAvLyBVc2luZyBbXFxzXFxTXSBpbnN0ZWFkIG9mIC4gYmVjYXVzZSBqcyBkb2Vzbid0IHN1cHBvcnQgdGhlXG4gICAgICAgICAgICAvLyAnZG90YWxsJyByZWdleCBtb2RpZmllci4gU2VlOlxuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA2ODMwOC8xMzIxNlxuICAgICAgICAgICAgdmFyIG0gPSBhcmcubWF0Y2goL14tLShbXj1dKyk9KFtcXHNcXFNdKikkLyk7XG4gICAgICAgICAgICB2YXIga2V5ID0gbVsxXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1bMl07XG4gICAgICAgICAgICBpZiAoZmxhZ3MuYm9vbHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRBcmcoa2V5LCB2YWx1ZSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgvXi0tbm8tLisvLnRlc3QoYXJnKSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFyZy5tYXRjaCgvXi0tbm8tKC4rKS8pWzFdO1xuICAgICAgICAgICAgc2V0QXJnKGtleSwgZmFsc2UsIGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoL14tLS4rLy50ZXN0KGFyZykpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhcmcubWF0Y2goL14tLSguKykvKVsxXTtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gYXJnc1tpICsgMV07XG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkICYmICEvXi0vLnRlc3QobmV4dClcbiAgICAgICAgICAgICYmICFmbGFncy5ib29sc1trZXldXG4gICAgICAgICAgICAmJiAhZmxhZ3MuYWxsQm9vbHNcbiAgICAgICAgICAgICYmIChhbGlhc2VzW2tleV0gPyAhYWxpYXNJc0Jvb2xlYW4oa2V5KSA6IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgbmV4dCwgYXJnKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgvXih0cnVlfGZhbHNlKSQvLnRlc3QobmV4dCkpIHtcbiAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBuZXh0ID09PSAndHJ1ZScsIGFyZyk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZmxhZ3Muc3RyaW5nc1trZXldID8gJycgOiB0cnVlLCBhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKC9eLVteLV0rLy50ZXN0KGFyZykpIHtcbiAgICAgICAgICAgIHZhciBsZXR0ZXJzID0gYXJnLnNsaWNlKDEsLTEpLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJyb2tlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZXR0ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBhcmcuc2xpY2UoaisyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA9PT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0LCBhcmcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoL1tBLVphLXpdLy50ZXN0KGxldHRlcnNbal0pICYmIC89Ly50ZXN0KG5leHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhsZXR0ZXJzW2pdLCBuZXh0LnNwbGl0KCc9JylbMV0sIGFyZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoL1tBLVphLXpdLy50ZXN0KGxldHRlcnNbal0pXG4gICAgICAgICAgICAgICAgJiYgLy0/XFxkKyhcXC5cXGQqKT8oZS0/XFxkKyk/JC8udGVzdChuZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmcobGV0dGVyc1tqXSwgbmV4dCwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJva2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJzW2orMV0gJiYgbGV0dGVyc1tqKzFdLm1hdGNoKC9cXFcvKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmcobGV0dGVyc1tqXSwgYXJnLnNsaWNlKGorMiksIGFyZyk7XG4gICAgICAgICAgICAgICAgICAgIGJyb2tlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGxldHRlcnNbal0sIGZsYWdzLnN0cmluZ3NbbGV0dGVyc1tqXV0gPyAnJyA6IHRydWUsIGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIga2V5ID0gYXJnLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIGlmICghYnJva2VuICYmIGtleSAhPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NbaSsxXSAmJiAhL14oLXwtLSlbXi1dLy50ZXN0KGFyZ3NbaSsxXSlcbiAgICAgICAgICAgICAgICAmJiAhZmxhZ3MuYm9vbHNba2V5XVxuICAgICAgICAgICAgICAgICYmIChhbGlhc2VzW2tleV0gPyAhYWxpYXNJc0Jvb2xlYW4oa2V5KSA6IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFyZyhrZXksIGFyZ3NbaSsxXSwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzW2krMV0gJiYgL3RydWV8ZmFsc2UvLnRlc3QoYXJnc1tpKzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBcmcoa2V5LCBhcmdzW2krMV0gPT09ICd0cnVlJywgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXJnKGtleSwgZmxhZ3Muc3RyaW5nc1trZXldID8gJycgOiB0cnVlLCBhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZmxhZ3MudW5rbm93bkZuIHx8IGZsYWdzLnVua25vd25GbihhcmcpICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGFyZ3YuXy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBmbGFncy5zdHJpbmdzWydfJ10gfHwgIWlzTnVtYmVyKGFyZykgPyBhcmcgOiBOdW1iZXIoYXJnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0cy5zdG9wRWFybHkpIHtcbiAgICAgICAgICAgICAgICBhcmd2Ll8ucHVzaC5hcHBseShhcmd2Ll8sIGFyZ3Muc2xpY2UoaSArIDEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaGFzS2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpKSkge1xuICAgICAgICAgICAgc2V0S2V5KGFyZ3YsIGtleS5zcGxpdCgnLicpLCBkZWZhdWx0c1trZXldKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKGFsaWFzZXNba2V5XSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHNldEtleShhcmd2LCB4LnNwbGl0KCcuJyksIGRlZmF1bHRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBpZiAob3B0c1snLS0nXSkge1xuICAgICAgICBhcmd2WyctLSddID0gbmV3IEFycmF5KCk7XG4gICAgICAgIG5vdEZsYWdzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBhcmd2WyctLSddLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub3RGbGFncy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgYXJndi5fLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3Y7XG59O1xuXG5mdW5jdGlvbiBoYXNLZXkgKG9iaiwga2V5cykge1xuICAgIHZhciBvID0gb2JqO1xuICAgIGtleXMuc2xpY2UoMCwtMSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIG8gPSAob1trZXldIHx8IHt9KTtcbiAgICB9KTtcblxuICAgIHZhciBrZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGtleSBpbiBvO1xufVxuXG5mdW5jdGlvbiBpc051bWJlciAoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHJldHVybiB0cnVlO1xuICAgIGlmICgvXjB4WzAtOWEtZl0rJC9pLnRlc3QoeCkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiAvXlstK10/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKShlWy0rXT9cXGQrKT8kLy50ZXN0KHgpO1xufVxuXG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHQvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcblx0XHQvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG5cblx0XHQvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zdCBpbmRleCA9IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciAvIG53anMgcHJvY2Vzcywgd2hpY2ggaXMgbm9kZSwgYnV0IHdlIHNob3VsZFxuICogdHJlYXQgYXMgYSBicm93c2VyLlxuICovXG5cbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHByb2Nlc3MuYnJvd3NlciA9PT0gdHJ1ZSB8fCBwcm9jZXNzLl9fbndqcykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5jb25zdCB0dHkgPSByZXF1aXJlKCd0dHknKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWzYsIDIsIDMsIDQsIDUsIDFdO1xuXG50cnkge1xuXHQvLyBPcHRpb25hbCBkZXBlbmRlbmN5IChhcyBpbiwgZG9lc24ndCBuZWVkIHRvIGJlIGluc3RhbGxlZCwgTk9UIGxpa2Ugb3B0aW9uYWxEZXBlbmRlbmNpZXMgaW4gcGFja2FnZS5qc29uKVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cdGNvbnN0IHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG5cdGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG5cdFx0ZXhwb3J0cy5jb2xvcnMgPSBbXG5cdFx0XHQyMCxcblx0XHRcdDIxLFxuXHRcdFx0MjYsXG5cdFx0XHQyNyxcblx0XHRcdDMyLFxuXHRcdFx0MzMsXG5cdFx0XHQzOCxcblx0XHRcdDM5LFxuXHRcdFx0NDAsXG5cdFx0XHQ0MSxcblx0XHRcdDQyLFxuXHRcdFx0NDMsXG5cdFx0XHQ0NCxcblx0XHRcdDQ1LFxuXHRcdFx0NTYsXG5cdFx0XHQ1Nyxcblx0XHRcdDYyLFxuXHRcdFx0NjMsXG5cdFx0XHQ2OCxcblx0XHRcdDY5LFxuXHRcdFx0NzQsXG5cdFx0XHQ3NSxcblx0XHRcdDc2LFxuXHRcdFx0NzcsXG5cdFx0XHQ3OCxcblx0XHRcdDc5LFxuXHRcdFx0ODAsXG5cdFx0XHQ4MSxcblx0XHRcdDkyLFxuXHRcdFx0OTMsXG5cdFx0XHQ5OCxcblx0XHRcdDk5LFxuXHRcdFx0MTEyLFxuXHRcdFx0MTEzLFxuXHRcdFx0MTI4LFxuXHRcdFx0MTI5LFxuXHRcdFx0MTM0LFxuXHRcdFx0MTM1LFxuXHRcdFx0MTQ4LFxuXHRcdFx0MTQ5LFxuXHRcdFx0MTYwLFxuXHRcdFx0MTYxLFxuXHRcdFx0MTYyLFxuXHRcdFx0MTYzLFxuXHRcdFx0MTY0LFxuXHRcdFx0MTY1LFxuXHRcdFx0MTY2LFxuXHRcdFx0MTY3LFxuXHRcdFx0MTY4LFxuXHRcdFx0MTY5LFxuXHRcdFx0MTcwLFxuXHRcdFx0MTcxLFxuXHRcdFx0MTcyLFxuXHRcdFx0MTczLFxuXHRcdFx0MTc4LFxuXHRcdFx0MTc5LFxuXHRcdFx0MTg0LFxuXHRcdFx0MTg1LFxuXHRcdFx0MTk2LFxuXHRcdFx0MTk3LFxuXHRcdFx0MTk4LFxuXHRcdFx0MTk5LFxuXHRcdFx0MjAwLFxuXHRcdFx0MjAxLFxuXHRcdFx0MjAyLFxuXHRcdFx0MjAzLFxuXHRcdFx0MjA0LFxuXHRcdFx0MjA1LFxuXHRcdFx0MjA2LFxuXHRcdFx0MjA3LFxuXHRcdFx0MjA4LFxuXHRcdFx0MjA5LFxuXHRcdFx0MjE0LFxuXHRcdFx0MjE1LFxuXHRcdFx0MjIwLFxuXHRcdFx0MjIxXG5cdFx0XTtcblx0fVxufSBjYXRjaCAoZXJyb3IpIHtcblx0Ly8gU3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ge1xuXHRyZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG5cdC8vIENhbWVsLWNhc2Vcblx0Y29uc3QgcHJvcCA9IGtleVxuXHRcdC5zdWJzdHJpbmcoNilcblx0XHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGsudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblxuXHQvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblx0bGV0IHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cdGlmICgvXih5ZXN8b258dHJ1ZXxlbmFibGVkKSQvaS50ZXN0KHZhbCkpIHtcblx0XHR2YWwgPSB0cnVlO1xuXHR9IGVsc2UgaWYgKC9eKG5vfG9mZnxmYWxzZXxkaXNhYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAodmFsID09PSAnbnVsbCcpIHtcblx0XHR2YWwgPSBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHR9XG5cblx0b2JqW3Byb3BdID0gdmFsO1xuXHRyZXR1cm4gb2JqO1xufSwge30pO1xuXG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID9cblx0XHRCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6XG5cdFx0dHR5LmlzYXR0eShwcm9jZXNzLnN0ZGVyci5mZCk7XG59XG5cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGNvbnN0IHtuYW1lc3BhY2U6IG5hbWUsIHVzZUNvbG9yc30gPSB0aGlzO1xuXG5cdGlmICh1c2VDb2xvcnMpIHtcblx0XHRjb25zdCBjID0gdGhpcy5jb2xvcjtcblx0XHRjb25zdCBjb2xvckNvZGUgPSAnXFx1MDAxQlszJyArIChjIDwgOCA/IGMgOiAnODs1OycgKyBjKTtcblx0XHRjb25zdCBwcmVmaXggPSBgICAke2NvbG9yQ29kZX07MW0ke25hbWV9IFxcdTAwMUJbMG1gO1xuXG5cdFx0YXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuXHRcdGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArICdcXHUwMDFCWzBtJyk7XG5cdH0gZWxzZSB7XG5cdFx0YXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG5cdGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG5cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHRyZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQoLi4uYXJncykgKyAnXFxuJyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG5cdFx0Ly8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cblx0XHRkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRyZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuXHRkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHBvcnRzLmluc3BlY3RPcHRzKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG5cdHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cdHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcblx0XHQucmVwbGFjZSgvXFxzKlxcblxccyovZywgJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVPIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwtP1xcZD9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiUHJvbWlzZSB3cmFwcGVycyBtdXN0IGJlIGVuYWJsZWQgdG8gdXNlIHRoZSBwcm9taXNlIEFQSVwiKTtcbn1cblxuZnVuY3Rpb24gYXN5bmNXcmFwcGVyIChmbiwgZ2l0LCBjaGFpbikge1xuICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCJQcm9taXNlIGludGVyZmFjZSByZXF1aXJlcyB0aGF0IGhhbmRsZXJzIGFyZSBub3Qgc3VwcGxpZWQgaW5saW5lLCBcIiArXG4gICAgICAgICAgICBcInRyYWlsaW5nIGZ1bmN0aW9uIG5vdCBhbGxvd2VkIGluIGNhbGwgdG8gXCIgKyBmbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2l0W2ZuXS5hcHBseShnaXQsIGFyZ3MpO1xuICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgIH07XG59XG5cbmZ1bmN0aW9uIHN5bmNXcmFwcGVyIChmbiwgZ2l0LCBhcGkpIHtcbiAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBnaXRbZm5dLmFwcGx5KGdpdCwgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIGFwaTtcbiAgIH07XG59XG5cbmZ1bmN0aW9uIGlzQXN5bmNDYWxsIChmbikge1xuICAgcmV0dXJuIC9eW15cXCldK3RoZW5cXHMqXFwpLy50ZXN0KGZuKSB8fCAvXFwuX3J1blxcKC8udGVzdChmbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJhc2VEaXIpIHtcblxuICAgdmFyIGdpdDtcbiAgIHZhciBjaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICB0cnkge1xuICAgICAgZ2l0ID0gcmVxdWlyZSgnLi9zcmMnKShiYXNlRGlyKTtcbiAgIH1cbiAgIGNhdGNoIChlKSB7XG4gICAgICBjaGFpbiA9IFByb21pc2UucmVqZWN0KGUpO1xuICAgfVxuXG4gICByZXR1cm4gT2JqZWN0LmtleXMoZ2l0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSkucmVkdWNlKGZ1bmN0aW9uIChhcGksIGZuKSB7XG4gICAgICBpZiAoL15ffHRoZW4vLnRlc3QoZm4pKSB7XG4gICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNBc3luY0NhbGwoZ2l0W2ZuXSkpIHtcbiAgICAgICAgIGFwaVtmbl0gPSBhc3luY1dyYXBwZXIoZm4sIGdpdCwgY2hhaW4pO1xuICAgICAgfVxuXG4gICAgICBlbHNlIHtcbiAgICAgICAgIGFwaVtmbl0gPSBzeW5jV3JhcHBlcihmbiwgZ2l0LCBhcGkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBpO1xuXG4gICB9LCB7fSk7XG5cbn07XG4iLCIoZnVuY3Rpb24gKCkge1xuXG4gICAndXNlIHN0cmljdCc7XG5cbiAgIHZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NpbXBsZS1naXQnKTtcbiAgIHZhciBkZWZlcnJlZCA9IHJlcXVpcmUoJy4vdXRpbC9kZWZlcnJlZCcpO1xuICAgdmFyIGV4aXN0cyA9IHJlcXVpcmUoJy4vdXRpbC9leGlzdHMnKTtcbiAgIHZhciBOT09QID0gZnVuY3Rpb24gKCkge307XG5cbiAgIC8qKlxuICAgICogR2l0IGhhbmRsaW5nIGZvciBub2RlLiBBbGwgcHVibGljIGZ1bmN0aW9ucyBjYW4gYmUgY2hhaW5lZCBhbmQgYWxsIGB0aGVuYCBoYW5kbGVycyBhcmUgb3B0aW9uYWwuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VEaXIgYmFzZSBkaXJlY3RvcnkgZm9yIGFsbCBwcm9jZXNzZXMgdG8gcnVuXG4gICAgKlxuICAgICogQHBhcmFtIHtPYmplY3R9IENoaWxkUHJvY2VzcyBUaGUgQ2hpbGRQcm9jZXNzIG1vZHVsZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gQnVmZmVyIFRoZSBCdWZmZXIgaW1wbGVtZW50YXRpb24gdG8gdXNlXG4gICAgKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgIGZ1bmN0aW9uIEdpdCAoYmFzZURpciwgQ2hpbGRQcm9jZXNzLCBCdWZmZXIpIHtcbiAgICAgIHRoaXMuX2Jhc2VEaXIgPSBiYXNlRGlyO1xuICAgICAgdGhpcy5fcnVuQ2FjaGUgPSBbXTtcblxuICAgICAgdGhpcy5DaGlsZFByb2Nlc3MgPSBDaGlsZFByb2Nlc3M7XG4gICAgICB0aGlzLkJ1ZmZlciA9IEJ1ZmZlcjtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBAdHlwZSB7c3RyaW5nfSBUaGUgY29tbWFuZCB0byB1c2UgdG8gcmVmZXJlbmNlIHRoZSBnaXQgYmluYXJ5XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX2NvbW1hbmQgPSAnZ2l0JztcblxuICAgLyoqXG4gICAgKiBAdHlwZSB7W2tleTogc3RyaW5nXTogc3RyaW5nfSBBbiBvYmplY3Qgb2Yga2V5PXZhbHVlIHBhaXJzIHRvIGJlIHBhc3NlZCBhcyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gdGhlXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGF3bmVkIGNoaWxkIHByb2Nlc3MuXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX2VudiA9IG51bGw7XG5cbiAgIC8qKlxuICAgICogQHR5cGUge0Z1bmN0aW9ufSBBbiBvcHRpb25hbCBoYW5kbGVyIHRvIHVzZSB3aGVuIGEgY2hpbGQgcHJvY2VzcyBpcyBjcmVhdGVkXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX291dHB1dEhhbmRsZXIgPSBudWxsO1xuXG4gICAvKipcbiAgICAqIEB0eXBlIHtib29sZWFufSBQcm9wZXJ0eSBzaG93aW5nIHdoZXRoZXIgbG9nZ2luZyB3aWxsIGJlIHNpbGVuY2VkIC0gZGVmYXVsdHMgdG8gdHJ1ZSBpbiBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRcbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5fc2lsZW50TG9nZ2luZyA9IC9wcm9kLy50ZXN0KHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcblxuICAgLyoqXG4gICAgKiBTZXRzIHRoZSBwYXRoIHRvIGEgY3VzdG9tIGdpdCBiaW5hcnksIHNob3VsZCBlaXRoZXIgYmUgYGdpdGAgd2hlbiB0aGVyZSBpcyBhbiBpbnN0YWxsYXRpb24gb2YgZ2l0IGF2YWlsYWJsZSBvblxuICAgICogdGhlIHN5c3RlbSBwYXRoLCBvciBhIGZ1bGx5IHF1YWxpZmllZCBwYXRoIHRvIHRoZSBleGVjdXRhYmxlLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kXG4gICAgKiBAcmV0dXJucyB7R2l0fVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmN1c3RvbUJpbmFyeSA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICB0aGlzLl9jb21tYW5kID0gY29tbWFuZDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBTZXRzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIGZvciB0aGUgc3Bhd25lZCBjaGlsZCBwcm9jZXNzLCBlaXRoZXIgc3VwcGx5IGJvdGggYSBuYW1lIGFuZCB2YWx1ZSBhcyBzdHJpbmdzIG9yXG4gICAgKiBhIHNpbmdsZSBvYmplY3QgdG8gZW50aXJlbHkgcmVwbGFjZSB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBuYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXVxuICAgICogQHJldHVybnMge0dpdH1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5lbnYgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgdGhpcy5fZW52ID0gbmFtZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgKHRoaXMuX2VudiA9IHRoaXMuX2VudiB8fCB7fSlbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFNldHMgdGhlIHdvcmtpbmcgZGlyZWN0b3J5IG9mIHRoZSBzdWJzZXF1ZW50IGNvbW1hbmRzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB3b3JraW5nRGlyZWN0b3J5XG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqIEByZXR1cm5zIHtHaXR9XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY3dkID0gZnVuY3Rpb24gKHdvcmtpbmdEaXJlY3RvcnksIHRoZW4pIHtcbiAgICAgIHZhciBnaXQgPSB0aGlzO1xuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmV4ZWMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgZ2l0Ll9iYXNlRGlyID0gd29ya2luZ0RpcmVjdG9yeTtcbiAgICAgICAgIGlmICghZXhpc3RzKHdvcmtpbmdEaXJlY3RvcnksIGV4aXN0cy5GT0xERVIpKSB7XG4gICAgICAgICAgICBHaXQuZXhjZXB0aW9uKGdpdCwgJ0dpdC5jd2Q6IGNhbm5vdCBjaGFuZ2UgdG8gbm9uLWRpcmVjdG9yeSBcIicgKyB3b3JraW5nRGlyZWN0b3J5ICsgJ1wiJywgbmV4dCk7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5leHQgJiYgbmV4dChudWxsLCB3b3JraW5nRGlyZWN0b3J5KTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBTZXRzIGEgaGFuZGxlciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBuZXcgY2hpbGQgcHJvY2VzcyBpcyBjcmVhdGVkLCB0aGUgaGFuZGxlciBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICAgICogd2l0aCB0aGUgbmFtZSBvZiB0aGUgY29tbWFuZCBiZWluZyBydW4gYW5kIHRoZSBzdGRvdXQgJiBzdGRlcnIgc3RyZWFtcyB1c2VkIGJ5IHRoZSBDaGlsZFByb2Nlc3MuXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIHJlcXVpcmUoJ3NpbXBsZS1naXQnKVxuICAgICogICAgLm91dHB1dEhhbmRsZXIoZnVuY3Rpb24gKGNvbW1hbmQsIHN0ZG91dCwgc3RkZXJyKSB7XG4gICAgKiAgICAgICBzdGRvdXQucGlwZShwcm9jZXNzLnN0ZG91dCk7XG4gICAgKiAgICB9KVxuICAgICogICAgLmNoZWNrb3V0KCdodHRwczovL2dpdGh1Yi5jb20vdXNlci9yZXBvLmdpdCcpO1xuICAgICpcbiAgICAqIEBzZWUgaHR0cDovL25vZGVqcy5vcmcvYXBpL2NoaWxkX3Byb2Nlc3MuaHRtbCNjaGlsZF9wcm9jZXNzX2NsYXNzX2NoaWxkcHJvY2Vzc1xuICAgICogQHNlZSBodHRwOi8vbm9kZWpzLm9yZy9hcGkvc3RyZWFtLmh0bWwjc3RyZWFtX2NsYXNzX3N0cmVhbV9yZWFkYWJsZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3V0cHV0SGFuZGxlclxuICAgICogQHJldHVybnMge0dpdH1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5vdXRwdXRIYW5kbGVyID0gZnVuY3Rpb24gKG91dHB1dEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX291dHB1dEhhbmRsZXIgPSBvdXRwdXRIYW5kbGVyO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEluaXRpYWxpemUgYSBnaXQgcmVwb1xuICAgICpcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JhcmU9ZmFsc2VdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGJhcmUsIHRoZW4pIHtcbiAgICAgIHZhciBjb21tYW5kcyA9IFsnaW5pdCddO1xuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmIChiYXJlID09PSB0cnVlKSB7XG4gICAgICAgICBjb21tYW5kcy5wdXNoKCctLWJhcmUnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kcywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgbmV4dCAmJiBuZXh0KGVycik7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogQ2hlY2sgdGhlIHN0YXR1cyBvZiB0aGUgbG9jYWwgcmVwb1xuICAgICpcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnN0YXR1cyA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuKFxuICAgICAgICAgWydzdGF0dXMnLCAnLS1wb3JjZWxhaW4nLCAnLWInLCAnLXUnXSxcbiAgICAgICAgIEdpdC5fcmVzcG9uc2VIYW5kbGVyKHRoZW4sICdTdGF0dXNTdW1tYXJ5JylcbiAgICAgICk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHN0YXNoKHMpIG9mIHRoZSBsb2NhbCByZXBvXG4gICAgKlxuICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IFtvcHRpb25zXVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuc3Rhc2hMaXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgdmFyIG9wdCA9IChoYW5kbGVyID09PSB0aGVuID8gb3B0aW9ucyA6IG51bGwpIHx8IHt9O1xuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBvcHQuc3BsaXR0ZXIgfHwgJzs7OzsnO1xuICAgICAgdmFyIGNvbW1hbmQgPSBbXG4gICAgICAgICBcInN0YXNoXCIsXG4gICAgICAgICBcImxpc3RcIixcbiAgICAgICAgIFwiLS1wcmV0dHk9Zm9ybWF0OiVIICVhaSAlcyVkICVhTiAlYWVcIi5yZXBsYWNlKC9cXHMrL2csIHNwbGl0dGVyKSArIHJlcXVpcmUoJy4vcmVzcG9uc2VzL0xpc3RMb2dTdW1tYXJ5JykuQ09NTUlUX0JPVU5EQVJZXG4gICAgICBdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHQpKSB7XG4gICAgICAgICBjb21tYW5kID0gY29tbWFuZC5jb25jYXQob3B0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLFxuICAgICAgICAgR2l0Ll9yZXNwb25zZUhhbmRsZXIoaGFuZGxlciwgJ0xpc3RMb2dTdW1tYXJ5Jywgc3BsaXR0ZXIpXG4gICAgICApO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBTdGFzaCB0aGUgbG9jYWwgcmVwb1xuICAgICpcbiAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnN0YXNoID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgdmFyIGNvbW1hbmQgPSBbXCJzdGFzaFwiXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQgPSBjb21tYW5kLmNvbmNhdChvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICBoYW5kbGVyICYmIGhhbmRsZXIoZXJyLCAhZXJyICYmIGRhdGEpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIENsb25lIGEgZ2l0IHJlcG9cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwb1BhdGhcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbFBhdGhcbiAgICAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zXSBPcHRpb25hbCBhcnJheSBvZiBvcHRpb25zIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgY2xvbmUgY29tbWFuZFxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAocmVwb1BhdGgsIGxvY2FsUGF0aCwgb3B0aW9ucywgdGhlbikge1xuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICB2YXIgY29tbWFuZCA9IFsnY2xvbmUnXS5jb25jYXQoR2l0LnRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGNvbW1hbmQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIG5leHQgJiYgbmV4dChlcnIsIGRhdGEpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIE1pcnJvciBhIGdpdCByZXBvXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG9QYXRoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxQYXRoXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5taXJyb3IgPSBmdW5jdGlvbiAocmVwb1BhdGgsIGxvY2FsUGF0aCwgdGhlbikge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvbmUocmVwb1BhdGgsIGxvY2FsUGF0aCwgWyctLW1pcnJvciddLCB0aGVuKTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogTW92ZXMgb25lIG9yIG1vcmUgZmlsZXMgdG8gYSBuZXcgZGVzdGluYXRpb24uXG4gICAgKlxuICAgICogQHNlZSBodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW12XG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGZyb21cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUubXYgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHRoZW4pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgY29tbWFuZCA9IFtdLmNvbmNhdChmcm9tKTtcbiAgICAgIGNvbW1hbmQudW5zaGlmdCgnbXYnLCAnLXYnKTtcbiAgICAgIGNvbW1hbmQucHVzaCh0byk7XG5cbiAgICAgIHRoaXMuX3J1bihjb21tYW5kLCBHaXQuX3Jlc3BvbnNlSGFuZGxlcihoYW5kbGVyLCAnTW92ZVN1bW1hcnknKSlcbiAgIH07XG5cbiAgIC8qKlxuICAgICogSW50ZXJuYWxseSB1c2VzIHB1bGwgYW5kIHRhZ3MgdG8gZ2V0IHRoZSBsaXN0IG9mIHRhZ3MgdGhlbiBjaGVja3Mgb3V0IHRoZSBsYXRlc3QgdGFnLlxuICAgICpcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmNoZWNrb3V0TGF0ZXN0VGFnID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgICAgIHZhciBnaXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMucHVsbChmdW5jdGlvbigpIHtcbiAgICAgICAgIGdpdC50YWdzKGZ1bmN0aW9uKGVyciwgdGFncykge1xuICAgICAgICAgICAgZ2l0LmNoZWNrb3V0KHRhZ3MubGF0ZXN0LCB0aGVuKTtcbiAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEFkZHMgb25lIG9yIG1vcmUgZmlsZXMgdG8gc291cmNlIGNvbnRyb2xcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZmlsZXNcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChmaWxlcywgdGhlbikge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bihbJ2FkZCddLmNvbmNhdChmaWxlcyksIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIENvbW1pdHMgY2hhbmdlcyBpbiB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAtIHdoZW4gc3BlY2lmaWMgZmlsZSBwYXRocyBhcmUgc3VwcGxpZWQsIG9ubHkgY2hhbmdlcyBvbiB0aG9zZVxuICAgICogZmlsZXMgd2lsbCBiZSBjb21taXR0ZWQuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG1lc3NhZ2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbZmlsZXNdXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiAobWVzc2FnZSwgZmlsZXMsIG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgY29tbWFuZCA9IFsnY29tbWl0J107XG5cbiAgICAgIFtdLmNvbmNhdChtZXNzYWdlKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICBjb21tYW5kLnB1c2goJy1tJywgbWVzc2FnZSk7XG4gICAgICB9KTtcblxuICAgICAgW10ucHVzaC5hcHBseShjb21tYW5kLCBbXS5jb25jYXQodHlwZW9mIGZpbGVzID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoZmlsZXMpID8gZmlsZXMgOiBbXSkpO1xuXG4gICAgICBHaXQuX2FwcGVuZE9wdGlvbnMoY29tbWFuZCwgR2l0LnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3VtZW50cykpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKFxuICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgIEdpdC5fcmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIsICdDb21taXRTdW1tYXJ5JylcbiAgICAgICk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEdldHMgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciBsb2dnaW5nLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICAgICpcbiAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX2dldExvZyA9IGZ1bmN0aW9uIChsZXZlbCwgbWVzc2FnZSkge1xuICAgICAgdmFyIGxvZyA9IHRoaXMuX3NpbGVudExvZ2dpbmcgPyBOT09QIDogY29uc29sZVtsZXZlbF0uYmluZChjb25zb2xlKTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgbG9nKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvZztcbiAgIH07XG5cbiAgIC8qKlxuICAgICogUHVsbCB0aGUgdXBkYXRlZCBjb250ZW50cyBvZiB0aGUgY3VycmVudCByZXBvXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtyZW1vdGVdIFdoZW4gc3VwcGxpZWQgbXVzdCBhbHNvIGluY2x1ZGUgdGhlIGJyYW5jaFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFticmFuY2hdIFdoZW4gc3VwcGxpZWQgbXVzdCBhbHNvIGluY2x1ZGUgdGhlIHJlbW90ZVxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25hbGx5IGluY2x1ZGUgc2V0IG9mIG9wdGlvbnMgdG8gbWVyZ2UgaW50byB0aGUgY29tbWFuZFxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUucHVsbCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCwgb3B0aW9ucywgdGhlbikge1xuICAgICAgdmFyIGNvbW1hbmQgPSBbXCJwdWxsXCJdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3RlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYnJhbmNoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgY29tbWFuZC5wdXNoKHJlbW90ZSwgYnJhbmNoKTtcbiAgICAgIH1cblxuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBHaXQuX3Jlc3BvbnNlSGFuZGxlcihoYW5kbGVyLCAnUHVsbFN1bW1hcnknKSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEZldGNoIHRoZSB1cGRhdGVkIGNvbnRlbnRzIG9mIHRoZSBjdXJyZW50IHJlcG8uXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqICAgLmZldGNoKCd1cHN0cmVhbScsICdtYXN0ZXInKSAvLyBmZXRjaGVzIGZyb20gbWFzdGVyIG9uIHJlbW90ZSBuYW1lZCB1cHN0cmVhbVxuICAgICogICAuZmV0Y2goZnVuY3Rpb24gKCkge30pIC8vIHJ1bnMgZmV0Y2ggYWdhaW5zdCBkZWZhdWx0IHJlbW90ZSBhbmQgYnJhbmNoIGFuZCBjYWxscyBmdW5jdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVtb3RlXVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFticmFuY2hdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChyZW1vdGUsIGJyYW5jaCwgdGhlbikge1xuICAgICAgdmFyIGNvbW1hbmQgPSBbXCJmZXRjaFwiXTtcbiAgICAgIHZhciBuZXh0ID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgaWYgKHR5cGVvZiByZW1vdGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBicmFuY2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICBjb21tYW5kLnB1c2gocmVtb3RlLCBicmFuY2gpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZW1vdGUpKSB7XG4gICAgICAgICBjb21tYW5kID0gY29tbWFuZC5jb25jYXQocmVtb3RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihcbiAgICAgICAgIGNvbW1hbmQsXG4gICAgICAgICBHaXQuX3Jlc3BvbnNlSGFuZGxlcihuZXh0LCAnRmV0Y2hTdW1tYXJ5JyksXG4gICAgICAgICB7XG4gICAgICAgICAgICBjb25jYXRTdGRFcnI6IHRydWVcbiAgICAgICAgIH1cbiAgICAgICk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIERpc2FibGVzL2VuYWJsZXMgdGhlIHVzZSBvZiB0aGUgY29uc29sZSBmb3IgcHJpbnRpbmcgd2FybmluZ3MgYW5kIGVycm9ycywgYnkgZGVmYXVsdCBtZXNzYWdlcyBhcmUgbm90IHNob3duIGluXG4gICAgKiBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQuXG4gICAgKlxuICAgICogQHBhcmFtIHtib29sZWFufSBzaWxlbmNlXG4gICAgKiBAcmV0dXJucyB7R2l0fVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnNpbGVudCA9IGZ1bmN0aW9uIChzaWxlbmNlKSB7XG4gICAgICB0aGlzLl9zaWxlbnRMb2dnaW5nID0gISFzaWxlbmNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIExpc3QgYWxsIHRhZ3MuIFdoZW4gdXNpbmcgZ2l0IDIuNy4wIG9yIGFib3ZlLCBpbmNsdWRlIGFuIG9wdGlvbnMgb2JqZWN0IHdpdGggYFwiLS1zb3J0XCI6IFwicHJvcGVydHktbmFtZVwiYCB0b1xuICAgICogc29ydCB0aGUgdGFncyBieSB0aGF0IHByb3BlcnR5IGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgc2VtYW50aWMgdmVyc2lvbmluZyBzb3J0LlxuICAgICpcbiAgICAqIE5vdGUsIHN1cHBseWluZyB0aGlzIG9wdGlvbiB3aGVuIGl0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBHaXQgdmVyc2lvbiB3aWxsIGNhdXNlIHRoZSBvcGVyYXRpb24gdG8gZmFpbC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS50YWdzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBuZXh0ID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgY29tbWFuZCA9IFsnLWwnXTtcbiAgICAgIEdpdC5fYXBwZW5kT3B0aW9ucyhjb21tYW5kLCBHaXQudHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJndW1lbnRzKSk7XG5cbiAgICAgIHZhciBoYXNDdXN0b21Tb3J0ID0gY29tbWFuZC5zb21lKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgIHJldHVybiAvXi0tc29ydD0vLnRlc3Qob3B0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy50YWcoXG4gICAgICAgICBjb21tYW5kLFxuICAgICAgICAgR2l0Ll9yZXNwb25zZUhhbmRsZXIobmV4dCwgJ1RhZ0xpc3QnLCBbaGFzQ3VzdG9tU29ydF0pXG4gICAgICApO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBSZWJhc2VzIHRoZSBjdXJyZW50IHdvcmtpbmcgY29weS4gT3B0aW9ucyBjYW4gYmUgc3VwcGxpZWQgZWl0aGVyIGFzIGFuIGFycmF5IG9mIHN0cmluZyBwYXJhbWV0ZXJzXG4gICAgKiB0byBiZSBzZW50IHRvIHRoZSBgZ2l0IHJlYmFzZWAgY29tbWFuZCwgb3IgYSBzdGFuZGFyZCBvcHRpb25zIG9iamVjdC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmdbXX0gW29wdGlvbnNdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqIEByZXR1cm5zIHtHaXR9XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUucmViYXNlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgdmFyIGNvbW1hbmQgPSBbJ3JlYmFzZSddO1xuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICBoYW5kbGVyICYmIGhhbmRsZXIoZXJyLCAhZXJyICYmIGRhdGEpO1xuICAgICAgfSlcbiAgIH07XG5cbiAgIC8qKlxuICAgICogUmVzZXQgYSByZXBvXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFttb2RlPXNvZnRdIEVpdGhlciBhbiBhcnJheSBvZiBhcmd1bWVudHMgc3VwcG9ydGVkIGJ5IHRoZSAnZ2l0IHJlc2V0JyBjb21tYW5kLCBvciB0aGVcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyB2YWx1ZSAnc29mdCcgb3IgJ2hhcmQnIHRvIHNldCB0aGUgcmVzZXQgbW9kZS5cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKG1vZGUsIHRoZW4pIHtcbiAgICAgIHZhciBjb21tYW5kID0gWydyZXNldCddO1xuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICBpZiAobmV4dCA9PT0gbW9kZSB8fCB0eXBlb2YgbW9kZSA9PT0gJ3N0cmluZycgfHwgIW1vZGUpIHtcbiAgICAgICAgIHZhciBtb2RlU3RyID0gWydtaXhlZCcsICdzb2Z0JywgJ2hhcmQnXS5pbmNsdWRlcyhtb2RlKSA/IG1vZGUgOiAnc29mdCc7XG4gICAgICAgICBjb21tYW5kLnB1c2goJy0tJyArIG1vZGVTdHIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtb2RlKSkge1xuICAgICAgICAgY29tbWFuZC5wdXNoLmFwcGx5KGNvbW1hbmQsIG1vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGNvbW1hbmQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgIG5leHQgJiYgbmV4dChlcnIgfHwgbnVsbCk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogUmV2ZXJ0IG9uZSBvciBtb3JlIGNvbW1pdHMgaW4gdGhlIGxvY2FsIHdvcmtpbmcgY29weVxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21taXQgVGhlIGNvbW1pdCB0byByZXZlcnQuIENhbiBiZSBhbnkgaGFzaCwgb2Zmc2V0IChlZzogYEhFQUR+MmApIG9yIHJhbmdlIChlZzogYG1hc3Rlcn41Li5tYXN0ZXJ+MmApXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0XG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoY29tbWl0LCBvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgbmV4dCA9IEdpdC50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgICAgIHZhciBjb21tYW5kID0gWydyZXZlcnQnXTtcblxuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb21taXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5leHQgJiYgbmV4dChuZXcgVHlwZUVycm9yKFwiQ29tbWl0IG11c3QgYmUgYSBzdHJpbmdcIikpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbW1hbmQucHVzaChjb21taXQpO1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICBuZXh0ICYmIG5leHQoZXJyIHx8IG51bGwpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEFkZCBhIGxpZ2h0d2VpZ2h0IHRhZyB0byB0aGUgaGVhZCBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuYWRkVGFnID0gZnVuY3Rpb24gKG5hbWUsIHRoZW4pIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGVuICYmIHRoZW4obmV3IFR5cGVFcnJvcihcIkdpdC5hZGRUYWcgcmVxdWlyZXMgYSB0YWcgbmFtZVwiKSk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudGFnKFtuYW1lXSwgdGhlbik7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEFkZCBhbiBhbm5vdGF0ZWQgdGFnIHRvIHRoZSBoZWFkIG9mIHRoZSBjdXJyZW50IGJyYW5jaFxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTWVzc2FnZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuYWRkQW5ub3RhdGVkVGFnID0gZnVuY3Rpb24gKHRhZ05hbWUsIHRhZ01lc3NhZ2UsIHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnRhZyhbJy1hJywgJy1tJywgdGFnTWVzc2FnZSwgdGFnTmFtZV0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIENoZWNrIG91dCBhIHRhZyBvciByZXZpc2lvbiwgYW55IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50cyBjYW4gYmUgcGFzc2VkIHRvIHRoZSBgZ2l0IGNoZWNrb3V0YCBjb21tYW5kXG4gICAgKiBieSBzdXBwbHlpbmcgZWl0aGVyIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgYXMgdGhlIGB3aGF0YCBwYXJhbWV0ZXIuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHdoYXQgT25lIG9yIG1vcmUgY29tbWFuZHMgdG8gcGFzcyB0byBgZ2l0IGNoZWNrb3V0YFxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY2hlY2tvdXQgPSBmdW5jdGlvbiAod2hhdCwgdGhlbikge1xuICAgICAgdmFyIGNvbW1hbmQgPSBbJ2NoZWNrb3V0J107XG4gICAgICBjb21tYW5kID0gY29tbWFuZC5jb25jYXQod2hhdCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgdGhlbiAmJiB0aGVuKGVyciwgIWVyciAmJiB0aGlzLl9wYXJzZUNoZWNrb3V0KGRhdGEpKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBDaGVjayBvdXQgYSByZW1vdGUgYnJhbmNoXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaE5hbWUgbmFtZSBvZiBicmFuY2hcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFBvaW50IChlLmcgb3JpZ2luL2RldmVsb3BtZW50KVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY2hlY2tvdXRCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoTmFtZSwgc3RhcnRQb2ludCwgdGhlbikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXQoWyctYicsIGJyYW5jaE5hbWUsIHN0YXJ0UG9pbnRdLCB0aGVuKTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogQ2hlY2sgb3V0IGEgbG9jYWwgYnJhbmNoXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaE5hbWUgb2YgYnJhbmNoXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5jaGVja291dExvY2FsQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0KFsnLWInLCBicmFuY2hOYW1lXSwgdGhlbik7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGxvY2FsIGJyYW5jaFxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2hOYW1lIG5hbWUgb2YgYnJhbmNoXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5kZWxldGVMb2NhbEJyYW5jaCA9IGZ1bmN0aW9uIChicmFuY2hOYW1lLCB0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5icmFuY2goWyctZCcsIGJyYW5jaE5hbWVdLCB0aGVuKTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogTGlzdCBhbGwgYnJhbmNoZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmJyYW5jaCA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgaXNEZWxldGUsIHJlc3BvbnNlSGFuZGxlcjtcbiAgICAgIHZhciBuZXh0ID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgdmFyIGNvbW1hbmQgPSBbJ2JyYW5jaCddO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCB8fCBuZXh0ID09PSBvcHRpb25zKSB7XG4gICAgICAgICBjb21tYW5kLnB1c2goJy1hJywgJy12Jyk7XG4gICAgICB9XG5cbiAgICAgIGlzRGVsZXRlID0gWyctZCcsICctRCcsICctLWRlbGV0ZSddLnJlZHVjZShmdW5jdGlvbiAoaXNEZWxldGUsIGZsYWcpIHtcbiAgICAgICAgIHJldHVybiBpc0RlbGV0ZSB8fCBjb21tYW5kLmluZGV4T2YoZmxhZykgPiAwO1xuICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICByZXNwb25zZUhhbmRsZXIgPSBpc0RlbGV0ZVxuICAgICAgICAgPyBHaXQuX3Jlc3BvbnNlSGFuZGxlcihuZXh0LCAnQnJhbmNoRGVsZXRlU3VtbWFyeScsIGZhbHNlKVxuICAgICAgICAgOiBHaXQuX3Jlc3BvbnNlSGFuZGxlcihuZXh0LCAnQnJhbmNoU3VtbWFyeScpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGNvbW1hbmQsIHJlc3BvbnNlSGFuZGxlcik7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFJldHVybiBsaXN0IG9mIGxvY2FsIGJyYW5jaGVzXG4gICAgKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuYnJhbmNoTG9jYWwgPSBmdW5jdGlvbiAodGhlbikge1xuICAgICAgcmV0dXJuIHRoaXMuYnJhbmNoKFsnLXYnXSwgdGhlbik7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEFkZCBjb25maWcgdG8gbG9jYWwgZ2l0IGluc3RhbmNlXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBjb25maWd1cmF0aW9uIGtleSAoZS5nIHVzZXIubmFtZSlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleSAoZS5nIHlvdXIgbmFtZSlcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmFkZENvbmZpZyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCB0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuKFsnY29uZmlnJywgJy0tbG9jYWwnLCBrZXksIHZhbHVlXSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgdGhlbiAmJiB0aGVuKGVyciwgIWVyciAmJiBkYXRhKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBFeGVjdXRlcyBhbnkgY29tbWFuZCBhZ2FpbnN0IHRoZSBnaXQgYmluYXJ5LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW118T2JqZWN0fSBjb21tYW5kc1xuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKlxuICAgICogQHJldHVybnMge0dpdH1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5yYXcgPSBmdW5jdGlvbiAoY29tbWFuZHMsIHRoZW4pIHtcbiAgICAgIHZhciBjb21tYW5kID0gW107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb21tYW5kcykpIHtcbiAgICAgICAgIGNvbW1hbmQgPSBjb21tYW5kcy5zbGljZSgwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIEdpdC50cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICghY29tbWFuZC5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmV4ZWMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmV4dCAmJiBuZXh0KG5ldyBFcnJvcignUmF3OiBtdXN0IHN1cHBseSBvbmUgb3IgbW9yZSBjb21tYW5kIHRvIGV4ZWN1dGUnKSwgbnVsbCk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICBuZXh0ICYmIG5leHQoZXJyLCAhZXJyICYmIGRhdGEgfHwgbnVsbCk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogQWRkIGEgc3VibW9kdWxlXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVBZGQgPSBmdW5jdGlvbiAocmVwbywgcGF0aCwgdGhlbikge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bihbJ3N1Ym1vZHVsZScsICdhZGQnLCByZXBvLCBwYXRoXSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgdGhlbiAmJiB0aGVuKGVycik7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIHN1Ym1vZHVsZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbYXJnc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnN1Ym1vZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uIChhcmdzLCB0aGVuKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICB0aGlzLl9nZXRMb2coJ3dhcm4nLCAnR2l0I3N1Ym1vZHVsZVVwZGF0ZTogYXJncyBzaG91bGQgYmUgc3VwcGxpZWQgYXMgYW4gYXJyYXkgb2YgaW5kaXZpZHVhbCBhcmd1bWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICB2YXIgY29tbWFuZCA9IChhcmdzICE9PSBuZXh0KSA/IGFyZ3MgOiBbXTtcblxuICAgICAgcmV0dXJuIHRoaXMuc3ViTW9kdWxlKFsndXBkYXRlJ10uY29uY2F0KGNvbW1hbmQpLCBmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICBuZXh0ICYmIG5leHQoZXJyLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBJbml0aWFsaXplIHN1Ym1vZHVsZXNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbYXJnc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnN1Ym1vZHVsZUluaXQgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgdGhpcy5fZ2V0TG9nKCd3YXJuJywgJ0dpdCNzdWJtb2R1bGVJbml0OiBhcmdzIHNob3VsZCBiZSBzdXBwbGllZCBhcyBhbiBhcnJheSBvZiBpbmRpdmlkdWFsIGFyZ3VtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dCA9IEdpdC50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgICAgIHZhciBjb21tYW5kID0gKGFyZ3MgIT09IG5leHQpID8gYXJncyA6IFtdO1xuXG4gICAgICByZXR1cm4gdGhpcy5zdWJNb2R1bGUoWydpbml0J10uY29uY2F0KGNvbW1hbmQpLCBmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICBuZXh0ICYmIG5leHQoZXJyLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBDYWxsIGFueSBgZ2l0IHN1Ym1vZHVsZWAgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHMgcGFzc2VkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3B0aW9uc1xuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuc3ViTW9kdWxlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGVuICYmIHRoZW4obmV3IFR5cGVFcnJvcihcIkdpdC5zdWJNb2R1bGUgcmVxdWlyZXMgYW4gYXJyYXkgb2YgYXJndW1lbnRzXCIpKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9uc1swXSAhPT0gJ3N1Ym1vZHVsZScpIHtcbiAgICAgICAgIG9wdGlvbnMudW5zaGlmdCgnc3VibW9kdWxlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4ob3B0aW9ucywgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgdGhlbiAmJiB0aGVuKGVyciB8fCBudWxsLCBlcnIgPyBudWxsIDogZGF0YSk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogTGlzdCByZW1vdGVcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbYXJnc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmxpc3RSZW1vdGUgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgICAgdmFyIG5leHQgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICB2YXIgZGF0YSA9IG5leHQgPT09IGFyZ3MgfHwgYXJncyA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmdzO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICB0aGlzLl9nZXRMb2coJ3dhcm4nLCAnR2l0I2xpc3RSZW1vdGU6IGFyZ3Mgc2hvdWxkIGJlIHN1cHBsaWVkIGFzIGFuIGFycmF5IG9mIGluZGl2aWR1YWwgYXJndW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oWydscy1yZW1vdGUnXS5jb25jYXQoZGF0YSksIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIG5leHQgJiYgbmV4dChlcnIsIGRhdGEpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEFkZHMgYSByZW1vdGUgdG8gdGhlIGxpc3Qgb2YgcmVtb3Rlcy5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlTmFtZSBOYW1lIG9mIHRoZSByZXBvc2l0b3J5IC0gZWcgXCJ1cHN0cmVhbVwiXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3RlUmVwbyBGdWxseSBxdWFsaWZpZWQgU1NIIG9yIEhUVFAoUykgcGF0aCB0byB0aGUgcmVtb3RlIHJlcG9cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICogQHJldHVybnMgeyp9XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuYWRkUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW4oWydyZW1vdGUnLCAnYWRkJywgcmVtb3RlTmFtZSwgcmVtb3RlUmVwb10sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFJlbW92ZXMgYW4gZW50cnkgZnJvbSB0aGUgbGlzdCBvZiByZW1vdGVzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVOYW1lIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgLSBlZyBcInVwc3RyZWFtXCJcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICogQHJldHVybnMgeyp9XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUucmVtb3ZlUmVtb3RlID0gZnVuY3Rpb24gKHJlbW90ZU5hbWUsIHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW4oWydyZW1vdGUnLCAncmVtb3ZlJywgcmVtb3RlTmFtZV0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEdldHMgdGhlIGN1cnJlbnRseSBhdmFpbGFibGUgcmVtb3Rlcywgc2V0dGluZyB0aGUgb3B0aW9uYWwgdmVyYm9zZSBhcmd1bWVudCB0byB0cnVlIGluY2x1ZGVzIGFkZGl0aW9uYWxcbiAgICAqIGRldGFpbCBvbiB0aGUgcmVtb3RlcyB0aGVtc2VsdmVzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ZlcmJvc2U9ZmFsc2VdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5nZXRSZW1vdGVzID0gZnVuY3Rpb24gKHZlcmJvc2UsIHRoZW4pIHtcbiAgICAgIHZhciBuZXh0ID0gR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuICAgICAgdmFyIGFyZ3MgPSB2ZXJib3NlID09PSB0cnVlID8gWyctdiddIDogW107XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZShhcmdzLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICBuZXh0ICYmIG5leHQoZXJyLCAhZXJyICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRyaW0oKS5zcGxpdCgnXFxuJykuZmlsdGVyKEJvb2xlYW4pLnJlZHVjZShmdW5jdGlvbiAocmVtb3RlcywgcmVtb3RlKSB7XG4gICAgICAgICAgICAgICB2YXIgZGV0YWlsID0gcmVtb3RlLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBkZXRhaWwuc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgaWYgKCFyZW1vdGVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdGVzW25hbWVdID0gcmVtb3Rlc1tyZW1vdGVzLmxlbmd0aF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgcmVmczoge31cbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmIChkZXRhaWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICByZW1vdGVzW25hbWVdLnJlZnNbZGV0YWlsLnBvcCgpLnJlcGxhY2UoL1teYS16XS9nLCAnJyldID0gZGV0YWlsLnBvcCgpO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICByZXR1cm4gcmVtb3RlcztcbiAgICAgICAgICAgIH0sIFtdKS5zbGljZSgwKTtcbiAgICAgICAgIH0oKSk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogQ2FsbCBhbnkgYGdpdCByZW1vdGVgIGZ1bmN0aW9uIHdpdGggYXJndW1lbnRzIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnJlbW90ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmV4ZWMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhlbiAmJiB0aGVuKG5ldyBUeXBlRXJyb3IoXCJHaXQucmVtb3RlIHJlcXVpcmVzIGFuIGFycmF5IG9mIGFyZ3VtZW50c1wiKSk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnNbMF0gIT09ICdyZW1vdGUnKSB7XG4gICAgICAgICBvcHRpb25zLnVuc2hpZnQoJ3JlbW90ZScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIgfHwgbnVsbCwgZXJyID8gbnVsbCA6IGRhdGEpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIE1lcmdlcyBmcm9tIG9uZSBicmFuY2ggdG8gYW5vdGhlciwgZXF1aXZhbGVudCB0byBydW5uaW5nIGBnaXQgbWVyZ2UgJHtmcm9tfSAkW3RvfWAsIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgY2FuXG4gICAgKiBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbW1hbmQgb3IgbnVsbCAvIG9taXR0ZWQgdG8gYmUgaWdub3JlZC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRvXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLm1lcmdlRnJvbVRvID0gZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgY29tbWFuZHMgPSBbXG4gICAgICAgICBmcm9tLFxuICAgICAgICAgdG9cbiAgICAgIF07XG4gICAgICB2YXIgY2FsbGJhY2sgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMubWVyZ2UoY29tbWFuZHMsIGNhbGxiYWNrKTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogUnVucyBhIG1lcmdlLCBgb3B0aW9uc2AgY2FuIGJlIGVpdGhlciBhbiBhcnJheSBvZiBhcmd1bWVudHNcbiAgICAqIHN1cHBvcnRlZCBieSB0aGUgW2BnaXQgbWVyZ2VgXShodHRwczovL2dpdC1zY20uY29tL2RvY3MvZ2l0LW1lcmdlKVxuICAgICogb3IgYW4gb3B0aW9ucyBvYmplY3QuXG4gICAgKlxuICAgICogQ29uZmxpY3RzIGR1cmluZyB0aGUgbWVyZ2UgcmVzdWx0IGluIGFuIGVycm9yIHJlc3BvbnNlLFxuICAgICogdGhlIHJlc3BvbnNlIHR5cGUgd2hldGhlciBpdCB3YXMgYW4gZXJyb3Igb3Igc3VjY2VzcyB3aWxsIGJlIGEgTWVyZ2VTdW1tYXJ5IGluc3RhbmNlLlxuICAgICogV2hlbiBzdWNjZXNzZnVsLCB0aGUgTWVyZ2VTdW1tYXJ5IGhhcyBhbGwgZGV0YWlsIGZyb20gYSB0aGUgUHVsbFN1bW1hcnlcbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdCB8IHN0cmluZ1tdfSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICogQHJldHVybnMgeyp9XG4gICAgKlxuICAgICogQHNlZSAuL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanNcbiAgICAqIEBzZWUgLi9yZXNwb25zZXMvUHVsbFN1bW1hcnkuanNcbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdXNlckhhbmRsZXIgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykgfHwgTk9PUDtcbiAgICAgIHZhciBtZXJnZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXJyLCBtZXJnZVN1bW1hcnkpIHtcbiAgICAgICAgIGlmICghZXJyICYmIG1lcmdlU3VtbWFyeS5mYWlsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBHaXQuZmFpbChzZWxmLCBtZXJnZVN1bW1hcnksIHVzZXJIYW5kbGVyKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgdXNlckhhbmRsZXIoZXJyLCBtZXJnZVN1bW1hcnkpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbW1hbmQgPSBbXTtcbiAgICAgIEdpdC5fYXBwZW5kT3B0aW9ucyhjb21tYW5kLCBHaXQudHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgICBjb21tYW5kLnB1c2guYXBwbHkoY29tbWFuZCwgR2l0LnRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmd1bWVudHMpKTtcblxuICAgICAgaWYgKGNvbW1hbmRbMF0gIT09ICdtZXJnZScpIHtcbiAgICAgICAgIGNvbW1hbmQudW5zaGlmdCgnbWVyZ2UnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoZW4gJiYgdGhlbihuZXcgVHlwZUVycm9yKFwiR2l0Lm1lcmdlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBvcHRpb25cIikpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgR2l0Ll9yZXNwb25zZUhhbmRsZXIobWVyZ2VIYW5kbGVyLCAnTWVyZ2VTdW1tYXJ5JyksIHtcbiAgICAgICAgIGNvbmNhdFN0ZEVycjogdHJ1ZVxuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIENhbGwgYW55IGBnaXQgdGFnYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS50YWcgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoZW4gJiYgdGhlbihuZXcgVHlwZUVycm9yKFwiR2l0LnRhZyByZXF1aXJlcyBhbiBhcnJheSBvZiBhcmd1bWVudHNcIikpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zWzBdICE9PSAndGFnJykge1xuICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KCd0YWcnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihvcHRpb25zLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICB0aGVuICYmIHRoZW4oZXJyIHx8IG51bGwsIGVyciA/IG51bGwgOiBkYXRhKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBVcGRhdGVzIHJlcG9zaXRvcnkgc2VydmVyIGluZm9cbiAgICAqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS51cGRhdGVTZXJ2ZXJJbmZvID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW4oW1widXBkYXRlLXNlcnZlci1pbmZvXCJdLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICB0aGVuICYmIHRoZW4oZXJyLCAhZXJyICYmIGRhdGEpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFB1c2hlcyB0aGUgY3VycmVudCBjb21taXR0ZWQgY2hhbmdlcyB0byBhIHJlbW90ZSwgb3B0aW9uYWxseSBzcGVjaWZ5IHRoZSBuYW1lcyBvZiB0aGUgcmVtb3RlIGFuZCBicmFuY2ggdG8gdXNlXG4gICAgKiB3aGVuIHB1c2hpbmcuIFN1cHBseSBtdWx0aXBsZSBvcHRpb25zIGFzIGFuIGFycmF5IG9mIHN0cmluZ3MgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IC0gc2VlIGV4YW1wbGVzIGJlbG93LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcmVtb3RlXVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFticmFuY2hdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHJlbW90ZSwgYnJhbmNoLCB0aGVuKSB7XG4gICAgICB2YXIgY29tbWFuZCA9IFtdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVtb3RlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYnJhbmNoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgY29tbWFuZC5wdXNoKHJlbW90ZSwgYnJhbmNoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVtb3RlKSkge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQuY29uY2F0KHJlbW90ZSk7XG4gICAgICB9XG5cbiAgICAgIEdpdC5fYXBwZW5kT3B0aW9ucyhjb21tYW5kLCBHaXQudHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJndW1lbnRzKSk7XG5cbiAgICAgIGlmIChjb21tYW5kWzBdICE9PSAncHVzaCcpIHtcbiAgICAgICAgIGNvbW1hbmQudW5zaGlmdCgncHVzaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGNvbW1hbmQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIGhhbmRsZXIgJiYgaGFuZGxlcihlcnIsICFlcnIgJiYgZGF0YSk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogUHVzaGVzIHRoZSBjdXJyZW50IHRhZyBjaGFuZ2VzIHRvIGEgcmVtb3RlIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBVUkwgb3IgbmFtZWQgcmVtb3RlLiBXaGVuIG5vdCBzcGVjaWZpZWQgdXNlcyB0aGVcbiAgICAqIGRlZmF1bHQgY29uZmlndXJlZCByZW1vdGUgc3BlYy5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3JlbW90ZV1cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnB1c2hUYWdzID0gZnVuY3Rpb24gKHJlbW90ZSwgdGhlbikge1xuICAgICAgdmFyIGNvbW1hbmQgPSBbJ3B1c2gnXTtcbiAgICAgIGlmICh0eXBlb2YgcmVtb3RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICBjb21tYW5kLnB1c2gocmVtb3RlKTtcbiAgICAgIH1cbiAgICAgIGNvbW1hbmQucHVzaCgnLS10YWdzJyk7XG5cbiAgICAgIHRoZW4gPSB0eXBlb2YgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PT0gXCJmdW5jdGlvblwiID8gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgdGhlbiAmJiB0aGVuKGVyciwgIWVyciAmJiBkYXRhKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlc1xuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUucm0gPSBmdW5jdGlvbiAoZmlsZXMsIHRoZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLl9ybShmaWxlcywgJy1mJywgdGhlbik7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFJlbW92ZXMgdGhlIG5hbWVkIGZpbGVzIGZyb20gc291cmNlIGNvbnRyb2wgYnV0IGtlZXBzIHRoZW0gb24gZGlzayByYXRoZXIgdGhhbiBkZWxldGluZyB0aGVtIGVudGlyZWx5LiBUb1xuICAgICogY29tcGxldGVseSByZW1vdmUgdGhlIGZpbGVzLCB1c2UgYHJtYC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gZmlsZXNcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnJtS2VlcExvY2FsID0gZnVuY3Rpb24gKGZpbGVzLCB0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm0oZmlsZXMsICctLWNhY2hlZCcsIHRoZW4pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGluIGEgdHJlZSBiYXNlZCBvbiBjb21taXQgaGFzaC4gUGFzc2luZyBpbiBhbiBvYmplY3QgaGFzaCByZXR1cm5zIHRoZSBvYmplY3QncyBjb250ZW50LFxuICAgICogc2l6ZSwgYW5kIHR5cGUuXG4gICAgKlxuICAgICogUGFzc2luZyBcIi1wXCIgd2lsbCBpbnN0cnVjdCBjYXQtZmlsZSB0byBkZXRlcm1pbmUgdGhlIG9iamVjdCB0eXBlLCBhbmQgZGlzcGxheSBpdHMgZm9ybWF0dGVkIGNvbnRlbnRzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY2F0RmlsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2F0RmlsZSgndXRmLTgnLCBhcmd1bWVudHMpO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBFcXVpdmFsZW50IHRvIGBjYXRGaWxlYCBidXQgd2lsbCByZXR1cm4gdGhlIG5hdGl2ZSBgQnVmZmVyYCBvZiBjb250ZW50IGZyb20gdGhlIGdpdCBjb21tYW5kJ3Mgc3Rkb3V0LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW119IG9wdGlvbnNcbiAgICAqIEBwYXJhbSB0aGVuXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuYmluYXJ5Q2F0RmlsZSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2F0RmlsZSgnYnVmZmVyJywgYXJndW1lbnRzKTtcbiAgIH07XG5cbiAgIEdpdC5wcm90b3R5cGUuX2NhdEZpbGUgPSBmdW5jdGlvbiAoZm9ybWF0LCBhcmdzKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IEdpdC50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJncyk7XG4gICAgICB2YXIgY29tbWFuZCA9IFsnY2F0LWZpbGUnXTtcbiAgICAgIHZhciBvcHRpb25zID0gYXJnc1swXTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignR2l0I2NhdEZpbGU6IG9wdGlvbnMgbXVzdCBiZSBzdXBwbGllZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICBjb21tYW5kLnB1c2guYXBwbHkoY29tbWFuZCwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgaGFuZGxlciAmJiBoYW5kbGVyKGVyciwgZGF0YSk7XG4gICAgICB9LCB7XG4gICAgICAgICBmb3JtYXQ6IGZvcm1hdFxuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFJldHVybiByZXBvc2l0b3J5IGNoYW5nZXMuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmdbXX0gW29wdGlvbnNdXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBjb21tYW5kID0gWydkaWZmJ107XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgIGNvbW1hbmRbMF0gKz0gJyAnICsgb3B0aW9ucztcbiAgICAgICAgIHRoaXMuX2dldExvZygnd2FybicsXG4gICAgICAgICAgICAnR2l0I2RpZmY6IHN1cHBseWluZyBvcHRpb25zIGFzIGEgc2luZ2xlIHN0cmluZyBpcyBub3cgZGVwcmVjYXRlZCwgc3dpdGNoIHRvIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICB0aGVuID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICB0aGVuICYmIHRoZW4oZXJyLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgR2l0LnByb3RvdHlwZS5kaWZmU3VtbWFyeSA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgbmV4dCA9IEdpdC50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgICAgIHZhciBjb21tYW5kID0gWyctLXN0YXQ9NDA5NiddO1xuXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zICE9PSBuZXh0KSB7XG4gICAgICAgICBjb21tYW5kLnB1c2guYXBwbHkoY29tbWFuZCwgW10uY29uY2F0KG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZGlmZihjb21tYW5kLCBHaXQuX3Jlc3BvbnNlSGFuZGxlcihuZXh0LCAnRGlmZlN1bW1hcnknKSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFdyYXBzIGBnaXQgcmV2LXBhcnNlYC4gUHJpbWFyaWx5IHVzZWQgdG8gY29udmVydCBmcmllbmRseSBjb21taXQgcmVmZXJlbmNlcyAoaWUgYnJhbmNoIG5hbWVzKSB0byBTSEExIGhhc2hlcy5cbiAgICAqXG4gICAgKiBPcHRpb25zIHNob3VsZCBiZSBhbiBhcnJheSBvZiBzdHJpbmcgb3B0aW9ucyBjb21wYXRpYmxlIHdpdGggdGhlIGBnaXQgcmV2LXBhcnNlYFxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICpcbiAgICAqIEBzZWUgaHR0cDovL2dpdC1zY20uY29tL2RvY3MvZ2l0LXJldi1wYXJzZVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnJldnBhcnNlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBjb21tYW5kID0gWydyZXYtcGFyc2UnXTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQgKyAnICcgKyBvcHRpb25zO1xuICAgICAgICAgdGhpcy5fZ2V0TG9nKCd3YXJuJyxcbiAgICAgICAgICAgICdHaXQjcmV2cGFyc2U6IHN1cHBseWluZyBvcHRpb25zIGFzIGEgc2luZ2xlIHN0cmluZyBpcyBub3cgZGVwcmVjYXRlZCwgc3dpdGNoIHRvIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICB0aGVuID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bihjb21tYW5kLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICB0aGVuICYmIHRoZW4oZXJyLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBTaG93IHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cywgZm9yIGV4YW1wbGUgdGhlIGZpbGUgYXQgYSBjZXJ0YWluIGNvbW1pdFxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIHZhciBoYW5kbGVyID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJmdW5jdGlvblwiID8gYXJncy5wb3AoKSA6IG51bGw7XG4gICAgICB2YXIgY29tbWFuZCA9IFsnc2hvdyddO1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQgKyAnICcgKyBvcHRpb25zO1xuICAgICAgICAgdGhpcy5fZ2V0TG9nKCd3YXJuJyxcbiAgICAgICAgICAgICdHaXQjc2hvdzogc3VwcGx5aW5nIG9wdGlvbnMgYXMgYSBzaW5nbGUgc3RyaW5nIGlzIG5vdyBkZXByZWNhdGVkLCBzd2l0Y2ggdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncycpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgY29tbWFuZC5wdXNoLmFwcGx5KGNvbW1hbmQsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGNvbW1hbmQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgIGhhbmRsZXIgJiYgaGFuZGxlcihlcnIsICFlcnIgJiYgZGF0YSk7XG4gICAgICB9KTtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgUmVxdWlyZWQgcGFyYW1ldGVyIFwiblwiIG9yIFwiZlwiXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uIChtb2RlLCBvcHRpb25zLCB0aGVuKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IEdpdC50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHR5cGVvZiBtb2RlICE9PSAnc3RyaW5nJyB8fCAhL1tuZl0vLnRlc3QobW9kZSkpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmV4ZWMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZGxlciAmJiBoYW5kbGVyKG5ldyBUeXBlRXJyb3IoJ0dpdCBjbGVhbiBtb2RlIHBhcmFtZXRlciAoXCJuXCIgb3IgXCJmXCIpIGlzIHJlcXVpcmVkJykpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgvW15kZmlucXhYXS8udGVzdChtb2RlKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW5kbGVyICYmIGhhbmRsZXIobmV3IFR5cGVFcnJvcignR2l0IGNsZWFuIHVua25vd24gb3B0aW9uIGZvdW5kIGluICcgKyBKU09OLnN0cmluZ2lmeShtb2RlKSkpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gWydjbGVhbicsICctJyArIG1vZGVdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgIGNvbW1hbmQgPSBjb21tYW5kLmNvbmNhdChvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQuc29tZShpbnRlcmFjdGl2ZU1vZGUpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRsZXIgJiYgaGFuZGxlcihuZXcgVHlwZUVycm9yKCdHaXQgY2xlYW4gaW50ZXJhY3RpdmUgbW9kZSBpcyBub3Qgc3VwcG9ydGVkJykpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgaGFuZGxlciAmJiBoYW5kbGVyKGVyciwgIWVyciAmJiBkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBpbnRlcmFjdGl2ZU1vZGUgKG9wdGlvbikge1xuICAgICAgICAgaWYgKC9eLVteXFwtXS8udGVzdChvcHRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4T2YoJ2knKSA+IDA7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBvcHRpb24gPT09ICctLWludGVyYWN0aXZlJztcbiAgICAgIH1cbiAgIH07XG5cbiAgIC8qKlxuICAgICogQ2FsbCBhIHNpbXBsZSBmdW5jdGlvbiBhdCB0aGUgbmV4dCBzdGVwIGluIHRoZSBjaGFpbi5cbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAodGhlbikge1xuICAgICAgdGhpcy5fcnVuKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGVuKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBEZXByZWNhdGVkIG1lYW5zIG9mIGFkZGluZyBhIHJlZ3VsYXIgZnVuY3Rpb24gY2FsbCBhdCB0aGUgbmV4dCBzdGVwIGluIHRoZSBjaGFpbi4gVXNlIHRoZSByZXBsYWNlbWVudFxuICAgICogR2l0I2V4ZWMsIHRoZSBHaXQjdGhlbiBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi54XG4gICAgKlxuICAgICogQHNlZSBleGVjXG4gICAgKiBAZGVwcmVjYXRlZFxuICAgICovXG4gICBHaXQucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAodGhlbikge1xuICAgICAgdGhpcy5fZ2V0TG9nKFxuICAgICAgICAgJ3dhcm4nLFxuICAgICAgICAgXCJcXG5HaXQjdGhlbiBpcyBkZXByZWNhdGVkIGFmdGVyIHZlcnNpb24gMS43MiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi54XCJcbiAgICAgICAgICsgXCJcXG5QbGVhc2Ugc3dpdGNoIHRvIHVzaW5nIEdpdCNleGVjIHRvIHJ1biBhcmJpdHJhcnkgZnVuY3Rpb25zIGFzIHBhcnQgb2YgdGhlIGNvbW1hbmQgY2hhaW4uXFxuXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gdGhpcy5leGVjKHRoZW4pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBTaG93IGNvbW1pdCBsb2dzIGZyb20gYEhFQURgIHRvIHRoZSBmaXJzdCBjb21taXQuXG4gICAgKiBJZiBwcm92aWRlZCBiZXR3ZWVuIGBvcHRpb25zLmZyb21gIGFuZCBgb3B0aW9ucy50b2AgdGFncyBvciBicmFuY2guXG4gICAgKlxuICAgICogQWRkaXRpb25hbGx5IHlvdSBjYW4gcHJvdmlkZSBvcHRpb25zLmZpbGUsIHdoaWNoIGlzIHRoZSBwYXRoIHRvIGEgZmlsZSBpbiB5b3VyIHJlcG9zaXRvcnkuIFRoZW4gb25seSB0aGlzIGZpbGUgd2lsbCBiZSBjb25zaWRlcmVkLlxuICAgICpcbiAgICAqIFRvIHVzZSBhIGN1c3RvbSBzcGxpdHRlciBpbiB0aGUgbG9nIGZvcm1hdCwgc2V0IGBvcHRpb25zLnNwbGl0dGVyYCB0byBiZSB0aGUgc3RyaW5nIHRoZSBsb2cgc2hvdWxkIGJlIHNwbGl0IG9uLlxuICAgICpcbiAgICAqIE9wdGlvbnMgY2FuIGFsc28gYmUgc3VwcGxpZWQgYXMgYSBzdGFuZGFyZCBvcHRpb25zIG9iamVjdCBmb3IgYWRkaW5nIGN1c3RvbSBwcm9wZXJ0aWVzIHN1cHBvcnRlZCBieSB0aGUgZ2l0IGxvZyBjb21tYW5kLlxuICAgICogRm9yIGFueSBvdGhlciBzZXQgb2Ygb3B0aW9ucywgc3VwcGx5IG9wdGlvbnMgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0byBiZSBhcHBlbmRlZCB0byB0aGUgZ2l0IGxvZyBjb21tYW5kLlxuICAgICpcbiAgICAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ1tdfSBbb3B0aW9uc11cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5mcm9tXSBUaGUgZmlyc3QgY29tbWl0IHRvIGluY2x1ZGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy50b10gVGhlIG1vc3QgcmVjZW50IGNvbW1pdCB0byBpbmNsdWRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZmlsZV0gQSBzaW5nbGUgZmlsZSB0byBpbmNsdWRlIGluIHRoZSByZXN1bHRcbiAgICAqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICB2YXIgb3B0ID0gKGhhbmRsZXIgPT09IHRoZW4gPyBvcHRpb25zIDogbnVsbCkgfHwge307XG5cbiAgICAgIHZhciBzcGxpdHRlciA9IG9wdC5zcGxpdHRlciB8fCAnOyc7XG4gICAgICB2YXIgZm9ybWF0ID0gb3B0LmZvcm1hdCB8fCB7XG4gICAgICAgICBoYXNoOiAnJUgnLFxuICAgICAgICAgZGF0ZTogJyVhaScsXG4gICAgICAgICBtZXNzYWdlOiAnJXMlZCcsXG4gICAgICAgICBhdXRob3JfbmFtZTogJyVhTicsXG4gICAgICAgICBhdXRob3JfZW1haWw6ICclYWUnXG4gICAgICB9O1xuXG4gICAgICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXMoZm9ybWF0KTtcbiAgICAgIHZhciBmb3JtYXRzdHIgPSBmaWVsZHMubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICByZXR1cm4gZm9ybWF0W2tdO1xuICAgICAgfSkuam9pbihzcGxpdHRlcik7XG4gICAgICB2YXIgY29tbWFuZCA9IFtcImxvZ1wiLCBcIi0tcHJldHR5PWZvcm1hdDpcIiArIGZvcm1hdHN0ciArIHJlcXVpcmUoJy4vcmVzcG9uc2VzL0xpc3RMb2dTdW1tYXJ5JykuQ09NTUlUX0JPVU5EQVJZXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0KSkge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQuY29uY2F0KG9wdCk7XG4gICAgICAgICBvcHQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgdGhpcy5fZ2V0TG9nKCd3YXJuJyxcbiAgICAgICAgICAgICdHaXQjbG9nOiBzdXBwbHlpbmcgdG8gb3IgZnJvbSBhcyBzdHJpbmdzIGlzIG5vdyBkZXByZWNhdGVkLCBzd2l0Y2ggdG8gYW4gb3B0aW9ucyBjb25maWd1cmF0aW9uIG9iamVjdCcpO1xuICAgICAgICAgb3B0ID0ge1xuICAgICAgICAgICAgZnJvbTogYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgdG86IGFyZ3VtZW50c1sxXVxuICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdC5uIHx8IG9wdFsnbWF4LWNvdW50J10pIHtcbiAgICAgICAgIGNvbW1hbmQucHVzaChcIi0tbWF4LWNvdW50PVwiICsgKG9wdC5uIHx8IG9wdFsnbWF4LWNvdW50J10pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdC5mcm9tICYmIG9wdC50bykge1xuICAgICAgICAgY29tbWFuZC5wdXNoKG9wdC5mcm9tICsgXCIuLi5cIiArIG9wdC50byk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHQuZmlsZSkge1xuICAgICAgICAgY29tbWFuZC5wdXNoKFwiLS1mb2xsb3dcIiwgb3B0aW9ucy5maWxlKTtcbiAgICAgIH1cblxuICAgICAgJ3NwbGl0dGVyIG4gbWF4LWNvdW50IGZpbGUgZnJvbSB0byAtLXByZXR0eSBmb3JtYXQnLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICBkZWxldGUgb3B0W2tleV07XG4gICAgICB9KTtcblxuICAgICAgR2l0Ll9hcHBlbmRPcHRpb25zKGNvbW1hbmQsIG9wdCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgR2l0Ll9yZXNwb25zZUhhbmRsZXIoaGFuZGxlciwgJ0xpc3RMb2dTdW1tYXJ5JywgW3NwbGl0dGVyLCBmaWVsZHNdKSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIENsZWFycyB0aGUgcXVldWUgb2YgcGVuZGluZyBjb21tYW5kcyBhbmQgcmV0dXJucyB0aGUgd3JhcHBlciBpbnN0YW5jZSBmb3IgY2hhaW5pbmcuXG4gICAgKlxuICAgICogQHJldHVybnMge0dpdH1cbiAgICAqL1xuICAgR2l0LnByb3RvdHlwZS5jbGVhclF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcnVuQ2FjaGUubGVuZ3RoID0gMDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBhIHBhdGhuYW1lIG9yIHBhdGhuYW1lcyBhcmUgZXhjbHVkZWQgYnkgLmdpdGlnbm9yZVxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBwYXRobmFtZXNcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICAgICovXG4gICBHaXQucHJvdG90eXBlLmNoZWNrSWdub3JlID0gZnVuY3Rpb24gKHBhdGhuYW1lcywgdGhlbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG4gICAgICB2YXIgY29tbWFuZCA9IFtcImNoZWNrLWlnbm9yZVwiXTtcblxuICAgICAgaWYgKGhhbmRsZXIgIT09IHBhdGhuYW1lcykge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQuY29uY2F0KHBhdGhuYW1lcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oY29tbWFuZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgaGFuZGxlciAmJiBoYW5kbGVyKGVyciwgIWVyciAmJiB0aGlzLl9wYXJzZUNoZWNrSWdub3JlKGRhdGEpKTtcbiAgICAgIH0pO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBWYWxpZGF0ZXMgdGhhdCB0aGUgY3VycmVudCByZXBvIGlzIGEgR2l0IHJlcG8uXG4gICAgKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuY2hlY2tJc1JlcG8gPSBmdW5jdGlvbiAodGhlbikge1xuICAgICAgZnVuY3Rpb24gb25FcnJvciAoZXhpdENvZGUsIHN0ZEVyciwgZG9uZSwgZmFpbCkge1xuICAgICAgICAgaWYgKGV4aXRDb2RlID09PSAxMjggJiYgLyhOb3QgYSBnaXQgcmVwb3NpdG9yeXxLZWluIEdpdC1SZXBvc2l0b3J5KS9pLnRlc3Qoc3RkRXJyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUoZmFsc2UpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmYWlsKHN0ZEVycik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXIgKGVyciwgaXNSZXBvKSB7XG4gICAgICAgICB0aGVuICYmIHRoZW4oZXJyLCBTdHJpbmcoaXNSZXBvKS50cmltKCkgPT09ICd0cnVlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydW4oWydyZXYtcGFyc2UnLCAnLS1pcy1pbnNpZGUtd29yay10cmVlJ10sIGhhbmRsZXIsIHtvbkVycm9yOiBvbkVycm9yfSk7XG4gICB9O1xuXG4gICBHaXQucHJvdG90eXBlLl9ybSA9IGZ1bmN0aW9uIChfZmlsZXMsIG9wdGlvbnMsIHRoZW4pIHtcbiAgICAgIHZhciBmaWxlcyA9IFtdLmNvbmNhdChfZmlsZXMpO1xuICAgICAgdmFyIGFyZ3MgPSBbJ3JtJywgb3B0aW9uc107XG4gICAgICBhcmdzLnB1c2guYXBwbHkoYXJncywgZmlsZXMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcnVuKGFyZ3MsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgIHRoZW4gJiYgdGhlbihlcnIpO1xuICAgICAgfSk7XG4gICB9O1xuXG4gICBHaXQucHJvdG90eXBlLl9wYXJzZUNoZWNrb3V0ID0gZnVuY3Rpb24gKGNoZWNrb3V0KSB7XG4gICAgICAvLyBUT0RPXG4gICB9O1xuXG4gICAvKipcbiAgICAqIFBhcnNlciBmb3IgdGhlIGBjaGVjay1pZ25vcmVgIGNvbW1hbmQgLSByZXR1cm5zIGVhY2hcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZmlsZXNdXG4gICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX3BhcnNlQ2hlY2tJZ25vcmUgPSBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgIHJldHVybiBmaWxlcy5zcGxpdCgvXFxuL2cpLmZpbHRlcihCb29sZWFuKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgIHJldHVybiBmaWxlLnRyaW0oKVxuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIFNjaGVkdWxlcyB0aGUgc3VwcGxpZWQgY29tbWFuZCB0byBiZSBydW4sIHRoZSBjb21tYW5kIHNob3VsZCBub3QgaW5jbHVkZSB0aGUgbmFtZSBvZiB0aGUgZ2l0IGJpbmFyeSBhbmQgc2hvdWxkXG4gICAgKiBiZSBhbiBhcnJheSBvZiBzdHJpbmdzIHBhc3NlZCBhcyB0aGUgYXJndW1lbnRzIHRvIHRoZSBnaXQgYmluYXJ5LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nW119IGNvbW1hbmRcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHRoZW5cbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0XVxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0LmNvbmNhdFN0ZEVycj1mYWxzZV0gT3B0aW9uYWxseSBjb25jYXRlbmF0ZSBzdGRlcnIgb3V0cHV0IGludG8gdGhlIHN0ZG91dFxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0LmZvcm1hdD1cInV0Zi04XCJdIFRoZSBmb3JtYXQgdG8gdXNlIHdoZW4gcmVhZGluZyB0aGUgY29udGVudCBvZiBzdGRvdXRcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHQub25FcnJvcl0gT3B0aW9uYWwgZXJyb3IgaGFuZGxlciBmb3IgdGhpcyBjb21tYW5kIC0gY2FuIGJlIHVzZWQgdG8gYWxsb3cgbm9uLWNsZWFuIGV4aXRzXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IGtpbGxpbmcgdGhlIHJlbWFpbmluZyBzdGFjayBvZiBjb21tYW5kc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHQub25FcnJvci5leGl0Q29kZV1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0Lm9uRXJyb3Iuc3RkRXJyXVxuICAgICpcbiAgICAqIEByZXR1cm5zIHtHaXR9XG4gICAgKi9cbiAgIEdpdC5wcm90b3R5cGUuX3J1biA9IGZ1bmN0aW9uIChjb21tYW5kLCB0aGVuLCBvcHQpIHtcbiAgICAgIGlmICh0eXBlb2YgY29tbWFuZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgY29tbWFuZCA9IGNvbW1hbmQuc3BsaXQoXCIgXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcnVuQ2FjaGUucHVzaChbY29tbWFuZCwgdGhlbiwgb3B0IHx8IHt9XSk7XG4gICAgICB0aGlzLl9zY2hlZHVsZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgIH07XG5cbiAgIEdpdC5wcm90b3R5cGUuX3NjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLl9jaGlsZFByb2Nlc3MgJiYgdGhpcy5fcnVuQ2FjaGUubGVuZ3RoKSB7XG4gICAgICAgICB2YXIgZ2l0ID0gdGhpcztcbiAgICAgICAgIHZhciBCdWZmZXIgPSBnaXQuQnVmZmVyO1xuICAgICAgICAgdmFyIHRhc2sgPSBnaXQuX3J1bkNhY2hlLnNoaWZ0KCk7XG5cbiAgICAgICAgIHZhciBjb21tYW5kID0gdGFza1swXTtcbiAgICAgICAgIHZhciB0aGVuID0gdGFza1sxXTtcbiAgICAgICAgIHZhciBvcHRpb25zID0gdGFza1syXTtcblxuICAgICAgICAgZGVidWcoY29tbWFuZCk7XG5cbiAgICAgICAgIHZhciByZXN1bHQgPSBkZWZlcnJlZCgpO1xuXG4gICAgICAgICB2YXIgYXR0ZW1wdGVkID0gZmFsc2U7XG4gICAgICAgICB2YXIgYXR0ZW1wdENsb3NlID0gZnVuY3Rpb24gYXR0ZW1wdENsb3NlIChlKSB7XG5cbiAgICAgICAgICAgIC8vIGNsb3Npbmcgd2hlbiB0aGVyZSBpcyBjb250ZW50LCB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChhdHRlbXB0ZWQgfHwgc3RkRXJyLmxlbmd0aCB8fCBzdGRPdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICByZXN1bHQucmVzb2x2ZShlKTtcbiAgICAgICAgICAgICAgIGF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpcnN0IGF0dGVtcHQgYXQgY2xvc2luZyBidXQgbm8gY29udGVudCB5ZXQsIHdhaXQgYnJpZWZseSBmb3IgdGhlIGNsb3NlL2V4aXQgdGhhdCBtYXkgZm9sbG93XG4gICAgICAgICAgICBpZiAoIWF0dGVtcHRlZCkge1xuICAgICAgICAgICAgICAgYXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXR0ZW1wdENsb3NlLmJpbmQodGhpcywgZSksIDUwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgfTtcblxuICAgICAgICAgdmFyIHN0ZE91dCA9IFtdO1xuICAgICAgICAgdmFyIHN0ZEVyciA9IFtdO1xuICAgICAgICAgdmFyIHNwYXduZWQgPSBnaXQuQ2hpbGRQcm9jZXNzLnNwYXduKGdpdC5fY29tbWFuZCwgY29tbWFuZC5zbGljZSgwKSwge1xuICAgICAgICAgICAgY3dkOiBnaXQuX2Jhc2VEaXIsXG4gICAgICAgICAgICBlbnY6IGdpdC5fZW52XG4gICAgICAgICB9KTtcblxuICAgICAgICAgc3Bhd25lZC5zdGRvdXQub24oJ2RhdGEnLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgICBzdGRPdXQucHVzaChidWZmZXIpO1xuICAgICAgICAgfSk7XG5cbiAgICAgICAgIHNwYXduZWQuc3RkZXJyLm9uKCdkYXRhJywgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgc3RkRXJyLnB1c2goYnVmZmVyKTtcbiAgICAgICAgIH0pO1xuXG4gICAgICAgICBzcGF3bmVkLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZEVyci5wdXNoKG5ldyBCdWZmZXIoZXJyLnN0YWNrLCAnYXNjaWknKSk7XG4gICAgICAgICB9KTtcblxuICAgICAgICAgc3Bhd25lZC5vbignY2xvc2UnLCBhdHRlbXB0Q2xvc2UpO1xuICAgICAgICAgc3Bhd25lZC5vbignZXhpdCcsIGF0dGVtcHRDbG9zZSk7XG5cbiAgICAgICAgIHJlc3VsdC5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKGV4aXRDb2RlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBkb25lIChvdXRwdXQpIHtcbiAgICAgICAgICAgICAgIHRoZW4uY2FsbChnaXQsIG51bGwsIG91dHB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZhaWwgKGVycm9yKSB7XG4gICAgICAgICAgICAgICBHaXQuZmFpbChnaXQsIGVycm9yLCB0aGVuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGdpdC5fY2hpbGRQcm9jZXNzO1xuXG4gICAgICAgICAgICBpZiAoZXhpdENvZGUgJiYgc3RkRXJyLmxlbmd0aCAmJiBvcHRpb25zLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcihleGl0Q29kZSwgQnVmZmVyLmNvbmNhdChzdGRFcnIpLnRvU3RyaW5nKCd1dGYtOCcpLCBkb25lLCBmYWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV4aXRDb2RlICYmIHN0ZEVyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgIGZhaWwoQnVmZmVyLmNvbmNhdChzdGRFcnIpLnRvU3RyaW5nKCd1dGYtOCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29uY2F0U3RkRXJyKSB7XG4gICAgICAgICAgICAgICAgICBbXS5wdXNoLmFwcGx5KHN0ZE91dCwgc3RkRXJyKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgdmFyIHN0ZE91dHB1dCA9IEJ1ZmZlci5jb25jYXQoc3RkT3V0KTtcbiAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZvcm1hdCAhPT0gJ2J1ZmZlcicpIHtcbiAgICAgICAgICAgICAgICAgIHN0ZE91dHB1dCA9IHN0ZE91dHB1dC50b1N0cmluZyhvcHRpb25zLmZvcm1hdCB8fCAndXRmLTgnKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgZG9uZShzdGRPdXRwdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGdpdC5fc2NoZWR1bGUuYmluZChnaXQpKTtcbiAgICAgICAgIH0pO1xuXG4gICAgICAgICBnaXQuX2NoaWxkUHJvY2VzcyA9IHNwYXduZWQ7XG5cbiAgICAgICAgIGlmIChnaXQuX291dHB1dEhhbmRsZXIpIHtcbiAgICAgICAgICAgIGdpdC5fb3V0cHV0SGFuZGxlcihjb21tYW5kWzBdLCBnaXQuX2NoaWxkUHJvY2Vzcy5zdGRvdXQsIGdpdC5fY2hpbGRQcm9jZXNzLnN0ZGVycik7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIGluIHRoZSBwcm9jZXNzaW5nIG9mIGEgY29tbWFuZC5cbiAgICAqL1xuICAgR2l0LmZhaWwgPSBmdW5jdGlvbiAoZ2l0LCBlcnJvciwgaGFuZGxlcikge1xuICAgICAgZ2l0Ll9nZXRMb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgZ2l0Ll9ydW5DYWNoZS5sZW5ndGggPSAwO1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBoYW5kbGVyLmNhbGwoZ2l0LCBlcnJvciwgbnVsbCk7XG4gICAgICB9XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEdpdmVuIGFueSBudW1iZXIgb2YgYXJndW1lbnRzLCByZXR1cm5zIHRoZSBsYXN0IGFyZ3VtZW50IGlmIGl0IGlzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSByZXR1cm5zIG51bGwuXG4gICAgKiBAcmV0dXJucyB7RnVuY3Rpb258bnVsbH1cbiAgICAqL1xuICAgR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgdHJhaWxpbmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICByZXR1cm4gKHR5cGVvZiB0cmFpbGluZyA9PT0gXCJmdW5jdGlvblwiKSA/IHRyYWlsaW5nIDogbnVsbDtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogR2l2ZW4gYW55IG51bWJlciBvZiBhcmd1bWVudHMsIHJldHVybnMgdGhlIHRyYWlsaW5nIG9wdGlvbnMgYXJndW1lbnQsIGlnbm9yaW5nIGEgdHJhaWxpbmcgZnVuY3Rpb24gYXJndW1lbnRcbiAgICAqIGlmIHRoZXJlIGlzIG9uZS4gV2hlbiBub3QgZm91bmQsIHRoZSByZXR1cm4gdmFsdWUgaXMgbnVsbC5cbiAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAqL1xuICAgR2l0LnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJnc1soYXJncy5sZW5ndGggLSAoR2l0LnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmdzKSA/IDIgOiAxKSldO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcHRpb25zKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyBvcHRpb25zIDogbnVsbDtcbiAgIH07XG5cbiAgIC8qKlxuICAgICogR2l2ZW4gYW55IG51bWJlciBvZiBhcmd1bWVudHMsIHJldHVybnMgdGhlIHRyYWlsaW5nIG9wdGlvbnMgYXJyYXkgYXJndW1lbnQsIGlnbm9yaW5nIGEgdHJhaWxpbmcgZnVuY3Rpb24gYXJndW1lbnRcbiAgICAqIGlmIHRoZXJlIGlzIG9uZS4gV2hlbiBub3QgZm91bmQsIHRoZSByZXR1cm4gdmFsdWUgaXMgYW4gZW1wdHkgYXJyYXkuXG4gICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgKi9cbiAgIEdpdC50cmFpbGluZ0FycmF5QXJndW1lbnQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzWyhhcmdzLmxlbmd0aCAtIChHaXQudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MpID8gMiA6IDEpKV07XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9wdGlvbnMpID09PSAnW29iamVjdCBBcnJheV0nID8gb3B0aW9ucyA6IFtdO1xuICAgfTtcblxuICAgLyoqXG4gICAgKiBNdXRhdGVzIHRoZSBzdXBwbGllZCBjb21tYW5kIGFycmF5IGJ5IG1lcmdpbmcgaW4gcHJvcGVydGllcyBpbiB0aGUgb3B0aW9ucyBvYmplY3QuIFdoZW4gdGhlXG4gICAgKiB2YWx1ZSBvZiB0aGUgaXRlbSBpbiB0aGUgb3B0aW9ucyBvYmplY3QgaXMgYSBzdHJpbmcgaXQgd2lsbCBiZSBjb25jYXRlbmF0ZWQgdG8gdGhlIGtleSBhc1xuICAgICogYSBzaW5nbGUgYG5hbWU9dmFsdWVgIGl0ZW0sIG90aGVyd2lzZSBqdXN0IHRoZSBuYW1lIHdpbGwgYmUgdXNlZC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjb21tYW5kXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgR2l0Ll9hcHBlbmRPcHRpb25zID0gZnVuY3Rpb24gKGNvbW1hbmQsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1trZXldO1xuICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChrZXkpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9O1xuXG4gICAvKipcbiAgICAqIEdpdmVuIHRoZSB0eXBlIG9mIHJlc3BvbnNlIGFuZCB0aGUgY2FsbGJhY2sgdG8gcmVjZWl2ZSB0aGUgcGFyc2VkIHJlc3BvbnNlLFxuICAgICogdXNlcyB0aGUgY29ycmVjdCBwYXJzZXIgYW5kIGNhbGxzIGJhY2sgdGhlIGNhbGxiYWNrLlxuICAgICpcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICogQHBhcmFtIHtPYmplY3RbXX0gW2FyZ3NdXG4gICAgKlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgR2l0Ll9yZXNwb25zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG5cbiAgICAgICAgIHZhciBoYW5kbGVyID0gcmVxdWlyZSgnLi9yZXNwb25zZXMvJyArIHR5cGUpO1xuICAgICAgICAgdmFyIHJlc3VsdCA9IGhhbmRsZXIucGFyc2UuYXBwbHkoaGFuZGxlciwgW2RhdGFdLmNvbmNhdChhcmdzID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3MpKTtcblxuICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgIH07XG5cbiAgIH07XG5cbiAgIC8qKlxuICAgICogTWFya3MgdGhlIGdpdCBpbnN0YW5jZSBhcyBoYXZpbmcgaGFkIGEgZmF0YWwgZXhjZXB0aW9uIGJ5IGNsZWFyaW5nIHRoZSBwZW5kaW5nIHF1ZXVlIG9mIHRhc2tzIGFuZFxuICAgICogbG9nZ2luZyB0byB0aGUgY29uc29sZS5cbiAgICAqXG4gICAgKiBAcGFyYW0gZ2l0XG4gICAgKiBAcGFyYW0gZXJyb3JcbiAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICovXG4gICBHaXQuZXhjZXB0aW9uID0gZnVuY3Rpb24gKGdpdCwgZXJyb3IsIGNhbGxiYWNrKSB7XG4gICAgICBnaXQuX3J1bkNhY2hlLmxlbmd0aCA9IDA7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYWxsYmFjayhlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgIH1cblxuICAgICAgZ2l0Ll9nZXRMb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgfTtcblxuICAgbW9kdWxlLmV4cG9ydHMgPSBHaXQ7XG5cbn0oKSk7XG4iLCJcbnZhciBHaXQgPSByZXF1aXJlKCcuL2dpdCcpO1xuXG52YXIgQ2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbnZhciBleGlzdHMgPSByZXF1aXJlKCcuL3V0aWwvZXhpc3RzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJhc2VEaXIpIHtcblxuICAgIGlmIChiYXNlRGlyICYmICFleGlzdHMoYmFzZURpciwgZXhpc3RzLkZPTERFUikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBzaW1wbGUtZ2l0IG9uIGEgZGlyZWN0b3J5IHRoYXQgZG9lcyBub3QgZXhpc3QuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgR2l0KGJhc2VEaXIgfHwgcHJvY2Vzcy5jd2QoKSwgQ2hpbGRQcm9jZXNzLCBCdWZmZXIpO1xufTtcblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL0JyYW5jaERlbGV0ZVN1bW1hcnlcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeS5qc1wiLFxuXHRcIi4vQnJhbmNoRGVsZXRlU3VtbWFyeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9CcmFuY2hEZWxldGVTdW1tYXJ5LmpzXCIsXG5cdFwiLi9CcmFuY2hTdW1tYXJ5XCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0JyYW5jaFN1bW1hcnkuanNcIixcblx0XCIuL0JyYW5jaFN1bW1hcnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeS5qc1wiLFxuXHRcIi4vQ29tbWl0U3VtbWFyeVwiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9Db21taXRTdW1tYXJ5LmpzXCIsXG5cdFwiLi9Db21taXRTdW1tYXJ5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0NvbW1pdFN1bW1hcnkuanNcIixcblx0XCIuL0RpZmZTdW1tYXJ5XCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0RpZmZTdW1tYXJ5LmpzXCIsXG5cdFwiLi9EaWZmU3VtbWFyeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9EaWZmU3VtbWFyeS5qc1wiLFxuXHRcIi4vRmV0Y2hTdW1tYXJ5XCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0ZldGNoU3VtbWFyeS5qc1wiLFxuXHRcIi4vRmV0Y2hTdW1tYXJ5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0ZldGNoU3VtbWFyeS5qc1wiLFxuXHRcIi4vRmlsZVN0YXR1c1N1bW1hcnlcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvRmlsZVN0YXR1c1N1bW1hcnkuanNcIixcblx0XCIuL0ZpbGVTdGF0dXNTdW1tYXJ5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL0ZpbGVTdGF0dXNTdW1tYXJ5LmpzXCIsXG5cdFwiLi9MaXN0TG9nU3VtbWFyeVwiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9MaXN0TG9nU3VtbWFyeS5qc1wiLFxuXHRcIi4vTGlzdExvZ1N1bW1hcnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvTGlzdExvZ1N1bW1hcnkuanNcIixcblx0XCIuL01lcmdlU3VtbWFyeVwiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanNcIixcblx0XCIuL01lcmdlU3VtbWFyeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanNcIixcblx0XCIuL01vdmVTdW1tYXJ5XCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL01vdmVTdW1tYXJ5LmpzXCIsXG5cdFwiLi9Nb3ZlU3VtbWFyeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9Nb3ZlU3VtbWFyeS5qc1wiLFxuXHRcIi4vUHVsbFN1bW1hcnlcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvUHVsbFN1bW1hcnkuanNcIixcblx0XCIuL1B1bGxTdW1tYXJ5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL1B1bGxTdW1tYXJ5LmpzXCIsXG5cdFwiLi9TdGF0dXNTdW1tYXJ5XCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL1N0YXR1c1N1bW1hcnkuanNcIixcblx0XCIuL1N0YXR1c1N1bW1hcnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMvU3RhdHVzU3VtbWFyeS5qc1wiLFxuXHRcIi4vVGFnTGlzdFwiOiBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL3Jlc3BvbnNlcy9UYWdMaXN0LmpzXCIsXG5cdFwiLi9UYWdMaXN0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvcmVzcG9uc2VzL1RhZ0xpc3QuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9yZXNwb25zZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gQnJhbmNoRGVsZXRpb247XG5cbmZ1bmN0aW9uIEJyYW5jaERlbGV0aW9uIChicmFuY2gsIGhhc2gpIHtcbiAgIHRoaXMuYnJhbmNoID0gYnJhbmNoO1xuICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgIHRoaXMuc3VjY2VzcyA9IGhhc2ggIT09IG51bGw7XG59XG5cbkJyYW5jaERlbGV0aW9uLmRlbGV0ZVN1Y2Nlc3NSZWdleCA9IC8oXFxTKylcXHMrXFwoXFxTK1xccyhbXlxcKV0rKVxcKS87XG5CcmFuY2hEZWxldGlvbi5kZWxldGVFcnJvclJlZ2V4ID0gL15lcnJvclteJ10rJyhbXiddKyknLztcblxuQnJhbmNoRGVsZXRpb24ucGFyc2UgPSBmdW5jdGlvbiAoZGF0YSwgYXNBcnJheSkge1xuICAgdmFyIHJlc3VsdDtcbiAgIHZhciBicmFuY2hEZWxldGlvbnMgPSBkYXRhLnRyaW0oKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICBpZiAocmVzdWx0ID0gQnJhbmNoRGVsZXRpb24uZGVsZXRlU3VjY2Vzc1JlZ2V4LmV4ZWMobGluZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnJhbmNoRGVsZXRpb24ocmVzdWx0WzFdLCByZXN1bHRbMl0pO1xuICAgICAgICAgfVxuICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID0gQnJhbmNoRGVsZXRpb24uZGVsZXRlRXJyb3JSZWdleC5leGVjKGxpbmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJyYW5jaERlbGV0aW9uKHJlc3VsdFsxXSwgbnVsbCk7XG4gICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcblxuICAgcmV0dXJuIGFzQXJyYXkgPyBicmFuY2hEZWxldGlvbnMgOiBicmFuY2hEZWxldGlvbnMucG9wKCk7XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IEJyYW5jaFN1bW1hcnk7XG5cbmZ1bmN0aW9uIEJyYW5jaFN1bW1hcnkgKCkge1xuICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgdGhpcy5jdXJyZW50ID0gJyc7XG4gICB0aGlzLmFsbCA9IFtdO1xuICAgdGhpcy5icmFuY2hlcyA9IHt9O1xufVxuXG5CcmFuY2hTdW1tYXJ5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGN1cnJlbnQsIGRldGFjaGVkLCBuYW1lLCBjb21taXQsIGxhYmVsKSB7XG4gICBpZiAoY3VycmVudCkge1xuICAgICAgdGhpcy5kZXRhY2hlZCA9IGRldGFjaGVkO1xuICAgICAgdGhpcy5jdXJyZW50ID0gbmFtZTtcbiAgIH1cbiAgIHRoaXMuYWxsLnB1c2gobmFtZSk7XG4gICB0aGlzLmJyYW5jaGVzW25hbWVdID0ge1xuICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBjb21taXQ6IGNvbW1pdCxcbiAgICAgIGxhYmVsOiBsYWJlbFxuICAgfTtcbn07XG5cbkJyYW5jaFN1bW1hcnkuZGV0YWNoZWRSZWdleCA9IC9eKFxcKj9cXHMrKVxcKCg/OkhFQUQgKT9kZXRhY2hlZCAoPzpmcm9tfGF0KSAoXFxTKylcXClcXHMrKFthLXowLTldKylcXHMoLiopJC87XG5CcmFuY2hTdW1tYXJ5LmJyYW5jaFJlZ2V4ID0gL14oXFwqP1xccyspKFxcUyspXFxzKyhbYS16MC05XSspXFxzKC4qKSQvO1xuXG5CcmFuY2hTdW1tYXJ5LnBhcnNlID0gZnVuY3Rpb24gKGNvbW1pdCkge1xuICAgdmFyIGJyYW5jaFN1bW1hcnkgPSBuZXcgQnJhbmNoU3VtbWFyeSgpO1xuXG4gICBjb21taXQuc3BsaXQoJ1xcbicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgdmFyIGRldGFjaGVkID0gdHJ1ZTtcbiAgICAgICAgIHZhciBicmFuY2ggPSBCcmFuY2hTdW1tYXJ5LmRldGFjaGVkUmVnZXguZXhlYyhsaW5lKTtcbiAgICAgICAgIGlmICghYnJhbmNoKSB7XG4gICAgICAgICAgICBkZXRhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJhbmNoID0gQnJhbmNoU3VtbWFyeS5icmFuY2hSZWdleC5leGVjKGxpbmUpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgICAgICBicmFuY2hTdW1tYXJ5LnB1c2goXG4gICAgICAgICAgICAgICBicmFuY2hbMV0uY2hhckF0KDApID09PSAnKicsXG4gICAgICAgICAgICAgICBkZXRhY2hlZCxcbiAgICAgICAgICAgICAgIGJyYW5jaFsyXSxcbiAgICAgICAgICAgICAgIGJyYW5jaFszXSxcbiAgICAgICAgICAgICAgIGJyYW5jaFs0XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICByZXR1cm4gYnJhbmNoU3VtbWFyeTtcbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWl0U3VtbWFyeTtcblxuZnVuY3Rpb24gQ29tbWl0U3VtbWFyeSAoKSB7XG4gICB0aGlzLmJyYW5jaCA9ICcnO1xuICAgdGhpcy5jb21taXQgPSAnJztcbiAgIHRoaXMuc3VtbWFyeSA9IHtcbiAgICAgIGNoYW5nZXM6IDAsXG4gICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgZGVsZXRpb25zOiAwXG4gICB9O1xuICAgdGhpcy5hdXRob3IgPSBudWxsO1xufVxuXG52YXIgQ09NTUlUX0JSQU5DSF9NRVNTQUdFX1JFR0VYID0gL1xcWyhbXlxcc10rKSAoW15cXF1dKykvO1xudmFyIENPTU1JVF9BVVRIT1JfTUVTU0FHRV9SRUdFWCA9IC9cXHMqQXV0aG9yOlxccyguKykvaTtcblxuZnVuY3Rpb24gc2V0QnJhbmNoRnJvbUNvbW1pdCAoY29tbWl0U3VtbWFyeSwgY29tbWl0RGF0YSkge1xuICAgaWYgKGNvbW1pdERhdGEpIHtcbiAgICAgIGNvbW1pdFN1bW1hcnkuYnJhbmNoID0gY29tbWl0RGF0YVsxXTtcbiAgICAgIGNvbW1pdFN1bW1hcnkuY29tbWl0ID0gY29tbWl0RGF0YVsyXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gc2V0U3VtbWFyeUZyb21Db21taXQgKGNvbW1pdFN1bW1hcnksIGNvbW1pdERhdGEpIHtcbiAgIGlmIChjb21taXRTdW1tYXJ5LmJyYW5jaCAmJiBjb21taXREYXRhKSB7XG4gICAgICBjb21taXRTdW1tYXJ5LnN1bW1hcnkuY2hhbmdlcyA9IGNvbW1pdERhdGFbMV0gfHwgMDtcbiAgICAgIGNvbW1pdFN1bW1hcnkuc3VtbWFyeS5pbnNlcnRpb25zID0gY29tbWl0RGF0YVsyXSB8fCAwO1xuICAgICAgY29tbWl0U3VtbWFyeS5zdW1tYXJ5LmRlbGV0aW9ucyA9IGNvbW1pdERhdGFbM10gfHwgMDtcbiAgIH1cbn1cblxuZnVuY3Rpb24gc2V0QXV0aG9yRnJvbUNvbW1pdCAoY29tbWl0U3VtbWFyeSwgY29tbWl0RGF0YSkge1xuICAgdmFyIHBhcnRzID0gY29tbWl0RGF0YVsxXS5zcGxpdCgnPCcpO1xuICAgdmFyIGVtYWlsID0gcGFydHMucG9wKCk7XG5cbiAgIGlmIChlbWFpbC5pbmRleE9mKCdAJykgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgfVxuXG4gICBjb21taXRTdW1tYXJ5LmF1dGhvciA9IHtcbiAgICAgIGVtYWlsOiBlbWFpbC5zdWJzdHIoMCwgZW1haWwubGVuZ3RoIC0gMSksXG4gICAgICBuYW1lOiBwYXJ0cy5qb2luKCc8JykudHJpbSgpXG4gICB9O1xufVxuXG5Db21taXRTdW1tYXJ5LnBhcnNlID0gZnVuY3Rpb24gKGNvbW1pdCkge1xuICAgdmFyIGxpbmVzID0gY29tbWl0LnRyaW0oKS5zcGxpdCgnXFxuJyk7XG4gICB2YXIgY29tbWl0U3VtbWFyeSA9IG5ldyBDb21taXRTdW1tYXJ5KCk7XG5cbiAgIHNldEJyYW5jaEZyb21Db21taXQoY29tbWl0U3VtbWFyeSwgQ09NTUlUX0JSQU5DSF9NRVNTQUdFX1JFR0VYLmV4ZWMobGluZXMuc2hpZnQoKSkpO1xuXG4gICBpZiAoQ09NTUlUX0FVVEhPUl9NRVNTQUdFX1JFR0VYLnRlc3QobGluZXNbMF0pKSB7XG4gICAgICBzZXRBdXRob3JGcm9tQ29tbWl0KGNvbW1pdFN1bW1hcnksIENPTU1JVF9BVVRIT1JfTUVTU0FHRV9SRUdFWC5leGVjKGxpbmVzLnNoaWZ0KCkpKTtcbiAgIH1cblxuICAgc2V0U3VtbWFyeUZyb21Db21taXQoY29tbWl0U3VtbWFyeSwgLyhcXGQrKVteLF0qKD86LFxccyooXFxkKylbXixdKik/KD86LFxccyooXFxkKykpPy9nLmV4ZWMobGluZXMuc2hpZnQoKSkpO1xuXG4gICByZXR1cm4gY29tbWl0U3VtbWFyeTtcbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gRGlmZlN1bW1hcnk7XG5cbi8qKlxuICogVGhlIERpZmZTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkuc3RhdHVzKClgXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIERpZmZTdW1tYXJ5ICgpIHtcbiAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgIHRoaXMuaW5zZXJ0aW9ucyA9IDA7XG4gICB0aGlzLmRlbGV0aW9ucyA9IDA7XG59XG5cbi8qKlxuICogTnVtYmVyIG9mIGxpbmVzIGFkZGVkXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5EaWZmU3VtbWFyeS5wcm90b3R5cGUuaW5zZXJ0aW9ucyA9IDA7XG5cbi8qKlxuICogTnVtYmVyIG9mIGxpbmVzIGRlbGV0ZWRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbkRpZmZTdW1tYXJ5LnByb3RvdHlwZS5kZWxldGlvbnMgPSAwO1xuXG5EaWZmU3VtbWFyeS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICB2YXIgbGluZSwgaGFuZGxlcjtcblxuICAgdmFyIGxpbmVzID0gdGV4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgdmFyIHN0YXR1cyA9IG5ldyBEaWZmU3VtbWFyeSgpO1xuXG4gICB2YXIgc3VtbWFyeSA9IGxpbmVzLnBvcCgpO1xuICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgIHN1bW1hcnkudHJpbSgpLnNwbGl0KCcsICcpLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgIHZhciBzdW1tYXJ5ID0gLyhcXGQrKVxccyhbYS16XSspLy5leGVjKHRleHQpO1xuICAgICAgICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgICAgICAgIHN0YXR1c1tzdW1tYXJ5WzJdLnJlcGxhY2UoL3MkLywgJycpICsgJ3MnXSA9IHBhcnNlSW50KHN1bW1hcnlbMV0sIDEwKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICB3aGlsZSAobGluZSA9IGxpbmVzLnNoaWZ0KCkpIHtcbiAgICAgIHRleHRGaWxlQ2hhbmdlKGxpbmUsIHN0YXR1cy5maWxlcykgfHwgYmluYXJ5RmlsZUNoYW5nZShsaW5lLCBzdGF0dXMuZmlsZXMpO1xuICAgfVxuXG4gICByZXR1cm4gc3RhdHVzO1xufTtcblxuZnVuY3Rpb24gdGV4dEZpbGVDaGFuZ2UgKGxpbmUsIGZpbGVzKSB7XG4gICBsaW5lID0gbGluZS50cmltKCkubWF0Y2goL14oLispXFxzK1xcfFxccysoXFxkKylcXHMrKFsrXFwtXSspJC8pO1xuICAgaWYgKGxpbmUpIHtcbiAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgZmlsZTogbGluZVsxXS50cmltKCksXG4gICAgICAgICBjaGFuZ2VzOiBwYXJzZUludChsaW5lWzJdLCAxMCksXG4gICAgICAgICBpbnNlcnRpb25zOiBsaW5lWzNdLnJlcGxhY2UoL1xcLS9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgZGVsZXRpb25zOiBsaW5lWzNdLnJlcGxhY2UoL1xcKy9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgYmluYXJ5OiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxufVxuXG5mdW5jdGlvbiBiaW5hcnlGaWxlQ2hhbmdlIChsaW5lLCBmaWxlcykge1xuICAgbGluZSA9IGxpbmUubWF0Y2goL14oLispIFxcfCBCaW4gKFswLTkuXSspIC0+IChbMC05Ll0rKSAoW2Etel0rKSQvKTtcbiAgIGlmIChsaW5lKSB7XG4gICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgIGZpbGU6IGxpbmVbMV0udHJpbSgpLFxuICAgICAgICAgYmVmb3JlOiArbGluZVsyXSxcbiAgICAgICAgIGFmdGVyOiArbGluZVszXSxcbiAgICAgICAgIGJpbmFyeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRmV0Y2hTdW1tYXJ5IChyYXcpIHtcbiAgIHRoaXMucmF3ID0gcmF3O1xuXG4gICB0aGlzLnJlbW90ZSA9IG51bGw7XG4gICB0aGlzLmJyYW5jaGVzID0gW107XG4gICB0aGlzLnRhZ3MgPSBbXTtcbn1cblxuRmV0Y2hTdW1tYXJ5LnBhcnNlcnMgPSBbXG4gICBbXG4gICAgICAvRnJvbSAoLispJC8sIGZ1bmN0aW9uIChmZXRjaFN1bW1hcnksIG1hdGNoZXMpIHtcbiAgICAgICAgIGZldGNoU3VtbWFyeS5yZW1vdGUgPSBtYXRjaGVzWzBdO1xuICAgICAgfVxuICAgXSxcbiAgIFtcbiAgICAgIC9cXCogXFxbbmV3IGJyYW5jaFxcXVxccysoXFxTKylcXHMqXFwtPiAoLispJC8sIGZ1bmN0aW9uIChmZXRjaFN1bW1hcnksIG1hdGNoZXMpIHtcbiAgICAgICAgIGZldGNoU3VtbWFyeS5icmFuY2hlcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG1hdGNoZXNbMF0sXG4gICAgICAgICAgICB0cmFja2luZzogbWF0Y2hlc1sxXVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICBdLFxuICAgW1xuICAgICAgL1xcKiBcXFtuZXcgdGFnXFxdXFxzKyhcXFMrKVxccypcXC0+ICguKykkLywgZnVuY3Rpb24gKGZldGNoU3VtbWFyeSwgbWF0Y2hlcykge1xuICAgICAgICAgZmV0Y2hTdW1tYXJ5LnRhZ3MucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBtYXRjaGVzWzBdLFxuICAgICAgICAgICAgdHJhY2tpbmc6IG1hdGNoZXNbMV1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgXVxuXTtcblxuRmV0Y2hTdW1tYXJ5LnBhcnNlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgIHZhciBmZXRjaFN1bW1hcnkgPSBuZXcgRmV0Y2hTdW1tYXJ5KGRhdGEpO1xuXG4gICBTdHJpbmcoZGF0YSlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICB2YXIgb3JpZ2luYWwgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgIEZldGNoU3VtbWFyeS5wYXJzZXJzLnNvbWUoZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlclswXS5leGVjKG9yaWdpbmFsKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgICAgIHBhcnNlclsxXShmZXRjaFN1bW1hcnksIHBhcnNlZC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgIHJldHVybiBmZXRjaFN1bW1hcnk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZldGNoU3VtbWFyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRmlsZVN0YXR1c1N1bW1hcnkgKHBhdGgsIGluZGV4LCB3b3JraW5nX2Rpcikge1xuICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgIHRoaXMud29ya2luZ19kaXIgPSB3b3JraW5nX2RpcjtcblxuICAgaWYgKCdSJyA9PT0gaW5kZXggKyB3b3JraW5nX2Rpcikge1xuICAgICAgdmFyIGRldGFpbCA9IEZpbGVTdGF0dXNTdW1tYXJ5LmZyb21QYXRoUmVnZXguZXhlYyhwYXRoKSB8fCBbbnVsbCwgcGF0aCwgcGF0aF07XG4gICAgICB0aGlzLmZyb20gPSBkZXRhaWxbMV07XG4gICAgICB0aGlzLnBhdGggPSBkZXRhaWxbMl07XG4gICB9XG59XG5cbkZpbGVTdGF0dXNTdW1tYXJ5LmZyb21QYXRoUmVnZXggPSAvXiguKykgLT4gKC4rKSQvO1xuXG5GaWxlU3RhdHVzU3VtbWFyeS5wcm90b3R5cGUgPSB7XG4gICBwYXRoOiAnJyxcbiAgIGZyb206ICcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVTdGF0dXNTdW1tYXJ5O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RMb2dTdW1tYXJ5O1xuXG4vKipcbiAqIFRoZSBMaXN0TG9nU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLmxvZygpYCBvciBgZ2l0KCkuc3Rhc2hMaXN0KClgXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExpc3RMb2dTdW1tYXJ5IChhbGwpIHtcbiAgIHRoaXMuYWxsID0gYWxsO1xuICAgdGhpcy5sYXRlc3QgPSBhbGwubGVuZ3RoICYmIGFsbFswXSB8fCBudWxsO1xuICAgdGhpcy50b3RhbCA9IGFsbC5sZW5ndGg7XG59XG5cbi8qKlxuICogRGV0YWlsIGZvciBlYWNoIG9mIHRoZSBsb2cgbGluZXNcbiAqIEB0eXBlIHtMaXN0TG9nTGluZVtdfVxuICovXG5MaXN0TG9nU3VtbWFyeS5wcm90b3R5cGUuYWxsID0gbnVsbDtcblxuLyoqXG4gKiBNb3N0IHJlY2VudCBlbnRyeSBpbiB0aGUgbG9nXG4gKiBAdHlwZSB7TGlzdExvZ0xpbmV9XG4gKi9cbkxpc3RMb2dTdW1tYXJ5LnByb3RvdHlwZS5sYXRlc3QgPSBudWxsO1xuXG4vKipcbiAqIE51bWJlciBvZiBpdGVtcyBpbiB0aGUgbG9nXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5MaXN0TG9nU3VtbWFyeS5wcm90b3R5cGUudG90YWwgPSAwO1xuXG5mdW5jdGlvbiBMaXN0TG9nTGluZSAobGluZSwgZmllbGRzKSB7XG4gICBmb3IgKHZhciBrID0gMDsgayA8IGZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgdGhpc1tmaWVsZHNba11dID0gbGluZVtrXTtcbiAgIH1cbn1cblxuTGlzdExvZ1N1bW1hcnkuQ09NTUlUX0JPVU5EQVJZID0gJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSA+OCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nO1xuXG5MaXN0TG9nU3VtbWFyeS5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCBzcGxpdHRlciwgZmllbGRzKSB7XG4gICBmaWVsZHMgPSBmaWVsZHMgfHwgWydoYXNoJywgJ2RhdGUnLCAnbWVzc2FnZScsICdhdXRob3JfbmFtZScsICdhdXRob3JfZW1haWwnXTtcbiAgIHJldHVybiBuZXcgTGlzdExvZ1N1bW1hcnkoXG4gICAgICB0ZXh0XG4gICAgICAgICAudHJpbSgpXG4gICAgICAgICAuc3BsaXQoTGlzdExvZ1N1bW1hcnkuQ09NTUlUX0JPVU5EQVJZICsgJ1xcbicpXG4gICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5yZXBsYWNlKExpc3RMb2dTdW1tYXJ5LkNPTU1JVF9CT1VOREFSWSwgJycpXG4gICAgICAgICB9KVxuICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaXN0TG9nTGluZShpdGVtLnRyaW0oKS5zcGxpdChzcGxpdHRlciksIGZpZWxkcyk7XG4gICAgICAgICB9KVxuICAgKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IE1lcmdlU3VtbWFyeTtcblxudmFyIFB1bGxTdW1tYXJ5ID0gcmVxdWlyZSgnLi9QdWxsU3VtbWFyeScpO1xuXG5mdW5jdGlvbiBNZXJnZUNvbmZsaWN0IChyZWFzb24sIGZpbGUpIHtcbiAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgdGhpcy5maWxlID0gZmlsZTtcbn1cblxuTWVyZ2VDb25mbGljdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5maWxlICsgJzonICsgdGhpcy5yZWFzb247XG59O1xuXG5mdW5jdGlvbiBNZXJnZVN1bW1hcnkgKCkge1xuICAgUHVsbFN1bW1hcnkuY2FsbCh0aGlzKTtcblxuICAgdGhpcy5jb25mbGljdHMgPSBbXTtcbiAgIHRoaXMubWVyZ2VzID0gW107XG59XG5cbk1lcmdlU3VtbWFyeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFB1bGxTdW1tYXJ5LnByb3RvdHlwZSk7XG5cbk1lcmdlU3VtbWFyeS5wcm90b3R5cGUucmVzdWx0ID0gJ3N1Y2Nlc3MnO1xuXG5NZXJnZVN1bW1hcnkucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICdDT05GTElDVFM6ICcgKyB0aGlzLmNvbmZsaWN0cy5qb2luKCcsICcpO1xuICAgfVxuICAgcmV0dXJuICdPSyc7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTWVyZ2VTdW1tYXJ5LnByb3RvdHlwZSwgJ2ZhaWxlZCcsIHtcbiAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDA7XG4gICB9XG59KTtcblxuTWVyZ2VTdW1tYXJ5LnBhcnNlcnMgPSBbXG4gICB7XG4gICAgICB0ZXN0OiAvXkF1dG8tbWVyZ2luZ1xccysoLispJC8sXG4gICAgICBoYW5kbGU6IGZ1bmN0aW9uIChyZXN1bHQsIG1lcmdlU3VtbWFyeSkge1xuICAgICAgICAgbWVyZ2VTdW1tYXJ5Lm1lcmdlcy5wdXNoKHJlc3VsdFsxXSk7XG4gICAgICB9XG4gICB9LFxuICAge1xuICAgICAgdGVzdDogL15DT05GTElDVFxccytcXCgoLispXFwpLisgaW4gKC4rKSQvLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAocmVzdWx0LCBtZXJnZVN1bW1hcnkpIHtcbiAgICAgICAgIG1lcmdlU3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VDb25mbGljdChyZXN1bHRbMV0sIHJlc3VsdFsyXSkpO1xuICAgICAgfVxuICAgfSxcbiAgIHtcbiAgICAgIHRlc3Q6IC9eQXV0b21hdGljIG1lcmdlIGZhaWxlZDtcXHMrKC4rKSQvLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAocmVzdWx0LCBtZXJnZVN1bW1hcnkpIHtcbiAgICAgICAgIG1lcmdlU3VtbWFyeS5yZWFzb24gPSByZXN1bHRbMV07XG4gICAgICB9XG4gICB9XG5dO1xuXG5NZXJnZVN1bW1hcnkucGFyc2UgPSBmdW5jdGlvbiAob3V0cHV0KSB7XG4gICBsZXQgbWVyZ2VTdW1tYXJ5ID0gbmV3IE1lcmdlU3VtbWFyeSgpO1xuXG4gICBvdXRwdXQudHJpbSgpLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IE1lcmdlU3VtbWFyeS5wYXJzZXJzLmxlbmd0aDsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICAgbGV0IHBhcnNlciA9IE1lcmdlU3VtbWFyeS5wYXJzZXJzW2ldO1xuXG4gICAgICAgICB2YXIgcmVzdWx0ID0gcGFyc2VyLnRlc3QuZXhlYyhsaW5lKTtcbiAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHBhcnNlci5oYW5kbGUocmVzdWx0LCBtZXJnZVN1bW1hcnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9KTtcblxuICAgbGV0IHB1bGxTdW1tYXJ5ID0gUHVsbFN1bW1hcnkucGFyc2Uob3V0cHV0KTtcbiAgIGlmIChwdWxsU3VtbWFyeS5zdW1tYXJ5LmNoYW5nZXMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obWVyZ2VTdW1tYXJ5LCBwdWxsU3VtbWFyeSk7XG4gICB9XG5cbiAgIHJldHVybiBtZXJnZVN1bW1hcnk7XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmVTdW1tYXJ5O1xuXG4vKipcbiAqIFRoZSBNb3ZlU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNb3ZlU3VtbWFyeSAoKSB7XG4gICB0aGlzLm1vdmVzID0gW107XG4gICB0aGlzLnNvdXJjZXMgPSB7fTtcbn1cblxuTW92ZVN1bW1hcnkuU1VNTUFSWV9SRUdFWCA9IC9eUmVuYW1pbmcgKC4rKSB0byAoLispJC87XG5cbk1vdmVTdW1tYXJ5LnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgIHZhciBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuICAgdmFyIHN1bW1hcnkgPSBuZXcgTW92ZVN1bW1hcnkoKTtcblxuICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBsaW5lcy5sZW5ndGgsIGxpbmU7IGkgPCBpTWF4OyBpKyspIHtcbiAgICAgIGxpbmUgPSBNb3ZlU3VtbWFyeS5TVU1NQVJZX1JFR0VYLmV4ZWMobGluZXNbaV0udHJpbSgpKTtcblxuICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgIHN1bW1hcnkubW92ZXMucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBsaW5lWzFdLFxuICAgICAgICAgICAgdG86IGxpbmVbMl1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICByZXR1cm4gc3VtbWFyeTtcbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gUHVsbFN1bW1hcnk7XG5cbi8qKlxuICogVGhlIFB1bGxTdW1tYXJ5IGlzIHJldHVybmVkIGFzIGEgcmVzcG9uc2UgdG8gZ2V0dGluZyBgZ2l0KCkucHVsbCgpYFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQdWxsU3VtbWFyeSAoKSB7XG4gICB0aGlzLmZpbGVzID0gW107XG4gICB0aGlzLmluc2VydGlvbnMgPSB7fTtcbiAgIHRoaXMuZGVsZXRpb25zID0ge307XG5cbiAgIHRoaXMuc3VtbWFyeSA9IHtcbiAgICAgIGNoYW5nZXM6IDAsXG4gICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgZGVsZXRpb25zOiAwXG4gICB9O1xuXG4gICB0aGlzLmNyZWF0ZWQgPSBbXTtcbiAgIHRoaXMuZGVsZXRlZCA9IFtdO1xufVxuXG4vKipcbiAqIEFycmF5IG9mIGZpbGVzIHRoYXQgd2VyZSBjcmVhdGVkXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cblB1bGxTdW1tYXJ5LnByb3RvdHlwZS5jcmVhdGVkID0gbnVsbDtcblxuLyoqXG4gKiBBcnJheSBvZiBmaWxlcyB0aGF0IHdlcmUgZGVsZXRlZFxuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5QdWxsU3VtbWFyeS5wcm90b3R5cGUuZGVsZXRlZCA9IG51bGw7XG5cbi8qKlxuICogVGhlIGFycmF5IG9mIGZpbGUgcGF0aHMvbmFtZXMgdGhhdCBoYXZlIGJlZW4gbW9kaWZpZWQgaW4gYW55IHBhcnQgb2YgdGhlIHB1bGxlZCBjb250ZW50XG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cblB1bGxTdW1tYXJ5LnByb3RvdHlwZS5maWxlcyA9IG51bGw7XG5cbi8qKlxuICogQSBtYXAgb2YgZmlsZSBwYXRoIHRvIG51bWJlciB0byBzaG93IHRoZSBudW1iZXIgb2YgaW5zZXJ0aW9ucyBwZXIgZmlsZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblB1bGxTdW1tYXJ5LnByb3RvdHlwZS5pbnNlcnRpb25zID0gbnVsbDtcblxuLyoqXG4gKiBBIG1hcCBvZiBmaWxlIHBhdGggdG8gbnVtYmVyIHRvIHNob3cgdGhlIG51bWJlciBvZiBkZWxldGlvbnMgcGVyIGZpbGUuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5QdWxsU3VtbWFyeS5wcm90b3R5cGUuZGVsZXRpb25zID0gbnVsbDtcblxuLyoqXG4gKiBPdmVyYWxsIHN1bW1hcnkgb2YgY2hhbmdlcy9pbnNlcnRpb25zL2RlbGV0aW9ucyBhbmQgdGhlIG51bWJlciBhc3NvY2lhdGVkIHdpdGggZWFjaFxuICogYWNyb3NzIGFsbCBjb250ZW50IHRoYXQgd2FzIHB1bGxlZC5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblB1bGxTdW1tYXJ5LnByb3RvdHlwZS5zdW1tYXJ5ID0gbnVsbDtcblxuUHVsbFN1bW1hcnkuRklMRV9VUERBVEVfUkVHRVggPSAvXlxccyooLis/KVxccytcXHxcXHMrXFxkK1xccyooXFwrKikoLSopLztcblB1bGxTdW1tYXJ5LlNVTU1BUllfUkVHRVggPSAvKFxcZCspXFxEKygoXFxkKylcXEQrXFwoXFwrXFwpKT8oXFxEKyhcXGQrKVxcRCtcXCgtXFwpKT8vO1xuUHVsbFN1bW1hcnkuQUNUSU9OX1JFR0VYID0gLyhjcmVhdGV8ZGVsZXRlKSBtb2RlIFxcZCsgKC4rKS87XG5cblB1bGxTdW1tYXJ5LnBhcnNlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgIHZhciBwdWxsU3VtbWFyeSA9IG5ldyBQdWxsU3VtbWFyeTtcbiAgIHZhciBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xuXG4gICB3aGlsZSAobGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGxpbmVzLnNoaWZ0KCkudHJpbSgpO1xuICAgICAgaWYgKCFsaW5lKSB7XG4gICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKHB1bGxTdW1tYXJ5LCBsaW5lKSB8fCBzdW1tYXJ5KHB1bGxTdW1tYXJ5LCBsaW5lKSB8fCBhY3Rpb24ocHVsbFN1bW1hcnksIGxpbmUpO1xuICAgfVxuXG4gICByZXR1cm4gcHVsbFN1bW1hcnk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUgKHB1bGxTdW1tYXJ5LCBsaW5lKSB7XG5cbiAgIHZhciB1cGRhdGUgPSBQdWxsU3VtbWFyeS5GSUxFX1VQREFURV9SRUdFWC5leGVjKGxpbmUpO1xuICAgaWYgKCF1cGRhdGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgIH1cblxuICAgcHVsbFN1bW1hcnkuZmlsZXMucHVzaCh1cGRhdGVbMV0pO1xuXG4gICB2YXIgaW5zZXJ0aW9ucyA9IHVwZGF0ZVsyXS5sZW5ndGg7XG4gICBpZiAoaW5zZXJ0aW9ucykge1xuICAgICAgcHVsbFN1bW1hcnkuaW5zZXJ0aW9uc1t1cGRhdGVbMV1dID0gaW5zZXJ0aW9ucztcbiAgIH1cblxuICAgdmFyIGRlbGV0aW9ucyA9IHVwZGF0ZVszXS5sZW5ndGg7XG4gICBpZiAoZGVsZXRpb25zKSB7XG4gICAgICBwdWxsU3VtbWFyeS5kZWxldGlvbnNbdXBkYXRlWzFdXSA9IGRlbGV0aW9ucztcbiAgIH1cblxuICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHN1bW1hcnkgKHB1bGxTdW1tYXJ5LCBsaW5lKSB7XG4gICBpZiAoIXB1bGxTdW1tYXJ5LmZpbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgfVxuXG4gICB2YXIgdXBkYXRlID0gUHVsbFN1bW1hcnkuU1VNTUFSWV9SRUdFWC5leGVjKGxpbmUpO1xuICAgaWYgKCF1cGRhdGUgfHwgKHVwZGF0ZVszXSA9PT0gdW5kZWZpbmVkICYmIHVwZGF0ZVs1XSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgfVxuXG4gICBwdWxsU3VtbWFyeS5zdW1tYXJ5LmNoYW5nZXMgPSArdXBkYXRlWzFdIHx8IDA7XG4gICBwdWxsU3VtbWFyeS5zdW1tYXJ5Lmluc2VydGlvbnMgPSArdXBkYXRlWzNdIHx8IDA7XG4gICBwdWxsU3VtbWFyeS5zdW1tYXJ5LmRlbGV0aW9ucyA9ICt1cGRhdGVbNV0gfHwgMDtcblxuICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGFjdGlvbiAocHVsbFN1bW1hcnksIGxpbmUpIHtcblxuICAgdmFyIG1hdGNoID0gUHVsbFN1bW1hcnkuQUNUSU9OX1JFR0VYLmV4ZWMobGluZSk7XG4gICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICB9XG5cbiAgIHZhciBmaWxlID0gbWF0Y2hbMl07XG5cbiAgIGlmIChwdWxsU3VtbWFyeS5maWxlcy5pbmRleE9mKGZpbGUpIDwgMCkge1xuICAgICAgcHVsbFN1bW1hcnkuZmlsZXMucHVzaChmaWxlKTtcbiAgIH1cblxuICAgdmFyIGNvbnRhaW5lciA9IChtYXRjaFsxXSA9PT0gJ2NyZWF0ZScpID8gcHVsbFN1bW1hcnkuY3JlYXRlZCA6IHB1bGxTdW1tYXJ5LmRlbGV0ZWQ7XG4gICBjb250YWluZXIucHVzaChmaWxlKTtcblxuICAgcmV0dXJuIHRydWU7XG59XG4iLCJcblxuXG52YXIgRmlsZVN0YXR1c1N1bW1hcnkgPSByZXF1aXJlKCcuL0ZpbGVTdGF0dXNTdW1tYXJ5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdHVzU3VtbWFyeTtcblxuLyoqXG4gKiBUaGUgU3RhdHVzU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTdGF0dXNTdW1tYXJ5ICgpIHtcbiAgIHRoaXMubm90X2FkZGVkID0gW107XG4gICB0aGlzLmNvbmZsaWN0ZWQgPSBbXTtcbiAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgdGhpcy5kZWxldGVkID0gW107XG4gICB0aGlzLm1vZGlmaWVkID0gW107XG4gICB0aGlzLnJlbmFtZWQgPSBbXTtcbiAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgIHRoaXMuc3RhZ2VkID0gW107XG59XG5cblxuLyoqXG4gKiBOdW1iZXIgb2YgY29tbWl0cyBhaGVhZCBvZiB0aGUgdHJhY2tlZCBicmFuY2hcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cblN0YXR1c1N1bW1hcnkucHJvdG90eXBlLmFoZWFkID0gMDtcblxuLyoqXG4gKiBOdW1iZXIgb2YgY29tbWl0cyBiZWhpbmQgdGhlIHRyYWNrZWQgYnJhbmNoXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5TdGF0dXNTdW1tYXJ5LnByb3RvdHlwZS5iZWhpbmQgPSAwO1xuXG4vKipcbiAqIE5hbWUgb2YgdGhlIGN1cnJlbnQgYnJhbmNoXG4gKiBAdHlwZSB7bnVsbH1cbiAqL1xuU3RhdHVzU3VtbWFyeS5wcm90b3R5cGUuY3VycmVudCA9IG51bGw7XG5cbi8qKlxuICogTmFtZSBvZiB0aGUgYnJhbmNoIGJlaW5nIHRyYWNrZWRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cblN0YXR1c1N1bW1hcnkucHJvdG90eXBlLnRyYWNraW5nID0gbnVsbDtcblxuLyoqXG4gKiBBbGwgZmlsZXMgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSBgcGF0aGAgYW5kIHN0YXR1cyBpbiBgaW5kZXhgIGFuZFxuICogaW4gdGhlIGB3b3JraW5nX2RpcmAuXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5TdGF0dXNTdW1tYXJ5LnByb3RvdHlwZS5maWxlcyA9IG51bGw7XG5cbi8qKlxuICogR2V0cyB3aGV0aGVyIHRoaXMgU3RhdHVzU3VtbWFyeSByZXByZXNlbnRzIGEgY2xlYW4gd29ya2luZyBicmFuY2guXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3RhdHVzU3VtbWFyeS5wcm90b3R5cGUuaXNDbGVhbiA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiAwID09PSBPYmplY3Qua2V5cyh0aGlzKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXNbbmFtZV0pICYmIHRoaXNbbmFtZV0ubGVuZ3RoO1xuICAgfSwgdGhpcykubGVuZ3RoO1xufTtcblxuU3RhdHVzU3VtbWFyeS5wYXJzZXJzID0ge1xuICAgJyMjJzogZnVuY3Rpb24gKGxpbmUsIHN0YXR1cykge1xuICAgICAgdmFyIGFoZWFkUmVnID0gL2FoZWFkIChcXGQrKS87XG4gICAgICB2YXIgYmVoaW5kUmVnID0gL2JlaGluZCAoXFxkKykvO1xuICAgICAgdmFyIGN1cnJlbnRSZWcgPSAvXiguKz8oPz0oPzpcXC57M318XFxzfCQpKSkvO1xuICAgICAgdmFyIHRyYWNraW5nUmVnID0gL1xcLnszfShcXFMqKS87XG4gICAgICB2YXIgcmVnZXhSZXN1bHQ7XG5cbiAgICAgIHJlZ2V4UmVzdWx0ID0gYWhlYWRSZWcuZXhlYyhsaW5lKTtcbiAgICAgIHN0YXR1cy5haGVhZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuXG4gICAgICByZWdleFJlc3VsdCA9IGJlaGluZFJlZy5leGVjKGxpbmUpO1xuICAgICAgc3RhdHVzLmJlaGluZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuXG4gICAgICByZWdleFJlc3VsdCA9IGN1cnJlbnRSZWcuZXhlYyhsaW5lKTtcbiAgICAgIHN0YXR1cy5jdXJyZW50ID0gcmVnZXhSZXN1bHQgJiYgcmVnZXhSZXN1bHRbMV07XG5cbiAgICAgIHJlZ2V4UmVzdWx0ID0gdHJhY2tpbmdSZWcuZXhlYyhsaW5lKTtcbiAgICAgIHN0YXR1cy50cmFja2luZyA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgfSxcblxuICAgJz8/JzogZnVuY3Rpb24gKGxpbmUsIHN0YXR1cykge1xuICAgICAgc3RhdHVzLm5vdF9hZGRlZC5wdXNoKGxpbmUpO1xuICAgfSxcblxuICAgQTogZnVuY3Rpb24gKGxpbmUsIHN0YXR1cykge1xuICAgICAgc3RhdHVzLmNyZWF0ZWQucHVzaChsaW5lKTtcbiAgIH0sXG5cbiAgIEFNOiBmdW5jdGlvbiAobGluZSwgc3RhdHVzKSB7XG4gICAgICBzdGF0dXMuY3JlYXRlZC5wdXNoKGxpbmUpO1xuICAgfSxcblxuICAgRDogZnVuY3Rpb24gKGxpbmUsIHN0YXR1cykge1xuICAgICAgc3RhdHVzLmRlbGV0ZWQucHVzaChsaW5lKTtcbiAgIH0sXG5cbiAgIE06IGZ1bmN0aW9uIChsaW5lLCBzdGF0dXMsIGluZGV4U3RhdGUpIHtcbiAgICAgIHN0YXR1cy5tb2RpZmllZC5wdXNoKGxpbmUpO1xuXG4gICAgICBpZiAoaW5kZXhTdGF0ZSA9PT0gJ00nKSB7XG4gICAgICAgICBzdGF0dXMuc3RhZ2VkLnB1c2gobGluZSk7XG4gICAgICB9XG4gICB9LFxuXG4gICBSOiBmdW5jdGlvbiAobGluZSwgc3RhdHVzKSB7XG4gICAgICB2YXIgZGV0YWlsID0gL14oLispIC0+ICguKykkLy5leGVjKGxpbmUpIHx8IFtudWxsLCBsaW5lLCBsaW5lXTtcblxuICAgICAgc3RhdHVzLnJlbmFtZWQucHVzaCh7XG4gICAgICAgICBmcm9tOiBkZXRhaWxbMV0sXG4gICAgICAgICB0bzogZGV0YWlsWzJdXG4gICAgICB9KTtcbiAgIH0sXG5cbiAgIFVVOiBmdW5jdGlvbiAobGluZSwgc3RhdHVzKSB7XG4gICAgICBzdGF0dXMuY29uZmxpY3RlZC5wdXNoKGxpbmUpO1xuICAgfVxufTtcblxuU3RhdHVzU3VtbWFyeS5wYXJzZXJzLk1NID0gU3RhdHVzU3VtbWFyeS5wYXJzZXJzLk07XG5cblN0YXR1c1N1bW1hcnkucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgdmFyIGZpbGUsIGxpbmVzdHI7XG5cbiAgIHZhciBsaW5lcyA9IHRleHQudHJpbSgpLnNwbGl0KCdcXG4nKTtcbiAgIHZhciBzdGF0dXMgPSBuZXcgU3RhdHVzU3VtbWFyeSgpO1xuXG4gICB3aGlsZSAobGluZXN0ciA9IGxpbmVzLnNoaWZ0KCkpIHtcbiAgICAgIGZpbGUgPSBzcGxpdExpbmUobGluZXN0cik7XG5cbiAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlLmhhbmRsZXIpIHtcbiAgICAgICAgIGZpbGUuaGFuZGxlcihmaWxlLnBhdGgsIHN0YXR1cywgZmlsZS5pbmRleCwgZmlsZS53b3JraW5nRGlyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUuY29kZSAhPT0gJyMjJykge1xuICAgICAgICAgc3RhdHVzLmZpbGVzLnB1c2gobmV3IEZpbGVTdGF0dXNTdW1tYXJ5KGZpbGUucGF0aCwgZmlsZS5pbmRleCwgZmlsZS53b3JraW5nRGlyKSk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJldHVybiBzdGF0dXM7XG59O1xuXG5cbmZ1bmN0aW9uIHNwbGl0TGluZSAobGluZVN0cikge1xuICAgdmFyIGxpbmUgPSBsaW5lU3RyLnRyaW0oKS5tYXRjaCgvKC4uPykoXFxzKykoLiopLyk7XG4gICBpZiAoIWxpbmUgfHwgIWxpbmVbMV0udHJpbSgpKSB7XG4gICAgICBsaW5lID0gbGluZVN0ci50cmltKCkubWF0Y2goLyguLj8pXFxzKyguKikvKTtcbiAgIH1cblxuICAgaWYgKCFsaW5lKSB7XG4gICAgICByZXR1cm47XG4gICB9XG5cbiAgIHZhciBjb2RlID0gbGluZVsxXTtcbiAgIGlmIChsaW5lWzJdLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvZGUgKz0gJyAnO1xuICAgfVxuICAgaWYgKGNvZGUubGVuZ3RoID09PSAxICYmIGxpbmVbMl0ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb2RlID0gJyAnICsgY29kZTtcbiAgIH1cblxuICAgcmV0dXJuIHtcbiAgICAgIHJhdzogY29kZSxcbiAgICAgIGNvZGU6IGNvZGUudHJpbSgpLFxuICAgICAgaW5kZXg6IGNvZGUuY2hhckF0KDApLFxuICAgICAgd29ya2luZ0RpcjogY29kZS5jaGFyQXQoMSksXG4gICAgICBoYW5kbGVyOiBTdGF0dXNTdW1tYXJ5LnBhcnNlcnNbY29kZS50cmltKCldLFxuICAgICAgcGF0aDogbGluZVszXVxuICAgfTtcbn1cbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBUYWdMaXN0O1xuXG5mdW5jdGlvbiBUYWdMaXN0ICh0YWdMaXN0LCBsYXRlc3QpIHtcbiAgIHRoaXMubGF0ZXN0ID0gbGF0ZXN0O1xuICAgdGhpcy5hbGwgPSB0YWdMaXN0XG59XG5cblRhZ0xpc3QucGFyc2UgPSBmdW5jdGlvbiAoZGF0YSwgY3VzdG9tU29ydCkge1xuICAgdmFyIG51bWJlciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC5yZXBsYWNlKC9eXFxEKy9nLCAnJyksIDEwKSB8fCAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgIH07XG5cbiAgIHZhciB0YWdzID0gZGF0YVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS50cmltKCk7IH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICBpZiAoIWN1c3RvbVNvcnQpIHtcbiAgICAgIHRhZ3Muc29ydChmdW5jdGlvbiAodGFnQSwgdGFnQikge1xuICAgICAgICAgdmFyIHBhcnRzQSA9IHRhZ0Euc3BsaXQoJy4nKTtcbiAgICAgICAgIHZhciBwYXJ0c0IgPSB0YWdCLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgIGlmIChwYXJ0c0EubGVuZ3RoID09PSAxIHx8IHBhcnRzQi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWdBIC0gdGFnQiA+IDAgPyAxIDogLTE7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gTWF0aC5tYXgocGFydHNBLmxlbmd0aCwgcGFydHNCLmxlbmd0aCk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhID0gbnVtYmVyKHBhcnRzQVtpXSk7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlcihwYXJ0c0JbaV0pO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IGEgLSBiO1xuICAgICAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgICAgIHJldHVybiBkaWZmID4gMCA/IDEgOiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcbiAgIH1cblxuICAgdmFyIGxhdGVzdCA9IGN1c3RvbVNvcnQgPyB0YWdzWzBdIDogdGFncy5maWx0ZXIoZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gdGFnLmluZGV4T2YoJy4nKSA+PSAwOyB9KS5wb3AoKTtcblxuICAgcmV0dXJuIG5ldyBUYWdMaXN0KHRhZ3MsIGxhdGVzdCk7XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmVycmVkICgpIHtcbiAgIHZhciBkID0ge307XG4gICBkLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBkLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgZC5yZWplY3QgPSByZWplY3RcbiAgIH0pO1xuXG4gICByZXR1cm4gZDtcbn07XG4iLCJcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmZ1bmN0aW9uIGV4aXN0cyAocGF0aCwgaXNGaWxlLCBpc0RpcmVjdG9yeSkge1xuICAgdHJ5IHtcbiAgICAgIHZhciBtYXRjaGVzID0gZmFsc2U7XG4gICAgICB2YXIgc3RhdCA9IGZzLnN0YXRTeW5jKHBhdGgpO1xuXG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcyB8fCBpc0ZpbGUgJiYgc3RhdC5pc0ZpbGUoKTtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzIHx8IGlzRGlyZWN0b3J5ICYmIHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICB9XG4gICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGF0aCwgdHlwZSkge1xuICAgaWYgKCF0eXBlKSB7XG4gICAgICByZXR1cm4gZXhpc3RzKHBhdGgsIHRydWUsIHRydWUpO1xuICAgfVxuXG4gICByZXR1cm4gZXhpc3RzKHBhdGgsIHR5cGUgJiAxLCB0eXBlICYgMik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5GSUxFID0gMTtcblxubW9kdWxlLmV4cG9ydHMuRk9MREVSID0gMjtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG5cdFx0Ly8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcblx0XHQvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcblx0XHQvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93c1xuXHRcdC8vIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlXG5cdFx0Ly8gdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuXHRzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVycilcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjbG9uZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGdpdCA9IHJlcXVpcmUoJ3NpbXBsZS1naXQvcHJvbWlzZScpO1xuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJyk7XG4gICAgdmFyIGV4ZWMgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYztcbiAgICB2YXIgcmVtb3RlID0gXCJodHRwczovL2dpdGh1Yi5jb20vdG9tb3lhZi9oeXBlcmFwcC1ib2lsZXJwbGF0ZS5naXRcIjtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbignZ2l0IGNsb25lJyArIFwiIFwiICsgcmVtb3RlICsgXCIgLi9cIiArIG5hbWUpKTtcbiAgICBnaXQoKS5zaWxlbnQodHJ1ZSlcbiAgICAgICAgLmNsb25lKHJlbW90ZSwgbmFtZSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oJ2NkIC4vJyArIG5hbWUgKyAnICYmIHlhcm4gJiYgeWFybiBuZXcgJiYgZ2l0IGluaXQnKSk7XG4gICAgICAgIGV4ZWMoJ2NkIC4vJyArIG5hbWUgKyBcIiAmJiB5YXJuICYmIHlhcm4gbmV3ICYmIGdpdCBpbml0XCIsIGZ1bmN0aW9uIChlcnIsIHN0ZG91dCwgc3RkZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZG91dCk7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCdmYWlsZWQ6ICcsIGVycik7IH0pO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNvbW1hbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldzogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfYS5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICAgICAgICAgIGNsb25lKG5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVscDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxwIG1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbnZhciBoeXBlcmFwcCA9IHJlcXVpcmUoJy4vaHlwZXJhcHAtY2xpJyk7XG52YXIgbiA9ICtwcm9jZXNzLmFyZ3ZbMl07XG52YXIgYXJndiA9IHJlcXVpcmUoJ21pbmltaXN0JykocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKVsnXyddO1xuaWYgKGFyZ3YubGVuZ3RoID4gMSkge1xuICAgIGNvbnNvbGUubG9nKGh5cGVyYXBwLmNvbW1hbmRzKClbYXJndlswXV0oeyBuYW1lOiBhcmd2WzFdIH0pKTtcbn1cbmVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGFyZ3YpO1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnT29wcyEnKSk7XG4gICAgaHlwZXJhcHAuY29tbWFuZHMoKVsnaGVscCddKCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9