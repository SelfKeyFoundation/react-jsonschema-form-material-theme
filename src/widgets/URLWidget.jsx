import React from "react";
import PropTypes from "prop-types";

function URLWidget(props) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput type="url" {...props} />;
}


  URLWidget.propTypes = {
    value: PropTypes.string,
  };

export default URLWidget;
