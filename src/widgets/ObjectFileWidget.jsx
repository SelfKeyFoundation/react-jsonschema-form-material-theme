import React, { Component, Fragment } from 'react';
import { FileUploadWidget } from 'selfkey-ui';
import { InputLabel, Button, Typography } from '@material-ui/core';
import { retrieveSchema, dataURItoBlob } from '../utils';

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
		return files => {
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
		let {
			id,
			label,
			uiSchema,
			formData,
			errors = [],
			idSchema,
			name,
			help,
			required,
			isError,
			disabled,
			readonly,
			idPrefix,
			onBlur,
			onFocus,
			registry,
			onPDFOpen,
			errorSchema,
		} = this.props;
		const { definitions, templates, formContext } = registry;
		const { FieldTemplate } = templates;
		const schema = retrieveSchema(this.props.schema, definitions, formData);
		const description = uiSchema['ui:description'] || schema.description;
		const displayLabel = uiSchema['ui:label'] === false ? false : true;
		
		if (errorSchema.mimeType && errorSchema.mimeType.__errors.length){
			errors.push(errorSchema.mimeType.__errors[0]);
		}

		const templateProps = {
			id,
			label,
			description,
			idSchema,
			uiSchema,
			schema,
			formData,
			formContext,
			registry,
			required,
			errors,
			help,
			idPrefix,
			displayLabel,
		};
		const accept = (((schema.properties || {}).mimeType || {}).enum || []).join(',');
		const file =
			this.state.formData && this.state.formData.name
				? {
						url: this.state.url,
						name: this.state.formData.name,
						mimeType: this.state.formData.mimeType,
				  }
				: null;
		return (
			<FieldTemplate {...templateProps}>
				<FileUploadWidget
					id={id}
					name={name}
					required={required}
					disabled={readonly || disabled}
					file={file}
					onClearForm={this.clearState()}
					onChange={this.onChange()}
					onPDFOpen={onPDFOpen}
					onBlur={onBlur && (event => onBlur(this.state))}
					onFocus={onFocus && (event => onFocus(this.state))}
					accept={accept}
					isError={errors.length > 0  ? true : false}
				/>
			</FieldTemplate>
		);
	}
}

export default ObjectFileWidget;
