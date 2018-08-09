"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles
var styles = {
  "iconLeft": "accordion_iconLeft_3Az5e",
  "iconRight": "accordion_iconRight_FQMzr",
  "title": "accordion_title_2gq7F",
  "content": "accordion_content_29Zpg",
  "isActive": "accordion_isActive_6zu2P",
  "dark": "accordion_dark_3QXy9",
  "accordionMenu": "accordion_accordionMenu_1F6Wu",
  "closed": "accordion_closed_2YX7Y"
};

var AccordionContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AccordionContent, _PureComponent);

  function AccordionContent() {
    _classCallCheck(this, AccordionContent);

    return _possibleConstructorReturn(this, (AccordionContent.__proto__ || Object.getPrototypeOf(AccordionContent)).apply(this, arguments));
  }

  _createClass(AccordionContent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          content = _props.content,
          children = _props.children;
      var classes = (0, _classnames.default)(styles.content, className, _defineProperty({}, "".concat(styles.isActive), active));
      return _react.default.createElement("div", {
        className: classes
      }, children ? children : content);
    }
  }]);

  return AccordionContent;
}(_react.PureComponent);

Object.defineProperty(AccordionContent, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    content: _propTypes.default.node,
    index: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    onClick: _propTypes.default.func
  }
});

var _default = (0, _reactCssModules.default)(AccordionContent, styles);

exports.default = _default;