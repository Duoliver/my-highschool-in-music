import React from "react";

const Arrow = ({ color, point }) => {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25781 10.541L11.3154 0.125977H14.1133L8.57617 12.6357H6.8623L7.25781 10.541ZM3.68359 0.125977L7.8291 10.5703L8.13672 12.6357H6.4375L0.885742 0.125977H3.68359Z"
        transform={`rotate(${angles[point]}, 7.5, 7.5)`}
        fill={color}
      />
    </svg>
  );
};

const angles = {
  down: 0,
  left: 90,
  up: 180,
  right: 270,
};

Arrow.defaultProps = {
  color: "black",
  point: "down",
};

export default Arrow;
