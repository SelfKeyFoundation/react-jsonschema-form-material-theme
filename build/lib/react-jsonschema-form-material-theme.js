(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("@material-ui/core"), require("react-jsonschema-form/lib/utils"), require("selfkey-ui"), require("@material-ui/icons"), require("@material-ui/lab"), require("ajv"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "PropTypes", "@material-ui/core", "react-jsonschema-form/lib/util", "selfkey-ui", "@material-ui/icons", "@material-ui/lab", "ajv"], factory);
	else if(typeof exports === 'object')
		exports["reactJsonSchemaMaterialTheme"] = factory(require("react"), require("prop-types"), require("@material-ui/core"), require("react-jsonschema-form/lib/utils"), require("selfkey-ui"), require("@material-ui/icons"), require("@material-ui/lab"), require("ajv"));
	else
		root["reactJsonSchemaMaterialTheme"] = factory(root["React"], root["PropTypes"], root["@material-ui/core"], root["react-jsonschema-form/lib/util"], root["selfkey-ui"], root["@material-ui/icons"], root["@material-ui/lab"], root["ajv"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__37__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDefaultRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSchemaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDefaultFormState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUiOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mergeObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return asNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return orderProperties; });
/* unused harmony export isConstant */
/* unused harmony export toConstant */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isFilesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isObjectFilesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isFixedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allowAdditionalItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return optionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return retrieveSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deepEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return shouldRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return toIdSchema; });
/* unused harmony export parseDateString */
/* unused harmony export toDateString */
/* unused harmony export pad */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setState; });
/* unused harmony export dataURItoBlob */
/* unused harmony export rangeSpec */
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var core_js_library_fn_array_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var core_js_library_fn_array_fill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_library_fn_array_fill__WEBPACK_IMPORTED_MODULE_8__);







function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function getDefaultRegistry() {
  return {
    fields: __webpack_require__(20).default,
    widgets: __webpack_require__(22).default,
    definitions: {},
    formContext: {}
  };
}
function getSchemaType(schema) {
  var type = schema.type;

  if (!type && schema.enum) {
    type = 'string';
  }

  return type;
}
function getWidget(schema, widget) {
  var registeredWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var type = getSchemaType(schema);

  function mergeOptions(Widget) {
    // cache return value as property of widget for proper react reconciliation
    if (!Widget.MergedWidget) {
      var defaultOptions = Widget.defaultProps && Widget.defaultProps.options || {};

      Widget.MergedWidget = function (_ref) {
        var _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_ref, ["options"]);

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Widget, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
          options: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, defaultOptions, options)
        }, props));
      };
    }

    return Widget.MergedWidget;
  }

  if (typeof widget === 'function') {
    return mergeOptions(widget);
  }

  if (typeof widget !== 'string') {
    throw new Error("Unsupported widget definition: ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(widget)));
  }

  if (registeredWidgets.hasOwnProperty(widget)) {
    var registeredWidget = registeredWidgets[widget];
    return getWidget(schema, registeredWidget, registeredWidgets);
  }

  if (!registeredWidgets.__widgetMap.hasOwnProperty(type)) {
    throw new Error("No widget for type \"".concat(type, "\""));
  }

  if (registeredWidgets.__widgetMap[type].hasOwnProperty(widget)) {
    var _registeredWidget = registeredWidgets[registeredWidgets.__widgetMap[type][widget]];
    return getWidget(schema, _registeredWidget, registeredWidgets);
  }

  throw new Error("No widget \"".concat(widget, "\" for type \"").concat(type, "\""));
}

function computeDefaults(schema, parentDefaults) {
  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Compute the defaults recursively: give highest priority to deepest nodes.
  var defaults = parentDefaults;

  if (isObject(defaults) && isObject(schema.default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(defaults, schema.default);
  } else if ('default' in schema) {
    // Use schema defaults for this node.
    defaults = schema.default;
  } else if ('$ref' in schema) {
    // Use referenced schema defaults for this node.
    var refSchema = findSchemaDefinition(schema.$ref, definitions);
    return computeDefaults(refSchema, defaults, definitions);
  } else if (isFixedItems(schema)) {
    defaults = schema.items.map(function (itemSchema) {
      return computeDefaults(itemSchema, undefined, definitions);
    });
  } // Not defaults defined for this node, fallback to generic typed ones.


  if (typeof defaults === 'undefined') {
    defaults = schema.default;
  }

  switch (schema.type) {
    // We need to recur for object schema inner default values.
    case 'object':
      return Object.keys(schema.properties || {}).reduce(function (acc, key) {
        // Compute the defaults for this node, with the parent defaults we might
        // have from a previous run: defaults[key].
        acc[key] = computeDefaults(schema.properties[key], (defaults || {})[key], definitions);
        return acc;
      }, {});

    case 'array':
      if (schema.minItems) {
        if (!isMultiSelect(schema, definitions)) {
          var defaultsLength = defaults ? defaults.length : 0;

          if (schema.minItems > defaultsLength) {
            var defaultEntries = defaults || []; // populate the array with the defaults

            /*eslint-disable-next-line*/

            var fillerEntries = core_js_library_fn_array_fill__WEBPACK_IMPORTED_MODULE_8___default()(new Array(schema.minItems - defaultsLength), computeDefaults(schema.items, schema.items.defaults, definitions)); // then fill up the rest with either the item default or empty, up to minItems

            return defaultEntries.concat(fillerEntries);
          }
        } else {
          return [];
        }
      }

  }

  return defaults;
}

function getDefaultFormState(_schema, formData) {
  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isObject(_schema)) {
    throw new Error('Invalid schema: ' + _schema);
  }

  var schema = retrieveSchema(_schema, definitions, formData);
  var defaults = computeDefaults(schema, _schema.default, definitions);

  if (typeof formData === 'undefined') {
    // No form data? Use schema defaults.
    return defaults;
  }

  if (isObject(formData)) {
    // Override schema defaults with form data.
    return mergeObjects(defaults, formData);
  }

  return formData || defaults;
}
function getUiOptions(uiSchema) {
  // get all passed options from ui:widget, ui:options, and ui:<optionName>
  return Object.keys(uiSchema).filter(function (key) {
    return key.indexOf('ui:') === 0;
  }).reduce(function (options, key) {
    var value = uiSchema[key];

    if (key === 'ui:widget' && isObject(value)) {
      console.warn('Setting options via ui:widget object is deprecated, use ui:options instead');
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, options, value.options || {}, {
        widget: value.component
      });
    }

    if (key === 'ui:options' && isObject(value)) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, options, value);
    }

    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, options, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key.substring(3), value));
  }, {});
}
function isObject(thing) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(thing) === 'object' && thing !== null && !Array.isArray(thing);
}
function mergeObjects(obj1, obj2) {
  var concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.

  return Object.keys(obj2).reduce(function (acc, key) {
    var left = obj1[key],
        right = obj2[key];

    if (obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right);
    } else {
      acc[key] = right;
    }

    return acc;
  }, acc);
}
function asNumber(value) {
  if (value === '') {
    return undefined;
  }

  if (/\.$/.test(value)) {
    // "3." can't really be considered a number even if it parses in js. The
    // user is most likely entering a float.
    return value;
  }

  if (/\.0$/.test(value)) {
    // we need to return this as a string here, to allow for input like 3.07
    return value;
  }

  var n = Number(value);
  var valid = typeof n === 'number' && !Number.isNaN(n);

  if (/\.\d*0$/.test(value)) {
    // It's a number, that's cool - but we need it as a string so it doesn't screw
    // with the user when entering dollar amounts or other values (such as those with
    // specific precision or number of significant digits)
    return value;
  }

  return valid ? n : value;
}
function orderProperties(properties, order) {
  if (!Array.isArray(order)) {
    return properties;
  }

  var arrayToHash = function arrayToHash(arr) {
    return arr.reduce(function (prev, curr) {
      prev[curr] = true;
      return prev;
    }, {});
  };

  var errorPropList = function errorPropList(arr) {
    return arr.length > 1 ? "properties '".concat(arr.join("', '"), "'") : "property '".concat(arr[0], "'");
  };

  var propertyHash = arrayToHash(properties);
  var orderHash = arrayToHash(order);
  var extraneous = order.filter(function (prop) {
    return prop !== '*' && !propertyHash[prop];
  });

  if (extraneous.length) {
    throw new Error("uiSchema order list contains extraneous ".concat(errorPropList(extraneous)));
  }

  var rest = properties.filter(function (prop) {
    return !orderHash[prop];
  });
  var restIndex = order.indexOf('*');

  if (restIndex === -1) {
    if (rest.length) {
      throw new Error("uiSchema order list does not contain ".concat(errorPropList(rest)));
    }

    return order;
  }

  if (restIndex !== order.lastIndexOf('*')) {
    throw new Error('uiSchema order list contains more than one wildcard item');
  }

  var complete = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(order);

  complete.splice.apply(complete, [restIndex, 1].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rest)));
  return complete;
}
/**
 * This function checks if the given schema matches a single
 * constant value.
 */

function isConstant(schema) {
  return Array.isArray(schema.enum) && schema.enum.length === 1 || schema.hasOwnProperty('const');
}
function toConstant(schema) {
  if (Array.isArray(schema.enum) && schema.enum.length === 1) {
    return schema.enum[0];
  } else if (schema.hasOwnProperty('const')) {
    return schema.const;
  } else {
    throw new Error('schema cannot be inferred as a constant');
  }
}
function isSelect(_schema) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var schema = retrieveSchema(_schema, definitions);
  var altSchemas = schema.oneOf || schema.anyOf;

  if (Array.isArray(schema.enum)) {
    return true;
  } else if (Array.isArray(altSchemas)) {
    return altSchemas.every(function (altSchemas) {
      return isConstant(altSchemas);
    });
  }

  return false;
}
function isMultiSelect(schema) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!schema.uniqueItems || !schema.items) {
    return false;
  }

  return isSelect(schema.items, definitions);
}
function isFilesArray(schema, uiSchema) {
  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (uiSchema['ui:widget'] === 'files') {
    return true;
  } else if (schema.items) {
    var itemsSchema = retrieveSchema(schema.items, definitions);
    return itemsSchema.type === 'string' && itemsSchema.format === 'data-url';
  }

  return false;
}
function isObjectFilesArray(schema, uiSchema) {
  var definitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (schema.items) {
    var itemsSchema = retrieveSchema(schema.items, definitions);
    return itemsSchema.type === 'object' && itemsSchema.format === 'file';
  }

  return false;
}
function isFixedItems(schema) {
  return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(function (item) {
    return isObject(item);
  });
}
function allowAdditionalItems(schema) {
  if (schema.additionalItems === true) {
    console.warn('additionalItems=true is currently not supported');
  }

  return isObject(schema.additionalItems);
}
function optionsList(schema) {
  if (schema.enum) {
    return schema.enum.map(function (value, i) {
      var label = schema.enumNames && schema.enumNames[i] || String(value);
      return {
        label: label,
        value: value
      };
    });
  } else {
    var altSchemas = schema.oneOf || schema.anyOf;
    return altSchemas.map(function (schema, i) {
      var value = toConstant(schema);
      var label = schema.title || String(value);
      return {
        label: label,
        value: value
      };
    });
  }
}

function findSchemaDefinition($ref) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Extract and use the referenced definition if we have it.
  var match = /^#\/definitions\/(.*)$/.exec($ref);

  if (match && match[1]) {
    var parts = match[1].split('/');
    var current = definitions;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var part = _step.value;
        part = part.replace(/~1/g, '/').replace(/~0/g, '~');

        if (current.hasOwnProperty(part)) {
          current = current[part];
        } else {
          // No matching definition found, that's an error (bogus schema?)
          throw new Error("Could not find a definition for ".concat($ref, "."));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return current;
  } // No matching definition found, that's an error (bogus schema?)


  throw new Error("Could not find a definition for ".concat($ref, "."));
}

function retrieveSchema(schema) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (schema.hasOwnProperty('$ref')) {
    // Retrieve the referenced schema definition.
    var $refSchema = findSchemaDefinition(schema.$ref, definitions); // Drop the $ref property of the source schema.

    var $ref = schema.$ref,
        localSchema = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(schema, ["$ref"]); // Update referenced schema definition with local schema properties.


    return retrieveSchema(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, $refSchema, localSchema), definitions, formData);
  } else if (schema.hasOwnProperty('dependencies')) {
    var resolvedSchema = resolveDependencies(schema, definitions, formData);
    return retrieveSchema(resolvedSchema, definitions, formData);
  } else {
    // No $ref or dependencies attribute found, returning the original schema.
    return schema;
  }
}

function resolveDependencies(schema, definitions, formData) {
  // Drop the dependencies from the source schema.
  var _schema$dependencies = schema.dependencies,
      dependencies = _schema$dependencies === void 0 ? {} : _schema$dependencies,
      resolvedSchema = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(schema, ["dependencies"]); // Process dependencies updating the local schema properties as appropriate.


  for (var dependencyKey in dependencies) {
    // Skip this dependency if its trigger property is not present.
    if (formData[dependencyKey] === undefined) {
      continue;
    }

    var dependencyValue = dependencies[dependencyKey];

    if (Array.isArray(dependencyValue)) {
      resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
    } else if (isObject(dependencyValue)) {
      resolvedSchema = withDependentSchema(resolvedSchema, definitions, formData, dependencyKey, dependencyValue);
    }
  }

  return resolvedSchema;
}

function withDependentProperties(schema, additionallyRequired) {
  if (!additionallyRequired) {
    return schema;
  }

  var required = Array.isArray(schema.required) ? Array.from(new Set([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(schema.required), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(additionallyRequired)))) : additionallyRequired;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, schema, {
    required: required
  });
}

function withDependentSchema(schema, definitions, formData, dependencyKey, dependencyValue) {
  var _retrieveSchema = retrieveSchema(dependencyValue, definitions, formData),
      oneOf = _retrieveSchema.oneOf,
      dependentSchema = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_retrieveSchema, ["oneOf"]);

  schema = mergeSchemas(schema, dependentSchema);
  return oneOf === undefined ? schema : withExactlyOneSubschema(schema, definitions, formData, dependencyKey, oneOf);
}

function withExactlyOneSubschema(schema, definitions, formData, dependencyKey, oneOf) {
  if (!Array.isArray(oneOf)) {
    throw new Error("invalid oneOf: it is some ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(oneOf), " instead of an array"));
  }

  var validSubschemas = oneOf.filter(function (subschema) {
    if (!subschema.properties) {
      return false;
    }

    var conditionPropertySchema = subschema.properties[dependencyKey];

    if (conditionPropertySchema) {
      var conditionSchema = {
        type: 'object',
        properties: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, dependencyKey, conditionPropertySchema)
      };

      var _validateFormData = Object(_validate__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(formData, conditionSchema),
          errors = _validateFormData.errors;

      return errors.length === 0;
    }
  });

  if (validSubschemas.length !== 1) {
    console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid");
    return schema;
  }

  var subschema = validSubschemas[0];

  var _subschema$properties = subschema.properties,
      conditionPropertySchema = _subschema$properties[dependencyKey],
      dependentSubschema = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(_subschema$properties, [dependencyKey].map(_toPropertyKey));

  var dependentSchema = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_4___default()({}, subschema, {
    properties: dependentSubschema
  });

  return mergeSchemas(schema, retrieveSchema(dependentSchema, definitions, formData));
}

function mergeSchemas(schema1, schema2) {
  return mergeObjects(schema1, schema2, true);
}

function isArguments(object) {
  return Object.prototype.toString.call(object) === '[object Arguments]';
}

function deepEquals(a, b) {
  var ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  // Partially extracted from node-deeper and adapted to exclude comparison
  // checks for functions.
  // https://github.com/othiym23/node-deeper
  if (a === b) {
    return true;
  } else if (typeof a === 'function' || typeof b === 'function') {
    // Assume all functions are equivalent
    // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
    return true;
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(a) !== 'object' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(b) !== 'object') {
    return false;
  } else if (a === null || b === null) {
    return false;
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  } else if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
  } else if (isArguments(a) || isArguments(b)) {
    if (!(isArguments(a) && isArguments(b))) {
      return false;
    }

    var slice = Array.prototype.slice;
    return deepEquals(slice.call(a), slice.call(b), ca, cb);
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }

    var ka = Object.keys(a);
    var kb = Object.keys(b); // don't bother with stack acrobatics if there's nothing there

    if (ka.length === 0 && kb.length === 0) {
      return true;
    }

    if (ka.length !== kb.length) {
      return false;
    }

    var cal = ca.length;

    while (cal--) {
      if (ca[cal] === a) {
        return cb[cal] === b;
      }
    }

    ca.push(a);
    cb.push(b);
    ka.sort();
    kb.sort();

    for (var j = ka.length - 1; j >= 0; j--) {
      if (ka[j] !== kb[j]) {
        return false;
      }
    }

    var key;

    for (var k = ka.length - 1; k >= 0; k--) {
      key = ka[k];

      if (!deepEquals(a[key], b[key], ca, cb)) {
        return false;
      }
    }

    ca.pop();
    cb.pop();
    return true;
  }
}
function shouldRender(comp, nextProps, nextState) {
  var props = comp.props,
      state = comp.state;
  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
}
function toIdSchema(schema, id, definitions) {
  var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var idPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'root';
  var idSchema = {
    $id: id || idPrefix
  };

  if ('$ref' in schema) {
    var _schema = retrieveSchema(schema, definitions, formData);

    return toIdSchema(_schema, id, definitions, formData, idPrefix);
  }

  if ('items' in schema && !schema.items.$ref) {
    return toIdSchema(schema.items, id, definitions, formData, idPrefix);
  }

  if (schema.type !== 'object') {
    return idSchema;
  }

  for (var name in schema.properties || {}) {
    var field = schema.properties[name];
    var fieldId = idSchema.$id + '_' + name;
    idSchema[name] = toIdSchema(field, fieldId, definitions, formData[name], idPrefix);
  }

  return idSchema;
}
function parseDateString(dateString) {
  var includeTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!dateString) {
    return {
      year: -1,
      month: -1,
      day: -1,
      hour: includeTime ? -1 : 0,
      minute: includeTime ? -1 : 0,
      second: includeTime ? -1 : 0
    };
  }

  var date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    throw new Error('Unable to parse date ' + dateString);
  }

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    // oh you, javascript.
    day: date.getUTCDate(),
    hour: includeTime ? date.getUTCHours() : 0,
    minute: includeTime ? date.getUTCMinutes() : 0,
    second: includeTime ? date.getUTCSeconds() : 0
  };
}
function toDateString(_ref2) {
  var year = _ref2.year,
      month = _ref2.month,
      day = _ref2.day,
      _ref2$hour = _ref2.hour,
      hour = _ref2$hour === void 0 ? 0 : _ref2$hour,
      _ref2$minute = _ref2.minute,
      minute = _ref2$minute === void 0 ? 0 : _ref2$minute,
      _ref2$second = _ref2.second,
      second = _ref2$second === void 0 ? 0 : _ref2$second;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
  var datetime = new Date(utcTime).toJSON();
  return time ? datetime : datetime.slice(0, 10);
}
function pad(num, size) {
  var s = String(num);

  while (s.length < size) {
    s = '0' + s;
  }

  return s;
}
function setState(instance, state, callback) {
  var safeRenderCompletion = instance.props.safeRenderCompletion;

  if (safeRenderCompletion) {
    instance.setState(state, callback);
  } else {
    instance.setState(state);
    setImmediate(callback);
  }
}
function dataURItoBlob(dataURI) {
  // Split metadata from data
  var splitted = dataURI.split(','); // Split params

  var params = splitted[0].split(';'); // Get mime-type from params

  var type = params[0].replace('data:', ''); // Filter the name property from params

  var properties = params.filter(function (param) {
    return param.split('=')[0] === 'name';
  }); // Look for the name and use unknown if no name property.

  var name;

  if (properties.length !== 1) {
    name = 'unknown';
  } else {
    // Because we filtered out the other property,
    // we only have the name case here.
    name = properties[0].split('=')[1];
  } // Built the Uint8Array Blob parameter from the base64 string.


  var binary = atob(splitted[1]);
  var array = [];

  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  } // Create the blob object


  var blob = new window.Blob([new Uint8Array(array)], {
    type: type
  });
  return {
    blob: blob,
    name: name
  };
}
function rangeSpec(schema) {
  var spec = {};

  if (schema.multipleOf) {
    spec.step = schema.multipleOf;
  }

  if (schema.minimum || schema.minimum === 0) {
    spec.min = schema.minimum;
  }

  if (schema.maximum || schema.maximum === 0) {
    spec.max = schema.maximum;
  }

  return spec;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(47);

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
/* 10 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(16);

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(40);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(44);

var iterableToArray = __webpack_require__(45);

var nonIterableSpread = __webpack_require__(46);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(9);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(5);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(11);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(12);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"PropTypes","root":"PropTypes"}
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/core-js/library/fn/array/includes.js
var includes = __webpack_require__(39);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// CONCATENATED MODULE: ./src/fields/UnsupportedField.js



function UnsupportedField(_ref) {
  var schema = _ref.schema,
      idSchema = _ref.idSchema,
      reason = _ref.reason;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
    className: "unsupported-field"
  }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", null, "Unsupported field schema", idSchema && idSchema.$id && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("span", null, " for", " field ", external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("code", null, idSchema.$id)), reason && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("em", null, ": ", reason), "."), schema && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("pre", null, JSON.stringify(schema, null, 2)));
}

if (false) {}

/* harmony default export */ var fields_UnsupportedField = (UnsupportedField);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(2);

// CONCATENATED MODULE: ./src/fields/ArrayField.js

















var ArrayField_ArrayField =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ArrayField, _Component);

  function ArrayField() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ArrayField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ArrayField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onAddClick", function (event) {
      event.preventDefault();
      var _this$props = _this.props,
          schema = _this$props.schema,
          formData = _this$props.formData,
          registry = _this$props.registry;
      var definitions = registry.definitions;
      var itemSchema = schema.items;

      if (Object(utils["j" /* isFixedItems */])(schema) && Object(utils["a" /* allowAdditionalItems */])(schema)) {
        itemSchema = schema.additionalItems;
      }

      _this.props.onChange([].concat(toConsumableArray_default()(formData), [Object(utils["d" /* getDefaultFormState */])(itemSchema, undefined, definitions)]));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onDropIndexClick", function (index) {
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onReorderClick", function (index, newIndex) {
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onChangeForIndex", function (index) {
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
        onChange(newFormData, errorSchema && _this.props.errorSchema && objectSpread_default()({}, _this.props.errorSchema, defineProperty_default()({}, index, errorSchema)));
      };
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onSelectChange", function (value) {
      _this.props.onChange(value);
    });

    return _this;
  }

  createClass_default()(ArrayField, [{
    key: "isItemRequired",
    value: function isItemRequired(itemSchema) {
      if (Array.isArray(itemSchema.type)) {
        // While we don't yet support composite/nullable jsonschema types, it's
        // future-proof to check for requirement against these.
        return !includes_default()(itemSchema.type, 'null');
      } // All non-null array item types are inherently required by design


      return itemSchema.type !== 'null';
    }
  }, {
    key: "canAddItem",
    value: function canAddItem(formItems) {
      var _this$props5 = this.props,
          schema = _this$props5.schema,
          uiSchema = _this$props5.uiSchema;

      var _getUiOptions = Object(utils["g" /* getUiOptions */])(uiSchema),
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
        return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(fields_UnsupportedField, {
          schema: schema,
          idSchema: idSchema,
          reason: "Missing items definition"
        });
      }

      if (Object(utils["m" /* isObjectFilesArray */])(schema, uiSchema, definitions)) {
        return this.renderObjectFilesArray(schema, uiSchema, definitions);
      }

      if (Object(utils["j" /* isFixedItems */])(schema)) {
        return this.renderFixedArray();
      }

      if (Object(utils["i" /* isFilesArray */])(schema, uiSchema, definitions)) {
        return this.renderFiles();
      }

      if (Object(utils["k" /* isMultiSelect */])(schema, definitions)) {
        return this.renderMultiSelect();
      }

      return this.renderNormalArray();
    }
  }, {
    key: "renderObjectFilesArray",
    value: function renderObjectFilesArray(schema) {
      var title = schema.title === undefined ? name : schema.title;
      var ArrayFileObjectTemplate = this.props.registry.templates.ArrayFileObjectTemplate;
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFileObjectTemplate, extends_default()({}, this.props, {
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
      var itemsSchema = Object(utils["r" /* retrieveSchema */])(schema.items, definitions);
      var arrayProps = {
        canAdd: this.canAddItem(formData),
        items: formData.map(function (item, index) {
          var itemSchema = Object(utils["r" /* retrieveSchema */])(schema.items, definitions, item);
          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
          var itemIdPrefix = idSchema.$id + '_' + index;
          var itemIdSchema = Object(utils["u" /* toIdSchema */])(itemSchema, itemIdPrefix, definitions, item, idPrefix);
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

      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFieldTemplate, arrayProps);
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
      var itemsSchema = Object(utils["r" /* retrieveSchema */])(schema.items, definitions, formData);
      var enumOptions = Object(utils["p" /* optionsList */])(itemsSchema);

      var _getUiOptions$enumOpt = objectSpread_default()({}, Object(utils["g" /* getUiOptions */])(uiSchema), {
        enumOptions: enumOptions
      }),
          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
          widget = _getUiOptions$enumOpt2 === void 0 ? 'select' : _getUiOptions$enumOpt2,
          options = objectWithoutProperties_default()(_getUiOptions$enumOpt, ["widget"]);

      var Widget = Object(utils["h" /* getWidget */])(schema, widget, widgets);
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Widget, {
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

      var _getUiOptions2 = Object(utils["g" /* getUiOptions */])(uiSchema),
          _getUiOptions2$widget = _getUiOptions2.widget,
          widget = _getUiOptions2$widget === void 0 ? 'files' : _getUiOptions2$widget,
          options = objectWithoutProperties_default()(_getUiOptions2, ["widget"]);

      var Widget = Object(utils["h" /* getWidget */])(schema, widget, widgets);
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Widget, {
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
        return Object(utils["r" /* retrieveSchema */])(item, definitions, formData[index]);
      });
      var additionalSchema = Object(utils["a" /* allowAdditionalItems */])(schema) ? Object(utils["r" /* retrieveSchema */])(schema.additionalItems, definitions, formData) : null;

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
          var itemSchema = additional ? Object(utils["r" /* retrieveSchema */])(schema.additionalItems, definitions, item) : itemSchemas[index];
          var itemIdPrefix = idSchema.$id + '_' + index;
          var itemIdSchema = Object(utils["u" /* toIdSchema */])(itemSchema, itemIdPrefix, definitions, item, idPrefix);
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

      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFieldTemplate, arrayProps);
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

      var _orderable$removable$ = objectSpread_default()({
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
        children: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SchemaField, {
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
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

defineProperty_default()(ArrayField_ArrayField, "defaultProps", {
  uiSchema: {},
  formData: [],
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
});

if (false) {}

/* harmony default export */ var fields_ArrayField = (ArrayField_ArrayField);
// CONCATENATED MODULE: ./src/fields/BooleanField.js






function BooleanField(props) {
  var schema = props.schema,
      name = props.name,
      uiSchema = props.uiSchema,
      idSchema = props.idSchema,
      formData = props.formData,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? Object(utils["e" /* getDefaultRegistry */])() : _props$registry,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      errors = props.errors;
  var title = schema.title;
  var widgets = registry.widgets,
      formContext = registry.formContext;

  var _getUiOptions = Object(utils["g" /* getUiOptions */])(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === void 0 ? "checkbox" : _getUiOptions$widget,
      options = objectWithoutProperties_default()(_getUiOptions, ["widget"]);

  var Widget = Object(utils["h" /* getWidget */])(schema, widget, widgets);
  var enumOptions = Object(utils["p" /* optionsList */])({
    enum: [true, false],
    enumNames: schema.enumNames || ["yes", "no"]
  });
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Widget, {
    options: objectSpread_default()({}, options, {
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

if (false) {}

BooleanField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};
/* harmony default export */ var fields_BooleanField = (BooleanField);
// CONCATENATED MODULE: ./src/fields/NumberField.js





function NumberField(props) {
  var StringField = props.registry.fields.StringField;
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(StringField, extends_default()({}, props, {
    onChange: function onChange(value) {
      return props.onChange(Object(utils["b" /* asNumber */])(value));
    }
  }));
}

if (false) {}

NumberField.defaultProps = {
  uiSchema: {}
};
/* harmony default export */ var fields_NumberField = (NumberField);
// CONCATENATED MODULE: ./src/fields/ObjectField.js













var ObjectField_ObjectField =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ObjectField, _Component);

  function ObjectField() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ObjectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ObjectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onPropertyChange", function (name) {
      return function (value, errorSchema) {
        var newFormData = objectSpread_default()({}, _this.props.formData, defineProperty_default()({}, name, value));

        _this.props.onChange(newFormData, errorSchema && _this.props.errorSchema && objectSpread_default()({}, _this.props.errorSchema, defineProperty_default()({}, name, errorSchema)));
      };
    });

    return _this;
  }

  createClass_default()(ObjectField, [{
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
          errors = _this$props.errors;
      var definitions = registry.definitions,
          fields = registry.fields,
          templates = registry.templates,
          formContext = registry.formContext,
          widgets = registry.widgets;
      var schema = Object(utils["r" /* retrieveSchema */])(this.props.schema, definitions, formData);
      var title = schema.title === undefined ? name : schema.title;
      var defaultWidget = schema.format || null;

      var _getUiOptions = Object(utils["g" /* getUiOptions */])(uiSchema),
          _getUiOptions$widget = _getUiOptions.widget,
          widget = _getUiOptions$widget === void 0 ? defaultWidget : _getUiOptions$widget,
          options = objectWithoutProperties_default()(_getUiOptions, ["widget"]);

      try {
        var Widget = widget ? Object(utils["h" /* getWidget */])(schema, widget, widgets) : null;

        if (Widget) {
          return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Widget, {
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
            required: required,
            disabled: disabled,
            readonly: readonly,
            formContext: formContext,
            autofocus: autofocus,
            registry: registry,
            errors: errors
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
        orderedProperties = Object(utils["q" /* orderProperties */])(properties, uiSchema["ui:order"]);
      } catch (err) {
        return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("p", {
          className: "config-error",
          style: {
            color: "red"
          }
        }, "Invalid ", name || "root", " object field configuration:", external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("em", null, err.message), "."), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("pre", null, JSON.stringify(schema)));
      }

      var templateProps = {
        title: uiSchema["ui:title"] || title,
        description: description,
        properties: orderedProperties.map(function (name) {
          return {
            content: external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SchemaField, {
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
        registry: registry
      };
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ObjectFieldTemplate, templateProps);
    }
  }]);

  return ObjectField;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

defineProperty_default()(ObjectField_ObjectField, "defaultProps", {
  uiSchema: {},
  formData: {},
  errorSchema: {},
  idSchema: {},
  required: false,
  disabled: false,
  readonly: false
});

if (false) {}

/* harmony default export */ var fields_ObjectField = (ObjectField_ObjectField);
// CONCATENATED MODULE: ./src/fields/SchemaField.js











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

  var componentName = COMPONENT_TYPES[Object(utils["f" /* getSchemaType */])(schema)];
  return componentName in fields ? fields[componentName] : function () {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(fields_UnsupportedField, {
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
      registry = props.registry;
  var definitions = registry.definitions,
      fields = registry.fields,
      formContext = registry.formContext,
      FieldTemplate = registry.templates.FieldTemplate;
  var idSchema = props.idSchema;
  var schema = Object(utils["r" /* retrieveSchema */])(props.schema, definitions, formData);
  idSchema = Object(utils["o" /* mergeObjects */])(Object(utils["u" /* toIdSchema */])(schema, null, definitions, formData, idPrefix), idSchema);
  var Field = getFieldComponent(schema, uiSchema, idSchema, fields);
  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  var uiOptions = Object(utils["g" /* getUiOptions */])(uiSchema);
  var _uiOptions$label = uiOptions.label,
      displayLabel = _uiOptions$label === void 0 ? true : _uiOptions$label;

  if (schema.type === "array") {
    displayLabel = Object(utils["k" /* isMultiSelect */])(schema, definitions) || Object(utils["i" /* isFilesArray */])(schema, uiSchema, definitions);
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
      fieldErrorSchema = objectWithoutProperties_default()(errorSchema, ["__errors"]); // See #439: uiSchema: Don't pass consumed class names to child components


  var fieldProps = objectSpread_default()({}, props, {
    idSchema: idSchema,
    schema: schema,
    uiSchema: objectSpread_default()({}, uiSchema, {
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
    registry: registry
  };
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FieldTemplate, templateProps, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Field, fieldProps));
}

var SchemaField_SchemaField =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(SchemaField, _React$Component);

  function SchemaField() {
    classCallCheck_default()(this, SchemaField);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(SchemaField).apply(this, arguments));
  }

  createClass_default()(SchemaField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // if schemas are equal idSchemas will be equal as well,
      // so it is not necessary to compare
      return !Object(utils["c" /* deepEquals */])(objectSpread_default()({}, this.props, {
        idSchema: undefined
      }), objectSpread_default()({}, nextProps, {
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
}(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component);

SchemaField_SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};

if (false) {}

/* harmony default export */ var fields_SchemaField = (SchemaField_SchemaField);
// CONCATENATED MODULE: ./src/fields/StringField.js






function StringField_StringField(props) {
  var schema = props.schema,
      name = props.name,
      uiSchema = props.uiSchema,
      idSchema = props.idSchema,
      formData = props.formData,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? Object(utils["e" /* getDefaultRegistry */])() : _props$registry,
      errors = props.errors;
  var title = schema.title,
      format = schema.format;
  var widgets = registry.widgets,
      formContext = registry.formContext;
  var enumOptions = Object(utils["n" /* isSelect */])(schema) && Object(utils["p" /* optionsList */])(schema);
  var defaultWidget = format || (enumOptions ? "select" : "text");

  var _getUiOptions = Object(utils["g" /* getUiOptions */])(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === void 0 ? defaultWidget : _getUiOptions$widget,
      _getUiOptions$placeho = _getUiOptions.placeholder,
      placeholder = _getUiOptions$placeho === void 0 ? "" : _getUiOptions$placeho,
      options = objectWithoutProperties_default()(_getUiOptions, ["widget", "placeholder"]);

  var Widget = Object(utils["h" /* getWidget */])(schema, widget, widgets);
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Widget, {
    options: objectSpread_default()({}, options, {
      enumOptions: enumOptions
    }),
    schema: schema,
    id: idSchema && idSchema.$id,
    label: title === undefined ? name : title,
    value: formData,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    required: required,
    disabled: disabled,
    readonly: readonly,
    formContext: formContext,
    autofocus: autofocus,
    registry: registry,
    placeholder: placeholder,
    errors: errors
  });
}

if (false) {}

StringField_StringField.defaultProps = {
  uiSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false
};
/* harmony default export */ var fields_StringField = (StringField_StringField);
// CONCATENATED MODULE: ./src/fields/index.js







/* harmony default export */ var src_fields = __webpack_exports__["default"] = ({
  ArrayField: fields_ArrayField,
  BooleanField: fields_BooleanField,
  NumberField: fields_NumberField,
  ObjectField: fields_ObjectField,
  SchemaField: fields_SchemaField,
  StringField: fields_StringField,
  UnsupportedField: fields_UnsupportedField
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toErrorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateFormData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_topath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var lodash_topath__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_topath__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);




var ajv = new ajv__WEBPACK_IMPORTED_MODULE_3___default.a({
  errorDataPath: "property",
  allErrors: true,
  multipleOfPrecision: 8
}); // add custom formats

ajv.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
ajv.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
ajv.addFormat("file", function (prop1) {
  return true;
});


function toErrorSchema(errors) {
  // Transforms a ajv validation errors list:
  // [
  //   {property: ".level1.level2[2].level3", message: "err a"},
  //   {property: ".level1.level2[2].level3", message: "err b"},
  //   {property: ".level1.level2[4].level3", message: "err b"},
  // ]
  // Into an error tree:
  // {
  //   level1: {
  //     level2: {
  //       2: {level3: {errors: ["err a", "err b"]}},
  //       4: {level3: {errors: ["err b"]}},
  //     }
  //   }
  // };
  if (!errors.length) {
    return {};
  }

  return errors.reduce(function (errorSchema, error) {
    var property = error.property,
        message = error.message;
    var path = lodash_topath__WEBPACK_IMPORTED_MODULE_2___default()(property);
    var parent = errorSchema; // If the property is at the root (.level1) then toPath creates
    // an empty array element at the first index. Remove it.

    if (path.length > 0 && path[0] === "") {
      path.splice(0, 1);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = path.slice(0)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var segment = _step.value;

        if (!(segment in parent)) {
          parent[segment] = {};
        }

        parent = parent[segment];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (Array.isArray(parent.__errors)) {
      // We store the list of errors for this node in a property named __errors
      // to avoid name collision with a possible sub schema field named
      // "errors" (see `validate.createErrorHandler`).
      parent.__errors = parent.__errors.concat(message);
    } else {
      parent.__errors = [message];
    }

    return errorSchema;
  }, {});
}

function toErrorList(errorSchema) {
  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";
  // XXX: We should transform fieldName as a full field path string.
  var errorList = [];

  if ("__errors" in errorSchema) {
    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
      return {
        stack: "".concat(fieldName, ": ").concat(stack)
      };
    }));
  }

  return Object.keys(errorSchema).reduce(function (acc, key) {
    if (key !== "__errors") {
      acc = acc.concat(toErrorList(errorSchema[key], key));
    }

    return acc;
  }, errorList);
}

function createErrorHandler(formData) {
  var handler = {
    // We store the list of errors for this node in a property named __errors
    // to avoid name collision with a possible sub schema field named
    // "errors" (see `utils.toErrorSchema`).
    __errors: [],
    addError: function addError(message) {
      this.__errors.push(message);
    }
  };

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* isObject */ "l"])(formData)) {
    return Object.keys(formData).reduce(function (acc, key) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, createErrorHandler(formData[key])));
    }, handler);
  }

  if (Array.isArray(formData)) {
    return formData.reduce(function (acc, value, key) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, createErrorHandler(value)));
    }, handler);
  }

  return handler;
}

function unwrapErrorHandler(errorHandler) {
  return Object.keys(errorHandler).reduce(function (acc, key) {
    if (key === "addError") {
      return acc;
    } else if (key === "__errors") {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, errorHandler[key]));
    }

    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, acc, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, unwrapErrorHandler(errorHandler[key])));
  }, {});
}
/**
 * Transforming the error output from ajv to format used by jsonschema.
 * At some point, components should be updated to support ajv.
 */


function transformAjvErrors() {
  var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (errors === null) {
    return [];
  }

  return errors.map(function (e) {
    var dataPath = e.dataPath,
        keyword = e.keyword,
        message = e.message,
        params = e.params;
    var property = "".concat(dataPath); // put data in expected format

    return {
      name: keyword,
      property: property,
      message: message,
      params: params,
      // specific to ajv
      stack: "".concat(property, " ").concat(message).trim()
    };
  });
}
/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form data and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */


function validateFormData(formData, schema, customValidate, transformErrors) {
  try {
    ajv.validate(schema, formData);
  } catch (e) {// swallow errors thrown in ajv due to invalid schemas, these
    // still get displayed
  }

  var errors = transformAjvErrors(ajv.errors);

  if (typeof transformErrors === "function") {
    errors = transformErrors(errors);
  }

  var errorSchema = toErrorSchema(errors);

  if (typeof customValidate !== "function") {
    return {
      errors: errors,
      errorSchema: errorSchema
    };
  }

  var errorHandler = customValidate(formData, createErrorHandler(formData));
  var userErrorSchema = unwrapErrorHandler(errorHandler);
  var newErrorSchema = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* mergeObjects */ "o"])(errorSchema, userErrorSchema, true); // XXX: The errors list produced is not fully compliant with the format
  // exposed by the jsonschema lib, which contains full field paths and other
  // properties.

  var newErrors = toErrorList(newErrorSchema);
  return {
    errors: newErrors,
    errorSchema: newErrorSchema
  };
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(11);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(12);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"PropTypes","root":"PropTypes"}
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_ = __webpack_require__(1);
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_);

// EXTERNAL MODULE: external {"commonjs":"react-jsonschema-form/lib/utils","commonjs2":"react-jsonschema-form/lib/utils","amd":"react-jsonschema-form/lib/util","root":"react-jsonschema-form/lib/util"}
var util_ = __webpack_require__(8);

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
var objectWithoutProperties = __webpack_require__(9);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"commonjs":"@material-ui/core","commonjs2":"@material-ui/core","amd":"@material-ui/core","root":"@material-ui/core"}
var core_ = __webpack_require__(4);

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
// EXTERNAL MODULE: external {"commonjs":"selfkey-ui","commonjs2":"selfkey-ui","amd":"selfkey-ui","root":"selfkey-ui"}
var external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_ = __webpack_require__(17);

// CONCATENATED MODULE: ./src/widgets/DateWidget.jsx





function DateWidget(props) {
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

  var _onChange = function _onChange(_ref) {
    var data = _ref.target;
    return props.onChange(data.value === '' ? options.emptyValue : data.value);
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_["KeyPicker"], extends_default()({
    readOnly: readonly,
    disabled: disabled,
    error: isError(errors),
    autoFocus: autofocus,
    value: value == null ? '' : value
  }, inputProps, {
    onChange: _onChange,
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true
  }));
}

/* harmony default export */ var widgets_DateWidget = (DateWidget);
// CONCATENATED MODULE: ./src/widgets/DateTimeWidget.jsx





function utcToLocal(jsonDate) {
  if (!jsonDate) {
    return '';
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
    return props.onChange(value === '' ? localToUtc(options.emptyValue) : localToUTC(value));
  };

  function isError(Obj) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key)) return true;
    }

    return false;
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_["KeyPicker"], extends_default()({
    includeTime: true,
    readOnly: readonly,
    disabled: disabled,
    error: isError(errors),
    autoFocus: autofocus,
    value: utcToLocal(value)
  }, inputProps, {
    onChange: _onChange,
    onFocus: onFocus && function (event) {
      return onFocus(inputProps.id, event.target.value);
    },
    disableUnderline: true
  }));
}

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
var icons_ = __webpack_require__(18);

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
var lab_ = __webpack_require__(19);

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
var objectSpread = __webpack_require__(5);
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

    _this.state = objectSpread_default()({}, state, {
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
      var file = this.state.formData && this.state.formData.name ? {
        url: this.state.url,
        name: this.state.formData.name
      } : null;
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FieldTemplate, templateProps, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_["FileUploadWidget"], {
        id: id,
        name: name,
        required: required,
        disabled: readonly || disabled,
        file: file,
        onClearForm: this.clearState(),
        onChange: this.onChange(),
        onBlur: onBlur && function (event) {
          return onBlur(_this4.state);
        },
        onFocus: onFocus && function (event) {
          return onFocus(_this4.state);
        },
        accept: accept
      }));
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
/* harmony default export */ var widgets = __webpack_exports__["default"] = ({
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

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(30)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

module.exports = _readOnlyError;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(29);
var core = __webpack_require__(24);
var ctx = __webpack_require__(49);
var hide = __webpack_require__(51);
var has = __webpack_require__(58);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

module.exports = toPath;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(24).Array.fill;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
module.exports = __webpack_require__(24).Array.includes;


/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(42);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23), __webpack_require__(43)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 44 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(28);

$export($export.P, 'Array', { fill: __webpack_require__(59) });

__webpack_require__(35)('fill');


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(52);
var createDesc = __webpack_require__(57);
module.exports = __webpack_require__(26) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(53);
var IE8_DOM_DEFINE = __webpack_require__(54);
var toPrimitive = __webpack_require__(56);
var dP = Object.defineProperty;

exports.f = __webpack_require__(26) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(26) && !__webpack_require__(30)(function () {
  return Object.defineProperty(__webpack_require__(55)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(25);
var document = __webpack_require__(29).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(25);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(60);
var toAbsoluteIndex = __webpack_require__(32);
var toLength = __webpack_require__(34);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(28);
var $includes = __webpack_require__(62)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(35)('includes');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(63);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(32);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(64);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(65);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(5);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(11);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(12);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(13);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(0);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"PropTypes","root":"PropTypes"}
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_ = __webpack_require__(1);
var external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_prop_types_commonjs2_prop_types_amd_PropTypes_root_PropTypes_);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/validate.js
var src_validate = __webpack_require__(21);

// CONCATENATED MODULE: ./src/Form.js













var Form_Form =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Form, _Component);

  function Form(props) {
    var _this;

    classCallCheck_default()(this, Form);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Form).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onChange", function (formData, newErrorSchema) {
      var mustValidate = !_this.props.noValidate && _this.props.liveValidate;
      var state = {
        formData: formData
      };

      if (mustValidate) {
        var _this$validate = _this.validate(formData),
            errors = _this$validate.errors,
            errorSchema = _this$validate.errorSchema;

        state = objectSpread_default()({}, state, {
          errors: errors,
          errorSchema: errorSchema
        });
      } else if (!_this.props.noValidate && newErrorSchema) {
        state = objectSpread_default()({}, state, {
          errorSchema: newErrorSchema,
          errors: Object(src_validate["b" /* toErrorList */])(newErrorSchema)
        });
      }

      Object(utils["s" /* setState */])(assertThisInitialized_default()(assertThisInitialized_default()(_this)), state, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state);
        }
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onBlur", function () {
      if (_this.props.onBlur) {
        var _this$props;

        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onFocus", function () {
      if (_this.props.onFocus) {
        var _this$props2;

        (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "onSubmit", function (event) {
      event.preventDefault();

      if (!_this.props.noValidate) {
        var _this$validate2 = _this.validate(_this.state.formData),
            errors = _this$validate2.errors,
            errorSchema = _this$validate2.errorSchema;

        if (Object.keys(errors).length > 0) {
          Object(utils["s" /* setState */])(assertThisInitialized_default()(assertThisInitialized_default()(_this)), {
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

      Object(utils["s" /* setState */])(assertThisInitialized_default()(assertThisInitialized_default()(_this)), {
        errors: [],
        errorSchema: {}
      }, function () {
        if (_this.props.onSubmit) {
          _this.props.onSubmit(objectSpread_default()({}, _this.state, {
            status: "submitted"
          }));
        }
      });
    });

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  createClass_default()(Form, [{
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
      var formData = Object(utils["d" /* getDefaultFormState */])(schema, props.formData, definitions);
      var retrievedSchema = Object(utils["r" /* retrieveSchema */])(schema, definitions, formData);

      var _ref = mustValidate ? this.validate(formData, schema) : {
        errors: state.errors || [],
        errorSchema: state.errorSchema || {}
      },
          errors = _ref.errors,
          errorSchema = _ref.errorSchema;

      var idSchema = Object(utils["u" /* toIdSchema */])(retrievedSchema, uiSchema["ui:rootFieldId"], definitions, formData, props.idPrefix);
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
      return Object(utils["t" /* shouldRender */])(this, nextProps, nextState);
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

      var resolvedSchema = Object(utils["r" /* retrieveSchema */])(schema, definitions, formData);
      return Object(src_validate["a" /* default */])(formData, resolvedSchema, validate, transformErrors);
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
        return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ErrorListTemplate, {
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
          noHtml5Validate = _this$props5.noHtml5Validate;
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
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("form", {
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
      }, this.renderErrors(ErrorListTemplate), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SchemaField, {
        schema: schema,
        uiSchema: uiSchema,
        errorSchema: errorSchema,
        idSchema: idSchema,
        idPrefix: idPrefix,
        formData: formData,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        registry: registry,
        safeRenderCompletion: safeRenderCompletion
      }), children ? children : external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(SubmitTemplate, null));
    }
  }]);

  return Form;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

defineProperty_default()(Form_Form, "defaultProps", {
  uiSchema: {},
  noValidate: false,
  liveValidate: false,
  safeRenderCompletion: false,
  noHtml5Validate: false
});



if (false) {}
// EXTERNAL MODULE: ./src/fields/index.js + 7 modules
var src_fields = __webpack_require__(20);

// EXTERNAL MODULE: ./src/widgets/index.jsx + 20 modules
var widgets = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(9);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"commonjs":"@material-ui/lab","commonjs2":"@material-ui/lab","amd":"@material-ui/lab","root":"@material-ui/lab"}
var lab_ = __webpack_require__(19);

// EXTERNAL MODULE: external {"commonjs":"@material-ui/icons","commonjs2":"@material-ui/icons","amd":"@material-ui/icons","root":"@material-ui/icons"}
var icons_ = __webpack_require__(18);

// EXTERNAL MODULE: external {"commonjs":"@material-ui/core","commonjs2":"@material-ui/core","amd":"@material-ui/core","root":"@material-ui/core"}
var core_ = __webpack_require__(4);

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/readOnlyError.js
var readOnlyError = __webpack_require__(27);
var readOnlyError_default = /*#__PURE__*/__webpack_require__.n(readOnlyError);

// EXTERNAL MODULE: external {"commonjs":"selfkey-ui","commonjs2":"selfkey-ui","amd":"selfkey-ui","root":"selfkey-ui"}
var external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_ = __webpack_require__(17);

// CONCATENATED MODULE: ./src/templates/ArrayFileObjectTemplate.jsx













function ArrayFileObjectTemplate_ArrayFieldTitle(_ref) {
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

function ArrayFileObjectTemplate_ArrayFieldDescription(_ref2) {
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

function Help(props) {
  var help = props.help;

  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null);
  }

  if (typeof help === 'string') {
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Typography, {
      variant: "subtitle1",
      color: "secondary",
      className: "help-block",
      gutterBottom: true
    }, help);
  }

  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Typography, {
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
    return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Typography, {
      variant: "subtitle2",
      color: "error",
      key: index,
      gutterBottom: true
    }, error);
  }));
}

var ArrayFileObjectTemplate_ArrayFileObjectTemplate =
/*#__PURE__*/
function (_Component) {
  inherits_default()(ArrayFileObjectTemplate, _Component);

  function ArrayFileObjectTemplate(props) {
    var _this;

    classCallCheck_default()(this, ArrayFileObjectTemplate);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ArrayFileObjectTemplate).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleFileChange", function (files) {
      var onChange = _this.props.onChange;

      if (!onChange) {
        onChange = (readOnlyError_default()("onChange"), function () {});
      }

      Promise.all(files.map(function (f) {
        if (!f) {
          return null;
        }

        var url = URL.createObjectURL(f);
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
        filesData = [].concat(toConsumableArray_default()(_this.state.files || []), toConsumableArray_default()(filesData));
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

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "handleFileDelete", function (file) {
      var onChange = _this.props.onChange;

      if (!onChange) {
        onChange = (readOnlyError_default()("onChange"), function () {});
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

    var state = {};
    state.files = (_formData || []).map(function (data) {
      var f = {};

      if (data.content) {
        var _dataURItoBlob = dataURItoBlob(data.content),
            blob = _dataURItoBlob.blob,
            _dataURItoBlob$name = _dataURItoBlob.name,
            name = _dataURItoBlob$name === void 0 ? data.name : _dataURItoBlob$name;

        f.file = new File([blob], name, {
          type: data.mimeType
        });
      }

      f.mimeType = data.mimeType;
      f.name = data.name;

      if (f.file) {
        f.url = URL.createObjectURL(f.file);
      }

      return f;
    });
    _this.state = objectSpread_default()({}, state, {
      formData: _formData
    });
    return _this;
  }

  createClass_default()(ArrayFileObjectTemplate, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var accept = (((props.schema.properties || {}).mimeType || {}).enum || []).join(',');
      var _props$registry$templ = props.registry.templates,
          TitleTemplate = _props$registry$templ.TitleTemplate,
          DescriptionTemplate = _props$registry$templ.DescriptionTemplate;
      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFileObjectTemplate_ArrayFieldTitle, {
        key: "array-field-title-".concat(props.idSchema.$id),
        TitleTemplate: TitleTemplate,
        idSchema: props.idSchema,
        title: props.uiSchema['ui:title'] || props.title,
        required: props.required
      }), (props.uiSchema['ui:description'] || props.schema.description) && external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ArrayFileObjectTemplate_ArrayFieldDescription, {
        key: "array-field-description-".concat(props.idSchema.$id),
        DescriptionTemplate: DescriptionTemplate,
        idSchema: props.idSchema,
        description: props.uiSchema['ui:description'] || props.schema.description
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_commonjs_selfkey_ui_commonjs2_selfkey_ui_amd_selfkey_ui_root_selfkey_ui_["ArrayFileUploadWidget"], {
        files: this.state.files,
        onClearForm: this.handleFileDelete,
        accept: accept,
        isError: props.errors && props.errors.length,
        onChange: this.handleFileChange
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(ErrorList, {
        errors: this.props.errors
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(Help, {
        help: this.props.help
      }));
    }
  }]);

  return ArrayFileObjectTemplate;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);


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


function ErrorListTemplate_ErrorListTemplate(props) {
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
function FieldTemplate(props) {
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
  }) : null, children, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FieldTemplate_ErrorList, {
    errors: errors
  }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(FieldTemplate_Help, {
    help: help
  }));
}
FieldTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true
};
FieldTemplate.propTypes = {
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

function FieldTemplate_Help(props) {
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

function FieldTemplate_ErrorList(props) {
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



function SubmitTemplate_SubmitTemplate() {
  return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", null, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(core_["Button"], {
    type: "submit",
    className: "btn btn-info"
  }, "Submit"));
}

/* harmony default export */ var templates_SubmitTemplate = (SubmitTemplate_SubmitTemplate);
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








/* harmony default export */ var templates = ({
  ArrayFieldTemplate: ArrayFieldTemplate,
  ArrayFileObjectTemplate: ArrayFileObjectTemplate_ArrayFileObjectTemplate,
  DescriptionTemplate: templates_DescriptionTemplate,
  ErrorListTemplate: ErrorListTemplate_ErrorListTemplate,
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  SubmitTemplate: templates_SubmitTemplate,
  TitleTemplate: templates_TitleTemplate
});
// CONCATENATED MODULE: ./src/withTheme.js












var withTheme_initWithTheme = function initWithTheme(WrappedForm, fields) {
  return function (name, theme) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      inherits_default()(WithTheme, _React$Component);

      function WithTheme() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck_default()(this, WithTheme);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(WithTheme)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", mergeComponents(_this.props));

        return _this;
      }

      createClass_default()(WithTheme, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.fields !== nextProps.fields || this.props.widgets !== nextProps.widgets || this.props.templates !== nextProps.templates) {
            this.setState(mergeComponents(nextProps));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(WrappedForm, extends_default()({}, this.props, {
            fields: this.state.fields,
            widgets: this.state.widgets,
            templates: this.state.templates
          }));
        }
      }]);

      return WithTheme;
    }(external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.Component);

    WithTheme.displayName = "WithTheme(".concat(name, ")");
    return WithTheme;

    function mergeComponents(props) {
      return {
        fields: objectSpread_default()({}, fields, props.fields),
        widgets: objectSpread_default()({}, theme.widgets, props.widgets),
        templates: objectSpread_default()({}, theme.templates, props.templates)
      };
    }
  };
};
/* harmony default export */ var withTheme = (withTheme_initWithTheme(Form_Form, src_fields["default"]));
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "Form", function() { return Form_Form; });
/* concated harmony reexport fields */__webpack_require__.d(__webpack_exports__, "fields", function() { return src_fields["default"]; });
/* concated harmony reexport widgets */__webpack_require__.d(__webpack_exports__, "widgets", function() { return widgets["default"]; });
/* concated harmony reexport templates */__webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* concated harmony reexport withTheme */__webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });






/* harmony default export */ var src = __webpack_exports__["default"] = (withTheme("Selfkey", {
  widgets: widgets["default"],
  templates: templates
}));

/***/ })
/******/ ]);
});