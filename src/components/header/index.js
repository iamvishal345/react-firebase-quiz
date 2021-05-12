import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div id="top-heading">
        <Link to="/">
          <h2>
            <span id="fire">Quiz</span>
            <span id="quiz">Quiz</span>
          </h2>
        </Link>
      </div>
    </>
  );
}
