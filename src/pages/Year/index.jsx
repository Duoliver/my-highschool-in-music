import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, TitleOne, TitleTwo } from "../../components/atoms/typography";
import { Collage, YearButtons } from "../../components/molecules";
import { AlignEnum } from "../../enums";
import { YearData } from "../../database/classes";
import database from "../../database";
import { isFirefox } from "../../utils";

import "./styles.scss";

const Year = () => {
  const { yearId } = useParams();

  const [data, setData] = useState(new YearData("", "", "", []));

  const handleOpenModal = useCallback((index) => {
    return index;
  }, []);

  useEffect(() => {
    if (yearId) {
      setData(database[yearId]);
    }
  }, [yearId]);

  return (
    <main className="year">
      <section className="info">
        <div className="content">
          <div className="collage-wrapper">
            {data.albums?.length && (
              <Collage
                albums={data.albums}
                onClick={(i) => handleOpenModal(i)}
              />
            )}
          </div>
          <div className="text-wrapper">
            <TitleOne breakWord={isFirefox} align={AlignEnum.RIGHT} textMargin>
              {data.year}
            </TitleOne>
            <TitleTwo align={AlignEnum.RIGHT} textMargin>
              {data.title}
            </TitleTwo>
            <Text align={AlignEnum.JUSTIFY} textMargin>
              {data.text}
            </Text>
          </div>
          <div className="years-wrapper">
            <YearButtons current={yearId} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Year;
