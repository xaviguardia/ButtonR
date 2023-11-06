/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Primary = ({ color, status, className, text = "primary", typographyButtonClassName }) => {
  return (
    <div className={`primary ${className}`}>
      <div className={`typography-button ${status} ${color} ${typographyButtonClassName}`}>{text}</div>
    </div>
  );
};

Primary.propTypes = {
  color: PropTypes.oneOf(["inverse", "standard"]),
  status: PropTypes.oneOf(["default", "pressed", "disabled"]),
  text: PropTypes.string,
};
