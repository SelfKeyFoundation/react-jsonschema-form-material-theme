"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _utils = require("../utils");

var _selfkeyUi = require("selfkey-ui");

var nums = new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

function processValue(_ref, value) {
  var type = _ref.type,
      items = _ref.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(_utils.asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return (0, _utils.asNumber)(value);
  }

  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options).filter(function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });
  } else {
    return event.target.value;
  }
}

function isError(Obj) {
  for (var key in Obj) {
    if (Obj.hasOwnProperty(key)) return true;
  }

  return false;
}

function SelectWidget(props) {
  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      errors = props.errors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return _react.default.createElement(_core.FormControl, {
    variant: "filled"
  }, _react.default.createElement(_core.Select, {
    id: id,
    native: true,
    multiple: multiple,
    error: isError(errors),
    className: "form-control",
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    input: _react.default.createElement(_core.Input, {
      disableUnderline: true
    }),
    IconComponent: _selfkeyUi.SelectDropdownIcon,
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);

      _onChange(processValue(schema, newValue));
    }
  }, !multiple && !schema.default && _react.default.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref2, i) {
    var value = _ref2.value,
        label = _ref2.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return _react.default.createElement("option", {
      key: i,
      value: value,
      disabled: disabled
    }, label);
  })));
}

SelectWidget.defaultProps = {
  autofocus: false
};
SelectWidget.propTypes = {
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.shape({
    enumOptions: _propTypes.default.array
  }).isRequired,
  value: _propTypes.default.any,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func
};
var _default = SelectWidget;
exports.default = _default;