"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function HiddenWidget(_ref) {
  var id = _ref.id,
      value = _ref.value;
  return _react.default.createElement("input", {
    type: "hidden",
    id: id,
    value: typeof value === "undefined" ? "" : value
  });
}

HiddenWidget.propTypes = {
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])
};
var _default = HiddenWidget;
exports.default = _default;