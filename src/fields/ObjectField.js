import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  orderProperties,
  retrieveSchema,
  getWidget,
  getUiOptions,
} from "../utils";

class ObjectField extends Component {
  static defaultProps = {
    uiSchema: {},
    formData: {},
    errorSchema: {},
    idSchema: {},
    required: false,
    disabled: false,
    readonly: false,
  };

  isRequired(name) {
    const schema = this.props.schema;
    return (
      Array.isArray(schema.required) && schema.required.indexOf(name) !== -1
    );
  }

  onPropertyChange = name => {
    return (value, errorSchema) => {
      const newFormData = { ...this.props.formData, [name]: value };
      this.props.onChange(
        newFormData,
        errorSchema &&
          this.props.errorSchema && {
            ...this.props.errorSchema,
            [name]: errorSchema,
          }
      );
    };
  };

  render() {
    const {
      uiSchema,
      formData,
      errorSchema,
      idSchema,
      name,
      required,
      disabled,
      readonly,
      idPrefix,
      onBlur,
      onFocus,
      registry,
      autofocus,
      onChange,
      onPDFOpen,
      errors,
    } = this.props;
    const { definitions, fields, templates, formContext, widgets } = registry;
    const schema = retrieveSchema(this.props.schema, definitions, formData);
    const title = schema.title === undefined ? name : schema.title;
    const defaultWidget = schema.format || null;
    const { widget = defaultWidget, ...options } = getUiOptions(uiSchema);
    try {
      const Widget = widget ? getWidget(schema, widget, widgets) : null;
      if (Widget) {
        return (
          <Widget
            name={name}
            formData={formData}
            options={options}
            schema={schema}
            uiSchema={uiSchema}
            id={idSchema && idSchema.$id}
            label={title === undefined ? name : title}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onPDFOpen={onPDFOpen}
            required={required}
            disabled={disabled}
            readonly={readonly}
            formContext={formContext}
            autofocus={autofocus}
            registry={registry}
            errors={errors}
            errorSchema={errorSchema}
          />
        );
      }
    } catch (error) {
      console.warn(error);
    }

    const { SchemaField } = fields;
    const { ObjectFieldTemplate } = templates;

    const description = uiSchema["ui:description"] || schema.description;
    let orderedProperties;

    try {
      const properties = Object.keys(schema.properties);
      orderedProperties = orderProperties(properties, uiSchema["ui:order"]);
    } catch (err) {
      return (
        <div>
          <p className="config-error" style={{ color: "red" }}>
            Invalid {name || "root"} object field configuration:
            <em>{err.message}</em>.
          </p>
          <pre>{JSON.stringify(schema)}</pre>
        </div>
      );
    }

    const templateProps = {
      title: uiSchema["ui:title"] || title,
      description,
      properties: orderedProperties.map(name => {
        return {
          content: (
            <SchemaField
              key={name}
              name={name}
              required={this.isRequired(name)}
              schema={schema.properties[name]}
              uiSchema={uiSchema[name]}
              errorSchema={errorSchema[name]}
              idSchema={idSchema[name]}
              idPrefix={idPrefix}
              formData={formData[name]}
              onChange={this.onPropertyChange(name)}
              onPDFOpen={onPDFOpen}
              onBlur={onBlur}
              onFocus={onFocus}
              registry={registry}
              disabled={disabled}
              readonly={readonly}
            />
          ),
          name,
          readonly,
          disabled,
          required,
        };
      }),
      required,
      idSchema,
      uiSchema,
      schema,
      formData,
      formContext,
      onPDFOpen,
      registry,
    };
    return <ObjectFieldTemplate {...templateProps} />;
  }
}

if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    errorSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      templates: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      formContext: PropTypes.object.isRequired,
    }),
  };
}

export default ObjectField;
