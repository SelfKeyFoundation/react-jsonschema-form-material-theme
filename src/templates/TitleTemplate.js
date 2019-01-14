import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const REQUIRED_FIELD_SYMBOL = "*";

function TitleTemplate(props) {
  const { id, title, required } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return <Typography variant="h4" id={id} gutterBottom>{legend}</Typography>;
}


  TitleTemplate.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
  };

export default TitleTemplate;
