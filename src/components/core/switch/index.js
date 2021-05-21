import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as LightSvg } from "assets/light-mode.svg";
import { ReactComponent as DarkSvg } from "assets/dark-mode.svg";

const Switch = ({ value, setValue }) => (
  <div className="switch__container">
    <button
      aria-label={value ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setValue(!value)}
      className={classNames("switch__btn", { active: value })}
    >
      {value ? <LightSvg /> : <DarkSvg />}
    </button>
  </div>
);

Switch.propTypes = {
  value: PropTypes.bool,
  setValue: PropTypes.func,
};

export default Switch;
