import React from "react";
import AlbumCover from "../../atoms/AlbumCover";

import PropTypes from "prop-types";

import "./styles.scss";

const Collage = ({ main, medium, small }) => {
  return (
    <div className="collage">
      <AlbumCover src={main}></AlbumCover>
      <div className="medium">
        {medium.map((src) => (
          <AlbumCover key={Math.random()} src={src} />
        ))}
      </div>
      <div className="small">
        {small.map((src) => (
          <AlbumCover key={Math.random()} src={src} />
        ))}
      </div>
    </div>
  );
};

Collage.defaultProps = {
  medium: [],
  small: [],
};

Collage.propTypes = {
  main: PropTypes.string.isRequired,
  medium: PropTypes.arrayOf(PropTypes.string).isRequired,
  small: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collage;
