import React from "react";
import { SmallButtonVariantEnum } from "../../../enums";
import { SmallButton } from "../Buttons";

import "./styles.scss";

const Modal = ({ title, children, onClose }) => {
  const onClickModal = (event) => {
    if (event.target.id === "outer") {
      onClose();
    }
  };

  return (
    <div className="modal-outer" id="outer" onClick={onClickModal}>
      <div className="modal-content content">
        <div className="modal-content-header default-padding">
          {title}
          <SmallButton
            variant={SmallButtonVariantEnum.CROSS}
            onClick={onClose}
          />
        </div>
        <div className="modal-content-main">
          <div className="default-padding">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
