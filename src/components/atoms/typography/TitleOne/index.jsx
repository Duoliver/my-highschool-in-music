import React from "react";
import "./styles.scss";

const TitleOne = ({ children, align }) => {
  return <span className={`title-one bright ${align} `}>{children}</span>;
};

export default TitleOne;
