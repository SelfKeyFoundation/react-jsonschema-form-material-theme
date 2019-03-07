import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { ArrayFileUploadWidget } from 'selfkey-ui';
import { dataURItoBlob } from '../utils';
import mime from 'mime';

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
		const state = { uploadError: false };
		state.files = (formData || []).map(data => {
			const f = {};
			if (data.content) {
				const { blob, name = data.name } = dataURItoBlob(data.content);
				f.file = new File([blob], name, { type: data.mimeType });
			}
			f.mimeType = data.mimeType;
			f.name = data.name;
			f.size = data.size;
			f.content = data.content;
			if (f.file) {
				f.url = URL.createObjectURL(f.file);
			}
			return f;
		});

		this.state = { ...state, formData };
	}

	handleFileChange = files => {
		const onChange = this.props.onChange;
		this.setState({ uploadError: false });
		if (!onChange) {
			onChange = () => {};
		}
		Promise.all(
			files.map(f => {
				if (!f) {
					return null;
				}
				const url = URL.createObjectURL(f);
				// if (!this.mimeTypes.includes(f.type)) {
				// 	this.setState({ uploadError: `Incorrect file extension. Allowed: ${this.formatExtensionsList()}` });
				// 	return null;
				// }
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
						if (!reader.result) {
							return resolve(null);
						}
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

	get itemsProps() {
		let itemsProps = {};
		const props = this.props;
		if (props.schema && props.schema.items && props.schema.items.properties) {
			itemsProps = props.schema.items.properties;
		}
		return itemsProps;
	}

	get mimeTypes() {
		let mimeTypes = [];
		const itemsProps = this.itemsProps;
		if (itemsProps.mimeType && itemsProps.mimeType.enum) {
			mimeTypes = itemsProps.mimeType.enum;
		}
		return mimeTypes;
	}

	get maxFileSize() {
		const itemsProps = this.itemsProps;
		if (!itemsProps.size || !itemsProps.size.maximum) {
			return 'unlimited';
		}
		return itemsProps.size.maximum;
	}

	formatExtensionsList() {
		const mimeTypes = this.mimeTypes;
		const fileTypes = mimeTypes.map(mt => ('' || mt).split('/')[0]);
		const extensions = mimeTypes.map(type => mime.getExtension(type));
		return extensions
			.map((ext, ind) => {
				const ft = fileTypes[ind];
				if (!ext) return mimeTypes[ind];
				if (!ft) return ext;
				return `${ft} .${ext}`;
			})
			.join(', ');
	}

	computeItemErrors() {
		let itemErrors = {};
		const errorSchema = this.props.errorSchema;
		if (Object.keys(errorSchema).length) {
			console.log('XXX', errorSchema);
			for (let item in errorSchema) {

				itemErrors[+item] = [];
				if (errorSchema[item].mimeType && errorSchema[item].mimeType.__errors) {
					itemErrors[+item].push(`Incorrect file extension. Allowed: ${this.formatExtensionsList()}`);
				}
				if (errorSchema[item].size && errorSchema[item].size.__errors) {
					itemErrors[+item].push(
						`File size is over ${this.maxFileSize / 1000000}MB. Please upload a smaller file`
					);
				}
			}
		}
		return itemErrors;
	}
	
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
		let mimeTypes = [];

		let title = props.uiSchema['ui:title'] || props.uiSchema['ui:label'] || props.title;
		let description = this.props.placeholder || props.uiSchema['ui:description'] || props.schema.description;
		if (props.uiSchema['ui:description'] === false) {
			description = null;
		}
		if (props.uiSchema['ui:label'] === false) {
			title = null;
		}
		let help = props.help;

		if (!help && mimeTypes.length) {

			help = `Allowed file extensions: ${this.formatExtensionsList()}`;
		}

		let itemErrors = this.computeItemErrors();
		console.log('XXX', itemErrors);
		let isError = (props.errors && props.errors.length) || Object.keys(itemErrors).length > 0;
		const { TitleTemplate } = props.registry.templates;
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
					errorFiles={itemErrors}
					onClearForm={this.handleFileDelete}
					mimeTypes={mimeTypes}
					placeholder={description}
					isError={isError}
					onChange={this.handleFileChange}
				/>
				<br />
				<Help help={help} />
			</div>
		);
	}
}
