import React from "react";
import { AlignEnum } from "../../../../enums";
import "./styles.scss";

const TitleThree = ({ children, align }) => {
  return <span className={`title-three ${align}`}>{children}</span>;
};

TitleThree.defaultProps = {
  align: AlignEnum.LEFT,
};

export default TitleThree;
