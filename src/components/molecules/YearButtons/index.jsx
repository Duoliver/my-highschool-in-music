import React from "react";
import { SquareButton } from "../../atoms/Buttons";

import "./styles.scss";

const YearButtons = () => {
  const years = {
    17: "link",
    18: "link",
    19: "link",
    20: "link",
  };

  return (
    <menu className="year-buttons">
      {Object.keys(years).map((year) => (
        <SquareButton>{`\`${year}`}</SquareButton>
      ))}
    </menu>
  );
};

export default YearButtons;
