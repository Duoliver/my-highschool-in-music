import React from "react";
import "./styles.scss";

const Text = ({ children, align }) => {
  return <p className={`text ${align}`}>{children}</p>;
};

export default Text;
