"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FieldTemplate;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

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

  return _react.default.createElement(_core.FormGroup, null, displayLabel && _react.default.createElement(Label, {
    label: label,
    required: required,
    id: id
  }), children, _react.default.createElement(ErrorList, {
    errors: errors
  }), _react.default.createElement(Help, {
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
  id: _propTypes.default.string,
  classNames: _propTypes.default.string,
  label: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  errors: _propTypes.default.arrayOf(_propTypes.default.string),
  help: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  hidden: _propTypes.default.bool,
  required: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  displayLabel: _propTypes.default.bool,
  fields: _propTypes.default.object,
  formContext: _propTypes.default.object
};

function Label(props) {
  var label = props.label,
      required = props.required,
      id = props.id;

  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react.default.createElement("div", null);
  }

  return _react.default.createElement(_core.Typography, {
    htmlFor: id,
    variant: "overline",
    style: {
      marginBottom: '10px'
    }
  }, label, required && _react.default.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, ' ', REQUIRED_FIELD_SYMBOL));
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
      gutterBottom: true,
      style: {
        marginTop: '10px',
        marginLeft: '5px'
      }
    }, error);
  }));
}