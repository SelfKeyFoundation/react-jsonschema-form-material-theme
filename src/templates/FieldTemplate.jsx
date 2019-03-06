import React from 'react';
import PropTypes from 'prop-types';
import { Typography, FormGroup } from '@material-ui/core';

const REQUIRED_FIELD_SYMBOL = '*';

export default function FieldTemplate(props) {
	const {
		id,
		label,
		children,
		errors,
		help,
		description,
		hidden,
		required,
		displayLabel,
		formContext,
		registry: {
			templates: { DescriptionTemplate },
		},
	} = props;
	const classNames = [props.classNames, 'form-group'].join(' ').trim();

	if (hidden) {
		return children;
	}
	return (
		<FormGroup>
			{displayLabel && <Label label={label} required={required} id={id} />}
			{/* displayLabel && description ? (
				<DescriptionTemplate id={`${id}__description`} description={description} formContext={formContext} />
			) : null */}
			{children}
			<ErrorList errors={errors} />
			<Help help={help} />
		</FormGroup>
	);
}

FieldTemplate.defaultProps = {
	hidden: false,
	readonly: false,
	required: false,
	displayLabel: true,
};

FieldTemplate.propTypes = {
	id: PropTypes.string,
	classNames: PropTypes.string,
	label: PropTypes.string,
	children: PropTypes.node.isRequired,
	errors: PropTypes.arrayOf(PropTypes.string),
	help: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	hidden: PropTypes.bool,
	required: PropTypes.bool,
	readonly: PropTypes.bool,
	displayLabel: PropTypes.bool,
	fields: PropTypes.object,
	formContext: PropTypes.object,
};

function Label(props) {
	const { label, required, id } = props;
	if (!label) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />;
	}
	return (
		<Typography htmlFor={id} variant="overline" gutterBottom>
			{label}
			{required && (
				<span style={{ fontWeight: 'bold'}}>
					{' '}
					{REQUIRED_FIELD_SYMBOL}
				</span>
			)}
		</Typography>
	);
}

function Help(props) {
	const { help } = props;
	if (!help) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />;
	}
	if (typeof help === 'string') {
		return (
			<Typography variant="subtitle1" color="secondary" className="help-block" gutterBottom>
				{help}
			</Typography>
		);
	}
	return (
		<Typography variant="subtitle1" color="secondary" className="help-block" gutterBottom>
			{help}
		</Typography>
	);
}

function ErrorList(props) {
	const { errors = [] } = props;
	if (errors.length === 0) {
		return <div />;
	}
	return (
		<div>
			{errors.map((error, index) => {
				return (
					<Typography
						variant="subtitle2"
						color="error"
						key={index}
						gutterBottom
						style={{ marginTop: '10px', marginLeft: '5px'}}
					>
						{error}
					</Typography>
				);
			})}
		</div>
	);
}
