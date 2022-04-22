import React from "react";
import { WideButton } from "../../components/atoms/Buttons";
import {
  Text,
  TitleOne,
  TitleThree,
  TitleTwo,
} from "../../components/atoms/typography";
import { YearButtons } from "../../components/molecules";
import { Arrow, LogoPortuguese } from "../../components/svgs";
import { AlignEnum } from "../../enums";

import "./styles.scss";

const Main = () => {
  const scrollTo = (target) => {
    document.getElementById(target).scrollIntoView();
  };

  return (
    <main>
      <section className="splash">
        <div />
        <LogoPortuguese />
        <WideButton onClick={() => scrollTo("info")} compressed>
          <Arrow />
        </WideButton>
      </section>
      <section className="info" id="info">
        <div className="content">
          <TitleOne align={AlignEnum.RIGHT} textMargin>
            `17-`21
          </TitleOne>
          <TitleTwo align={AlignEnum.RIGHT} textMargin>
            O QUÊ?
          </TitleTwo>
          <Text align={AlignEnum.JUSTIFY} textMargin>
            Ainda em desenvolvimento.
          </Text>
        </div>
        <div className="content">
          <YearButtons />
        </div>
      </section>
    </main>
  );
};

export default Main;
