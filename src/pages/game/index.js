import { useState, useEffect, useCallback } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import Question from "components/question";
import { loadQuestions } from "helpers/QuestionsHelper";
import SaveScoreForm from "components/final";
import ProgressBar from "components/progressBar";
import { Loader } from "components/loader";
import InputField from "components/inputField";

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [fullName, setFullName] = useState("");
  const [haveFullName, setHaveFullName] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);
  const params = useParams();
  useEffect(() => {
    params &&
      loadQuestions({ category: params.gameId })
        .then(setQuestions)
        .catch(console.error);
  }, [params]);

  const changeQuestion = useCallback(
    (bonus = 0) => {
      if (questions.length === 0) {
        setDone(true);
        return setScore(score + bonus);
      }

      const randomQuestionIndex = Math.floor(Math.random() * questions.length);
      const currentQuestion = questions[randomQuestionIndex];
      const remainingQuestions = [...questions];
      remainingQuestions.splice(randomQuestionIndex, 1);

      setQuestions(remainingQuestions);
      setCurrentQuestion(currentQuestion);
      setLoading(false);
      setScore(score + bonus);
      setQuestionNumber(questionNumber + 1);
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setLoading,
      setCurrentQuestion,
      setQuestionNumber,
    ]
  );

  useEffect(() => {
    if (!currentQuestion && questions.length) {
      changeQuestion();
    }
  }, [currentQuestion, questions, changeQuestion]);

  return (
    <>
      {loading && !done && <Loader />}
      {!loading && !done && !haveFullName && (
        <div className="game-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setHaveFullName(true);
            }}
          >
            <InputField
              value={fullName}
              setValue={setFullName}
              id="fullName"
              name="fullName"
              label="Name"
            />
            <button type="submit" className="btn" disabled={!fullName}>
              Next
            </button>
          </form>
        </div>
      )}
      {!loading && !done && haveFullName && currentQuestion && (
        <div>
          <ProgressBar score={score} questionNumber={questionNumber} />
          <Question
            question={currentQuestion}
            changeQuestion={changeQuestion}
          />
        </div>
      )}

      {done && <SaveScoreForm score={score} name={fullName} />}
    </>
  );
}
