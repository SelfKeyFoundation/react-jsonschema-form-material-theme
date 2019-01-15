import React from "react";
import { Typography } from "@material-ui/core";

export default function ErrorListTemplate(props) {
  const { errors } = props;
  return (
    <div className="panel panel-danger errors">
        <Typography variant="h4" color="error" gutterBottom>Errors</Typography>

        {errors.map((error, i) => {
          return (
            <Typography key={i} variant="subtitle2" color="error" gutterBottom>
              {error.stack}
            </Typography>
          );
        })}
        <br/>
    </div>
  );
}
