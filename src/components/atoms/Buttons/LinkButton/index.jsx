import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ExternalReference } from "../../../svgs";
import "./styles.scss";

const LinkButton = ({ children, onClick, disabled, isExternal }) => {
  const renderExternalIcon = () => {
    return isExternal ? <ExternalReference /> : <Fragment />;
  };

  return (
    <button className="link-button" onClick={onClick} disabled={disabled}>
      {children}
      {renderExternalIcon()}
    </button>
  );
};

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isExternal: PropTypes.bool,
};

LinkButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  isExternal: false,
};

export default LinkButton;
