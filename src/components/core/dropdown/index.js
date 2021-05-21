import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ label, body }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__label">{label}</div>
      <div className="dropdown__body">{body}</div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
  body: PropTypes.element,
};

export default Dropdown;
