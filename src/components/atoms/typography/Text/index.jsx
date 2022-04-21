import React from "react";
import "./styles.scss";

const Text = ({ children, align, textMargin }) => {
  return (
    <p className={`text ${align} ${textMargin && "text-margin"}`}>{children}</p>
  );
};

Text.defaultProps = {
  textMargin: false,
};

export default Text;
