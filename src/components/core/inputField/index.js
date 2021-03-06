import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const InputField = ({ value, setValue, name, id, label, type, ariaLabel }) => (
  <div className="form-input">
    <input
      type={type || "text"}
      name={name}
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value.trimStart())}
    />
    <label
      aria-label={ariaLabel}
      className={`form-input-label ${value && "input-value"}`}
      htmlFor={name}
    >
      {label}
    </label>
  </div>
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default InputField;
