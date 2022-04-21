import React from "react";
import { AlignEnum } from "../../../../enums";
import "./styles.scss";

const TitleTwo = ({ children, align, textMargin }) => {
  return (
    <div className={`title-two ${align} ${textMargin && "text-margin"}`}>
      {children}
    </div>
  );
};

TitleTwo.defaultProps = {
  align: AlignEnum.LEFT,
  textMargin: false,
};

export default TitleTwo;
