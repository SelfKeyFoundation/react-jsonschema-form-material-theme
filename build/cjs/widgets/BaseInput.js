"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    console.log('No id for', props);
    throw new Error("no id for props ".concat(JSON.stringify(props)));
  }

  var value = props.value,
      readonly = props.readonly,
      disabled = props.disabled,
      autofocus = props.autofocus,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      options = props.options,
      schema = props.schema,
      formContext = props.formContext,
      registry = props.registry,
      errors = props.errors,
      inputProps = (0, _objectWithoutProperties2.default)(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "formContext", "registry", "errors"]);
  inputProps.type = options.inputType || inputProps.type || 'text';

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return props.onChange(value === '' ? options.emptyValue : value);
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return _react.default.createElement(_core.Input, (0, _extends2.default)({
    className: "form-control",
    readOnly: readonly,
    disabled: disabled,
    error: isError(errors),
    autoFocus: autofocus,
    value: value == null ? '' : value
  }, inputProps, {
    onChange: _onChange,
    onBlur: onBlur && function (event) {
      return onBlur(inputProps.id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true
  }));
}

BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};
BaseInput.propTypes = {
  id: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.any,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func
};
var _default = BaseInput;
exports.default = _default;