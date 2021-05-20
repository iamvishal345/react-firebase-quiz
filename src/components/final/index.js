import React, { useEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { Loader } from "components/loader";
import { Link } from "react-router-dom";
import { saveScoreDocument } from "server/Firebase";

const SaveScoreForm = ({ score, name }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        await saveScoreDocument(name, score);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [score, name]);

  return (
    <React.Fragment>
      {loading && <Loader />}

      {!loading && (
        <div className="final-container">
          <h1>Score: {score}</h1>
          <Link to="/highScores" className="btn">
            Check Leader Board
          </Link>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

SaveScoreForm.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default SaveScoreForm;
