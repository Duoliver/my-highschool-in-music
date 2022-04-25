import React from "react";
import { AlignEnum } from "../../../enums";
import { isFirefox } from "../../../utils";
import Modal from "../../atoms/Modal";
import { TitleOne } from "../../atoms/typography";

import "./styles.scss";

const AlbumModal = ({ title, onClose }) => {
  return (
    <Modal
      title={
        <TitleOne small breakWord={isFirefox} align={AlignEnum.LEFT}>
          {title}
        </TitleOne>
      }
      onClose={onClose}
    >
      <div className="album-modal"></div>
    </Modal>
  );
};

export default AlbumModal;
