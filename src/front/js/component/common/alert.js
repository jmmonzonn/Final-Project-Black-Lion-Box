import React from "react";
import PropTypes from "prop-types";

export const Alert = (props) => {
  return (
    <div class={`p-4 mb-4 text-sm rounded-lg ${props.style}`} role="alert">
      {props.content}
    </div>
  );
};

Alert.propTypes = {
  content: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.string,
};
