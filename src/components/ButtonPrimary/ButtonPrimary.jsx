/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Primary } from "../Primary";
import "./style.css";

export const ButtonPrimary = ({ theme, ambient, status, size, className }) => {
  return (
    <div className={`button-primary ${theme} ${size} status-${status} ambient-${ambient} ${className}`}>
      <Primary
        className={`${theme === "imagin" && size === "small" && "class-7"} ${
          size === "small" && ["kids", "teens"].includes(theme) && "class-8"
        }`}
        color="standard"
        status="default"
        text={
          size === "small" && ["imagin", "kids"].includes(theme)
            ? "prim. small"
            : (ambient === "default" && size === "main" && status === "disabled" && theme === "imagin") ||
              (ambient === "default" && size === "main" && theme === "kids") ||
              (ambient === "default" && status === "pressed" && theme === "imagin") ||
              (ambient === "inverse" && theme === "imagin") ||
              (ambient === "inverse" && theme === "kids") ||
              (size === "main" && theme === "teens")
            ? "primary"
            : size === "small" && theme === "teens"
            ? "prim.small"
            : undefined
        }
        typographyButtonClassName={`${status === "disabled" && "class"} ${
          ambient === "inverse" && status === "default" && ["imagin", "teens"].includes(theme) && "class-2"
        } ${ambient === "inverse" && theme === "kids" && ["default", "pressed"].includes(status) && "class-3"} ${
          ambient === "inverse" && status === "pressed" && ["imagin", "teens"].includes(theme) && "class-4"
        } ${ambient === "default" && status === "pressed" && ["imagin", "teens"].includes(theme) && "class-5"} ${
          ambient === "default" && theme === "kids" && ["default", "pressed"].includes(status) && "class-6"
        }`}
      />
      <img className="min-width" alt="Min width" src="https://c.animaapp.com/WB7TujWY/img/-min-width-22@2x.png" />
    </div>
  );
};

ButtonPrimary.propTypes = {
  theme: PropTypes.oneOf(["imagin", "kids", "teens"]),
  ambient: PropTypes.oneOf(["inverse", "default"]),
  status: PropTypes.oneOf(["disabled", "pressed", "default"]),
  size: PropTypes.oneOf(["main", "small"]),
};
