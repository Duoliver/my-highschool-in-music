import React from "react";
import { generateStyles, typographyDefaultProps } from "../utils";
import "./styles.scss";

const Credits = ({ children, ...props }) => {
  return <span className={`credits ${generateStyles(props)}`}>{children}</span>;
};

Text.defaultProps = typographyDefaultProps;

export default Credits;
