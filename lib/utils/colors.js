'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getUniqueColors = exports.colors = exports.MODAL_TITLE = exports.MODAL_ICON = exports.MODAL_HEADER = exports.BLACK = exports.GRAPHQL_PINK = exports.REACT_CYAN = exports.REACTIVEX_PURPLE = exports.REACTIVEX_PINK = exports.REDUX_PURPLE = exports.COMP_ORANGE_2 = exports.COMP_YELLOW = exports.COMP_ORANGE = exports.COMP_BLUE = exports.DREAMY_BLUE = exports.CLOUDY_DARK = exports.CLOUDY_LIGHT = exports.EMERALD_DARK = exports.EMERALD_LIGHT = exports.ASPHALT_DARK = exports.ASPHALT_LIGHT = exports.ACCENT_BLUE = exports.PRIMARY_BLUE = exports.LIST_HEADER = exports.CARD_FOOTER = exports.CARD_HEADER = exports.HEART = exports.GAUGE_BACKGROUND = exports.GAUGE = exports.TAB_COLOR_10 = exports.TAB_COLOR_9 = exports.TAB_COLOR_8 = exports.TAB_COLOR_7 = exports.TAB_COLOR_6 = exports.TAB_COLOR_5 = exports.TAB_COLOR_4 = exports.TAB_COLOR_3 = exports.TAB_COLOR_2 = exports.TAB_COLOR_1 = exports.ICON_DEFAULT_COLOR = exports.ICON_ACTIVE_COLOR = exports.BUTTON_ALT_FOCUS = exports.BUTTON_ALT_HOVER = exports.BUTTON_ALT = exports.BUTTON_DEFAULT_FOCUS = exports.BUTTON_DEFAULT_HOVER = exports.BUTTON_DEFAULT = exports.BUTTON_TEXT = exports.SEARCHBAR = exports.TAB_TEXT_SELECTED = exports.TAB_TEXT = exports.TAB_SELECTED = exports.TAB_HOVER = exports.TAB = exports.MENUBAR_SELECTED = exports.WORKSPACE = exports.FOOTER = exports.MENUBAR = exports.HEADER = undefined;
exports.getColor = getColor;
exports.hexToRgbA = hexToRgbA;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DEFAULT COLORS
var HEADER = exports.HEADER = '#2C3E50';

var MENUBAR = exports.MENUBAR = '#3B97D3';

var FOOTER = exports.FOOTER = '#F7F7F7';

var WORKSPACE = exports.WORKSPACE = '#ECF0F1';

// SECONDARY COLORS
var MENUBAR_SELECTED = exports.MENUBAR_SELECTED = '#81C1EA';

var TAB = exports.TAB = '#E3E5E5';
var TAB_HOVER = exports.TAB_HOVER = '#81C1EA';
var TAB_SELECTED = exports.TAB_SELECTED = '#3B97D3';
var TAB_TEXT = exports.TAB_TEXT = '#5E5E5E';
var TAB_TEXT_SELECTED = exports.TAB_TEXT_SELECTED = '#FFFFFF';

// SEARCH COLORS
var SEARCHBAR = exports.SEARCHBAR = '#34495D';

// BUTTON COLORS
var BUTTON_TEXT = exports.BUTTON_TEXT = '#FFFFFF';
var BUTTON_DEFAULT = exports.BUTTON_DEFAULT = '#3B97D3';
var BUTTON_DEFAULT_HOVER = exports.BUTTON_DEFAULT_HOVER = '#81C1EA';
var BUTTON_DEFAULT_FOCUS = exports.BUTTON_DEFAULT_FOCUS = '#81C1EA';

var BUTTON_ALT = exports.BUTTON_ALT = '#13A085';
var BUTTON_ALT_HOVER = exports.BUTTON_ALT_HOVER = '#25B89A';
var BUTTON_ALT_FOCUS = exports.BUTTON_ALT_FOCUS = '#25B89A';

//TODO: BUTTON_SUCCESS, BUTTON_WARNING, BUTTON_DANGER

// ICON COLORS
var ICON_ACTIVE_COLOR = exports.ICON_ACTIVE_COLOR = '#FFFFFF';
var ICON_DEFAULT_COLOR = exports.ICON_DEFAULT_COLOR = '#34495D';

// ODEUM REPORT APP SPECIFIC (WORKFLOW) TAB COLORS
var TAB_COLOR_1 = exports.TAB_COLOR_1 = '#81C1EA';
var TAB_COLOR_2 = exports.TAB_COLOR_2 = '#3B97D3';
var TAB_COLOR_3 = exports.TAB_COLOR_3 = '#25B89A';
var TAB_COLOR_4 = exports.TAB_COLOR_4 = '#2AC639';
var TAB_COLOR_5 = exports.TAB_COLOR_5 = '#F39C12';
var TAB_COLOR_6 = exports.TAB_COLOR_6 = '#D4CD11';
var TAB_COLOR_7 = exports.TAB_COLOR_7 = '#E74C3C';
var TAB_COLOR_8 = exports.TAB_COLOR_8 = '#CE1D1D';
var TAB_COLOR_9 = exports.TAB_COLOR_9 = '#979898';
var TAB_COLOR_10 = exports.TAB_COLOR_10 = '#5E5E5E';

// ODEUM REPORT APP SPECIFIC COMPONENT COLORS
var GAUGE = exports.GAUGE = '#25B89A';
var GAUGE_BACKGROUND = exports.GAUGE_BACKGROUND = '#D5D5D5';
var HEART = exports.HEART = '#D42027';
var CARD_HEADER = exports.CARD_HEADER = '#2C3E50';
var CARD_FOOTER = exports.CARD_FOOTER = '#EEEDED';
var LIST_HEADER = exports.LIST_HEADER = '#2C3E50';

// ODEUM COLORSCHEME (OLD NAMING CONVENTION)
var PRIMARY_BLUE = exports.PRIMARY_BLUE = '#3B97D3';
var ACCENT_BLUE = exports.ACCENT_BLUE = '#2280C3';
var ASPHALT_LIGHT = exports.ASPHALT_LIGHT = '#34495D';
var ASPHALT_DARK = exports.ASPHALT_DARK = '#2C3E50';
var EMERALD_LIGHT = exports.EMERALD_LIGHT = '#25B89A';
var EMERALD_DARK = exports.EMERALD_DARK = '#13A085';
var CLOUDY_LIGHT = exports.CLOUDY_LIGHT = '#ECF0F0';
var CLOUDY_DARK = exports.CLOUDY_DARK = '#BDC2C6';
var DREAMY_BLUE = exports.DREAMY_BLUE = '#81C1EA';

var COMP_BLUE = exports.COMP_BLUE = '#006CB2';
var COMP_ORANGE = exports.COMP_ORANGE = '#FF9600';
var COMP_YELLOW = exports.COMP_YELLOW = '#F8BB31';
var COMP_ORANGE_2 = exports.COMP_ORANGE_2 = '#E98832';

var REDUX_PURPLE = exports.REDUX_PURPLE = '#764EB9';
var REACTIVEX_PINK = exports.REACTIVEX_PINK = '#EA228F';
var REACTIVEX_PURPLE = exports.REACTIVEX_PURPLE = '#513085';
var REACT_CYAN = exports.REACT_CYAN = '#58C1DC';
var GRAPHQL_PINK = exports.GRAPHQL_PINK = '#E33CAA';
var BLACK = exports.BLACK = '#000';

var MODAL_HEADER = exports.MODAL_HEADER = PRIMARY_BLUE;
var MODAL_ICON = exports.MODAL_ICON = '#fff';
var MODAL_TITLE = exports.MODAL_TITLE = '#fff';

// COLOR ARRAY

var colors = exports.colors = [{
	name: 'HEADER',
	value: '#2C3E50'
}, {
	name: 'MENUBAR',
	value: '#3B97D3'
}, {
	name: 'FOOTER',
	value: '#F7F7F7'
}, {
	name: 'WORKSPACE',
	value: '#ECF0F1'
}, {
	name: 'MENUBAR_SELECTED',
	value: '#81C1EA'
}, {
	name: 'TAB',
	value: '#E3E5E5'
}, {
	name: 'TAB_HOVER',
	value: '#81C1EA'
}, {
	name: 'TAB_SELECTED',
	value: '#3B97D3'
}, {
	name: 'TAB_TEXT',
	value: '#5E5E5E'
}, {
	name: 'TAB_TEXT_SELECTED',
	value: '#FFFFFF'
}, {
	name: 'SEARCHBAR',
	value: '#34495D'
}, {
	name: 'BUTTON_TEXT',
	value: '#FFFFFF'
}, {
	name: 'BUTTON_DEFAULT',
	value: '#3B97D3'
}, {
	name: 'BUTTON_DEFAULT_HOVER',
	value: '#81C1EA'
}, {
	name: 'BUTTON_DEFAULT_FOCUS',
	value: '#81C1EA'
}, {
	name: 'BUTTON_ALT',
	value: '#13A085'
}, {
	name: 'BUTTON_ALT_HOVER',
	value: '#25B89A'
}, {
	name: 'BUTTON_ALT_FOCUS',
	value: '#25B89A'
}, {
	name: 'ICON_ACTIVE_COLOR',
	value: '#FFFFFF'
}, {
	name: 'ICON_DEFAULT_COLOR',
	value: '#34495D'
}, {
	name: 'TAB_COLOR_1',
	value: '#81C1EA'
}, {
	name: 'TAB_COLOR_2',
	value: '#3B97D3'
}, {
	name: 'TAB_COLOR_3',
	value: '#25B89A'
}, {
	name: 'TAB_COLOR_4',
	value: '#2AC639'
}, {
	name: 'TAB_COLOR_5',
	value: '#F39C12'
}, {
	name: 'TAB_COLOR_6',
	value: '#D4CD11'
}, {
	name: 'TAB_COLOR_7',
	value: '#E74C3C'
}, {
	name: 'TAB_COLOR_8',
	value: '#CE1D1D'
}, {
	name: 'TAB_COLOR_9',
	value: '#979898'
}, {
	name: 'TAB_COLOR_10',
	value: '#5E5E5E'
}, {
	name: 'GAUGE',
	value: '#25B89A'
}, {
	name: 'GAUGE_BACKGROUND',
	value: '#D5D5D5'
}, {
	name: 'HEART',
	value: '#D42027'
}, {
	name: 'CARD_HEADER',
	value: '#2C3E50'
}, {
	name: 'CARD_FOOTER',
	value: '#EEEDED'
}, {
	name: 'LIST_HEADER',
	value: '#2C3E50'
}, {
	name: 'PRIMARY_BLUE',
	value: '#3B97D3'
}, {
	name: 'ACCENT_BLUE',
	value: '#2280C3'
}, {
	name: 'ASPHALT_LIGHT',
	value: '#34495D'
}, {
	name: 'ASPHALT_DARK',
	value: '#2C3E50'
}, {
	name: 'EMERALD_LIGHT',
	value: '#25B89A'
}, {
	name: 'EMERALD_DARK',
	value: '#13A085'
}, {
	name: 'CLOUDY_LIGHT',
	value: '#ECF0F0'
}, {
	name: 'CLOUDY_DARK',
	value: '#BDC2C6'
}, {
	name: 'DREAMY_BLUE',
	value: '#81C1EA'
}, {
	name: 'COMP_BLUE',
	value: '#006CB2'
}, {
	name: 'COMP_ORANGE',
	value: '#FF9600'
}, {
	name: 'COMP_YELLOW',
	value: '#F8BB31'
}, {
	name: 'COMP_ORANGE_2',
	value: '#E98832'
}, {
	name: 'REDUX_PURPLE',
	value: '#764EB9'
}, {
	name: 'REACTIVEX_PINK',
	value: '#EA228F'
}, {
	name: 'REACTIVEX_PURPLE',
	value: '#513085'
}, {
	name: 'REACT_CYAN',
	value: '#58C1DC'
}, {
	name: 'GRAPHQL_PINK',
	value: '#E33CAA'
}, {
	name: 'BLACK',
	value: '#000'
}, {
	name: 'MODAL_HEADER',
	value: '#3B97D3'
}, {
	name: 'MODAL_ICON',
	value: '#FFF'
}, {
	name: 'MODAL_TITLE',
	value: '#FFF'
}];

// HELPER FUNCTIONS

var removeDuplicates = function removeDuplicates(arrArg) {
	return arrArg.filter(function (elem, pos, arr) {
		return arr.indexOf(elem) === pos;
	});
};

var getUniqueColors = exports.getUniqueColors = function getUniqueColors(colors) {
	return removeDuplicates(colors.map(function (color) {
		return color.value;
	}));
};

function getColor(colorName) {
	var colorFinder = _lodash2.default.find(colors, function (color) {
		return color.name === colorName;
	});
	return colorFinder.value;
}

function hexToRgbA(hex) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [c >> 16 & 255, c >> 8 & 255, c & 255].join(', ') + ', 1)';
	}
	throw new Error('Invalid Hex value');
}