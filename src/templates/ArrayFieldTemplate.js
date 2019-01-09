import React from "react";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';

export default function ArrayFieldTemplate(props) {
  const { TitleTemplate, DescriptionTemplate } = props.registry.templates;

  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleTemplate={TitleTemplate}
        idSchema={props.idSchema}
        title={props.uiSchema["ui:title"] || props.title}
        required={props.required}
      />

      {(props.uiSchema["ui:description"] || props.schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionTemplate={DescriptionTemplate}
          idSchema={props.idSchema}
          description={
            props.uiSchema["ui:description"] || props.schema.description
          }
        />
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(p => ArrayItem(p))}
      </div>

      {props.canAdd && (
        <AddButton
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
}

function ArrayFieldTitle({ TitleTemplate, idSchema, title, required }) {
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__title`;
  return <TitleTemplate id={id} title={title} required={required} />;
}

function ArrayFieldDescription({
  DescriptionTemplate,
  idSchema,
  description,
  formContext,
}) {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__description`;
  return (
    <DescriptionTemplate
      id={id}
      description={description}
      formContext={formContext}
    />
  );
}

function IconBtn(props) {
  const { type = "default", icon, className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={`btn btn-${type} ${className}`}
      {...otherProps}>
      <i className={`glyphicon glyphicon-${icon}`} />
    </button>
  );
}

// Used in the two templates
function ArrayItem(props) {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold",
  };
  return (
    <div key={props.index} className={props.className}>
      <div className={props.hasToolbar ? "col-xs-9" : "col-xs-12"}>
        {props.children}
      </div>

      {props.hasToolbar && (
        <div className="col-xs-3 array-item-toolbox">
          <ToggleButtonGroup 
            exclusive
          >
            {(props.hasMoveUp || props.hasMoveDown) && (
              <ToggleButton 
                disabled={props.disabled || props.readonly || !props.hasMoveUp}
              >
                  <KeyboardArrowUpIcon
                    color="primary"
                    tabIndex="-1"
                    onClick={props.onReorderClick(props.index, props.index - 1)}
                  />
              </ToggleButton>
            )}

            {(props.hasMoveUp || props.hasMoveDown) && (
              <ToggleButton 
                disabled={props.disabled || props.readonly || !props.hasMoveDown}
              >
                  <KeyboardArrowDownIcon
                    color="primary"
                    tabIndex="-1"
                    onClick={props.onReorderClick(props.index, props.index + 1)}
                  />
              </ToggleButton>
            )}

            {props.hasRemove && (
              <ToggleButton 
                disabled={props.disabled || props.readonly}
              >
                  <CloseIcon 
                    color="error" 
                    tabIndex="-1"
                    onClick={props.onDropIndexClick(props.index)}
                  />
              </ToggleButton>
            )}
          </ToggleButtonGroup>
          <br/><br/>
        </div>
      )}
    </div>
  );
}

function AddButton({ onClick, disabled }) {
  return (
    <div className="row">
      <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
        <IconBtn
          type="info"
          icon="plus"
          className="btn-add col-xs-12"
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        />
      </p>
    </div>
  );
}
