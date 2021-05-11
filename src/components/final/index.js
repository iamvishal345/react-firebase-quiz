import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { saveScoreDocument } from "server/Firebase";
export default function SaveScoreForm({ score, name }) {
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
      {loading && <div id="loader" />}

      {!loading && (
        <div className="container">
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
}
