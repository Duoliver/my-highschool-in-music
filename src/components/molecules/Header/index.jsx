import React from "react";
import { SmallButtonVariantEnum } from "../../../enums";
import { SmallButton } from "../../atoms/Buttons";
import { TitleTwo } from "../../atoms/typography";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <SmallButton variant={SmallButtonVariantEnum.PLAY} />
      <TitleTwo uppercase>Meu Colegial Em Música 2017-2021/1</TitleTwo>
    </header>
  );
};

export default Header;
