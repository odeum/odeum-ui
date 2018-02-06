'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledModalContent = exports.StyledModalHeaderClose = exports.StyledModalHeaderTitle = exports.StyledModalHeaderIcon = exports.StyledModalHeader = exports.StyledModal = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hideOverlayScroll = function hideOverlayScroll() {
    (0, _styledComponents.injectGlobal)(['\n\t.ReactModal__Body--open {\n\t\toverflow: hidden;\n\t}\n\t']);
};

var fadeInModal = /*#__PURE__*/(0, _styledComponents.keyframes)(['0%{opacity:0;}100%{opacity:1;}']);

var StyledModal = /*#__PURE__*/exports.StyledModal = (0, _styledComponents2.default)(_reactModal2.default).withConfig({
    displayName: 'ModalStyles__StyledModal'
})(['', ';border-radius:4px;border:none;margin-right:-50%;width:', ';min-height:480px;position:absolute;top:50%;left:50%;right:auto;bottom:auto;transform:translate(-50%,-50%);animation:0.3s ', ' ease-in-out;background-color:white;outline:none;box-shadow:0px 0px 50px 0px rgba(0,0,0,0.5);overflow-y:auto;'], function (props) {
    return props.overlayScroll === false ? hideOverlayScroll() : null;
}, function (props) {
    return props.width;
}, fadeInModal);

var StyledModalHeader = /*#__PURE__*/exports.StyledModalHeader = _styledComponents2.default.div.withConfig({
    displayName: 'ModalStyles__StyledModalHeader'
})(['display:flex;align-items:center;width:100%;height:60px;background-color:', ';font-family:Helvetica,Arial,sans-serif;font-size:2.0rem;font-weight:300;color:', ';box-sizing:border-box;padding-left:20px;padding-right:20px;margin-bottom:20px;border-top-left-radius:4px;border-top-right-radius:4px;user-select:none;'], _colors.MODAL_HEADER, _colors.MODAL_TITLE);

var StyledModalHeaderIcon = /*#__PURE__*/exports.StyledModalHeaderIcon = _styledComponents2.default.div.withConfig({
    displayName: 'ModalStyles__StyledModalHeaderIcon'
})(['margin-right:5px;']);

var StyledModalHeaderTitle = /*#__PURE__*/exports.StyledModalHeaderTitle = _styledComponents2.default.div.withConfig({
    displayName: 'ModalStyles__StyledModalHeaderTitle'
})(['float:left;']);

var StyledModalHeaderClose = /*#__PURE__*/exports.StyledModalHeaderClose = _styledComponents2.default.div.withConfig({
    displayName: 'ModalStyles__StyledModalHeaderClose'
})(['float:right;margin-left:auto;cursor:pointer;']);

var StyledModalContent = /*#__PURE__*/exports.StyledModalContent = _styledComponents2.default.div.withConfig({
    displayName: 'ModalStyles__StyledModalContent'
})(['clear:both;box-sizing:border-box;padding:0;padding-left:20px;padding-right:20px;padding-bottom:40px;font-family:Helvetica,Arial,sans-serif;font-size:1.6rem;font-weight:300;']);