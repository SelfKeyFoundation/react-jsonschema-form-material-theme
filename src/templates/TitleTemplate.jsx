import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const REQUIRED_FIELD_SYMBOL = '(required)';

function TitleTemplate(props) {
	const { id, title, required } = props;
	return (
		<Typography variant="overline" id={id} gutterBottom>
			{title}
			{required ? (
				<span style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '12px', textTransform: 'lowercase' }}>
					{' '}
					{REQUIRED_FIELD_SYMBOL}
				</span>
			) : null}
		</Typography>
	);
}

TitleTemplate.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	required: PropTypes.bool,
};

export default TitleTemplate;
