import React, { forwardRef, useImperativeHandle } from "react";
import { SmallButtonVariantEnum } from "../../../enums";
import { SmallButton } from "../Buttons";

import "./styles.scss";

const Modal = ({ title, children, onClose }, ref) => {
  const onClickModal = (event) => {
    if (event.target.id === "outer") {
      onClose();
    }
  };

  const scrollContentToTop = () => {
    const content = document.getElementById("modal-content");
    content.scrollTop = 0;
  };

  useImperativeHandle(
    ref,
    () => ({
      scrollContentToTop,
    }),
    []
  );

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
        <div className="modal-content-main" id="modal-content">
          <div className="default-padding">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
