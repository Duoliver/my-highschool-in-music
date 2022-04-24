import React, { useCallback } from "react";
import AlbumCover from "../../atoms/AlbumCover";

import PropTypes from "prop-types";

import "./styles.scss";

const Collage = ({ albums, onClick }) => {
  const getMainAlbum = useCallback(() => {
    return albums[0];
  }, [albums]);

  const getMediumAlbums = useCallback(() => {
    return [albums[1], albums[2]];
  }, [albums]);

  const getSmallAlbums = useCallback(() => {
    return albums.slice(3, 11)?.map((album) => album);
  }, [albums]);

  const mapLesserAlbums = (firstIndex) => {
    return ({ artworkUrl, artist, name }, index) => (
      <AlbumCover
        key={Math.random()}
        src={artworkUrl}
        artist={artist}
        name={name}
        onClick={() => onClick(index + firstIndex)}
      />
    );
  };

  return (
    <div className="collage">
      <AlbumCover
        src={getMainAlbum()?.artworkUrl}
        artist={getMainAlbum()?.artist}
        name={getMainAlbum()?.name}
        onClick={() => onClick(0)}
      ></AlbumCover>
      <div className="medium">{getMediumAlbums().map(mapLesserAlbums(1))}</div>
      <div className="small">{getSmallAlbums().map(mapLesserAlbums(3))}</div>
    </div>
  );
};

Collage.defaultProps = {
  onClick: () => {},
};

Collage.propTypes = {
  albums: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default Collage;
