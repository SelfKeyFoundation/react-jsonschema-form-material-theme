"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ObjectField = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ObjectField, _Component);

  var _super = _createSuper(ObjectField);

  function ObjectField() {
    var _this;

    (0, _classCallCheck2.default)(this, ObjectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPropertyChange", function (name) {
      return function (value, errorSchema) {
        var newFormData = _objectSpread({}, _this.props.formData, (0, _defineProperty2.default)({}, name, value));

        _this.props.onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread({}, _this.props.errorSchema, (0, _defineProperty2.default)({}, name, errorSchema)));
      };
    });
    return _this;
  }

  (0, _createClass2.default)(ObjectField, [{
    key: "isRequired",
    value: function isRequired(name) {
      var schema = this.props.schema;
      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          uiSchema = _this$props.uiSchema,
          formData = _this$props.formData,
          errorSchema = _this$props.errorSchema,
          idSchema = _this$props.idSchema,
          name = _this$props.name,
          required = _this$props.required,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          idPrefix = _this$props.idPrefix,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          registry = _this$props.registry,
          autofocus = _this$props.autofocus,
          onChange = _this$props.onChange,
          onPDFOpen = _this$props.onPDFOpen,
          errors = _this$props.errors;
      var definitions = registry.definitions,
          fields = registry.fields,
          templates = registry.templates,
          formContext = registry.formContext,
          widgets = registry.widgets;
      var schema = (0, _utils.retrieveSchema)(this.props.schema, definitions, formData);
      var title = schema.title === undefined ? name : schema.title;
      var defaultWidget = schema.format || null;

      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions$widget = _getUiOptions.widget,
          widget = _getUiOptions$widget === void 0 ? defaultWidget : _getUiOptions$widget,
          options = (0, _objectWithoutProperties2.default)(_getUiOptions, ["widget"]);

      try {
        var Widget = widget ? (0, _utils.getWidget)(schema, widget, widgets) : null;

        if (Widget) {
          return _react.default.createElement(Widget, {
            name: name,
            formData: formData,
            options: options,
            schema: schema,
            uiSchema: uiSchema,
            id: idSchema && idSchema.$id,
            label: title === undefined ? name : title,
            onChange: onChange,
            onBlur: onBlur,
            onFocus: onFocus,
            onPDFOpen: onPDFOpen,
            required: required,
            disabled: disabled,
            readonly: readonly,
            formContext: formContext,
            autofocus: autofocus,
            registry: registry,
            errors: errors,
            errorSchema: errorSchema
          });
        }
      } catch (error) {
        console.warn(error);
      }

      var SchemaField = fields.SchemaField;
      var ObjectFieldTemplate = templates.ObjectFieldTemplate;
      var description = uiSchema["ui:description"] || schema.description;
      var orderedProperties;

      try {
        var properties = Object.keys(schema.properties);
        orderedProperties = (0, _utils.orderProperties)(properties, uiSchema["ui:order"]);
      } catch (err) {
        return _react.default.createElement("div", null, _react.default.createElement("p", {
          className: "config-error",
          style: {
            color: "red"
          }
        }, "Invalid ", name || "root", " object field configuration:", _react.default.createElement("em", null, err.message), "."), _react.default.createElement("pre", null, JSON.stringify(schema)));
      }

      var templateProps = {
        title: uiSchema["ui:title"] || title,
        description: description,
        properties: orderedProperties.map(function (name) {
          return {
            content: _react.default.createElement(SchemaField, {
              key: name,
              name: name,
              required: _this2.isRequired(name),
              schema: schema.properties[name],
              uiSchema: uiSchema[name],
              errorSchema: errorSchema[name],
              idSchema: idSchema[name],
              idPrefix: idPrefix,
              formData: formData[name],
              onChange: _this2.onPropertyChange(name),
              onPDFOpen: onPDFOpen,
              onBlur: onBlur,
              onFocus: onFocus,
              registry: registry,
              disabled: disabled,
              readonly: readonly
            }),
            name: name,
            readonly: readonly,
            disabled: disabled,
            required: required
          };
        }),
        required: required,
        idSchema: idSchema,
        uiSchema: uiSchema,
        schema: schema,
        formData: formData,
        formContext: formContext,
        onPDFOpen: onPDFOpen,
        registry: registry
      };
      return _react.default.createElement(ObjectFieldTemplate, templateProps);
    }
  }]);
  return ObjectField;
}(_react.Component);

(0, _defineProperty2.default)(ObjectField, "defaultProps", {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false
});

if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    errorSchema: _propTypes.default.object,
    idSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    formData: _propTypes.default.object,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    registry: _propTypes.default.shape({
      widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      templates: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
      definitions: _propTypes.default.object.isRequired,
      formContext: _propTypes.default.object.isRequired
    })
  };
}

var _default = ObjectField;
exports.default = _default;