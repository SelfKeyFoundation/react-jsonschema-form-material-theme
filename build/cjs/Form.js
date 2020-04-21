"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _validate = _interopRequireWildcard(require("./validate"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Form, _Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Form);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (formData, newErrorSchema) {
      var mustValidate = !_this.props.noValidate && _this.props.liveValidate;
      var state = {
        formData: formData
      };

      if (mustValidate) {
        var _this$validate = _this.validate(formData),
            errors = _this$validate.errors,
            errorSchema = _this$validate.errorSchema;

        state = _objectSpread({}, state, {
          errors: errors,
          errorSchema: errorSchema
        });
      } else if (!_this.props.noValidate && newErrorSchema) {
        state = _objectSpread({}, state, {
          errorSchema: newErrorSchema,
          errors: (0, _validate.toErrorList)(newErrorSchema)
        });
      }

      (0, _utils.setState)((0, _assertThisInitialized2.default)(_this), state, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function () {
      if (_this.props.onBlur) {
        var _this$props;

        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function () {
      if (_this.props.onFocus) {
        var _this$props2;

        (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function (event) {
      event.preventDefault();

      if (!_this.props.noValidate) {
        var _this$validate2 = _this.validate(_this.state.formData),
            errors = _this$validate2.errors,
            errorSchema = _this$validate2.errorSchema;

        if (Object.keys(errors).length > 0) {
          (0, _utils.setState)((0, _assertThisInitialized2.default)(_this), {
            errors: errors,
            errorSchema: errorSchema
          }, function () {
            if (_this.props.onError) {
              _this.props.onError(errors);
            } else {
              console.error("Form validation failed", errors);
            }
          });
          return;
        }
      }

      (0, _utils.setState)((0, _assertThisInitialized2.default)(_this), {
        errors: [],
        errorSchema: {}
      }, function () {
        if (_this.props.onSubmit) {
          _this.props.onSubmit(_objectSpread({}, _this.state, {
            status: "submitted"
          }));
        }
      });
    });
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps(props) {
      var state = this.state || {};
      var schema = "schema" in props ? props.schema : this.props.schema;
      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
      var edit = typeof props.formData !== "undefined";
      var liveValidate = props.liveValidate || this.props.liveValidate;
      var mustValidate = edit && !props.noValidate && liveValidate;
      var definitions = schema.definitions;
      var formData = (0, _utils.getDefaultFormState)(schema, props.formData, definitions);
      var retrievedSchema = (0, _utils.retrieveSchema)(schema, definitions, formData);

      var _ref = mustValidate ? this.validate(formData, schema) : {
        errors: state.errors || [],
        errorSchema: state.errorSchema || {}
      },
          errors = _ref.errors,
          errorSchema = _ref.errorSchema;

      var idSchema = (0, _utils.toIdSchema)(retrievedSchema, uiSchema["ui:rootFieldId"], definitions, formData, props.idPrefix);
      return {
        schema: schema,
        uiSchema: uiSchema,
        idSchema: idSchema,
        formData: formData,
        edit: edit,
        errors: errors,
        errorSchema: errorSchema
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "validate",
    value: function validate(formData) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.schema;
      var _this$props3 = this.props,
          validate = _this$props3.validate,
          transformErrors = _this$props3.transformErrors;

      var _this$getRegistry = this.getRegistry(),
          definitions = _this$getRegistry.definitions;

      var resolvedSchema = (0, _utils.retrieveSchema)(schema, definitions, formData);
      return (0, _validate.default)(formData, resolvedSchema, validate, transformErrors);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors(ErrorListTemplate) {
      var _this$state = this.state,
          errors = _this$state.errors,
          errorSchema = _this$state.errorSchema,
          schema = _this$state.schema,
          uiSchema = _this$state.uiSchema;
      var _this$props4 = this.props,
          showErrorList = _this$props4.showErrorList,
          formContext = _this$props4.formContext;

      if (errors.length && showErrorList != false) {
        return _react.default.createElement(ErrorListTemplate, {
          errors: errors,
          errorSchema: errorSchema,
          schema: schema,
          uiSchema: uiSchema,
          formContext: formContext
        });
      }

      return null;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return {
        fields: this.props.fields,
        widgets: this.props.widgets,
        templates: this.props.templates,
        definitions: this.props.schema.definitions || {},
        formContext: this.props.formContext || {}
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          safeRenderCompletion = _this$props5.safeRenderCompletion,
          id = _this$props5.id,
          idPrefix = _this$props5.idPrefix,
          className = _this$props5.className,
          name = _this$props5.name,
          method = _this$props5.method,
          target = _this$props5.target,
          action = _this$props5.action,
          autocomplete = _this$props5.autocomplete,
          enctype = _this$props5.enctype,
          acceptcharset = _this$props5.acceptcharset,
          noHtml5Validate = _this$props5.noHtml5Validate,
          onPDFOpen = _this$props5.onPDFOpen;
      var _this$state2 = this.state,
          schema = _this$state2.schema,
          uiSchema = _this$state2.uiSchema,
          formData = _this$state2.formData,
          errorSchema = _this$state2.errorSchema,
          idSchema = _this$state2.idSchema;
      var registry = this.getRegistry();
      var SchemaField = registry.fields.SchemaField,
          _registry$templates = registry.templates,
          SubmitTemplate = _registry$templates.SubmitTemplate,
          ErrorListTemplate = _registry$templates.ErrorListTemplate;
      return _react.default.createElement("form", {
        className: className ? className : "rjsf",
        id: id,
        name: name,
        method: method,
        target: target,
        action: action,
        autoComplete: autocomplete,
        encType: enctype,
        acceptCharset: acceptcharset,
        noValidate: noHtml5Validate,
        onSubmit: this.onSubmit
      }, this.renderErrors(ErrorListTemplate), _react.default.createElement(SchemaField, {
        schema: schema,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        idSchema: idSchema,
        idPrefix: idPrefix,
        formData: formData,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onPDFOpen: onPDFOpen,
        registry: registry,
        safeRenderCompletion: safeRenderCompletion
      }), children ? children : _react.default.createElement(SubmitTemplate, null));
    }
  }]);
  return Form;
}(_react.Component);

exports.default = Form;
(0, _defineProperty2.default)(Form, "defaultProps", {
  uiSchema: {},
  noValidate: false,
  liveValidate: false,
  safeRenderCompletion: false,
  noHtml5Validate: false
});

if (process.env.NODE_ENV !== "production") {
  Form.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.object,
    formData: _propTypes.default.any,
    widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
    templates: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
    fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
    onChange: _propTypes.default.func,
    onPDFOpen: _propTypes.default.func,
    onError: _propTypes.default.func,
    showErrorList: _propTypes.default.bool,
    onSubmit: _propTypes.default.func,
    id: _propTypes.default.string,
    className: _propTypes.default.string,
    name: _propTypes.default.string,
    method: _propTypes.default.string,
    target: _propTypes.default.string,
    action: _propTypes.default.string,
    autocomplete: _propTypes.default.string,
    enctype: _propTypes.default.string,
    acceptcharset: _propTypes.default.string,
    noValidate: _propTypes.default.bool,
    noHtml5Validate: _propTypes.default.bool,
    liveValidate: _propTypes.default.bool,
    validate: _propTypes.default.func,
    transformErrors: _propTypes.default.func,
    safeRenderCompletion: _propTypes.default.bool,
    formContext: _propTypes.default.object
  };
}