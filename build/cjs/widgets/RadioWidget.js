"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function RadioWidget(props) {
  var options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      _onChange = props.onChange; // Generating a unique field name to identify this set of radio buttons

  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
      inline = options.inline; // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.

  return _react.default.createElement("div", {
    className: "field-radio-group"
  }, enumOptions.map(function (option, i) {
    var checked = option.value === value;
    var disabledCls = disabled || readonly ? "disabled" : "";

    var radio = _react.default.createElement(_core.FormControlLabel, {
      checked: checked,
      name: name,
      required: required,
      disabled: disabled || readonly,
      autoFocus: autofocus && i === 0,
      onChange: function onChange(_) {
        return _onChange(option.value);
      },
      label: option.label,
      value: option.label,
      labelPlacement: "end",
      control: _react.default.createElement(_core.Radio, null)
    });

    return inline ? _react.default.createElement("label", {
      key: i,
      className: "radio-inline ".concat(disabledCls)
    }, radio) : _react.default.createElement("div", {
      key: i,
      className: "radio ".concat(disabledCls)
    }, _react.default.createElement("label", null, radio));
  }));
}

RadioWidget.defaultProps = {
  autofocus: false
};
RadioWidget.propTypes = {
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.shape({
    enumOptions: _propTypes.default.array,
    inline: _propTypes.default.bool
  }).isRequired,
  value: _propTypes.default.any,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
var _default = RadioWidget;
exports.default = _default;