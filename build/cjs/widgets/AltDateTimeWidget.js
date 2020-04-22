"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function AltDateTimeWidget(props) {
  var AltDateWidget = props.registry.widgets.AltDateWidget;
  return _react.default.createElement(AltDateWidget, (0, _extends2.default)({
    time: true
  }, props));
}

AltDateTimeWidget.propTypes = {
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  options: _propTypes.default.object
};
AltDateTimeWidget.defaultProps = {
  disabled: false,
  readonly: false,
  autofocus: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  },
  time: true
};
var _default = AltDateTimeWidget;
exports.default = _default;