import React from "react";
import "./styles.scss";

const Text = ({ children, align, textMargin, className }) => {
  return (
    <p className={`text ${align} ${textMargin && "text-margin"} ${className}`}>
      {children}
    </p>
  );
};

Text.defaultProps = {
  textMargin: false,
  align: "",
  className: "",
};

export default Text;
