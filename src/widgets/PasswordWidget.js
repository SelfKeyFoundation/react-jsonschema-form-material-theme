import React from "react";
import PropTypes from "prop-types";

function PasswordWidget(props) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput type="password" {...props} />;
}


  PasswordWidget.propTypes = {
    value: PropTypes.string,
  };

export default PasswordWidget;
