import React from "react";
import "./styles.scss";

const Credits = ({ children, align }) => {
  return <span className={`credits ${align}`}>{children}</span>;
};

export default Credits;
