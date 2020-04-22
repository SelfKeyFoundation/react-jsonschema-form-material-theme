"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function CheckboxWidget(props) {
  var schema = props.schema,
      id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      DescriptionTemplate = props.registry.templates.DescriptionTemplate;
  return _react.default.createElement("div", {
    className: "checkbox ".concat(disabled || readonly ? "disabled" : "")
  }, schema.description && _react.default.createElement(DescriptionTemplate, {
    description: schema.description
  }), _react.default.createElement(_core.FormControlLabel, {
    id: id,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    },
    control: _react.default.createElement(_core.Checkbox, null),
    label: label
  }));
}

CheckboxWidget.defaultProps = {
  autofocus: false
};
CheckboxWidget.propTypes = {
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.bool,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
var _default = CheckboxWidget;
exports.default = _default;