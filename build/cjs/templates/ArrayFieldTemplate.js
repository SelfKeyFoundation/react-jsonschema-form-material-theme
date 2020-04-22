"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ArrayFieldTemplate;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _lab = require("@material-ui/lab");

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core");

function ArrayFieldTemplate(props) {
  var _props$registry$templ = props.registry.templates,
      TitleTemplate = _props$registry$templ.TitleTemplate,
      DescriptionTemplate = _props$registry$templ.DescriptionTemplate;
  return _react.default.createElement("fieldset", {
    className: props.className
  }, _react.default.createElement(ArrayFieldTitle, {
    key: "array-field-title-".concat(props.idSchema.$id),
    TitleTemplate: TitleTemplate,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && _react.default.createElement(ArrayFieldDescription, {
    key: "array-field-description-".concat(props.idSchema.$id),
    DescriptionTemplate: DescriptionTemplate,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), _react.default.createElement("div", {
    className: "row array-item-list",
    key: "array-item-list-".concat(props.idSchema.$id)
  }, props.items && props.items.map(function (p) {
    return ArrayItem(p);
  })), props.canAdd && _react.default.createElement(AddButton, {
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

function IconBtn(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      icon = props.icon,
      className = props.className,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["type", "icon", "className"]);
  return _react.default.createElement("button", (0, _extends2.default)({
    type: "button",
    className: "btn btn-".concat(type, " ").concat(className)
  }, otherProps), _react.default.createElement("i", {
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
  return _react.default.createElement("div", {
    key: props.index,
    className: props.className
  }, _react.default.createElement("div", {
    className: props.hasToolbar ? 'col-xs-9' : 'col-xs-12'
  }, props.children), props.hasToolbar && _react.default.createElement("div", {
    className: "col-xs-3 array-item-toolbox"
  }, _react.default.createElement(_lab.ToggleButtonGroup, {
    exclusive: true
  }, (props.hasMoveUp || props.hasMoveDown) && _react.default.createElement(_lab.ToggleButton, {
    disabled: props.disabled || props.readonly || !props.hasMoveUp,
    onClick: props.onReorderClick(props.index, props.index - 1)
  }, _react.default.createElement(_icons.KeyboardArrowUp, {
    color: "primary",
    tabIndex: "-1"
  })), (props.hasMoveUp || props.hasMoveDown) && _react.default.createElement(_lab.ToggleButton, {
    disabled: props.disabled || props.readonly || !props.hasMoveDown,
    onClick: props.onReorderClick(props.index, props.index + 1)
  }, _react.default.createElement(_icons.KeyboardArrowDown, {
    color: "primary",
    tabIndex: "-1"
  })), props.hasRemove && _react.default.createElement(_lab.ToggleButton, {
    disabled: props.disabled || props.readonly,
    onClick: props.onDropIndexClick(props.index)
  }, _react.default.createElement(_icons.Close, {
    color: "error",
    tabIndex: "-1"
  }))), _react.default.createElement("br", null)));
}

function AddButton(_ref3) {
  var onClick = _ref3.onClick,
      disabled = _ref3.disabled;
  return _react.default.createElement(_core.Button, {
    variant: "outlined",
    disabled: disabled,
    onClick: onClick
  }, _react.default.createElement(_icons.Add, null));
}