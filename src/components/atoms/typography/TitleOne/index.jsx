import React from "react";
import "./styles.scss";

const TitleOne = ({ children, align, textMargin, small, breakWord }) => {
  return (
    <span
      className={`title-one ${align} ${textMargin && "text-margin"} ${
        small && "small"
      } ${breakWord && "break-word"}`}
    >
      {children}
    </span>
  );
};

TitleOne.defaultProps = {
  textMargin: false,
  small: false,
  breakWord: false,
};

export default TitleOne;
