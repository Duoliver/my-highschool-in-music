import React, { useRef } from "react";
import { AlignEnum } from "../../../enums";
import { isFirefox } from "../../../utils";
import {
  AlbumCover,
  LinkButton,
  List,
  Modal,
  Text,
  TitleOne,
  TitleThree,
  TitleTwo,
} from "../../atoms";
import { Paginator } from "../../molecules";

import "./styles.scss";

const AlbumModal = ({
  title,
  onClose,
  albums,
  currentIndex,
  setCurrentIndex,
}) => {
  const modalRef = useRef(null);

  const album = albums[currentIndex] || {};

  const formatAlbumName = (album) => {
    if (!album) return "";

    return `${album.name} (${album.year})`;
  };

  const handleCurrentIndexSet = (index) => {
    modalRef.current.scrollContentToTop();
    setCurrentIndex(index);
  };

  return (
    <Modal
      title={
        <TitleOne small breakWord={isFirefox} align={AlignEnum.LEFT}>
          {title}
        </TitleOne>
      }
      onClose={onClose}
      ref={modalRef}
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
          <iframe
            title="Player"
            style={{ borderRadius: 0 }}
            src={`https://open.spotify.com/embed/album/${album.streamingServices[0].id}?utm_source=generator&theme=0`}
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <LinkButton>Escutar em outra plataforma</LinkButton>
        </div>
        <div className="text-area">
          {album.text.split("\n").map((paragraph) => (
            <Text align={AlignEnum.JUSTIFY} key={Math.random()} textMargin>
              {paragraph}
            </Text>
          ))}
          <TitleThree
            align={AlignEnum.LEFT}
            className="text-area-list-title"
            textMargin
          >
            MINHAS FAVORITAS
          </TitleThree>
          <List items={album.favouriteSongs} />
        </div>
        <div className="page-area">
          <Paginator
            previousItemName={formatAlbumName(albums[currentIndex - 1])}
            nextItemName={formatAlbumName(albums[currentIndex + 1])}
            currentIndex={currentIndex}
            setCurrentIndex={handleCurrentIndexSet}
            limit={albums.length}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AlbumModal;
