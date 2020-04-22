import React from 'react';
import { pad } from '../utils';
import { KeyPicker } from 'selfkey-ui';

export function utcToLocal(jsonDate) {
	if (!jsonDate) {
		return '';
	}

	// required format of `"yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS"
	// https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type%3Ddatetime-local)
	// > should be a _valid local date and time string_ (not GMT)

	// Note - date constructor passed local ISO-8601 does not correctly
	// change time to UTC in node pre-8
	const date = new Date(jsonDate);

	const yyyy = pad(date.getFullYear(), 4);
	const MM = pad(date.getMonth() + 1, 2);
	const dd = pad(date.getDate(), 2);
	const hh = pad(date.getHours(), 2);
	const mm = pad(date.getMinutes(), 2);
	const ss = pad(date.getSeconds(), 2);
	const SSS = pad(date.getMilliseconds(), 3);

	return `${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}.${SSS}`;
}

export function localToUTC(dateString) {
	if (dateString) {
		return new Date(dateString).toJSON();
	}
}

function DateTimeWidget(props) {
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

	inputProps.type = options.inputType || inputProps.type || 'text';
	const _onChange = ({ target: { value } }) => {
		return props.onChange(value === '' ? localToUtc(options.emptyValue) : localToUTC(value));
	};

	function isError(Obj) {
		for (var key in Obj) {
			if (Obj.hasOwnProperty(key)) return true;
		}
		return false;
	}

	return (
    <KeyPicker
      includeTime
			readOnly={readonly}
			disabled={disabled}
			error={isError(errors)}
			autoFocus={autofocus}
			value={utcToLocal(value)}
			{...inputProps}
			onChange={_onChange}
			onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
			disableUnderline
		/>
	);
}

export default DateTimeWidget;
