'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colors = require('../../utils/colors');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ButtonStyles = require('./ButtonStyles');

var _ButtonStyles2 = _interopRequireDefault(_ButtonStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO: switch buttonType, sizes, fonts, and colors from theme!!!
var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

		_this.state = {
			message: _this.props.children,
			focus: false
		};
		return _this;
	}

	_createClass(Button, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    label = _props.label,
			    icon = _props.icon,
			    iconSize = _props.iconSize,
			    color = _props.color,
			    disabledColor = _props.disabledColor,
			    active = _props.active,
			    iconColor = _props.iconColor,
			    style = _props.style,
			    size = _props.size,
			    isDisabled = _props.isDisabled,
			    onClick = _props.onClick;

			var _hasIcon = void 0;
			var _hasText = label;
			var _hasIconText = void 0;
			if (icon) {
				_hasIcon = true;
				_hasIconText = _hasText;
				return _react2.default.createElement(
					_ButtonStyles.Div,
					{ size: size },
					_react2.default.createElement(
						_ButtonStyles2.default,
						{
							id: id,
							onClick: onClick,
							color: color,
							isDisabled: isDisabled,
							disabledColor: disabledColor,
							hasIcon: _hasIcon,
							hasText: _hasText,
							hasIconText: _hasIconText,
							size: size },
						_react2.default.createElement(_Icon2.default, {
							icon: icon,
							iconSize: iconSize,
							color: _colors.BUTTON_TEXT,
							active: active,
							iconColor: iconColor,
							style: style

						}),
						_react2.default.createElement(
							_ButtonStyles.StyledButtonIconText,
							{ size: size },
							label
						)
					)
				);
			}
			return _react2.default.createElement(
				_ButtonStyles.Div,
				{ size: size },
				_react2.default.createElement(
					_ButtonStyles2.default,
					{
						id: id,
						onClick: onClick,
						color: color,
						isDisabled: isDisabled,
						disabledColor: disabledColor,
						size: size },
					_react2.default.createElement(
						_ButtonStyles.StyledButtonText,
						{ size: size },
						label
					)
				)
			);
		}
	}]);

	return Button;
}(_react.Component);

Button.propTypes = {
	label: _propTypes2.default.string,
	icon: _propTypes2.default.string,
	iconSize: _propTypes2.default.number,
	color: _propTypes2.default.string,
	active: _propTypes2.default.bool,
	iconColor: _propTypes2.default.string,
	isDisabled: _propTypes2.default.bool,
	disabledColor: _propTypes2.default.string,
	id: _propTypes2.default.string,
	onClick: _propTypes2.default.func,
	style: _propTypes2.default.shape({
		marginRight: _propTypes2.default.string
	}),
	type: _propTypes2.default.oneOf(['button', 'reset', 'submit']),
	size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge'])
};

Button.defaultProps = {
	label: '',
	icon: '',
	iconSize: 18,
	color: _colors.BUTTON_DEFAULT,
	disabledColor: '#BDC2C6',
	active: true,
	iconColor: _colors.ICON_DEFAULT_COLOR,
	isDisabled: false,
	style: {
		marginRight: '10px'
	},
	type: 'button',
	size: 'small'
};

exports.default = Button;