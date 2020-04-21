"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function DescriptionTemplate(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  if (typeof description === "string") {
    return _react.default.createElement(_core.Typography, {
      variant: "subtitle2",
      color: "secondary",
      id: id,
      className: "field-description",
      gutterBottom: true
    }, description);
  } else {
    return _react.default.createElement(_core.Typography, {
      variant: "subtitle2",
      color: "secondary",
      id: id,
      className: "field-description",
      gutterBottom: true
    }, description);
  }
}

DescriptionTemplate.propTypes = {
  id: _propTypes.default.string,
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = DescriptionTemplate;
exports.default = _default;