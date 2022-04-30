import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";

import { SquareButton } from "../../atoms/Buttons";

import "./styles.scss";

const YearButtons = ({ current }) => {
  const navigate = useNavigate();

  const years = [17, 18, 19, 20];

  return (
    <menu className="year-buttons">
      {years.map((year) => {
        return (
          <SquareButton
            disabled={Number(current) === year}
            key={Math.random()}
            onClick={() => navigate(`${routes.YEAR_ROOT}/${year}`)}
          >
            {`\`${year}`}
          </SquareButton>
        );
      })}
    </menu>
  );
};

export default YearButtons;
