"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utcToLocal = utcToLocal;
exports.localToUTC = localToUTC;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("react-jsonschema-form/lib/utils");

var _selfkeyUi = require("selfkey-ui");

function utcToLocal(jsonDate) {
  if (!jsonDate) {
    return '';
  } // required format of `"yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS"
  // https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type%3Ddatetime-local)
  // > should be a _valid local date and time string_ (not GMT)
  // Note - date constructor passed local ISO-8601 does not correctly
  // change time to UTC in node pre-8


  var date = new Date(jsonDate);
  var yyyy = (0, _utils.pad)(date.getFullYear(), 4);
  var MM = (0, _utils.pad)(date.getMonth() + 1, 2);
  var dd = (0, _utils.pad)(date.getDate(), 2);
  var hh = (0, _utils.pad)(date.getHours(), 2);
  var mm = (0, _utils.pad)(date.getMinutes(), 2);
  var ss = (0, _utils.pad)(date.getSeconds(), 2);
  var SSS = (0, _utils.pad)(date.getMilliseconds(), 3);
  return "".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(SSS);
}

function localToUTC(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
}

function DateTimeWidget(props) {
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
    return props.onChange(value === '' ? localToUtc(options.emptyValue) : localToUTC(value));
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return _react.default.createElement(_selfkeyUi.KeyPicker, (0, _extends2.default)({
    includeTime: true,
    readOnly: readonly,
    disabled: disabled,
    error: isError(errors),
    autoFocus: autofocus,
    value: utcToLocal(value)
  }, inputProps, {
    onChange: _onChange,
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true
  }));
}

var _default = DateTimeWidget;
exports.default = _default;