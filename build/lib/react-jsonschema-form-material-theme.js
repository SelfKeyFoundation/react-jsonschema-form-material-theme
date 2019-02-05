(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("@material-ui/core"), require("react-jsonschema-form/lib/utils"), require("@material-ui/icons"), require("@material-ui/lab"));
	else if(typeof define === 'function' && define.amd)
		define(["PropTypes", "React", "@material-ui/core", "react-jsonschema-form/lib/util", "@material-ui/icons", "@material-ui/lab"], factory);
	else if(typeof exports === 'object')
		exports["reactJsonSchemaMaterialTheme"] = factory(require("prop-types"), require("react"), require("@material-ui/core"), require("react-jsonschema-form/lib/utils"), require("@material-ui/icons"), require("@material-ui/lab"));
	else
		root["reactJsonSchemaMaterialTheme"] = factory(root["PropTypes"], root["React"], root["@material-ui/core"], root["react-jsonschema-form/lib/util"], root["@material-ui/icons"], root["@material-ui/lab"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(16);

var assertThisInitialized = __webpack_require__(5);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(18);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(6);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(9);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(10);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(12);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(5);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(1);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"PropTypes","root":"PropTypes"}
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_ = __webpack_require__(0);
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_);

// EXTERNAL MODULE: external {"commonjs":"react-jsonschema-form/lib/utils","commonjs2":"react-jsonschema-form/lib/utils","amd":"react-jsonschema-form/lib/util","root":"react-jsonschema-form/lib/util"}
var util_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/widgets/AltDateWidget.jsx












function rangeOptions(start, stop) {
  var options = [];

  for (var i = start; i <= stop; i++) {
    options.push({
      value: i,
      label: Object(util_["pad"])(i, 2)
    });
  }

  return options;
}

function readyForChange(state) {
  return Object.keys(state).every(function (key) {
    return state[key] !== -1;
  });
}

function DateElement(props) {
  var type = props.type,
      range = props.range,
      value = props.value,
      select = props.select,
      rootId = props.rootId,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      registry = props.registry,
      onBlur = props.onBlur;
  var id = rootId + "_" + type;
  var SelectWidget = registry.widgets.SelectWidget;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SelectWidget, {
    schema: {
      type: "integer"
    },
    id: id,
    className: "form-control",
    options: {
      enumOptions: rangeOptions(range[0], range[1])
    },
    placeholder: type,
    value: value,
    disabled: disabled,
    readonly: readonly,
    autofocus: autofocus,
    onChange: function onChange(value) {
      return select(type, value);
    },
    onBlur: onBlur
  });
}

var AltDateWidget_AltDateWidget =
/*#__PURE__*/
function (_Component) {
  inherits_default()(AltDateWidget, _Component);

  function AltDateWidget(props) {
    var _this;

    classCallCheck_default()(this, AltDateWidget);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(AltDateWidget).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onChange", function (property, value) {
      _this.setState(defineProperty_default()({}, property, typeof value === "undefined" ? -1 : value), function () {
        // Only propagate to parent state if we have a complete date{time}
        if (readyForChange(_this.state)) {
          _this.props.onChange(Object(util_["toDateString"])(_this.state, _this.props.time));
        }
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "setNow", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          time = _this$props.time,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          onChange = _this$props.onChange;

      if (disabled || readonly) {
        return;
      }

      var nowDateObj = Object(util_["parseDateString"])(new Date().toJSON(), time);

      _this.setState(nowDateObj, function () {
        return onChange(Object(util_["toDateString"])(_this.state, time));
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "clear", function (event) {
      event.preventDefault();
      var _this$props2 = _this.props,
          time = _this$props2.time,
          disabled = _this$props2.disabled,
          readonly = _this$props2.readonly,
          onChange = _this$props2.onChange;

      if (disabled || readonly) {
        return;
      }

      _this.setState(Object(util_["parseDateString"])("", time), function () {
        return onChange(undefined);
      });
    });

    _this.state = Object(util_["parseDateString"])(props.value, props.time);
    return _this;
  }

  createClass_default()(AltDateWidget, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState(Object(util_["parseDateString"])(nextProps.value, nextProps.time));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Object(util_["shouldRender"])(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          disabled = _this$props3.disabled,
          readonly = _this$props3.readonly,
          autofocus = _this$props3.autofocus,
          registry = _this$props3.registry,
          onBlur = _this$props3.onBlur;
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("ul", {
        className: "list-inline"
      }, this.dateElementProps.map(function (elemProps, i) {
        return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("li", {
          key: i
        }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(DateElement, extends_default()({
          rootId: id,
          select: _this2.onChange
        }, elemProps, {
          disabled: disabled,
          readonly: readonly,
          registry: registry,
          onBlur: onBlur,
          autofocus: autofocus && i === 0
        })));
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("li", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("a", {
        href: "#",
        className: "btn btn-info btn-now",
        onClick: this.setNow
      }, "Now")), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("li", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("a", {
        href: "#",
        className: "btn btn-warning btn-clear",
        onClick: this.clear
      }, "Clear")));
    }
  }, {
    key: "dateElementProps",
    get: function get() {
      var _this$props4 = this.props,
          time = _this$props4.time,
          options = _this$props4.options;
      var _this$state = this.state,
          year = _this$state.year,
          month = _this$state.month,
          day = _this$state.day,
          hour = _this$state.hour,
          minute = _this$state.minute,
          second = _this$state.second;
      var data = [{
        type: "year",
        range: options.yearsRange,
        value: year
      }, {
        type: "month",
        range: [1, 12],
        value: month
      }, {
        type: "day",
        range: [1, 31],
        value: day
      }];

      if (time) {
        data.push({
          type: "hour",
          range: [0, 23],
          value: hour
        }, {
          type: "minute",
          range: [0, 59],
          value: minute
        }, {
          type: "second",
          range: [0, 59],
          value: second
        });
      }

      return data;
    }
  }]);

  return AltDateWidget;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

AltDateWidget_AltDateWidget.defaultProps = {
  time: false,
  disabled: false,
  readonly: false,
  autofocus: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  }
};
AltDateWidget_AltDateWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onBlur: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  time: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object
};
/* harmony default export */ var widgets_AltDateWidget = (AltDateWidget_AltDateWidget);
// CONCATENATED MODULE: ./src/widgets/AltDateTimeWidget.jsx




function AltDateTimeWidget(props) {
  var AltDateWidget = props.registry.widgets.AltDateWidget;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AltDateWidget, extends_default()({
    time: true
  }, props));
}

AltDateTimeWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object
};
AltDateTimeWidget.defaultProps = {
  disabled: false,
  readonly: false,
  autofocus: false,
  options: {
    yearsRange: [1900, new Date().getFullYear() + 2]
  },
  time: true
};
/* harmony default export */ var widgets_AltDateTimeWidget = (AltDateTimeWidget);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(14);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"commonjs":"@material-ui/core","commonjs2":"@material-ui/core","amd":"@material-ui/core","root":"@material-ui/core"}
var core_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/widgets/BaseInput.jsx






function BaseInput_BaseInput(props) {
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
      inputProps = objectWithoutProperties_default()(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "formContext", "registry", "errors"]);

  inputProps.type = options.inputType || inputProps.type || 'text';

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return props.onChange(value === '' ? options.emptyValue : value);
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Input"], extends_default()({
    className: "form-control",
    readOnly: readonly,
    disabled: disabled,
    error: isError(errors),
    autoFocus: autofocus,
    value: value == null ? '' : value
  }, inputProps, {
    onChange: _onChange,
    onBlur: onBlur && function (event) {
      return onBlur(inputProps.id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true
  }));
}

BaseInput_BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};
BaseInput_BaseInput.propTypes = {
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  placeholder: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.any,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onBlur: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onFocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_BaseInput = (BaseInput_BaseInput);
// CONCATENATED MODULE: ./src/widgets/CheckboxWidget.jsx




function CheckboxWidget(props) {
  var schema = props.schema,
      id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      DescriptionTemplate = props.registry.templates.DescriptionTemplate;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "checkbox ".concat(disabled || readonly ? "disabled" : "")
  }, schema.description && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(DescriptionTemplate, {
    description: schema.description
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["FormControlLabel"], {
    id: id,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    },
    control: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Checkbox"], null),
    label: label
  }));
}

CheckboxWidget.defaultProps = {
  autofocus: false
};
CheckboxWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_CheckboxWidget = (CheckboxWidget);
// CONCATENATED MODULE: ./src/widgets/CheckboxesWidget.jsx




function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
}

function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
}

function CheckboxesWidget(props) {
  var id = props.id,
      disabled = props.disabled,
      options = props.options,
      value = props.value,
      autofocus = props.autofocus,
      readonly = props.readonly,
      _onChange = props.onChange;
  var enumOptions = options.enumOptions,
      inline = options.inline;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "checkboxes",
    id: id
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var disabledCls = disabled || readonly ? "disabled" : "";
    var checkbox = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["FormControlLabel"], {
      id: "".concat(id, "_").concat(index),
      checked: checked,
      disabled: disabled || readonly,
      autoFocus: autofocus && index === 0,
      onChange: function onChange(event) {
        var all = enumOptions.map(function (_ref) {
          var value = _ref.value;
          return value;
        });

        if (event.target.checked) {
          _onChange(selectValue(option.value, value, all));
        } else {
          _onChange(deselectValue(option.value, value));
        }
      },
      control: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Checkbox"], null),
      label: option.label
    });
    return inline ? external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      key: index,
      className: "checkbox-inline ".concat(disabledCls)
    }, checkbox) : external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      key: index,
      className: "checkbox ".concat(disabledCls)
    }, checkbox);
  }));
}

CheckboxesWidget.defaultProps = {
  autofocus: false,
  options: {
    inline: false
  }
};
CheckboxesWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.shape({
    enumOptions: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.array,
    inline: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool
  }).isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.any,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  multiple: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_CheckboxesWidget = (CheckboxesWidget);
// CONCATENATED MODULE: ./src/widgets/ColorWidget.jsx




function ColorWidget(props) {
  var disabled = props.disabled,
      readonly = props.readonly,
      BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "color"
  }, props, {
    disabled: disabled || readonly
  }));
}

ColorWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_ColorWidget = (ColorWidget);
// CONCATENATED MODULE: ./src/widgets/DateWidget.jsx




function DateWidget(props) {
  var _onChange = props.onChange,
      BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "date"
  }, props, {
    onChange: function onChange(value) {
      return _onChange(value || undefined);
    }
  }));
}

DateWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_DateWidget = (DateWidget);
// CONCATENATED MODULE: ./src/widgets/DateTimeWidget.jsx




function utcToLocal(jsonDate) {
  if (!jsonDate) {
    return "";
  } // required format of `"yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS"
  // https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type%3Ddatetime-local)
  // > should be a _valid local date and time string_ (not GMT)
  // Note - date constructor passed local ISO-8601 does not correctly
  // change time to UTC in node pre-8


  var date = new Date(jsonDate);
  var yyyy = Object(util_["pad"])(date.getFullYear(), 4);
  var MM = Object(util_["pad"])(date.getMonth() + 1, 2);
  var dd = Object(util_["pad"])(date.getDate(), 2);
  var hh = Object(util_["pad"])(date.getHours(), 2);
  var mm = Object(util_["pad"])(date.getMinutes(), 2);
  var ss = Object(util_["pad"])(date.getSeconds(), 2);
  var SSS = Object(util_["pad"])(date.getMilliseconds(), 3);
  return "".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(SSS);
}
function localToUTC(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
}

function DateTimeWidget(props) {
  var value = props.value,
      _onChange = props.onChange,
      BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "datetime-local"
  }, props, {
    value: utcToLocal(value),
    onChange: function onChange(value) {
      return _onChange(localToUTC(value));
    }
  }));
}

DateTimeWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_DateTimeWidget = (DateTimeWidget);
// CONCATENATED MODULE: ./src/widgets/EmailWidget.jsx




function EmailWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "email"
  }, props));
}

EmailWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_EmailWidget = (EmailWidget);
// EXTERNAL MODULE: external {"commonjs":"@material-ui/icons","commonjs2":"@material-ui/icons","amd":"@material-ui/icons","root":"@material-ui/icons"}
var icons_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/widgets/FileWidget.jsx













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

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["List"], {
    className: "file-info"
  }, filesInfo.map(function (fileInfo, key) {
    var name = fileInfo.name,
        size = fileInfo.size,
        type = fileInfo.type;
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Grid"], {
      key: key,
      container: true,
      alignItems: "center"
    }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(icons_["AttachFile"], {
      fontSize: "small",
      color: "secondary"
    }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      variant: "subtitle1",
      color: "secondary"
    }, name, " \xA0 (", type, ", ", size, " bytes)"));
  }));
}

function extractFileInfo(dataURLs) {
  return dataURLs.filter(function (dataURL) {
    return typeof dataURL !== 'undefined';
  }).map(function (dataURL) {
    var _dataURItoBlob = Object(util_["dataURItoBlob"])(dataURL),
        blob = _dataURItoBlob.blob,
        name = _dataURItoBlob.name;

    return {
      name: name,
      size: blob.size,
      type: blob.type
    };
  });
}

var FileWidget_FileWidget =
/*#__PURE__*/
function (_Component) {
  inherits_default()(FileWidget, _Component);

  function FileWidget(props) {
    var _this;

    classCallCheck_default()(this, FileWidget);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(FileWidget).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onChange", function (event) {
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
        Object(util_["setState"])(assertThisInitialized_default()(assertThisInitialized_default()(_this)), state, function () {
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

  createClass_default()(FileWidget, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Object(util_["shouldRender"])(this, nextProps, nextState);
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
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Input"], {
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
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
        htmlFor: id
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Button"], {
        variant: "outlined",
        color: "primary",
        component: "span"
      }, "Upload")), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("br", null), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FilesInfo, {
        filesInfo: filesInfo
      }));
    }
  }]);

  return FileWidget;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

FileWidget_FileWidget.defaultProps = {
  autofocus: false
};
FileWidget_FileWidget.propTypes = {
  multiple: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.arrayOf(external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string)]),
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool
};
/* harmony default export */ var widgets_FileWidget = (FileWidget_FileWidget);
// CONCATENATED MODULE: ./src/widgets/HiddenWidget.jsx



function HiddenWidget(_ref) {
  var id = _ref.id,
      value = _ref.value;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
    type: "hidden",
    id: id,
    value: typeof value === "undefined" ? "" : value
  });
}

HiddenWidget.propTypes = {
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.number, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool])
};
/* harmony default export */ var widgets_HiddenWidget = (HiddenWidget);
// CONCATENATED MODULE: ./src/widgets/PasswordWidget.jsx




function PasswordWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "password"
  }, props));
}

PasswordWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_PasswordWidget = (PasswordWidget);
// CONCATENATED MODULE: ./src/widgets/RadioWidget.jsx




function RadioWidget(props) {
  var options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      _onChange = props.onChange; // Generating a unique field name to identify this set of radio buttons

  var name = Math.random().toString();
  var enumOptions = options.enumOptions,
      inline = options.inline; // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "field-radio-group"
  }, enumOptions.map(function (option, i) {
    var checked = option.value === value;
    var disabledCls = disabled || readonly ? "disabled" : "";
    var radio = external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["FormControlLabel"], {
      checked: checked,
      name: name,
      required: required,
      disabled: disabled || readonly,
      autoFocus: autofocus && i === 0,
      onChange: function onChange(_) {
        return _onChange(option.value);
      },
      label: option.label,
      value: option.label,
      labelPlacement: "end",
      control: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Radio"], null)
    });
    return inline ? external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", {
      key: i,
      className: "radio-inline ".concat(disabledCls)
    }, radio) : external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
      key: i,
      className: "radio ".concat(disabledCls)
    }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("label", null, radio));
  }));
}

RadioWidget.defaultProps = {
  autofocus: false
};
RadioWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.shape({
    enumOptions: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.array,
    inline: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool
  }).isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.any,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_RadioWidget = (RadioWidget);
// EXTERNAL MODULE: external {"commonjs":"@material-ui/lab","commonjs2":"@material-ui/lab","amd":"@material-ui/lab","root":"@material-ui/lab"}
var lab_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/widgets/RangeWidget.jsx







function RangeWidget(props) {
  var schema = props.schema,
      value = props.value,
      BaseInput = props.registry.widgets.BaseInput;

  var _onChange = function _onChange(event, value) {
    event.preventDefault();
    props.onChange(value);
  };

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "field-range-wrapper"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["Slider"], extends_default()({}, props, {
    step: props.step ? props.step : 1
  }, Object(util_["rangeSpec"])(schema), {
    onChange: _onChange
  })), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
    variant: "body2",
    color: "textSecondary",
    gutterBottom: true
  }, value));
}

RangeWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.number])
};
/* harmony default export */ var widgets_RangeWidget = (RangeWidget);
// CONCATENATED MODULE: ./src/widgets/SelectWidget.jsx





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
    return value.map(util_["asNumber"]);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return Object(util_["asNumber"])(value);
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

function SelectWidget_SelectWidget(props) {
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
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["FormControl"], null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Select"], {
    id: id,
    multiple: multiple,
    className: "form-control",
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
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
  }, !multiple && !schema.default && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref2, i) {
    var value = _ref2.value,
        label = _ref2.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["MenuItem"], {
      key: i,
      value: value,
      disabled: disabled
    }, label);
  })));
}

SelectWidget_SelectWidget.defaultProps = {
  autofocus: false
};
SelectWidget_SelectWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.shape({
    enumOptions: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.array
  }).isRequired,
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.any,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  multiple: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onBlur: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onFocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_SelectWidget = (SelectWidget_SelectWidget);
// CONCATENATED MODULE: ./src/widgets/TextareaWidget.jsx




function TextareaWidget(props) {
  var id = props.id,
      options = props.options,
      placeholder = props.placeholder,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["TextField"], {
    id: id,
    value: typeof value === "undefined" ? "" : value,
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    autoFocus: autofocus,
    rows: options.rows,
    onBlur: onBlur && function (event) {
      return onBlur(id, event.target.value);
    },
    onFocus: onFocus && function (event) {
      return onFocus(id, event.target.value);
    },
    onChange: _onChange,
    multiline: true
  });
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {}
};
TextareaWidget.propTypes = {
  schema: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object.isRequired,
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string.isRequired,
  placeholder: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  options: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.shape({
    rows: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.number
  }),
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  disabled: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  autofocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  onChange: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onBlur: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func,
  onFocus: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.func
};
/* harmony default export */ var widgets_TextareaWidget = (TextareaWidget);
// CONCATENATED MODULE: ./src/widgets/TextWidget.jsx



function TextWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, props);
}

TextWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.number]),
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_TextWidget = (TextWidget);
// CONCATENATED MODULE: ./src/widgets/URLWidget.jsx




function URLWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "url"
  }, props));
}

URLWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string
};
/* harmony default export */ var widgets_URLWidget = (URLWidget);
// CONCATENATED MODULE: ./src/widgets/UpDownWidget.jsx





function UpDownWidget(props) {
  var BaseInput = props.registry.widgets.BaseInput;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(BaseInput, extends_default()({
    type: "number"
  }, props, Object(util_["rangeSpec"])(props.schema)));
}

UpDownWidget.propTypes = {
  value: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.number, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string])
};
/* harmony default export */ var widgets_UpDownWidget = (UpDownWidget);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(15);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./src/widgets/ObjectFileWidget.jsx









var ObjectFileWidget_ObjectFileWidget =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ObjectFileWidget, _Component);

  function ObjectFileWidget(props) {
    var _this;

    classCallCheck_default()(this, ObjectFileWidget);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ObjectFileWidget).call(this, props));
    var _props$formData = props.formData,
        formData = _props$formData === void 0 ? {} : _props$formData;
    var state = {
      formData: formData
    };

    if (!formData.file && formData.content) {
      var _dataURItoBlob = Object(util_["dataURItoBlob"])(formData.content),
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

    _this.state = objectSpread_default()({}, _this.state, {
      formData: formData
    });
    return _this;
  }

  createClass_default()(ObjectFileWidget, [{
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

      return function (event) {
        var files = event.target.files;
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
          errors = _this$props.errors,
          idSchema = _this$props.idSchema,
          name = _this$props.name,
          required = _this$props.required,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          idPrefix = _this$props.idPrefix,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          registry = _this$props.registry;
      var definitions = registry.definitions,
          templates = registry.templates,
          formContext = registry.formContext;
      var FieldTemplate = templates.FieldTemplate;
      var schema = Object(util_["retrieveSchema"])(this.props.schema, definitions, formData);
      var description = uiSchema['ui:description'] || schema.description;
      var templateProps = {
        label: label,
        description: description,
        idSchema: idSchema,
        uiSchema: uiSchema,
        schema: schema,
        formData: formData,
        formContext: formContext,
        registry: registry,
        errors: errors,
        idPrefix: idPrefix
      };
      var accept = (((schema.properties || {}).mimeType || {}).enum || []).join(',');
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FieldTemplate, templateProps, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["InputLabel"], null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("input", {
        id: id,
        type: "file",
        name: name,
        required: required,
        disabled: readonly || disabled,
        onChange: this.onChange(),
        onBlur: onBlur && function (event) {
          return onBlur(_this4.state);
        },
        onFocus: onFocus && function (event) {
          return onFocus(_this4.state);
        },
        accept: accept
      })), this.state.formData && this.state.formData.name && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
        variant: "body"
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("a", {
        href: this.state.url,
        target: "_blank"
      }, this.state.formData.name), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Button"], {
        onClick: this.clearState()
      }, "X")));
    }
  }]);

  return ObjectFileWidget;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);
/* harmony default export */ var widgets_ObjectFileWidget = (ObjectFileWidget_ObjectFileWidget);
// CONCATENATED MODULE: ./src/widgets/index.jsx




















var widgetMap = {
  boolean: {
    checkbox: "CheckboxWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    hidden: "HiddenWidget"
  },
  string: {
    text: "TextWidget",
    password: "PasswordWidget",
    email: "EmailWidget",
    hostname: "TextWidget",
    ipv4: "TextWidget",
    ipv6: "TextWidget",
    uri: "URLWidget",
    "data-url": "FileWidget",
    radio: "RadioWidget",
    select: "SelectWidget",
    textarea: "TextareaWidget",
    hidden: "HiddenWidget",
    date: "DateWidget",
    datetime: "DateTimeWidget",
    "date-time": "DateTimeWidget",
    "alt-date": "AltDateWidget",
    "alt-datetime": "AltDateTimeWidget",
    color: "ColorWidget",
    file: "FileWidget"
  },
  number: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  integer: {
    text: "TextWidget",
    select: "SelectWidget",
    updown: "UpDownWidget",
    range: "RangeWidget",
    radio: "RadioWidget",
    hidden: "HiddenWidget"
  },
  array: {
    select: "SelectWidget",
    checkboxes: "CheckboxesWidget",
    files: "FileWidget"
  },
  object: {
    file: "ObjectFileWidget"
  }
};
/* harmony default export */ var widgets = ({
  BaseInput: widgets_BaseInput,
  PasswordWidget: widgets_PasswordWidget,
  RadioWidget: widgets_RadioWidget,
  UpDownWidget: widgets_UpDownWidget,
  RangeWidget: widgets_RangeWidget,
  SelectWidget: widgets_SelectWidget,
  TextWidget: widgets_TextWidget,
  DateWidget: widgets_DateWidget,
  DateTimeWidget: widgets_DateTimeWidget,
  AltDateWidget: widgets_AltDateWidget,
  AltDateTimeWidget: widgets_AltDateTimeWidget,
  EmailWidget: widgets_EmailWidget,
  URLWidget: widgets_URLWidget,
  TextareaWidget: widgets_TextareaWidget,
  HiddenWidget: widgets_HiddenWidget,
  ColorWidget: widgets_ColorWidget,
  FileWidget: widgets_FileWidget,
  CheckboxWidget: widgets_CheckboxWidget,
  CheckboxesWidget: widgets_CheckboxesWidget,
  ObjectFileWidget: widgets_ObjectFileWidget,
  __widgetMap: widgetMap
});
// CONCATENATED MODULE: ./src/templates/ArrayFieldTemplate.jsx






function ArrayFieldTemplate(props) {
  var _props$registry$templ = props.registry.templates,
      TitleTemplate = _props$registry$templ.TitleTemplate,
      DescriptionTemplate = _props$registry$templ.DescriptionTemplate;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("fieldset", {
    className: props.className
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleTemplate: TitleTemplate,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(props.idSchema.$id),
    DescriptionTemplate: DescriptionTemplate,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(function (p) {
    return ArrayItem(p);
  })), props.canAdd && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(AddButton, {
    onClick: props.onAddClick,
    disabled: props.disabled || props.readonly
  }));
}

function ArrayFieldTitle(_ref) {
  var TitleTemplate = _ref.TitleTemplate,
      idSchema = _ref.idSchema,
      title = _ref.title,
      required = _ref.required;

  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  var id = "".concat(idSchema.$id, "__title");
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(TitleTemplate, {
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
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  var id = "".concat(idSchema.$id, "__description");
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(DescriptionTemplate, {
    id: id,
    description: description,
    formContext: formContext
  });
}

function IconBtn(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      icon = props.icon,
      className = props.className,
      otherProps = objectWithoutProperties_default()(props, ["type", "icon", "className"]);

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("button", extends_default()({
    type: "button",
    className: "btn btn-".concat(type, " ").concat(className)
  }, otherProps), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("i", {
    className: "glyphicon glyphicon-".concat(icon)
  }));
} // Used in the two templates


function ArrayItem(props) {
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold'
  };
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    key: props.index,
    className: props.className
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: props.hasToolbar ? 'col-xs-9' : 'col-xs-12'
  }, props.children), props.hasToolbar && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "col-xs-3 array-item-toolbox"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["ToggleButtonGroup"], {
    exclusive: true
  }, (props.hasMoveUp || props.hasMoveDown) && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["ToggleButton"], {
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(icons_["KeyboardArrowUp"], {
    color: "primary",
    tabIndex: "-1"
  })), (props.hasMoveUp || props.hasMoveDown) && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["ToggleButton"], {
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(icons_["KeyboardArrowDown"], {
    color: "primary",
    tabIndex: "-1"
  })), props.hasRemove && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(lab_["ToggleButton"], {
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(icons_["Close"], {
    color: "error",
    tabIndex: "-1"
  }))), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("br", null)));
}

function AddButton(_ref3) {
  var onClick = _ref3.onClick,
      disabled = _ref3.disabled;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Button"], {
    variant: "outlined",
    disabled: disabled,
    onClick: onClick
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(icons_["Add"], null));
}
// CONCATENATED MODULE: ./src/templates/DescriptionTemplate.jsx




function DescriptionTemplate_DescriptionTemplate(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  if (typeof description === "string") {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      variant: "subtitle2",
      color: "secondary",
      id: id,
      className: "field-description",
      gutterBottom: true
    }, description);
  } else {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      variant: "subtitle2",
      color: "secondary",
      id: id,
      className: "field-description",
      gutterBottom: true
    }, description);
  }
}

DescriptionTemplate_DescriptionTemplate.propTypes = {
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  description: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object])
};
/* harmony default export */ var templates_DescriptionTemplate = (DescriptionTemplate_DescriptionTemplate);
// CONCATENATED MODULE: ./src/templates/ErrorListTemplate.jsx


function ErrorListTemplate(props) {
  var errors = props.errors;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "panel panel-danger errors"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
    variant: "h4",
    color: "error",
    gutterBottom: true
  }, "Errors"), errors.map(function (error, i) {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      key: i,
      variant: "subtitle2",
      color: "error",
      gutterBottom: true
    }, error.stack);
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("br", null));
}
// CONCATENATED MODULE: ./src/templates/FieldTemplate.jsx



var REQUIRED_FIELD_SYMBOL = '*';
function FieldTemplate_FieldTemplate(props) {
  var id = props.id,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel,
      formContext = props.formContext,
      DescriptionTemplate = props.registry.templates.DescriptionTemplate;
  var classNames = [props.classNames, 'form-group'].join(' ').trim();

  if (hidden) {
    return children;
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["FormGroup"], null, displayLabel && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Label, {
    label: label,
    required: required,
    id: id
  }), displayLabel && description ? external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(DescriptionTemplate, {
    id: "".concat(id, "__description"),
    description: description,
    formContext: formContext
  }) : null, children, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ErrorList, {
    errors: errors
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Help, {
    help: help
  }));
}
FieldTemplate_FieldTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true
};
FieldTemplate_FieldTemplate.propTypes = {
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  classNames: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  label: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  children: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.node.isRequired,
  errors: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.arrayOf(external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string),
  help: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object]),
  description: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.oneOfType([external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string, external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object]),
  hidden: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  readonly: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  displayLabel: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool,
  fields: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object,
  formContext: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.object
};

function Label(props) {
  var label = props.label,
      required = props.required,
      id = props.id;

  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
    htmlFor: id,
    variant: "overline",
    gutterBottom: true
  }, label, required && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", {
    className: "required"
  }, REQUIRED_FIELD_SYMBOL));
}

function Help(props) {
  var help = props.help;

  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  if (typeof help === 'string') {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      variant: "subtitle1",
      color: "secondary",
      className: "help-block",
      gutterBottom: true
    }, help);
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
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
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, errors.map(function (error, index) {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
      variant: "subtitle2",
      color: "error",
      key: index,
      gutterBottom: true
    }, error);
  }));
}
// CONCATENATED MODULE: ./src/templates/ObjectFieldTemplate.jsx

function ObjectFieldTemplate(props) {
  var _props$registry$templ = props.registry.templates,
      TitleTemplate = _props$registry$templ.TitleTemplate,
      DescriptionTemplate = _props$registry$templ.DescriptionTemplate;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("fieldset", null, (props.uiSchema["ui:title"] || props.title) && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(TitleTemplate, {
    id: "".concat(props.idSchema.$id, "__title"),
    title: props.title || props.uiSchema["ui:title"],
    required: props.required,
    formContext: props.formContext
  }), props.description && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(DescriptionTemplate, {
    id: "".concat(props.idSchema.$id, "__description"),
    description: props.description,
    formContext: props.formContext
  }), props.properties.map(function (prop) {
    return prop.content;
  }));
}
// CONCATENATED MODULE: ./src/templates/SubmitTemplate.jsx



function SubmitTemplate() {
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Button"], {
    type: "submit",
    className: "btn btn-info"
  }, "Submit"));
}

/* harmony default export */ var templates_SubmitTemplate = (SubmitTemplate);
// CONCATENATED MODULE: ./src/templates/TitleTemplate.jsx



var TitleTemplate_REQUIRED_FIELD_SYMBOL = "*";

function TitleTemplate_TitleTemplate(props) {
  var id = props.id,
      title = props.title,
      required = props.required;
  var legend = required ? title + TitleTemplate_REQUIRED_FIELD_SYMBOL : title;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Typography"], {
    variant: "h4",
    id: id,
    gutterBottom: true
  }, legend);
}

TitleTemplate_TitleTemplate.propTypes = {
  id: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  title: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.string,
  required: external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default.a.bool
};
/* harmony default export */ var templates_TitleTemplate = (TitleTemplate_TitleTemplate);
// CONCATENATED MODULE: ./src/templates/index.jsx







/* harmony default export */ var src_templates = ({
  ArrayFieldTemplate: ArrayFieldTemplate,
  DescriptionTemplate: templates_DescriptionTemplate,
  ErrorListTemplate: ErrorListTemplate,
  FieldTemplate: FieldTemplate_FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  SubmitTemplate: templates_SubmitTemplate,
  TitleTemplate: templates_TitleTemplate
});
// CONCATENATED MODULE: ./src/index.js


var theme = {
  widgets: widgets,
  templates: src_templates
};
/* harmony default export */ var src = __webpack_exports__["default"] = (theme);

/***/ })
/******/ ]);
});