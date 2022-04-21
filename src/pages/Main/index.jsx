import React from "react";
import { WideButton } from "../../components/atoms/Buttons";
import { Arrow, LogoPortuguese } from "../../components/svgs";

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
    </div>
  );
};

export default Main;
