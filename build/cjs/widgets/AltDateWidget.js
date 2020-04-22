"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function rangeOptions(start, stop) {
  var options = [];

  for (var i = start; i <= stop; i++) {
    options.push({
      value: i,
      label: (0, _utils.pad)(i, 2)
    });
  }

  return options;
}

function readyForChange(state) {
  return Object.keys(state).every(function (key) {
    return state[key] !== -1;
  });
}

function DateElement(props) {
  var type = props.type,
      range = props.range,
      value = props.value,
      select = props.select,
      rootId = props.rootId,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      registry = props.registry,
      onBlur = props.onBlur;
  var id = rootId + "_" + type;
  var SelectWidget = registry.widgets.SelectWidget;
  return _react.default.createElement(SelectWidget, {
    schema: {
      type: "integer"
    },
    id: id,
    className: "form-control",
    options: {
      enumOptions: rangeOptions(range[0], range[1])
    },
    placeholder: type,
    value: value,
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    onChange: function onChange(value) {
      return select(type, value);
    },
    onBlur: onBlur
  });
}

var AltDateWidget = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(AltDateWidget, _Component);

  var _super = _createSuper(AltDateWidget);

  function AltDateWidget(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AltDateWidget);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (property, value) {
      _this.setState((0, _defineProperty2.default)({}, property, typeof value === "undefined" ? -1 : value), function () {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(_this.state)) {
          _this.props.onChange((0, _utils.toDateString)(_this.state, _this.props.time));
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setNow", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          time = _this$props.time,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          onChange = _this$props.onChange;

      if (disabled || readonly) {
        return;
      }

      var nowDateObj = (0, _utils.parseDateString)(new Date().toJSON(), time);

      _this.setState(nowDateObj, function () {
        return onChange((0, _utils.toDateString)(_this.state, time));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clear", function (event) {
      event.preventDefault();
      var _this$props2 = _this.props,
          time = _this$props2.time,
          disabled = _this$props2.disabled,
          readonly = _this$props2.readonly,
          onChange = _this$props2.onChange;

      if (disabled || readonly) {
        return;
      }

      _this.setState((0, _utils.parseDateString)("", time), function () {
        return onChange(undefined);
      });
    });
    _this.state = (0, _utils.parseDateString)(props.value, props.time);
    return _this;
  }

  (0, _createClass2.default)(AltDateWidget, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState((0, _utils.parseDateString)(nextProps.value, nextProps.time));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          disabled = _this$props3.disabled,
          readonly = _this$props3.readonly,
          autofocus = _this$props3.autofocus,
          registry = _this$props3.registry,
          onBlur = _this$props3.onBlur;
      return _react.default.createElement("ul", {
        className: "list-inline"
      }, this.dateElementProps.map(function (elemProps, i) {
        return _react.default.createElement("li", {
          key: i
        }, _react.default.createElement(DateElement, (0, _extends2.default)({
          rootId: id,
          select: _this2.onChange
        }, elemProps, {
          disabled: disabled,
          readonly: readonly,
          registry: registry,
          onBlur: onBlur,
          autofocus: autofocus && i === 0
        })));
      }), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#",
        className: "btn btn-info btn-now",
        onClick: this.setNow
      }, "Now")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#",
        className: "btn btn-warning btn-clear",
        onClick: this.clear
      }, "Clear")));
    }
  }, {
    key: "dateElementProps",
    get: function get() {
      var _this$props4 = this.props,
          time = _this$props4.time,
          options = _this$props4.options;
      var _this$state = this.state,
          year = _this$state.year,
          month = _this$state.month,
          day = _this$state.day,
          hour = _this$state.hour,
          minute = _this$state.minute,
          second = _this$state.second;
      var data = [{
        type: "year",
        range: options.yearsRange,
        value: year
      }, {
        type: "month",
        range: [1, 12],
        value: month
      }, {
        type: "day",
        range: [1, 31],
        value: day
      }];

      if (time) {
        data.push({
          type: "hour",
          range: [0, 23],
          value: hour
        }, {
          type: "minute",
          range: [0, 59],
          value: minute
        }, {
          type: "second",
          range: [0, 59],
          value: second
        });
      }

      return data;
    }
  }]);
  return AltDateWidget;
}(_react.Component);

AltDateWidget.defaultProps = {
  time: false,
  disabled: false,
  readonly: false,
  autofocus: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  }
};
AltDateWidget.propTypes = {
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  time: _propTypes.default.bool,
  options: _propTypes.default.object
};
var _default = AltDateWidget;
exports.default = _default;