"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _core = require("@material-ui/core");

function RangeWidget(props) {
  var schema = props.schema,
      value = props.value,
      BaseInput = props.registry.widgets.BaseInput;

  var _onChange = function _onChange(event, value) {
    event.preventDefault();
    props.onChange(value);
  };

  return _react.default.createElement("div", {
    className: "field-range-wrapper"
  }, _react.default.createElement(_core.Slider, (0, _extends2.default)({}, props, {
    step: props.step ? props.step : 1
  }, (0, _utils.rangeSpec)(schema), {
    onChange: _onChange
  })), _react.default.createElement(_core.Typography, {
    variant: "body2",
    color: "textSecondary",
    gutterBottom: true
  }, value));
}

RangeWidget.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = RangeWidget;
exports.default = _default;