import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

function DescriptionTemplate(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  if (typeof description === "string") {
    return (
      <Typography variant="subtitle2" color="secondary" id={id} className="field-description" gutterBottom>
        {description}
      </Typography>
    );
  } else {
    return (
      <Typography variant="subtitle2" color="secondary" id={id} className="field-description" gutterBottom>
        {description}
      </Typography>
    );
  }
}


  DescriptionTemplate.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

export default DescriptionTemplate;
