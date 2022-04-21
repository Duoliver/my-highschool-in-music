import React from "react";
import { AlignEnum } from "../../../../enums";
import "./styles.scss";

const TitleThree = ({ children, align, textMargin }) => {
  return (
    <span className={`title-three ${align} ${textMargin && "text-margin"}`}>
      {children}
    </span>
  );
};

TitleThree.defaultProps = {
  align: AlignEnum.LEFT,
  textMargin: false,
};

export default TitleThree;
