import React from "react";
import { generateStyles, typographyDefaultProps } from "../utils";
import "./styles.scss";

const Text = ({ children, ...props }) => {
  return <p className={`text ${generateStyles(props)}`}>{children}</p>;
};

Text.defaultProps = typographyDefaultProps;

export default Text;
