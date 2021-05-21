import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const ProgressBar = ({ score, questionNumber }) => {
  const width = (questionNumber / 10) * 100;
  return (
    <div id="hud" className="progress-container">
      <div className="hud-item">
        <p className="hud-prefix" tabIndex={0}>
          Question {questionNumber}/10
        </p>
        <div id="progressBar">
          <div id="progressBarFull" style={{ width: `${width + 1}%` }}></div>
        </div>
      </div>
      <div className="hud-item">
        <p className="hud-prefix">Score</p>
        <h2 className="score" tabIndex={0} aria-label={`Score is ${score}`}>
          {score}
        </h2>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  score: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

export default ProgressBar;
