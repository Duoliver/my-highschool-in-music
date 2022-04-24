import React from "react";

import "./styles.scss";

const Modal = ({ title, children, onClose }) => {
  return <div className="modal-outer" onClick={onClose}></div>;
};

export default Modal;
