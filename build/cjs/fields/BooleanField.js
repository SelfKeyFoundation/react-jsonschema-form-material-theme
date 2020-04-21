"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BooleanField(props) {
  var schema = props.schema,
      name = props.name,
      uiSchema = props.uiSchema,
      idSchema = props.idSchema,
      formData = props.formData,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? (0, _utils.getDefaultRegistry)() : _props$registry,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      errors = props.errors;
  var title = schema.title;
  var widgets = registry.widgets,
      formContext = registry.formContext;

  var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === void 0 ? "checkbox" : _getUiOptions$widget,
      options = (0, _objectWithoutProperties2.default)(_getUiOptions, ["widget"]);

  var Widget = (0, _utils.getWidget)(schema, widget, widgets);
  var enumOptions = (0, _utils.optionsList)({
    enum: [true, false],
    enumNames: schema.enumNames || ["yes", "no"]
  });
  return _react.default.createElement(Widget, {
    options: _objectSpread({}, options, {
      enumOptions: enumOptions
    }),
    schema: schema,
    id: idSchema && idSchema.$id,
    onChange: onChange,
    label: title === undefined ? name : title,
    value: formData,
    required: required,
    disabled: disabled,
    readonly: readonly,
    registry: registry,
    formContext: formContext,
    autofocus: autofocus,
    errors: errors
  });
}

if (process.env.NODE_ENV !== "production") {
  BooleanField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    idSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.bool,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    registry: _propTypes.default.shape({
      widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
      definitions: _propTypes.default.object.isRequired,
      formContext: _propTypes.default.object.isRequired
    }),
    errors: _propTypes.default.arrayOf(_propTypes.default.string)
  };
}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};
var _default = BooleanField;
exports.default = _default;