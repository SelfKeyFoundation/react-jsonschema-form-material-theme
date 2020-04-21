"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

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
  return _react.default.createElement("div", {
    className: "checkboxes",
    id: id
  }, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var disabledCls = disabled || readonly ? "disabled" : "";

    var checkbox = _react.default.createElement(_core.FormControlLabel, {
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
      control: _react.default.createElement(_core.Checkbox, null),
      label: option.label
    });

    return inline ? _react.default.createElement("div", {
      key: index,
      className: "checkbox-inline ".concat(disabledCls)
    }, checkbox) : _react.default.createElement("div", {
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
  schema: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.shape({
    enumOptions: _propTypes.default.array,
    inline: _propTypes.default.bool
  }).isRequired,
  value: _propTypes.default.any,
  required: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
var _default = CheckboxesWidget;
exports.default = _default;