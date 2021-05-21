import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import Switch from "components/core/switch";
function Header({ value, setValue }) {
  return (
    <div className="header">
      <Link to="/">
        <h2>
          <span id="fire">Trivia </span>
          <span id="quiz">Junkies</span>
        </h2>
      </Link>
      <div>
        <div></div>
        <Switch value={value} setValue={setValue} />
      </div>
    </div>
  );
}

Header.propTypes = {
  value: PropTypes.bool,
  setValue: PropTypes.func,
};

export default Header;
