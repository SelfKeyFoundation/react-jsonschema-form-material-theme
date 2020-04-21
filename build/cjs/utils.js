"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultRegistry = getDefaultRegistry;
exports.getSchemaType = getSchemaType;
exports.getWidget = getWidget;
exports.getDefaultFormState = getDefaultFormState;
exports.getUiOptions = getUiOptions;
exports.isObject = isObject;
exports.mergeObjects = mergeObjects;
exports.asNumber = asNumber;
exports.orderProperties = orderProperties;
exports.isConstant = isConstant;
exports.toConstant = toConstant;
exports.isSelect = isSelect;
exports.isMultiSelect = isMultiSelect;
exports.isFilesArray = isFilesArray;
exports.isObjectFilesArray = isObjectFilesArray;
exports.isFixedItems = isFixedItems;
exports.allowAdditionalItems = allowAdditionalItems;
exports.optionsList = optionsList;
exports.retrieveSchema = retrieveSchema;
exports.deepEquals = deepEquals;
exports.shouldRender = shouldRender;
exports.toIdSchema = toIdSchema;
exports.parseDateString = parseDateString;
exports.toDateString = toDateString;
exports.pad = pad;
exports.setState = setState;
exports.dataURItoBlob = dataURItoBlob;
exports.rangeSpec = rangeSpec;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _validate = _interopRequireDefault(require("./validate"));

var _fill = _interopRequireDefault(require("core-js/library/fn/array/fill"));

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getDefaultRegistry() {
  return {
    fields: require('./fields').default,
    widgets: require('./widgets').default,
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
            props = (0, _objectWithoutProperties2.default)(_ref, ["options"]);
        return _react.default.createElement(Widget, (0, _extends2.default)({
          options: _objectSpread({}, defaultOptions, {}, options)
        }, props));
      };
    }

    return Widget.MergedWidget;
  }

  if (typeof widget === 'function') {
    return mergeOptions(widget);
  }

  if (typeof widget !== 'string') {
    throw new Error("Unsupported widget definition: ".concat((0, _typeof2.default)(widget)));
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
        if (!isMultiSelect(schema, definitions) && !schema.noFill) {
          var defaultsLength = defaults ? defaults.length : 0;

          if (schema.minItems > defaultsLength) {
            var defaultEntries = defaults || []; // populate the array with the defaults

            /*eslint-disable-next-line*/

            var fillerEntries = (0, _fill.default)(new Array(schema.minItems - defaultsLength), computeDefaults(schema.items, schema.items.defaults, definitions)); // then fill up the rest with either the item default or empty, up to minItems

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
      return _objectSpread({}, options, {}, value.options || {}, {
        widget: value.component
      });
    }

    if (key === 'ui:options' && isObject(value)) {
      return _objectSpread({}, options, {}, value);
    }

    return _objectSpread({}, options, (0, _defineProperty2.default)({}, key.substring(3), value));
  }, {});
}

function isObject(thing) {
  return (0, _typeof2.default)(thing) === 'object' && thing !== null && !Array.isArray(thing);
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

  var complete = (0, _toConsumableArray2.default)(order);
  complete.splice.apply(complete, [restIndex, 1].concat((0, _toConsumableArray2.default)(rest)));
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

    var _iterator = _createForOfIteratorHelper(parts),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
      _iterator.e(err);
    } finally {
      _iterator.f();
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
        localSchema = (0, _objectWithoutProperties2.default)(schema, ["$ref"]); // Update referenced schema definition with local schema properties.

    return retrieveSchema(_objectSpread({}, $refSchema, {}, localSchema), definitions, formData);
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
      resolvedSchema = (0, _objectWithoutProperties2.default)(schema, ["dependencies"]); // Process dependencies updating the local schema properties as appropriate.

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

  var required = Array.isArray(schema.required) ? Array.from(new Set([].concat((0, _toConsumableArray2.default)(schema.required), (0, _toConsumableArray2.default)(additionallyRequired)))) : additionallyRequired;
  return _objectSpread({}, schema, {
    required: required
  });
}

function withDependentSchema(schema, definitions, formData, dependencyKey, dependencyValue) {
  var _retrieveSchema = retrieveSchema(dependencyValue, definitions, formData),
      oneOf = _retrieveSchema.oneOf,
      dependentSchema = (0, _objectWithoutProperties2.default)(_retrieveSchema, ["oneOf"]);

  schema = mergeSchemas(schema, dependentSchema);
  return oneOf === undefined ? schema : withExactlyOneSubschema(schema, definitions, formData, dependencyKey, oneOf);
}

function withExactlyOneSubschema(schema, definitions, formData, dependencyKey, oneOf) {
  if (!Array.isArray(oneOf)) {
    throw new Error("invalid oneOf: it is some ".concat((0, _typeof2.default)(oneOf), " instead of an array"));
  }

  var validSubschemas = oneOf.filter(function (subschema) {
    if (!subschema.properties) {
      return false;
    }

    var conditionPropertySchema = subschema.properties[dependencyKey];

    if (conditionPropertySchema) {
      var conditionSchema = {
        type: 'object',
        properties: (0, _defineProperty2.default)({}, dependencyKey, conditionPropertySchema)
      };

      var _validateFormData = (0, _validate.default)(formData, conditionSchema),
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
      dependentSubschema = (0, _objectWithoutProperties2.default)(_subschema$properties, [dependencyKey].map(_toPropertyKey));

  var dependentSchema = _objectSpread({}, subschema, {
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
  } else if ((0, _typeof2.default)(a) !== 'object' || (0, _typeof2.default)(b) !== 'object') {
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