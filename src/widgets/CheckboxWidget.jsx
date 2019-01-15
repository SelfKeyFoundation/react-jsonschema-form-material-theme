import React from "react";
import PropTypes from "prop-types";
import { 
  FormControlLabel, 
  Checkbox,
} from "@material-ui/core";

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    registry: {
      templates: { DescriptionTemplate },
    },
  } = props;
  return (
    <div className={`checkbox ${disabled || readonly ? "disabled" : ""}`}>
      {schema.description && (
        <DescriptionTemplate description={schema.description} />
      )}
      <FormControlLabel
        id={id}
        checked={typeof value === "undefined" ? false : value}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={event => onChange(event.target.checked)}
        control={
          <Checkbox />
        }
        label={label}
      />
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};


  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };

export default CheckboxWidget;
