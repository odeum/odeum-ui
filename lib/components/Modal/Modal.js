'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalStyles = require('./ModalStyles');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
	_inherits(Modal, _Component);

	function Modal() {
		_classCallCheck(this, Modal);

		return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	}

	_createClass(Modal, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isOpen = _props.isOpen,
			    onAfterOpen = _props.onAfterOpen,
			    onRequestClose = _props.onRequestClose,
			    closeTimeoutMS = _props.closeTimeoutMS,
			    style = _props.style,
			    render = _props.render,
			    overlayScroll = _props.overlayScroll,
			    width = _props.width,
			    icon = _props.icon,
			    label = _props.label,
			    shouldCloseOnOverlayClick = _props.shouldCloseOnOverlayClick;


			return _react2.default.createElement(
				_ModalStyles.StyledModal,
				{
					isOpen: isOpen,
					onAfterOpen: onAfterOpen,
					closeTimeoutMS: closeTimeoutMS,
					onRequestClose: onRequestClose,
					contentLabel: label,
					style: style,
					overlayScroll: overlayScroll,
					width: width,
					shouldCloseOnOverlayClick: shouldCloseOnOverlayClick },
				_react2.default.createElement(
					_ModalStyles.StyledModalHeader,
					null,
					_react2.default.createElement(
						_ModalStyles.StyledModalHeaderIcon,
						null,
						_react2.default.createElement(_Icon2.default, { icon: icon, iconSize: 30, color: _colors.MODAL_ICON, active: true })
					),
					_react2.default.createElement(
						_ModalStyles.StyledModalHeaderTitle,
						null,
						label
					),
					_react2.default.createElement(
						_ModalStyles.StyledModalHeaderClose,
						{ onClick: onRequestClose },
						_react2.default.createElement(_Icon2.default, { icon: 'close', iconSize: 30, color: _colors.MODAL_ICON, active: true })
					)
				),
				_react2.default.createElement(
					_ModalStyles.StyledModalContent,
					null,
					render()
				)
			);
		}
	}]);

	return Modal;
}(_react.Component);

Modal.propTypes = {
	isOpen: _propTypes2.default.bool.isRequired,
	onAfterOpen: _propTypes2.default.func,
	onRequestClose: _propTypes2.default.func,
	closeTimeoutMS: _propTypes2.default.number,
	style: _propTypes2.default.shape({
		overlay: _propTypes2.default.object,
		content: _propTypes2.default.object
	}),
	overlayScroll: _propTypes2.default.bool,
	width: _propTypes2.default.string,
	render: _propTypes2.default.func.isRequired,
	icon: _propTypes2.default.string,
	label: _propTypes2.default.string.isRequired,
	shouldCloseOnOverlayClick: _propTypes2.default.bool
};

Modal.defaultProps = {
	isOpen: false,
	label: '',
	overlayScroll: false,
	width: '500px'
};

exports.default = Modal;