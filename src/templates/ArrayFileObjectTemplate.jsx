import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { ArrayFileUploadWidget } from 'selfkey-ui';
import { dataURItoBlob } from '../utils';

function ArrayFieldTitle({ TitleTemplate, idSchema, title, required }) {
	if (!title) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />;
	}
	const id = `${idSchema.$id}__title`;
	return <TitleTemplate id={id} title={title} required={required} />;
}

function ArrayFieldDescription({ DescriptionTemplate, idSchema, description, formContext }) {
	if (!description) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />;
	}
	const id = `${idSchema.$id}__description`;
	return <DescriptionTemplate id={id} description={description} formContext={formContext} />;
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
					<Typography variant="subtitle2" color="error" key={index} gutterBottom>
						{error}
					</Typography>
				);
			})}
		</div>
	);
}
export default class ArrayFileObjectTemplate extends Component {
	constructor(props) {
		super(props);
		const { formData = [] } = props;
		const state = {};
		state.files = (formData || []).map(data => {
			const f = {};
			if (data.content) {
				const { blob, name = data.name } = dataURItoBlob(data.content);
				f.file = new File([blob], name, { type: data.mimeType });
			}
			f.mimeType = data.mimeType;
			f.name = data.name;
			if (f.file) {
				f.url = URL.createObjectURL(f.file);
			}
			return f;
		});

		this.state = { ...state, formData };
	}

	handleFileChange = files => {
		const onChange = this.props.onChange;
		if (!onChange) {
			onChange = () => {};
		}
		Promise.all(
			files.map(f => {
				if (!f) {
					return null;
				}
				const url = URL.createObjectURL(f);
				const data = {
					file: f,
					mimeType: f.type,
					name: f.name,
					size: f.size,
					url,
				};

				// eslint-disable-next-line
				const reader = new FileReader();
				reader.readAsDataURL(f);
				return new Promise((resolve, reject) => {
					reader.onload = () => {
						data.content = reader.result;
						resolve(data);
					};
					reader.onerror = () => {
						reject(null);
					};
				});
			})
		).then(filesData => {
			filesData = filesData.filter(f => !!f);
			filesData = [...(this.state.files || []), ...filesData];
			const formData = filesData.map(data => {
				return {
					name: data.name,
					content: data.content,
					mimeType: data.mimeType,
					size: data.size,
				};
			});
			this.setState({ files: filesData, formData }, onChange(formData));
		});
	};
	handleFileDelete = file => {
		const onChange = this.props.onChange;
		if (!onChange) {
			onChange = () => {};
		}
		let { files, formData } = this.state;
		const index = files.indexOf(file);
		if (index == -1) return;
		files = files.filter((f, ind) => ind !== index);
		formData = formData.filter((f, ind) => ind !== index);
		this.setState({ files, formData }, onChange(formData));
	};
	render() {
		const props = this.props;
		const accept = (((props.schema.properties || {}).mimeType || {}).enum || []).join(',');
		let title = props.uiSchema['ui:title'] || props.uiSchema['ui:label'] || props.title;
		let description = this.props.placeholder || props.uiSchema['ui:description'] || props.schema.description;
		if (props.uiSchema['ui:description'] === false){
			description = null;
		}
		if (props.uiSchema['ui:label'] === false) {
			title = null;
		}
		const { TitleTemplate, DescriptionTemplate } = props.registry.templates;
		return (
			<div>
				{title ? (
					<ArrayFieldTitle
						key={`array-field-title-${props.idSchema.$id}`}
						TitleTemplate={TitleTemplate}
						idSchema={props.idSchema}
						title={props.uiSchema['ui:title'] || props.title}
						required={props.required}
					/>
				) : null}
				<ArrayFileUploadWidget
					files={this.state.files}
					onClearForm={this.handleFileDelete}
					accept={accept}
					placeholder={description}
					isError={props.errors && props.errors.length}
					onChange={this.handleFileChange}
				/>
			</div>
		);
	}
}
