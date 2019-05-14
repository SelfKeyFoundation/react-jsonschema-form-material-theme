import React from 'react';
import { KeyPicker } from 'selfkey-ui';

function DateWidget(props) {
	// Note: since React 15.2.0 we can't forward unknown element attributes, so we
	// exclude the "options" and "schema" ones here.
	if (!props.id) {
		console.log('No id for', props);
		throw new Error(`no id for props ${JSON.stringify(props)}`);
	}
	const {
		value,
		readonly,
		disabled,
		autofocus,
		onBlur,
		onFocus,
		options,
		schema,
		formContext,
		registry,
		errors,
		...inputProps
	} = props;

	const _onChange = ({ target: data }) => {
		return props.onChange(data.value === '' ? options.emptyValue : data.value);
	};

	function isError(Obj) {
		for (var key in Obj) {
			if (Obj.hasOwnProperty(key)) return true;
		}
		return false;
	}

	return (
		<KeyPicker
			readOnly={readonly}
			disabled={disabled}
			autoFocus={autofocus}
			value={value == null ? '' : value}
			{...inputProps}
			onChange={_onChange}
			onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
			disableUnderline
			isError={isError(errors)}
		/>
	);
}

export default DateWidget;
