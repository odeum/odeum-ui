'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sizes = exports.StyledButtonText = exports.StyledButtonIconText = exports.StyledButtonContainer = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledButtonContainer = /*#__PURE__*/exports.StyledButtonContainer = _styledComponents2.default.div.withConfig({
	displayName: 'ButtonStyles__StyledButtonContainer'
})(['height:', ';margin:', ';'], function (_ref) {
	var size = _ref.size;
	return sizes[size].height;
}, function (props) {
	return props.margin ? props.margin : '0.3rem 0.4rem 0.3rem 0.4rem';
});
/* margin: 0.3rem 0.4rem 0.3rem 0.4rem; */

var StyledButton = /*#__PURE__*/_styledComponents2.default.button.withConfig({
	displayName: 'ButtonStyles__StyledButton'
})(['display:flex;align-items:center;float:left;border-radius:4px;background:', ';padding:0px;padding:', ';height:', ';border:none;text-decoration:none;cursor:', ';user-select:none;outline:none;&:focus{border-color:', ';box-shadow:', ';}&&:active{background:', ';border-color:', ';box-shadow:', ';transform:', ';}&:hover{background:', ';border-color:', ';box-shadow:', ';}'], function (props) {
	return props.isDisabled ? props.disabledColor : props.color;
}, function (props) {
	return props.hasIconText ? '0 13px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 10px' : '0 0 0 15px';
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
var StyledButtonIconText = /*#__PURE__*/exports.StyledButtonIconText = _styledComponents2.default.span.withConfig({
	displayName: 'ButtonStyles__StyledButtonIconText'
})(['color:', ';font-family:Helvetica,Arial,sans-serif;font-size:', ';font-weight:300;font-style:normal;padding-right:2px;margin-left:', ';'], _colors.BUTTON_TEXT, function (_ref3) {
	var size = _ref3.size;
	return sizes[size].fontSize;
}, function (_ref4) {
	var hasIconText = _ref4.hasIconText;
	return hasIconText ? '5px' : null;
});
// Button with text and no icon
var StyledButtonText = /*#__PURE__*/exports.StyledButtonText = _styledComponents2.default.span.withConfig({
	displayName: 'ButtonStyles__StyledButtonText'
})(['color:', ';font-family:Helvetica,Arial,sans-serif;font-size:', ';font-weight:300;font-style:normal;padding-right:15px;'], _colors.BUTTON_TEXT, function (_ref5) {
	var size = _ref5.size;
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