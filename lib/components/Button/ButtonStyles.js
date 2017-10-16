'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sizes = exports.StyledButtonText = exports.StyledButtonIconText = exports.Div = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\theight:', ';\n\tmargin: 0.3rem 0.7rem 0.3rem 0.7rem;\n'], ['\n\theight:', ';\n\tmargin: 0.3rem 0.7rem 0.3rem 0.7rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    float: left;\n    border-radius: 4px;\n\tbackground: ', ';\n\tpadding: 0px;\n\tpadding: ', ';\n\theight: ', ';\n\t/* margin: 0.3rem 0.7rem 0.7rem 0; */\n\tborder: none;\n    text-decoration: none;\n\tcursor: ', ';\n\tuser-select: none;\n\toutline: none;\n\n    &:focus {\n        border-color: ', ';\t\t \n\t\tbox-shadow: ', ';\n    }\n\n    &&:active {\n        background: ', ';\n        border-color: ', ';\n\t\tbox-shadow: ', '; \n\t\ttransform: ', ';\n    }\n\n    &:hover {\n\t\tbackground: ', ';\n        border-color: ', ';\t\t \n\t\tbox-shadow: ', ';\n    }\n'], ['\n    display: flex;\n    align-items: center;\n    float: left;\n    border-radius: 4px;\n\tbackground: ', ';\n\tpadding: 0px;\n\tpadding: ', ';\n\theight: ', ';\n\t/* margin: 0.3rem 0.7rem 0.7rem 0; */\n\tborder: none;\n    text-decoration: none;\n\tcursor: ', ';\n\tuser-select: none;\n\toutline: none;\n\n    &:focus {\n        border-color: ', ';\t\t \n\t\tbox-shadow: ', ';\n    }\n\n    &&:active {\n        background: ', ';\n        border-color: ', ';\n\t\tbox-shadow: ', '; \n\t\ttransform: ', ';\n    }\n\n    &:hover {\n\t\tbackground: ', ';\n        border-color: ', ';\t\t \n\t\tbox-shadow: ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tcolor: ', ';\n\tfont-family: \'Source Sans Pro\';\n    font-size: ', ';\n    font-weight: 300;\n\tfont-style: normal; \n\tpadding-right: 2px;\n'], ['\n\tcolor: ', ';\n\tfont-family: \'Source Sans Pro\';\n    font-size: ', ';\n    font-weight: 300;\n\tfont-style: normal; \n\tpadding-right: 2px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tcolor: ', ';\n    font-family: \'Source Sans Pro\';\n    font-size: ', ';\n    font-weight: 300;\n\tfont-style: normal; \n\tpadding-right: 15px;\n'], ['\n\tcolor: ', ';\n    font-family: \'Source Sans Pro\';\n    font-size: ', ';\n    font-weight: 300;\n\tfont-style: normal; \n\tpadding-right: 15px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = exports.Div = _styledComponents2.default.div(_templateObject, function (_ref) {
	var size = _ref.size;
	return sizes[size].height;
});

var StyledButton = _styledComponents2.default.button(_templateObject2, function (props) {
	return props.isDisabled ? props.disabledColor : props.color;
}, function (props) {
	return props.hasIconText ? '0 13px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 0 0 10px' : '0 0 0 15px';
}, function (_ref2) {
	var size = _ref2.size;
	return sizes[size].height;
}, function (props) {
	return props.isDisabled ? 'not-allowed' : 'pointer';
}, function (props) {
	return props.isDisabled ? props.disabledColor : (0, _polished.transparentize)(0.7, props.color);
}, function (props) {
	return props.isDisabled ? null : '0 0 0 3px ' + (0, _polished.transparentize)(0.7, props.color);
}, function (props) {
	return props.isDisabled ? props.disabledColor : (0, _polished.darken)(0.1, props.color);
}, function (props) {
	return props.isDisabled ? props.disabledColor : (0, _polished.darken)(0.1, props.color);
}, function (props) {
	return props.isDisabled ? null : 'inset 0 1px 2px ' + (0, _polished.transparentize)(0.7, (0, _polished.rgba)(0, 0, 0, 0.1));
}, function (props) {
	return props.isDisabled ? null : 'translateY(2px)';
}, function (props) {
	return props.isDisabled ? props.disabledColor : (0, _polished.transparentize)(0.2, props.color);
}, function (props) {
	return props.isDisabled ? props.disabledColor : (0, _polished.transparentize)(0.7, props.color);
}, function (props) {
	return props.isDisabled ? null : '0 0 0 3px ' + (0, _polished.transparentize)(0.7, props.color);
});
// Button with icon or icon and text
var StyledButtonIconText = exports.StyledButtonIconText = _styledComponents2.default.span(_templateObject3, _colors.BUTTON_TEXT, function (_ref3) {
	var size = _ref3.size;
	return sizes[size].fontSize;
});
// Button with text and no icon
var StyledButtonText = exports.StyledButtonText = _styledComponents2.default.span(_templateObject4, _colors.BUTTON_TEXT, function (_ref4) {
	var size = _ref4.size;
	return sizes[size].fontSize;
});

exports.default = StyledButton;
var sizes = exports.sizes = {
	xsmall: {
		height: '20px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	},
	small: {
		height: '38px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '1.5rem',
		fontWeight: '300'
	},
	medium: {
		height: '46px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	},
	large: {
		height: '58px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '2.0rem',
		fontWeight: '300'
	},
	xlarge: {
		height: '72px',
		paddingButtonIcon: '0 0px 0 10px',
		paddingButtonText: '0 8px 0 15px',
		paddingButtonIconText: '0 13px 0 15px',
		paddingRightIconText: '2px',
		paddingRightText: '15px',
		fontSize: '15px',
		fontWeight: '300'
	}
};