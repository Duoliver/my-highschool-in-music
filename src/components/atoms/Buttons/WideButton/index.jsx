import React from "react";
import { AlignEnum } from "../../../../enums";

import { TitleThree } from "../../typography";

import "./styles.scss";

const WideButton = ({ onClick, children, disabled, compressed }) => {
  return (
    <button
      className={`wide-button ${compressed && "compressed"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <TitleThree align={AlignEnum.CENTER}>{children}</TitleThree>
    </button>
  );
};

WideButton.defaultProps = {
  onClick: (e) => e,
  disabled: false,
  compressed: false,
};

export default WideButton;
