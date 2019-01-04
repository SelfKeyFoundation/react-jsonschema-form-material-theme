import React from "react";
import { Button } from "@material-ui/core";

function ArrayFieldTemplate(props) {
  return (
    <div className={props.className}>
      {props.items &&
        props.items.map(element => (
          <div key={element.index}>
            <div>{element.children}</div>
            {element.hasMoveDown && (
              <Button
                variant="outlined"
                color="primary"
                onClick={element.onReorderClick(
                  element.index,
                  element.index + 1
                )}>
                Down
              </Button>
            )}
            {element.hasMoveUp && (
              <Button
                variant="outlined"
                color="primary"
                onClick={element.onReorderClick(
                  element.index,
                  element.index - 1
                )}>
                Up
              </Button>
            )}
            <Button variant="outlined" color="primary" onClick={element.onDropIndexClick(element.index)}>
              Delete
            </Button>
            <hr />
          </div>
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
