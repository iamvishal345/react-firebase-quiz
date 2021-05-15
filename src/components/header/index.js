import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div id="top-heading">
        <Link to="/">
          <h2>
            <span id="fire">Trivia </span>
            <span id="quiz">Junkies</span>
          </h2>
        </Link>
      </div>
    </>
  );
}
