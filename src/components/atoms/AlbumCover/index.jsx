import React from "react";

import "./styles.scss";

const AlbumCover = ({ src, onClick }) => {
  const albumProps = {
    className: "album-cover",
    style: {
      backgroundImage: `url(${src})`,
    },
  };

  if (onClick) {
    return <button {...albumProps} onClick={onClick}></button>;
  }
  return <div {...albumProps} />;
};

export default AlbumCover;
