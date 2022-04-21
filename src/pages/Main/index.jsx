import React from "react";
import { WideButton } from "../../components/atoms/Buttons";
import { Text, TitleTwo } from "../../components/atoms/typography";
import { Arrow, LogoPortuguese } from "../../components/svgs";
import { AlignEnum } from "../../enums";

import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <section className="splash">
        <div />
        <LogoPortuguese />
        <WideButton compressed>
          <Arrow />
        </WideButton>
      </section>
      <section className="info">
        <TitleTwo align={AlignEnum.RIGHT}>O QUÊ?</TitleTwo>
        <Text align={AlignEnum.JUSTIFY}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          obcaecati culpa. Modi, optio amet assumenda error possimus, corrupti
          natus eius voluptates eligendi sunt, at accusantium labore? Sunt
          aliquam beatae pariatur.
        </Text>
      </section>
    </div>
  );
};

export default Main;
