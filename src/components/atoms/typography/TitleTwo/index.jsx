import React from "react";
import { AlignEnum } from "../../../../enums";
import "./styles.scss";

const TitleTwo = ({ children, align, textMargin, uppercase }) => {
  return (
    <span
      className={`title-two ${align} ${textMargin && "text-margin"} ${
        uppercase && "uppercase"
      }`}
    >
      {children}
    </span>
  );
};

TitleTwo.defaultProps = {
  align: AlignEnum.LEFT,
  uppercase: false,
  textMargin: false,
};

export default TitleTwo;
