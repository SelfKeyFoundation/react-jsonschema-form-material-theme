import React from 'react';

export default function ObjectFieldTemplate(props) {
	const { TitleTemplate, DescriptionTemplate } = props.registry.templates;
	let title = props.uiSchema['ui:title'] || props.uiSchema['ui:label'] || props.title;
	if (props.uiSchema['ui:label'] === false) {
		title = null;
	}
	let description = props.placeholder || props.uiSchema['ui:description'] || props.schema.description;
	if (props.uiSchema['ui:description'] === false) {
		title = null;
	}
	return (
		<fieldset>
			{title && (
				<TitleTemplate
					id={`${props.idSchema.$id}__title`}
					title={title}
					required={props.required}
					formContext={props.formContext}
				/>
			)}
			{description && (
				<DescriptionTemplate
					id={`${props.idSchema.$id}__description`}
					description={description}
					formContext={props.formContext}
				/>
			)}
			{props.properties.map(prop => prop.content)}
		</fieldset>
	);
}
