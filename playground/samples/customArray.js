import React from "react";
import { Button, FormGroup } from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';

function ArrayFieldTemplate(props) {
  return (
    <div className={props.className}>
      {props.items &&
        props.items.map(element => (
          <FormGroup key={element.index}>
              <div>{element.children}</div>

              <div className="col-xs-3 array-item-toolbox" >
                <ToggleButtonGroup 
                  exclusive
                >
                  {element.hasMoveUp && (
                      <ToggleButton 
                        onClick={element.onReorderClick(element.index, element.index - 1)}
                      >
                          <KeyboardArrowUpIcon
                            color="primary"
                            tabIndex="-1"
                          />

                      </ToggleButton>
                  )}

                  {element.hasMoveDown && (
                    <ToggleButton 
                      onClick={element.onReorderClick(element.index, element.index + 1)}
                    >
                        <KeyboardArrowDownIcon
                          color="primary"
                          tabIndex="-1"
                        />
                    </ToggleButton>
                  )}


                  {element.hasRemove && (
                    <ToggleButton 
                      onClick={element.onDropIndexClick(element.index)}
                    >
                        <CloseIcon 
                          color="error" 
                          tabIndex="-1"
                        />
                    </ToggleButton>
                  )}
                </ToggleButtonGroup>
              </div>
          </FormGroup>
        ))}

      {props.canAdd && (
        <div className="row">
          <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
            <Button variant="outlined" color="primary" onClick={props.onAddClick} type="button">
              Custom +
            </Button>
          </p>
        </div>
      )}
    </div>
  );
}

export default {
  schema: {
    title: "Custom array of strings",
    type: "array",
    items: {
      type: "string",
    },
  },
  formData: ["react", "jsonschema", "form"],
  templates: { ArrayFieldTemplate },
};
