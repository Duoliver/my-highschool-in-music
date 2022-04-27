import React from "react";
import { AlignEnum, SmallButtonVariantEnum } from "../../../enums";
import { SmallButton } from "../../atoms/Buttons";
import { Text, TitleTwo } from "../../atoms/typography";

import "./styles.scss";

const Paginator = ({
  previousItemName,
  nextItemName,
  currentIndex,
  setCurrentIndex,
  limit,
}) => {
  return (
    <div className="paginator">
      <div className="paginator-buttons">
        <SmallButton
          variant={SmallButtonVariantEnum.ARROW_LEFT}
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        />
        <Text align={AlignEnum.CENTER} className="paginator-buttons-index">
          {`${Number(currentIndex) + 1} / ${limit}`}
        </Text>
        <SmallButton
          variant={SmallButtonVariantEnum.ARROW_RIGHT}
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex + 1 === limit}
        />
      </div>
      <div className="paginator-spoiler">
        <TitleTwo align={AlignEnum.LEFT} uppercase>
          {previousItemName || ""}
        </TitleTwo>
        <TitleTwo align={AlignEnum.RIGHT} uppercase>
          {nextItemName || ""}
        </TitleTwo>
      </div>
    </div>
  );
};

export default Paginator;
