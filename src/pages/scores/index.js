import React, { useEffect, useState } from "react";
import "./style.scss";
import { Loader } from "components/loader";
import { getScores } from "server/Firebase";

export default function HighScores() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScores()
      .then((data) => {
        setLoading(false);
        setScores(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <h1>High Scores</h1>
          <div id="highScoresList">
            {scores &&
              scores.map((record, i) => (
                <li key={i} className="high-score">
                  <span>{record.name}</span> - <span>{record.score}</span>
                </li>
              ))}
          </div>
        </>
      )}
    </>
  );
}
