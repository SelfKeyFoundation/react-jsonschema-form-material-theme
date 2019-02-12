import React, { Component, Fragment } from 'react';
import { InputLabel, Button, Typography } from '@material-ui/core';
import { retrieveSchema, dataURItoBlob } from 'react-jsonschema-form/lib/utils';

export class ObjectFileWidget extends Component {
	constructor(props) {
		super(props);
		const { formData = {} } = props;
		const state = { formData };
		if (!formData.file && formData.content) {
			const { blob, name = formData.name } = dataURItoBlob(formData.content);
			state.file = new File([blob], name, { type: formData.mimeType });
		}

		if (state.file) {
			state.url = URL.createObjectURL(state.file);
		}

		this.state = { ...state, formData };
	}

	clearState() {
		return event => {
			if (this.state.url) {
				URL.revokeObjectURL(this.state.url);
			}
			this.setState({ url: null, file: null, formData: {} }, () => this.props.onChange({}));
		};
	}

	onChange() {
		return event => {
			const files = event.target.files;
			const f = files[0];
			if (!f) {
				return this.setState({ file: null, url: null, formData: {} }, () => this.props.onChange({}));
			}
			const data = {
				mimeType: f.type,
				name: f.name,
				size: f.size,
				content: '',
			};
			const url = URL.createObjectURL(f);
			// eslint-disable-next-line
			const reader = new FileReader();
			reader.readAsDataURL(f);
			reader.onload = () => {
				data.content = reader.result;
				this.setState({ file: f, url, formData: data }, () => this.props.onChange(data));
			};
		};
	}

	render() {
		const {
			id,
			label,
			uiSchema,
			formData,
			errors,
			idSchema,
			name,
			required,
			disabled,
			readonly,
			idPrefix,
			onBlur,
			onFocus,
			registry,
		} = this.props;
		const { definitions, templates, formContext } = registry;
		const { FieldTemplate } = templates;
		const schema = retrieveSchema(this.props.schema, definitions, formData);
		const description = uiSchema['ui:description'] || schema.description;

		const templateProps = {
			label,
			description,
			idSchema,
			uiSchema,
			schema,
			formData,
			formContext,
			registry,
			errors,
			idPrefix,
		};
		const accept = (((schema.properties || {}).mimeType || {}).enum || []).join(',');
		return (
			<FieldTemplate {...templateProps}>
				<InputLabel>
					<input
						id={id}
						type="file"
						name={name}
						required={required}
						disabled={readonly || disabled}
						onChange={this.onChange()}
						onBlur={onBlur && (event => onBlur(this.state))}
						onFocus={onFocus && (event => onFocus(this.state))}
						accept={accept}
					/>
				</InputLabel>
				{this.state.formData && this.state.formData.name && (
					<Typography variant="body">
						<a href={this.state.url} target="_blank">
							{this.state.formData.name}
						</a>
						<Button onClick={this.clearState()}>X</Button>
					</Typography>
				)}
			</FieldTemplate>
		);
	}
}

export default ObjectFileWidget;
