import React from "react";
import { AlignEnum } from "../../../enums";
import { Text } from "../typography";

import "./styles.scss";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items?.map((song) => (
        <li key={Math.random()}>
          <Text align={AlignEnum.LEFT}>{song}</Text>
        </li>
      ))}
    </ul>
  );
};

export default List;
