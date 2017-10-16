'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = require('./icons');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_Component) {
	_inherits(Icon, _Component);

	function Icon() {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	}

	_createClass(Icon, [{
		key: 'setColor',
		value: function setColor(active) {
			if (active === true) {
				return this.props.color;
			} else {
				return this.props.iconColor;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    icon = _props.icon,
			    iconSize = _props.iconSize,
			    active = _props.active,
			    style = _props.style;

			var IconComponent = _icons.icons[icon].component;
			return _react2.default.createElement(IconComponent, { size: iconSize, color: this.setColor(active), style: style });
		}
	}]);

	return Icon;
}(_react.Component);

exports.default = Icon;


Icon.propTypes = {
	icon: _propTypes2.default.string,
	iconSize: _propTypes2.default.number,
	color: _propTypes2.default.string,
	active: _propTypes2.default.bool,
	iconColor: _propTypes2.default.string,
	style: _propTypes2.default.shape({
		marginRight: _propTypes2.default.string
	})

	/* 
 React does not provide default props to a nested array of items of a certain shape. 
 Default props are only shallowly merged. So when Icon is used alone the defaultProps needs to be declared here. 
 Button has it's own defaultProps when Icon is used in Button  .
 */

};Icon.defaultProps = {
	icon: '',
	iconSize: 18,
	color: _colors.ICON_DEFAULT_COLOR,
	active: true,
	iconColor: _colors.ICON_DEFAULT_COLOR,
	style: {
		marginRight: '8px'
	}
};