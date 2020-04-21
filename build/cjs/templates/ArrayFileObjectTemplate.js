"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _selfkeyUi = require("selfkey-ui");

var _utils = require("../utils");

var _mime = _interopRequireDefault(require("mime"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ArrayFieldTitle(_ref) {
  var TitleTemplate = _ref.TitleTemplate,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  var id = "".concat(idSchema.$id, "__title");
  return _react.default.createElement(TitleTemplate, {
    id: id,
    title: title,
    required: required
  });
}

function ArrayFieldDescription(_ref2) {
  var DescriptionTemplate = _ref2.DescriptionTemplate,
      idSchema = _ref2.idSchema,
      description = _ref2.description,
      formContext = _ref2.formContext;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  var id = "".concat(idSchema.$id, "__description");
  return _react.default.createElement(DescriptionTemplate, {
    id: id,
    description: description,
    formContext: formContext
  });
}

function Help(props) {
  var help = props.help;

  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  if (typeof help === 'string') {
    return _react.default.createElement(_core.Typography, {
      variant: "subtitle1",
      color: "secondary",
      className: "help-block",
      gutterBottom: true
    }, help);
  }

  return _react.default.createElement(_core.Typography, {
    variant: "subtitle1",
    color: "secondary",
    className: "help-block",
    gutterBottom: true
  }, help);
}

function ErrorList(props) {
  var _props$errors = props.errors,
      errors = _props$errors === void 0 ? [] : _props$errors;

  if (errors.length === 0) {
    return _react.default.createElement("div", null);
  }

  return _react.default.createElement("div", null, errors.map(function (error, index) {
    return _react.default.createElement(_core.Typography, {
      variant: "subtitle2",
      color: "error",
      key: index,
      gutterBottom: true
    }, error);
  }));
}

var ArrayFileObjectTemplate = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ArrayFileObjectTemplate, _Component);

  var _super = _createSuper(ArrayFileObjectTemplate);

  function ArrayFileObjectTemplate(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ArrayFileObjectTemplate);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFileChange", function (files) {
      var onChange = _this.props.onChange;

      _this.setState({
        uploadError: false
      });

      if (!onChange) {
        onChange = ((0, _readOnlyError2.default)("onChange"), function () {});
      }

      Promise.all(files.map(function (f) {
        if (!f) {
          return null;
        }

        var url = URL.createObjectURL(f);

        if (!_this.mimeTypes.includes(f.type)) {
          _this.setState({
            uploadError: "Incorrect file extension. Allowed: ".concat(_this.formatExtensionsList())
          });

          return null;
        }

        var data = {
          file: f,
          mimeType: f.type,
          name: f.name,
          size: f.size,
          url: url
        }; // eslint-disable-next-line

        var reader = new FileReader();
        reader.readAsDataURL(f);
        return new Promise(function (resolve, reject) {
          reader.onload = function () {
            if (!reader.result) {
              return resolve(null);
            }

            data.content = reader.result;
            resolve(data);
          };

          reader.onerror = function () {
            reject(null);
          };
        });
      })).then(function (filesData) {
        filesData = filesData.filter(function (f) {
          return !!f;
        });
        filesData = [].concat((0, _toConsumableArray2.default)(_this.state.files || []), (0, _toConsumableArray2.default)(filesData));
        var formData = filesData.map(function (data) {
          return {
            name: data.name,
            content: data.content,
            mimeType: data.mimeType,
            size: data.size
          };
        });

        _this.setState({
          files: filesData,
          formData: formData
        }, onChange(formData));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleFileDelete", function (file) {
      var onChange = _this.props.onChange;

      if (!onChange) {
        onChange = ((0, _readOnlyError2.default)("onChange"), function () {});
      }

      var _this$state = _this.state,
          files = _this$state.files,
          formData = _this$state.formData;
      var index = files.indexOf(file);
      if (index == -1) return;
      files = files.filter(function (f, ind) {
        return ind !== index;
      });
      formData = formData.filter(function (f, ind) {
        return ind !== index;
      });

      _this.setState({
        files: files,
        formData: formData
      }, onChange(formData));
    });

    var _props$formData = props.formData,
        _formData = _props$formData === void 0 ? [] : _props$formData;

    var state = {
      uploadError: false
    };
    state.files = (_formData || []).map(function (data) {
      var f = {};

      if (data.content) {
        var _dataURItoBlob = (0, _utils.dataURItoBlob)(data.content),
            blob = _dataURItoBlob.blob,
            _dataURItoBlob$name = _dataURItoBlob.name,
            name = _dataURItoBlob$name === void 0 ? data.name : _dataURItoBlob$name;

        f.file = new File([blob], name, {
          type: data.mimeType
        });
      }

      f.mimeType = data.mimeType;
      f.name = data.name;
      f.size = data.size;
      f.content = data.content;

      if (f.file) {
        f.url = URL.createObjectURL(f.file);
      }

      return f;
    });
    _this.state = _objectSpread({}, state, {
      formData: _formData
    });
    return _this;
  }

  (0, _createClass2.default)(ArrayFileObjectTemplate, [{
    key: "formatExtensionsList",
    value: function formatExtensionsList() {
      var mimeTypes = this.mimeTypes;
      var fileTypes = mimeTypes.map(function (mt) {
        return ('' || mt).split('/')[0];
      });
      var extensions = mimeTypes.map(function (type) {
        return _mime.default.getExtension(type);
      });
      return extensions.map(function (ext, ind) {
        var mimeType = mimeTypes[ind];
        var ft = fileTypes[ind];
        if (!ext) return mimeType;
        if (!ft) return ext;

        if (mimeType === 'image/jpeg') {
          return ".jpg, .jpeg";
        }

        if (ft === 'audio') {
          return "".concat(ft, " .").concat(ext);
        }

        return ".".concat(ext);
      }).join(', ');
    }
  }, {
    key: "computeItemErrors",
    value: function computeItemErrors() {
      var itemErrors = {};
      var errorSchema = this.props.errorSchema;

      if (Object.keys(errorSchema).length) {
        for (var item in errorSchema) {
          itemErrors[+item] = [];

          if (errorSchema[item].mimeType && errorSchema[item].mimeType.__errors) {
            itemErrors[+item].push("Incorrect file extension. Allowed: ".concat(this.formatExtensionsList()));
          }

          if (errorSchema[item].size && errorSchema[item].size.__errors) {
            itemErrors[+item].push("File size is over ".concat(this.maxFileSize / 1000000, "MB. Please upload a smaller file"));
          }
        }
      }

      return itemErrors;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var title = props.uiSchema['ui:title'] || props.uiSchema['ui:label'] || props.title;
      var description = this.props.placeholder || props.uiSchema['ui:description'] || props.schema.description;

      if (props.uiSchema['ui:description'] === false) {
        description = null;
      }

      if (props.uiSchema['ui:label'] === false) {
        title = null;
      }

      var help = props.help;

      if (!help && this.mimeTypes.length) {
        help = "Allowed file extensions: ".concat(this.formatExtensionsList());
      }

      var itemErrors = this.computeItemErrors();
      var isError = props.errors && props.errors.length || Object.keys(itemErrors).length > 0;
      var TitleTemplate = props.registry.templates.TitleTemplate;
      return _react.default.createElement("div", null, title ? _react.default.createElement(ArrayFieldTitle, {
        key: "array-field-title-".concat(props.idSchema.$id),
        TitleTemplate: TitleTemplate,
        idSchema: props.idSchema,
        title: props.uiSchema['ui:title'] || props.title,
        required: props.required
      }) : null, _react.default.createElement(_selfkeyUi.ArrayFileUploadWidget, {
        files: this.state.files,
        errorFiles: itemErrors,
        onClearForm: this.handleFileDelete,
        mimeTypes: this.mimeTypes,
        uploadError: this.state.uploadError,
        placeholder: description,
        isError: isError,
        onChange: this.handleFileChange,
        onPDFOpen: props.onPDFOpen
      }), _react.default.createElement("br", null), _react.default.createElement(Help, {
        help: help
      }));
    }
  }, {
    key: "itemsProps",
    get: function get() {
      var itemsProps = {};
      var props = this.props;

      if (props.schema && props.schema.items && props.schema.items.properties) {
        itemsProps = props.schema.items.properties;
      }

      return itemsProps;
    }
  }, {
    key: "mimeTypes",
    get: function get() {
      var mimeTypes = [];
      var itemsProps = this.itemsProps;

      if (itemsProps.mimeType && itemsProps.mimeType.enum) {
        mimeTypes = itemsProps.mimeType.enum;
      }

      return mimeTypes;
    }
  }, {
    key: "maxFileSize",
    get: function get() {
      var itemsProps = this.itemsProps;

      if (!itemsProps.size || !itemsProps.size.maximum) {
        return 'unlimited';
      }

      return itemsProps.size.maximum;
    }
  }]);
  return ArrayFileObjectTemplate;
}(_react.Component);

exports.default = ArrayFileObjectTemplate;