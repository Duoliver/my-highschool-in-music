import React from "react";
import { useParams } from "react-router-dom";
import { TitleOne } from "../../components/atoms/typography";
import { YearButtons } from "../../components/molecules";
import { AlignEnum } from "../../enums";

import "./styles.scss";

const Year = () => {
  const { yearId } = useParams();

  return (
    <main className="year">
      <section className="info">
        <div className="content">
          <TitleOne align={AlignEnum.RIGHT} textMargin>
            {`20${yearId}`}
          </TitleOne>
        </div>
        <div className="content">
          <YearButtons current={yearId} />
        </div>
      </section>
    </main>
  );
};

export default Year;
