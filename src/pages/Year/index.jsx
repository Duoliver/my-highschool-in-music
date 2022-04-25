import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, TitleOne, TitleTwo } from "../../components/atoms/typography";
import { Collage, YearButtons } from "../../components/molecules";
import { AlignEnum } from "../../enums";
import { YearData } from "../../database/classes";
import database from "../../database";
import { isFirefox } from "../../utils";

import "./styles.scss";
import AlbumModal from "../../components/organisms/AlbumModal";

const Year = () => {
  const { yearId } = useParams();

  const [data, setData] = useState(new YearData("", "", "", []));
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (index) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            <Text className="album-hint" textMargin>
              Clique em um disco para saber mais sobre
            </Text>
          </div>
          <div className="years-wrapper">
            <YearButtons current={yearId} />
          </div>
        </div>
      </section>
      {showModal && <AlbumModal title={data.year} onClose={handleCloseModal} />}
    </main>
  );
};

export default Year;
