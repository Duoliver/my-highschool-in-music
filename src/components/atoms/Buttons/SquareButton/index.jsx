import React from "react";
import { AlignEnum } from "../../../../enums";

import { TitleOne } from "../../typography";

import PropTypes from "prop-types";

import "./styles.scss";

const SquareButton = ({ onClick, children, disabled }) => {
  return (
    <button className="square-button" onClick={onClick} disabled={disabled}>
      {children.split(" ").map((text) => (
        <TitleOne align={AlignEnum.CENTER} small>
          {text}
        </TitleOne>
      ))}
    </button>
  );
};

SquareButton.defaultProps = {
  onClick: (e) => e,
  disabled: false,
};

SquareButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SquareButton;
