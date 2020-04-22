"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _includes = _interopRequireDefault(require("core-js/library/fn/array/includes"));

var _UnsupportedField = _interopRequireDefault(require("./UnsupportedField"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ArrayField = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ArrayField, _Component);

  var _super = _createSuper(ArrayField);

  function ArrayField() {
    var _this;

    (0, _classCallCheck2.default)(this, ArrayField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAddClick", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          schema = _this$props.schema,
          formData = _this$props.formData,
          registry = _this$props.registry;
      var definitions = registry.definitions;
      var itemSchema = schema.items;

      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
        itemSchema = schema.additionalItems;
      }

      _this.props.onChange([].concat((0, _toConsumableArray2.default)(formData), [(0, _utils.getDefaultFormState)(itemSchema, undefined, definitions)]));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onDropIndexClick", function (index) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        var _this$props2 = _this.props,
            formData = _this$props2.formData,
            onChange = _this$props2.onChange; // refs #195: revalidate to ensure properly reindexing errors

        var newErrorSchema;

        if (_this.props.errorSchema) {
          newErrorSchema = {};
          var errorSchema = _this.props.errorSchema;

          for (var i in errorSchema) {
            i = parseInt(i);

            if (i < index) {
              newErrorSchema[i] = errorSchema[i];
            } else if (i > index) {
              newErrorSchema[i - 1] = errorSchema[i];
            }
          }
        }

        onChange(formData.filter(function (_, i) {
          return i !== index;
        }), newErrorSchema);
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onReorderClick", function (index, newIndex) {
      return function (event) {
        if (event) {
          event.preventDefault();
          event.target.blur();
        }

        var _this$props3 = _this.props,
            formData = _this$props3.formData,
            onChange = _this$props3.onChange;
        var newErrorSchema;

        if (_this.props.errorSchema) {
          newErrorSchema = {};
          var errorSchema = _this.props.errorSchema;

          for (var i in errorSchema) {
            if (i == index) {
              newErrorSchema[newIndex] = errorSchema[index];
            } else if (i == newIndex) {
              newErrorSchema[index] = errorSchema[newIndex];
            } else {
              newErrorSchema[i] = errorSchema[i];
            }
          }
        }

        onChange(formData.map(function (item, i) {
          // i is string, index and newIndex are numbers,
          // so using "==" to compare
          if (i == newIndex) {
            return formData[index];
          } else if (i == index) {
            return formData[newIndex];
          } else {
            return item;
          }
        }), newErrorSchema);
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeForIndex", function (index) {
      return function (value, errorSchema) {
        var _this$props4 = _this.props,
            formData = _this$props4.formData,
            onChange = _this$props4.onChange;
        var newFormData = formData.map(function (item, i) {
          // We need to treat undefined items as nulls to have validation.
          // See https://github.com/tdegrunt/jsonschema/issues/206
          var jsonValue = typeof value === 'undefined' ? null : value;
          return index === i ? jsonValue : item;
        });
        onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread({}, _this.props.errorSchema, (0, _defineProperty2.default)({}, index, errorSchema)));
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectChange", function (value) {
      _this.props.onChange(value);
    });
    return _this;
  }

  (0, _createClass2.default)(ArrayField, [{
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      if (Array.isArray(itemSchema.type)) {
        // While we don't yet support composite/nullable jsonschema types, it's
        // future-proof to check for requirement against these.
        return !(0, _includes.default)(itemSchema.type, 'null');
      } // All non-null array item types are inherently required by design


      return itemSchema.type !== 'null';
    }
  }, {
    key: "canAddItem",
    value: function canAddItem(formItems) {
      var _this$props5 = this.props,
          schema = _this$props5.schema,
          uiSchema = _this$props5.uiSchema;

      var _getUiOptions = (0, _utils.getUiOptions)(uiSchema),
          addable = _getUiOptions.addable;

      if (addable !== false) {
        // if ui:options.addable was not explicitly set to false, we can add
        // another item if we have not exceeded maxItems yet
        if (schema.maxItems !== undefined) {
          addable = formItems.length < schema.maxItems;
        } else {
          addable = true;
        }
      }

      return addable;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          schema = _this$props6.schema,
          uiSchema = _this$props6.uiSchema,
          idSchema = _this$props6.idSchema,
          registry = _this$props6.registry;
      var definitions = registry.definitions;

      if (!schema.hasOwnProperty('items')) {
        return _react.default.createElement(_UnsupportedField.default, {
          schema: schema,
          idSchema: idSchema,
          reason: "Missing items definition"
        });
      }

      if ((0, _utils.isObjectFilesArray)(schema, uiSchema, definitions)) {
        return this.renderObjectFilesArray(schema, uiSchema, definitions);
      }

      if ((0, _utils.isFixedItems)(schema)) {
        return this.renderFixedArray();
      }

      if ((0, _utils.isFilesArray)(schema, uiSchema, definitions)) {
        return this.renderFiles();
      }

      if ((0, _utils.isMultiSelect)(schema, definitions)) {
        return this.renderMultiSelect();
      }

      return this.renderNormalArray();
    }
  }, {
    key: "renderObjectFilesArray",
    value: function renderObjectFilesArray(schema, uiSchema) {
      if (uiSchema['ui:hidden']) return null;
      var title = schema.title === undefined ? name : schema.title;
      var ArrayFileObjectTemplate = this.props.registry.templates.ArrayFileObjectTemplate;
      return _react.default.createElement(ArrayFileObjectTemplate, (0, _extends2.default)({}, this.props, {
        title: title
      }));
    }
  }, {
    key: "renderNormalArray",
    value: function renderNormalArray() {
      var _this2 = this;

      var _this$props7 = this.props,
          schema = _this$props7.schema,
          uiSchema = _this$props7.uiSchema,
          formData = _this$props7.formData,
          errorSchema = _this$props7.errorSchema,
          idSchema = _this$props7.idSchema,
          name = _this$props7.name,
          required = _this$props7.required,
          disabled = _this$props7.disabled,
          readonly = _this$props7.readonly,
          autofocus = _this$props7.autofocus,
          registry = _this$props7.registry,
          onBlur = _this$props7.onBlur,
          onFocus = _this$props7.onFocus,
          idPrefix = _this$props7.idPrefix,
          errors = _this$props7.errors;
      var title = schema.title === undefined ? name : schema.title;
      var ArrayFieldTemplate = registry.templates.ArrayFieldTemplate,
          definitions = registry.definitions,
          formContext = registry.formContext;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);
      var arrayProps = {
        canAdd: this.canAddItem(formData),
        items: formData.map(function (item, index) {
          var itemSchema = (0, _utils.retrieveSchema)(schema.items, definitions, item);
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          var itemIdPrefix = idSchema.$id + '_' + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions, item, idPrefix);
          return _this2.renderArrayFieldItem({
            index: index,
            canMoveUp: index > 0,
            canMoveDown: index < formData.length - 1,
            itemSchema: itemSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            itemData: item,
            itemUiSchema: uiSchema.items,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus
          });
        }),
        className: "field field-array field-array-of-".concat(itemsSchema.type),
        disabled: disabled,
        idSchema: idSchema,
        uiSchema: uiSchema,
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        title: title,
        formContext: formContext,
        formData: formData,
        errors: errors,
        registry: registry
      }; // Check if a custom render function was passed in

      return _react.default.createElement(ArrayFieldTemplate, arrayProps);
    }
  }, {
    key: "renderMultiSelect",
    value: function renderMultiSelect() {
      var _this$props8 = this.props,
          schema = _this$props8.schema,
          idSchema = _this$props8.idSchema,
          uiSchema = _this$props8.uiSchema,
          formData = _this$props8.formData,
          disabled = _this$props8.disabled,
          readonly = _this$props8.readonly,
          autofocus = _this$props8.autofocus,
          onBlur = _this$props8.onBlur,
          onFocus = _this$props8.onFocus,
          registry = _this$props8.registry,
          errors = _this$props8.errors;
      var items = this.props.formData;
      var widgets = registry.widgets,
          definitions = registry.definitions,
          formContext = registry.formContext;
      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions, formData);
      var enumOptions = (0, _utils.optionsList)(itemsSchema);

      var _getUiOptions$enumOpt = _objectSpread({}, (0, _utils.getUiOptions)(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === void 0 ? 'select' : _getUiOptions$enumOpt2,
          options = (0, _objectWithoutProperties2.default)(_getUiOptions$enumOpt, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react.default.createElement(Widget, {
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        options: options,
        schema: schema,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus,
        errors: errors
      });
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this$props9 = this.props,
          schema = _this$props9.schema,
          uiSchema = _this$props9.uiSchema,
          idSchema = _this$props9.idSchema,
          name = _this$props9.name,
          disabled = _this$props9.disabled,
          readonly = _this$props9.readonly,
          autofocus = _this$props9.autofocus,
          onBlur = _this$props9.onBlur,
          onFocus = _this$props9.onFocus,
          registry = _this$props9.registry,
          errors = _this$props9.errors;
      var title = schema.title || name;
      var items = this.props.formData;
      var widgets = registry.widgets,
          formContext = registry.formContext;

      var _getUiOptions2 = (0, _utils.getUiOptions)(uiSchema),
          _getUiOptions2$widget = _getUiOptions2.widget,
          widget = _getUiOptions2$widget === void 0 ? 'files' : _getUiOptions2$widget,
          options = (0, _objectWithoutProperties2.default)(_getUiOptions2, ["widget"]);

      var Widget = (0, _utils.getWidget)(schema, widget, widgets);
      return _react.default.createElement(Widget, {
        options: options,
        id: idSchema && idSchema.$id,
        multiple: true,
        onChange: this.onSelectChange,
        onBlur: onBlur,
        onFocus: onFocus,
        schema: schema,
        title: title,
        value: items,
        disabled: disabled,
        readonly: readonly,
        formContext: formContext,
        autofocus: autofocus,
        errors: errors
      });
    }
  }, {
    key: "renderFixedArray",
    value: function renderFixedArray() {
      var _this3 = this;

      var _this$props10 = this.props,
          schema = _this$props10.schema,
          uiSchema = _this$props10.uiSchema,
          formData = _this$props10.formData,
          errorSchema = _this$props10.errorSchema,
          idPrefix = _this$props10.idPrefix,
          idSchema = _this$props10.idSchema,
          name = _this$props10.name,
          required = _this$props10.required,
          disabled = _this$props10.disabled,
          readonly = _this$props10.readonly,
          autofocus = _this$props10.autofocus,
          registry = _this$props10.registry,
          onBlur = _this$props10.onBlur,
          onFocus = _this$props10.onFocus,
          errors = _this$props10.errors;
      var title = schema.title || name;
      var items = this.props.formData;
      var ArrayFieldTemplate = registry.templates.ArrayFieldTemplate,
          definitions = registry.definitions,
          formContext = registry.formContext;
      var itemSchemas = schema.items.map(function (item, index) {
        return (0, _utils.retrieveSchema)(item, definitions, formData[index]);
      });
      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, definitions, formData) : null;

      if (!items || items.length < itemSchemas.length) {
        // to make sure at least all fixed items are generated
        items = items || [];
        items = items.concat(new Array(itemSchemas.length - items.length));
      } // These are the props passed into the render function


      var arrayProps = {
        canAdd: this.canAddItem(items) && additionalSchema,
        className: 'field field-array field-array-fixed-items',
        disabled: disabled,
        idSchema: idSchema,
        formData: formData,
        items: items.map(function (item, index) {
          var additional = index >= itemSchemas.length;
          var itemSchema = additional ? (0, _utils.retrieveSchema)(schema.additionalItems, definitions, item) : itemSchemas[index];
          var itemIdPrefix = idSchema.$id + '_' + index;
          var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions, item, idPrefix);
          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          return _this3.renderArrayFieldItem({
            index: index,
            canRemove: additional,
            canMoveUp: index >= itemSchemas.length + 1,
            canMoveDown: additional && index < items.length - 1,
            itemSchema: itemSchema,
            itemData: item,
            itemUiSchema: itemUiSchema,
            itemIdSchema: itemIdSchema,
            itemErrorSchema: itemErrorSchema,
            autofocus: autofocus && index === 0,
            onBlur: onBlur,
            onFocus: onFocus
          });
        }),
        onAddClick: this.onAddClick,
        readonly: readonly,
        required: required,
        schema: schema,
        uiSchema: uiSchema,
        title: title,
        formContext: formContext,
        errors: errors,
        registry: registry
      }; // Check if a custom template template was passed in

      return _react.default.createElement(ArrayFieldTemplate, arrayProps);
    }
  }, {
    key: "renderArrayFieldItem",
    value: function renderArrayFieldItem(props) {
      var index = props.index,
          _props$canRemove = props.canRemove,
          canRemove = _props$canRemove === void 0 ? true : _props$canRemove,
          _props$canMoveUp = props.canMoveUp,
          canMoveUp = _props$canMoveUp === void 0 ? true : _props$canMoveUp,
          _props$canMoveDown = props.canMoveDown,
          canMoveDown = _props$canMoveDown === void 0 ? true : _props$canMoveDown,
          itemSchema = props.itemSchema,
          itemData = props.itemData,
          itemUiSchema = props.itemUiSchema,
          itemIdSchema = props.itemIdSchema,
          itemErrorSchema = props.itemErrorSchema,
          autofocus = props.autofocus,
          onBlur = props.onBlur,
          onFocus = props.onFocus,
          errors = props.errors;
      var _this$props11 = this.props,
          disabled = _this$props11.disabled,
          readonly = _this$props11.readonly,
          uiSchema = _this$props11.uiSchema,
          registry = _this$props11.registry;
      var SchemaField = registry.fields.SchemaField;

      var _orderable$removable$ = _objectSpread({
        orderable: true,
        removable: true
      }, uiSchema['ui:options']),
          orderable = _orderable$removable$.orderable,
          removable = _orderable$removable$.removable;

      var has = {
        moveUp: orderable && canMoveUp,
        moveDown: orderable && canMoveDown,
        remove: removable && canRemove
      };
      has.toolbar = Object.keys(has).some(function (key) {
        return has[key];
      });
      return {
        children: _react.default.createElement(SchemaField, {
          schema: itemSchema,
          uiSchema: itemUiSchema,
          formData: itemData,
          errorSchema: itemErrorSchema,
          idSchema: itemIdSchema,
          required: this.isItemRequired(itemSchema),
          onChange: this.onChangeForIndex(index),
          onBlur: onBlur,
          onFocus: onFocus,
          registry: this.props.registry,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          autofocus: autofocus,
          errors: errors
        }),
        className: 'array-item',
        disabled: disabled,
        hasToolbar: has.toolbar,
        hasMoveUp: has.moveUp,
        hasMoveDown: has.moveDown,
        hasRemove: has.remove,
        index: index,
        onDropIndexClick: this.onDropIndexClick,
        onReorderClick: this.onReorderClick,
        readonly: readonly
      };
    }
  }, {
    key: "itemTitle",
    get: function get() {
      var schema = this.props.schema;
      return schema.items.title || schema.items.description || 'Item';
    }
  }]);
  return ArrayField;
}(_react.Component);

(0, _defineProperty2.default)(ArrayField, "defaultProps", {
  uiSchema: {},
  formData: [],
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
});

if (process.env.NODE_ENV !== 'production') {
  ArrayField.propTypes = {
    schema: _propTypes.default.object.isRequired,
    uiSchema: _propTypes.default.shape({
      'ui:options': _propTypes.default.shape({
        addable: _propTypes.default.bool,
        orderable: _propTypes.default.bool,
        removable: _propTypes.default.bool
      })
    }),
    idSchema: _propTypes.default.object,
    errorSchema: _propTypes.default.object,
    onChange: _propTypes.default.func.isRequired,
    onBlur: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    formData: _propTypes.default.array,
    required: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    readonly: _propTypes.default.bool,
    autofocus: _propTypes.default.bool,
    registry: _propTypes.default.shape({
      widgets: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      templates: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])).isRequired,
      fields: _propTypes.default.objectOf(_propTypes.default.func).isRequired,
      definitions: _propTypes.default.object.isRequired,
      formContext: _propTypes.default.object.isRequired
    })
  };
}

var _default = ArrayField;
exports.default = _default;