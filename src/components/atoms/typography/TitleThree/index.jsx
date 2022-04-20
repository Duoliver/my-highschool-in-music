import React from "react";
import "./styles.scss";

const TitleThree = ({ children, align }) => {
  return <span className={`title-three ${align}`}>{children}</span>;
};

export default TitleThree;
