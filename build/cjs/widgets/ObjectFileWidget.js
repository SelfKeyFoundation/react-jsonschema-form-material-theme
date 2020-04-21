"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ObjectFileWidget = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _selfkeyUi = require("selfkey-ui");

var _core = require("@material-ui/core");

var _utils = require("react-jsonschema-form/lib/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ObjectFileWidget = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ObjectFileWidget, _Component);

  var _super = _createSuper(ObjectFileWidget);

  function ObjectFileWidget(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ObjectFileWidget);
    _this = _super.call(this, props);
    var _props$formData = props.formData,
        formData = _props$formData === void 0 ? {} : _props$formData;
    var state = {
      formData: formData
    };

    if (!formData.file && formData.content) {
      var _dataURItoBlob = (0, _utils.dataURItoBlob)(formData.content),
          blob = _dataURItoBlob.blob,
          _dataURItoBlob$name = _dataURItoBlob.name,
          name = _dataURItoBlob$name === void 0 ? formData.name : _dataURItoBlob$name;

      state.file = new File([blob], name, {
        type: formData.mimeType
      });
    }

    if (state.file) {
      state.url = URL.createObjectURL(state.file);
    }

    _this.state = _objectSpread({}, state, {
      formData: formData
    });
    return _this;
  }

  (0, _createClass2.default)(ObjectFileWidget, [{
    key: "clearState",
    value: function clearState() {
      var _this2 = this;

      return function (event) {
        if (_this2.state.url) {
          URL.revokeObjectURL(_this2.state.url);
        }

        _this2.setState({
          url: null,
          file: null,
          formData: {}
        }, function () {
          return _this2.props.onChange({});
        });
      };
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var _this3 = this;

      return function (files) {
        var f = files[0];

        if (!f) {
          return _this3.setState({
            file: null,
            url: null,
            formData: {}
          }, function () {
            return _this3.props.onChange({});
          });
        }

        var data = {
          mimeType: f.type,
          name: f.name,
          size: f.size,
          content: ''
        };
        var url = URL.createObjectURL(f); // eslint-disable-next-line

        var reader = new FileReader();
        reader.readAsDataURL(f);

        reader.onload = function () {
          data.content = reader.result;

          _this3.setState({
            file: f,
            url: url,
            formData: data
          }, function () {
            return _this3.props.onChange(data);
          });
        };
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          uiSchema = _this$props.uiSchema,
          formData = _this$props.formData,
          _this$props$errors = _this$props.errors,
          errors = _this$props$errors === void 0 ? [] : _this$props$errors,
          idSchema = _this$props.idSchema,
          name = _this$props.name,
          help = _this$props.help,
          required = _this$props.required,
          isError = _this$props.isError,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          idPrefix = _this$props.idPrefix,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          registry = _this$props.registry,
          onPDFOpen = _this$props.onPDFOpen,
          errorSchema = _this$props.errorSchema;
      var definitions = registry.definitions,
          templates = registry.templates,
          formContext = registry.formContext;
      var FieldTemplate = templates.FieldTemplate;
      var schema = (0, _utils.retrieveSchema)(this.props.schema, definitions, formData);
      var description = uiSchema['ui:description'] || schema.description;
      var displayLabel = uiSchema['ui:label'] === false ? false : true;

      if (errorSchema.mimeType && errorSchema.mimeType.__errors.length) {
        errors.push(errorSchema.mimeType.__errors[0]);
      }

      var templateProps = {
        id: id,
        label: label,
        description: description,
        idSchema: idSchema,
        uiSchema: uiSchema,
        schema: schema,
        formData: formData,
        formContext: formContext,
        registry: registry,
        required: required,
        errors: errors,
        help: help,
        idPrefix: idPrefix,
        displayLabel: displayLabel
      };
      var accept = (((schema.properties || {}).mimeType || {}).enum || []).join(',');
      var file = this.state.formData && this.state.formData.name ? {
        url: this.state.url,
        name: this.state.formData.name,
        mimeType: this.state.formData.mimeType
      } : null;
      return _react.default.createElement(FieldTemplate, templateProps, _react.default.createElement(_selfkeyUi.FileUploadWidget, {
        id: id,
        name: name,
        required: required,
        disabled: readonly || disabled,
        file: file,
        onClearForm: this.clearState(),
        onChange: this.onChange(),
        onPDFOpen: onPDFOpen,
        onBlur: onBlur && function (event) {
          return onBlur(_this4.state);
        },
        onFocus: onFocus && function (event) {
          return onFocus(_this4.state);
        },
        accept: accept,
        isError: errors.length > 0 ? true : false
      }));
    }
  }]);
  return ObjectFileWidget;
}(_react.Component);

exports.ObjectFileWidget = ObjectFileWidget;
var _default = ObjectFileWidget;
exports.default = _default;