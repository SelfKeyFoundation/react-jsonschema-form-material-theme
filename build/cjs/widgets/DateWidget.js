"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _selfkeyUi = require("selfkey-ui");

function DateWidget(props) {
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

  var _onChange = function _onChange(_ref) {
    var data = _ref.target;
    return props.onChange(data.value === '' ? options.emptyValue : data.value);
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return _react.default.createElement(_selfkeyUi.KeyPicker, (0, _extends2.default)({
    readOnly: readonly,
    disabled: disabled,
    autoFocus: autofocus,
    value: value == null ? '' : value
  }, inputProps, {
    onChange: _onChange,
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true,
    isError: isError(errors)
  }));
}

var _default = DateWidget;
exports.default = _default;