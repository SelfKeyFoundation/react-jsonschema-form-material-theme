"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorListTemplate;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function ErrorListTemplate(props) {
  var errors = props.errors;
  return _react.default.createElement("div", {
    className: "panel panel-danger errors"
  }, _react.default.createElement(_core.Typography, {
    variant: "h4",
    color: "error",
    gutterBottom: true
  }, "Errors"), errors.map(function (error, i) {
    return _react.default.createElement(_core.Typography, {
      key: i,
      variant: "subtitle2",
      color: "error",
      gutterBottom: true
    }, error.stack);
  }), _react.default.createElement("br", null));
}