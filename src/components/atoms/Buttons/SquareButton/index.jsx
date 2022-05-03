import React from "react";

import "./styles.scss";

const SquareButton = ({ onClick, children, disabled }) => {
  return (
    <button className="square-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

SquareButton.defaultProps = {
  onClick: (e) => e,
  disabled: false,
};

export default SquareButton;
