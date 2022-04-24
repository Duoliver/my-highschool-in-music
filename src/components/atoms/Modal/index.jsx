import React from "react";
import { SmallButtonVariantEnum } from "../../../enums";
import { SmallButton } from "../Buttons";

import "./styles.scss";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-outer" onClick={onClose}>
      <div className="modal-content">
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
