import React from "react";
import { AlignEnum } from "../../../enums";
import { isFirefox } from "../../../utils";
import AlbumCover from "../../atoms/AlbumCover";
import { WideButton } from "../../atoms/Buttons";
import Modal from "../../atoms/Modal";
import { Text, TitleOne, TitleThree, TitleTwo } from "../../atoms/typography";
import { Paginator } from "../../molecules";

import "./styles.scss";

const AlbumModal = ({
  title,
  onClose,
  albums,
  currentIndex,
  setCurrentIndex,
}) => {
  const album = albums[currentIndex] || {};

  const formatAlbumName = (album) => {
    if (!album) return "";

    return `${album.name} (${album.year})`;
  };

  return (
    <Modal
      title={
        <TitleOne small breakWord={isFirefox} align={AlignEnum.LEFT}>
          {title}
        </TitleOne>
      }
      onClose={onClose}
    >
      <div className="album-modal">
        <div className="artwork-area">
          <AlbumCover src={album.artworkUrl} />
        </div>
        <div className="data-area">
          <TitleTwo align={AlignEnum.LEFT} textMargin uppercase>
            {album.name}
          </TitleTwo>
          <TitleThree align={AlignEnum.LEFT} textMargin>
            {album.artist}
          </TitleThree>
          <Text align={AlignEnum.LEFT} textMargin>
            {album.year}
          </Text>
        </div>
        <div className="play-area">
          <WideButton disabled>REPRODUZIR</WideButton>
        </div>
        <div className="text-area">
          {album.text.split("\n").map((paragraph) => (
            <Text align={AlignEnum.JUSTIFY} textMargin>
              {paragraph}
            </Text>
          ))}
        </div>
        <div className="page-area">
          <Paginator
            previousItemName={formatAlbumName(albums[currentIndex - 1])}
            nextItemName={formatAlbumName(albums[currentIndex + 1])}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            limit={albums.length}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AlbumModal;
