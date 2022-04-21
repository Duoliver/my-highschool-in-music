import React, { useCallback } from "react";
import { AlignEnum } from "../../../../enums";

import { TitleThree } from "../../typography";

import "./styles.scss";

const WideButton = ({ onClick, children, disabled, compressed }) => {
  const renderChildren = useCallback((children) => {
    if (typeof children === "string") {
      return <TitleThree align={AlignEnum.CENTER}>{children}</TitleThree>;
    }
    return children;
  }, []);

  return (
    <button
      className={`wide-button ${compressed && "compressed"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {renderChildren(children)}
    </button>
  );
};

WideButton.defaultProps = {
  onClick: (e) => e,
  disabled: false,
  compressed: false,
};

export default WideButton;
