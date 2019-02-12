import React from 'react';
import PropTypes from 'prop-types';
import { rangeSpec } from 'react-jsonschema-form/lib/utils';
import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';

function RangeWidget(props) {
	const {
		schema,
		value,
		registry: {
			widgets: { BaseInput },
		},
	} = props;

	const _onChange = (event, value) => {
		event.preventDefault();
		props.onChange(value);
	};

	return (
		<div className="field-range-wrapper">
			<Slider {...props} step={props.step ? props.step : 1} {...rangeSpec(schema)} onChange={_onChange} />
			<Typography variant="body2" color="textSecondary" gutterBottom>
				{value}
			</Typography>
		</div>
	);
}

RangeWidget.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RangeWidget;
