import React from "react";
import { AlignEnum } from "../../../../enums";
import "./styles.scss";

const TitleTwo = ({ children, align }) => {
  return <div className={`title-two ${align}`}>{children}</div>;
};

TitleTwo.defaultProps = {
  align: AlignEnum.LEFT,
};

export default TitleTwo;
