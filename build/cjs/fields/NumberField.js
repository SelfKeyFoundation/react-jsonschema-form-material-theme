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

function NumberField(props) {
  var StringField = props.registry.fields.StringField;
  return _react.default.createElement(StringField, (0, _extends2.default)({}, props, {
    onChange: function onChange(value) {
      return props.onChange((0, _utils.asNumber)(value));
    }
  }));
}

if (process.env.NODE_ENV !== "production") {
  NumberField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    idSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    required: _propTypes.default.bool,
    formContext: _propTypes.default.object.isRequired
  };
}

NumberField.defaultProps = {
  uiSchema: {}
};
var _default = NumberField;
exports.default = _default;