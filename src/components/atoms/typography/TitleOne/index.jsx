import React from "react";
import { generateStyles, typographyDefaultProps } from "../utils";
import "./styles.scss";

const TitleOne = ({ children, ...props }) => {
  return (
    <span className={`title-one ${generateStyles(props)}`}>{children}</span>
  );
};

TitleOne.defaultProps = typographyDefaultProps;

export default TitleOne;
