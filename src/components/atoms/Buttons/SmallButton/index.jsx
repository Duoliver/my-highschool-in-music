import React from "react";
import { SmallButtonVariantEnum } from "../../../../enums";
import "./styles.scss";
import { Cross, Arrow } from "../../../svgs";

const SmallButton = ({ onClick, variant, disabled }) => {
  return (
    <button className="small-button" onClick={onClick} disabled={disabled}>
      {variant ? iconVariants[variant] : null}
    </button>
  );
};

const iconVariants = {
  [SmallButtonVariantEnum.CROSS]: <Cross />,
  [SmallButtonVariantEnum.ARROW_UP]: <Arrow point="up" />,
  [SmallButtonVariantEnum.ARROW_RIGHT]: <Arrow point="right" />,
  [SmallButtonVariantEnum.ARROW_DOWN]: <Arrow point="down" />,
  [SmallButtonVariantEnum.ARROW_LEFT]: <Arrow point="left" />,
};

SmallButton.defaultProps = {
  onClick: (e) => e,
  disabled: false,
};

export default SmallButton;
