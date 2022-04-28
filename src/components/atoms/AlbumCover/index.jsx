import React from "react";

import "./styles.scss";

const AlbumCover = ({ src, onClick, artist, name }) => {
  const albumProps = {
    className: "album-cover",
    style: {
      backgroundImage: `url(${src})`,
    },
  };

  if (onClick) {
    return (
      <button
        title={`${artist} - ${name}`}
        {...albumProps}
        onClick={onClick}
      ></button>
    );
  }
  return <div {...albumProps} />;
};

AlbumCover.defaultProps = {
  artist: "",
  name: "",
};

export default AlbumCover;
