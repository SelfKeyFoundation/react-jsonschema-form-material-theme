import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const REQUIRED_FIELD_SYMBOL = '*';

function TitleTemplate(props) {
	const { id, title, required } = props;
	return (
		<Typography variant="overline" id={id} gutterBottom>
			{title}
			{required ? (
				<span style={{ fontWeight: 'bold' }}>
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
