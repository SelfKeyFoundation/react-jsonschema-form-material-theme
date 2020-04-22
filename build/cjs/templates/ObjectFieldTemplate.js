"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ObjectFieldTemplate;

var _react = _interopRequireDefault(require("react"));

function ObjectFieldTemplate(props) {
  var _props$registry$templ = props.registry.templates,
      TitleTemplate = _props$registry$templ.TitleTemplate,
      DescriptionTemplate = _props$registry$templ.DescriptionTemplate;
  var title = props.uiSchema['ui:title'] || props.uiSchema['ui:label'] || props.title;

  if (props.uiSchema['ui:label'] === false) {
    title = null;
  }

  var description = props.placeholder || props.uiSchema['ui:description'] || props.schema.description;

  if (props.uiSchema['ui:description'] === false) {
    title = null;
  }

  return _react.default.createElement("fieldset", null, title && _react.default.createElement(TitleTemplate, {
    id: "".concat(props.idSchema.$id, "__title"),
    title: title,
    required: props.required,
    formContext: props.formContext
  }), description && _react.default.createElement(DescriptionTemplate, {
    id: "".concat(props.idSchema.$id, "__description"),
    description: description,
    formContext: props.formContext
  }), props.properties.map(function (prop) {
    return prop.content;
  }));
}