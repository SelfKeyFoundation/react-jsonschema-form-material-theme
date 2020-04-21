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

var _utils = require("react-jsonschema-form/lib/utils");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function addNameToDataURL(dataURL, name) {
  return dataURL.replace(';base64', ";name=".concat(name, ";base64"));
}

function processFile(file) {
  var name = file.name,
      size = file.size,
      type = file.type;
  return new Promise(function (resolve, reject) {
    var reader = new window.FileReader();
    reader.onerror = reject;

    reader.onload = function (event) {
      resolve({
        dataURL: addNameToDataURL(event.target.result, name),
        name: name,
        size: size,
        type: type
      });
    };

    reader.readAsDataURL(file);
  });
}

function processFiles(files) {
  return Promise.all([].map.call(files, processFile));
}

function FilesInfo(props) {
  var filesInfo = props.filesInfo;

  if (filesInfo.length === 0) {
    return null;
  }

  return _react.default.createElement(_core.List, {
    className: "file-info"
  }, filesInfo.map(function (fileInfo, key) {
    var name = fileInfo.name,
        size = fileInfo.size,
        type = fileInfo.type;
    return _react.default.createElement(_core.Grid, {
      key: key,
      container: true,
      alignItems: "center"
    }, _react.default.createElement(_icons.AttachFile, {
      fontSize: "small",
      color: "secondary"
    }), _react.default.createElement(_core.Typography, {
      variant: "subtitle1",
      color: "secondary"
    }, name, " \xA0 (", type, ", ", size, " bytes)"));
  }));
}

function extractFileInfo(dataURLs) {
  return dataURLs.filter(function (dataURL) {
    return typeof dataURL !== 'undefined';
  }).map(function (dataURL) {
    var _dataURItoBlob = (0, _utils.dataURItoBlob)(dataURL),
        blob = _dataURItoBlob.blob,
        name = _dataURItoBlob.name;

    return {
      name: name,
      size: blob.size,
      type: blob.type
    };
  });
}

var FileWidget = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FileWidget, _Component);

  var _super = _createSuper(FileWidget);

  function FileWidget(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FileWidget);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (event) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange;
      processFiles(event.target.files).then(function (filesInfo) {
        var state = {
          values: filesInfo.map(function (fileInfo) {
            return fileInfo.dataURL;
          }),
          filesInfo: filesInfo
        };
        (0, _utils.setState)((0, _assertThisInitialized2.default)(_this), state, function () {
          if (multiple) {
            onChange(state.values);
          } else {
            onChange(state.values[0]);
          }
        });
      });
    });
    var value = props.value;
    var values = Array.isArray(value) ? value : [value];
    _this.state = {
      values: values,
      filesInfo: extractFileInfo(values)
    };
    return _this;
  }

  (0, _createClass2.default)(FileWidget, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shouldRender)(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          multiple = _this$props2.multiple,
          id = _this$props2.id,
          readonly = _this$props2.readonly,
          disabled = _this$props2.disabled,
          autofocus = _this$props2.autofocus;
      var filesInfo = this.state.filesInfo;
      return _react.default.createElement("div", null, _react.default.createElement(_core.Input, {
        ref: function ref(_ref) {
          return _this2.inputRef = _ref;
        },
        id: id,
        type: "file",
        disabled: readonly || disabled,
        onChange: this.onChange,
        defaultValue: "",
        autoFocus: autofocus,
        multiple: multiple,
        style: {
          display: 'none'
        }
      }), _react.default.createElement("label", {
        htmlFor: id
      }, _react.default.createElement(_core.Button, {
        variant: "outlined",
        color: "primary",
        component: "span"
      }, "Upload")), _react.default.createElement("br", null), _react.default.createElement(FilesInfo, {
        filesInfo: filesInfo
      }));
    }
  }]);
  return FileWidget;
}(_react.Component);

FileWidget.defaultProps = {
  autofocus: false
};
FileWidget.propTypes = {
  multiple: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  autofocus: _propTypes.default.bool
};
var _default = FileWidget;
exports.default = _default;