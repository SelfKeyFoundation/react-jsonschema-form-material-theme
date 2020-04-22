"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function SubmitTemplate() {
  return _react.default.createElement("div", null, _react.default.createElement(_core.Button, {
    type: "submit",
    className: "btn btn-info"
  }, "Submit"));
}

var _default = SubmitTemplate;
exports.default = _default;