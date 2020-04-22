"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form.default;
  }
});
Object.defineProperty(exports, "fields", {
  enumerable: true,
  get: function get() {
    return _fields.default;
  }
});
Object.defineProperty(exports, "widgets", {
  enumerable: true,
  get: function get() {
    return _widgets.default;
  }
});
Object.defineProperty(exports, "templates", {
  enumerable: true,
  get: function get() {
    return _templates.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
});
exports.default = void 0;

var _Form = _interopRequireDefault(require("./Form"));

var _fields = _interopRequireDefault(require("./fields"));

var _widgets = _interopRequireDefault(require("./widgets"));

var _templates = _interopRequireDefault(require("./templates"));

var _withTheme = _interopRequireDefault(require("./withTheme"));

var _default = (0, _withTheme.default)("Selfkey", {
  widgets: _widgets.default,
  templates: _templates.default
});

exports.default = _default;