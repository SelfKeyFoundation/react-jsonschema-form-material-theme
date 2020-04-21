"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initWithTheme = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("./Form"));

var _fields = _interopRequireDefault(require("./fields"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var initWithTheme = function initWithTheme(WrappedForm, fields) {
  return function (name, theme) {
    var WithTheme = /*#__PURE__*/function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      var _super = _createSuper(WithTheme);

      function WithTheme() {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", mergeComponents(_this.props));
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.fields !== nextProps.fields || this.props.widgets !== nextProps.widgets || this.props.templates !== nextProps.templates) {
            this.setState(mergeComponents(nextProps));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedForm, (0, _extends2.default)({}, this.props, {
            fields: this.state.fields,
            widgets: this.state.widgets,
            templates: this.state.templates
          }));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

    WithTheme.displayName = "WithTheme(".concat(name, ")");
    return WithTheme;

    function mergeComponents(props) {
      return {
        fields: _objectSpread({}, fields, {}, props.fields),
        widgets: _objectSpread({}, theme.widgets, {}, props.widgets),
        templates: _objectSpread({}, theme.templates, {}, props.templates)
      };
    }
  };
};

exports.initWithTheme = initWithTheme;

var _default = initWithTheme(_Form.default, _fields.default);

exports.default = _default;