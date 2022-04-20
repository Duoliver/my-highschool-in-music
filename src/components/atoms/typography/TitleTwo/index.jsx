import React from "react";
import "./styles.scss";

const TitleTwo = ({ children, align }) => {
  return <div className={`title-two ${align}`}>{children}</div>;
};

export default TitleTwo;
