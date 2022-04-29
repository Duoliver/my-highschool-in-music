import React from "react";
import { generateStyles, typographyDefaultProps } from "../utils";
import "./styles.scss";

const TitleTwo = ({ children, ...props }) => {
  return (
    <span className={`title-two ${generateStyles(props)}`}>{children}</span>
  );
};

TitleTwo.defaultProps = typographyDefaultProps;

export default TitleTwo;
