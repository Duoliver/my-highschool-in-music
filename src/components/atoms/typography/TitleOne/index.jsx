import React from "react";
import "./styles.scss";

const TitleOne = ({ children, align, textMargin, small }) => {
  return (
    <span
      className={`title-one bright ${align} ${textMargin && "text-margin"} ${
        small && "small"
      }`}
    >
      {children}
    </span>
  );
};

TitleOne.defaultProps = {
  textMargin: false,
  small: false,
};

export default TitleOne;
