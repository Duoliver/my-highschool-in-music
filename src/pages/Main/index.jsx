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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, obcaecati culpa. Modi, optio amet assumenda error
            possimus, corrupti natus eius voluptates eligendi sunt, at
            accusantium labore? Sunt aliquam beatae pariatur.
          </Text>
          <TitleTwo align={AlignEnum.RIGHT} textMargin>
            AGORA VAI
          </TitleTwo>
          <Text align={AlignEnum.JUSTIFY} textMargin>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, obcaecati culpa. Modi, optio amet assumenda error
            possimus, corrupti natus eius voluptates eligendi sunt, at
            accusantium labore? Sunt aliquam beatae pariatur.
          </Text>
          <TitleThree align={AlignEnum.RIGHT} textMargin>
            SERÁ QUE FOI?
          </TitleThree>
          <Text align={AlignEnum.JUSTIFY} textMargin>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, obcaecati culpa. Modi, optio amet assumenda error
            possimus, corrupti natus eius voluptates eligendi sunt, at
            accusantium labore? Sunt aliquam beatae pariatur.
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
