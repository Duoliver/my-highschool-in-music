import React from "react";
import { generateStyles, typographyDefaultProps } from "../utils";
import "./styles.scss";

const TitleThree = ({ children, ...props }) => {
  return (
    <span className={`title-three ${generateStyles(props)}`}>{children}</span>
  );
};

TitleThree.defaultProps = typographyDefaultProps;

export default TitleThree;
