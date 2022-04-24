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

  const getMainArtwork = useCallback(() => {
    return data.albums[0]?.artworkUrl;
  }, [data.albums]);

  const getMediumArtworks = useCallback(() => {
    return [data.albums[1]?.artworkUrl, data.albums[2]?.artworkUrl];
  }, [data.albums]);

  const getSmallArtworks = useCallback(() => {
    return data.albums.slice(3, 11).map((album) => album.artworkUrl);
  }, [data.albums]);

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
                main={getMainArtwork()}
                medium={getMediumArtworks()}
                small={getSmallArtworks()}
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
