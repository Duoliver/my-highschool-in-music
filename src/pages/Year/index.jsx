import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, TitleOne, TitleTwo } from "../../components/atoms/typography";
import { YearButtons } from "../../components/molecules";
import { AlignEnum } from "../../enums";
import database from "../../database";
import { YearData } from "../../database/classes";

import "./styles.scss";
import AlbumCover from "../../components/atoms/AlbumCover";

const Year = () => {
  const { yearId } = useParams();

  const [data, setData] = useState(new YearData("", "", "", []));

  useEffect(() => {
    if (yearId) {
      setData(database[yearId]);
    }
  }, [yearId]);

  return (
    <main className="year">
      <section className="info">
        <div className="content">
          <div className="left">
            <AlbumCover src={data.albums[0]?.artworkUrl} />
          </div>
          <div className="right">
            <div>
              <TitleOne align={AlignEnum.RIGHT} textMargin>
                {data.year}
              </TitleOne>
              <TitleTwo align={AlignEnum.RIGHT} textMargin>
                {data.title}
              </TitleTwo>
              <Text align={AlignEnum.JUSTIFY} textMargin>
                {data.text}
              </Text>
            </div>
            <div>
              <YearButtons current={yearId} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Year;
