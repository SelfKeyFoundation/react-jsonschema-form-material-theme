"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("react-jsonschema-form/lib/utils");

function UpDownWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return _react.default.createElement(BaseInput, (0, _extends2.default)({
    type: "number"
  }, props, (0, _utils.rangeSpec)(props.schema)));
}

UpDownWidget.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = UpDownWidget;
exports.default = _default;