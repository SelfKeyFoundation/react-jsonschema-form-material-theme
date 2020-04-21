"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _UnsupportedField = _interopRequireDefault(require("./UnsupportedField"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var COMPONENT_TYPES = {
  array: "ArrayField",
  boolean: "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField"
};

function getFieldComponent(schema, uiSchema, idSchema, fields) {
  var field = uiSchema["ui:field"];

  if (typeof field === "function") {
    return field;
  }

  if (typeof field === "string" && field in fields) {
    return fields[field];
  }

  var componentName = COMPONENT_TYPES[(0, _utils.getSchemaType)(schema)];
  return componentName in fields ? fields[componentName] : function () {
    return _react.default.createElement(_UnsupportedField.default, {
      schema: schema,
      idSchema: idSchema,
      reason: "Unknown field type ".concat(schema.type)
    });
  };
}

function SchemaFieldRender(props) {
  var uiSchema = props.uiSchema,
      formData = props.formData,
      errorSchema = props.errorSchema,
      idPrefix = props.idPrefix,
      name = props.name,
      required = props.required,
      registry = props.registry,
      onPDFOpen = props.onPDFOpen;
  var definitions = registry.definitions,
      fields = registry.fields,
      formContext = registry.formContext,
      FieldTemplate = registry.templates.FieldTemplate;
  var idSchema = props.idSchema;
  var schema = (0, _utils.retrieveSchema)(props.schema, definitions, formData);
  idSchema = (0, _utils.mergeObjects)((0, _utils.toIdSchema)(schema, null, definitions, formData, idPrefix), idSchema);
  var Field = getFieldComponent(schema, uiSchema, idSchema, fields);
  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  var uiOptions = (0, _utils.getUiOptions)(uiSchema);
  var _uiOptions$label = uiOptions.label,
      displayLabel = _uiOptions$label === void 0 ? true : _uiOptions$label;

  if (schema.type === "array") {
    displayLabel = (0, _utils.isMultiSelect)(schema, definitions) || (0, _utils.isFilesArray)(schema, uiSchema, definitions);
  }

  if (schema.type === "object") {
    displayLabel = false;
  }

  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
    displayLabel = false;
  }

  if (uiSchema["ui:field"]) {
    displayLabel = false;
  }

  var errors = errorSchema.__errors,
      fieldErrorSchema = (0, _objectWithoutProperties2.default)(errorSchema, ["__errors"]); // See #439: uiSchema: Don't pass consumed class names to child components

  var fieldProps = _objectSpread({}, props, {
    idSchema: idSchema,
    schema: schema,
    uiSchema: _objectSpread({}, uiSchema, {
      classNames: undefined
    }),
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    errorSchema: fieldErrorSchema,
    formContext: formContext,
    errors: errors
  });

  var type = schema.type;
  var id = idSchema.$id;
  var label = uiSchema["ui:title"] || props.schema.title || schema.title || name;
  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
  var help = uiSchema["ui:help"];
  var hidden = uiSchema["ui:widget"] === "hidden";
  var classNames = ["field", "field-".concat(type), errors && errors.length > 0 ? "field-error has-error has-danger" : "", uiSchema.classNames].join(" ").trim();
  var templateProps = {
    description: description,
    help: help,
    errors: errors,
    id: id,
    label: label,
    hidden: hidden,
    required: required,
    disabled: disabled,
    readonly: readonly,
    displayLabel: displayLabel,
    classNames: classNames,
    formContext: formContext,
    fields: fields,
    schema: schema,
    uiSchema: uiSchema,
    registry: registry,
    onPDFOpen: onPDFOpen
  };
  return _react.default.createElement(FieldTemplate, templateProps, _react.default.createElement(Field, fieldProps));
}

var SchemaField = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SchemaField, _React$Component);

  var _super = _createSuper(SchemaField);

  function SchemaField() {
    (0, _classCallCheck2.default)(this, SchemaField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SchemaField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if schemas are equal idSchemas will be equal as well,
      // so it is not necessary to compare
      return !(0, _utils.deepEquals)(_objectSpread({}, this.props, {
        idSchema: undefined
      }), _objectSpread({}, nextProps, {
        idSchema: undefined
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return SchemaFieldRender(this.props);
    }
  }]);
  return SchemaField;
}(_react.default.Component);

SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    idSchema: _propTypes.default.object,
    formData: _propTypes.default.any,
    errorSchema: _propTypes.default.object,
    registry: _propTypes.default.shape({
      widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      templates: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
      definitions: _propTypes.default.object.isRequired,
      formContext: _propTypes.default.object.isRequired
    })
  };
}

var _default = SchemaField;
exports.default = _default;