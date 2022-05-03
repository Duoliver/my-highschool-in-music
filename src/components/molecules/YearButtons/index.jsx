import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../routes";

import { SquareButton } from "../../atoms/Buttons";
import { Small17, Small18, Small19, Small20 } from "../../svgs";

import "./styles.scss";

const YearButtons = ({ current }) => {
  const navigate = useNavigate();

  const years = {
    17: <Small17 />,
    18: <Small18 />,
    19: <Small19 />,
    20: <Small20 />,
  };

  return (
    <menu className="year-buttons">
      {Object.keys(years).map((year) => {
        return (
          <SquareButton
            disabled={current === year}
            key={Math.random()}
            onClick={() => navigate(`${routes.YEAR_ROOT}/${year}`)}
          >
            {years[year]}
          </SquareButton>
        );
      })}
    </menu>
  );
};

export default YearButtons;
