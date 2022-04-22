import React from "react";

import "./styles.scss";

const AlbumCover = ({ src }) => {
  return (
    <div className="album-cover" style={{ backgroundImage: `url(${src})` }} />
  );
};

export default AlbumCover;
