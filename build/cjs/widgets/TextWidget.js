"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function TextWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return _react.default.createElement(BaseInput, props);
}

TextWidget.propTypes = {
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  id: _propTypes.default.string
};
var _default = TextWidget;
exports.default = _default;