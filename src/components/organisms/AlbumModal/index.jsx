import React from "react";
import { AlignEnum } from "../../../enums";
import { isFirefox } from "../../../utils";
import AlbumCover from "../../atoms/AlbumCover";
import { WideButton } from "../../atoms/Buttons";
import Modal from "../../atoms/Modal";
import { Text, TitleOne, TitleThree, TitleTwo } from "../../atoms/typography";

import "./styles.scss";

const AlbumModal = ({ title, onClose, album }) => {
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
          <WideButton>REPRODUZIR</WideButton>
        </div>
        <div className="text-area">
          <Text align={AlignEnum.JUSTIFY} textMargin>
            {album.text}
          </Text>
        </div>
      </div>
    </Modal>
  );
};

export default AlbumModal;
