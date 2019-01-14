import React from "react";
import PropTypes from "prop-types";
import { rangeSpec } from "react-jsonschema-form/lib/utils";
import { Typography } from "@material-ui/core";
import Slider from '@material-ui/lab/Slider';

function RangeWidget(props) {
  const {
    schema,
    value,
    registry: {
      widgets: { BaseInput },
    },
  } = props;

  console.log(props);
  console.log(rangeSpec(schema));

  return (
    <div className="field-range-wrapper">
      <BaseInput type="range" {...props} {...rangeSpec(schema)} />
      <Slider 
        {...props}
        {...rangeSpec(schema)} 
      />
      <Typography variant="body2" color="textSecondary" gutterBottom>{value}</Typography>
    </div>
  );
}


  RangeWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

export default RangeWidget;
