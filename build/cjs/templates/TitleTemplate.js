"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var REQUIRED_FIELD_SYMBOL = '*';

function TitleTemplate(props) {
  var id = props.id,
      title = props.title,
      required = props.required;
  return _react.default.createElement(_core.Typography, {
    variant: "overline",
    id: id,
    gutterBottom: true
  }, title, required ? _react.default.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, ' ', REQUIRED_FIELD_SYMBOL) : null);
}

TitleTemplate.propTypes = {
  id: _propTypes.default.string,
  title: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = TitleTemplate;
exports.default = _default;