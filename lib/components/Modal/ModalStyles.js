'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledModalContent = exports.StyledModalHeaderClose = exports.StyledModalHeaderTitle = exports.StyledModalHeaderIcon = exports.StyledModalHeader = exports.StyledModal = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    0% {\n        opacity: 0;\n        /* top: 50%;\n        left: 50%; */\n    }\n    100% {\n        opacity: 1;\n        /* top: 50%;\n        left: 50%; */\n\t}\n'], ['\n    0% {\n        opacity: 0;\n        /* top: 50%;\n        left: 50%; */\n    }\n    100% {\n        opacity: 1;\n        /* top: 50%;\n        left: 50%; */\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t', ';\n    border-radius: 4px;\n    border: none;\n    margin-right: -50%;\n\twidth: ', ';\n\t/* max-width: 320px; */\n    /* height: calc(100% - 600px); */\n    min-height: 480px;\n\t/* max-height: 900px; */\n    position: absolute; /* fixed */\n    top: 50%;\n    left: 50%;\n    right: auto;\n    bottom: auto;\n    transform: translate(-50%, -50%);\n    animation: 0.3s ', ' ease-in-out;\n    background-color: white;\n    outline: none;\n\tbox-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);\n\toverflow-y: auto;\n'], ['\n\t', ';\n    border-radius: 4px;\n    border: none;\n    margin-right: -50%;\n\twidth: ', ';\n\t/* max-width: 320px; */\n    /* height: calc(100% - 600px); */\n    min-height: 480px;\n\t/* max-height: 900px; */\n    position: absolute; /* fixed */\n    top: 50%;\n    left: 50%;\n    right: auto;\n    bottom: auto;\n    transform: translate(-50%, -50%);\n    animation: 0.3s ', ' ease-in-out;\n    background-color: white;\n    outline: none;\n\tbox-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);\n\toverflow-y: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 60px;\n    background-color: ', ';\n    font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif;\n    font-size: 2.0rem;\n    font-weight: 300;\n    color: ', ';\n    box-sizing: border-box; \n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 20px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    user-select: none;\n'], ['\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 60px;\n    background-color: ', ';\n    font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif;\n    font-size: 2.0rem;\n    font-weight: 300;\n    color: ', ';\n    box-sizing: border-box; \n    padding-left: 20px;\n    padding-right: 20px;\n    margin-bottom: 20px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    user-select: none;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin-right: 5px;\n'], ['\n    margin-right: 5px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    float: left;\n'], ['\n    float: left;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    float: right;\n    margin-left: auto;\n    cursor: pointer;\n'], ['\n    float: right;\n    margin-left: auto;\n    cursor: pointer;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    clear: both;\n\tbox-sizing: border-box; \n\tpadding: 0;\n    padding-left: 20px;\n\tpadding-right: 20px;\n\tpadding-bottom: 40px;\n    font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif;\n    font-size: 1.6rem;\n    font-weight: 300;\n    /* height: calc(100% - 90px); */\n'], ['\n    clear: both;\n\tbox-sizing: border-box; \n\tpadding: 0;\n    padding-left: 20px;\n\tpadding-right: 20px;\n\tpadding-bottom: 40px;\n    font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif;\n    font-size: 1.6rem;\n    font-weight: 300;\n    /* height: calc(100% - 90px); */\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hideOverlayScroll = function hideOverlayScroll() {
    (0, _styledComponents.injectGlobal)(['\n\t.ReactModal__Body--open {\n\t\toverflow: hidden;\n\t}\n\t']);
};

var fadeInModal = (0, _styledComponents.keyframes)(_templateObject);

var StyledModal = exports.StyledModal = (0, _styledComponents2.default)(_reactModal2.default)(_templateObject2, function (props) {
    return props.overlayScroll === false ? hideOverlayScroll() : null;
}, function (props) {
    return props.width;
}, fadeInModal);

var StyledModalHeader = exports.StyledModalHeader = _styledComponents2.default.div(_templateObject3, _colors.MODAL_HEADER, _colors.MODAL_TITLE);

var StyledModalHeaderIcon = exports.StyledModalHeaderIcon = _styledComponents2.default.div(_templateObject4);

var StyledModalHeaderTitle = exports.StyledModalHeaderTitle = _styledComponents2.default.div(_templateObject5);

var StyledModalHeaderClose = exports.StyledModalHeaderClose = _styledComponents2.default.div(_templateObject6);

var StyledModalContent = exports.StyledModalContent = _styledComponents2.default.div(_templateObject7);