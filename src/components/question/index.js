import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const Question = ({ question, changeQuestion }) => {
  const [classToApply, setClassToApply] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);
  const [answer, setAnswer] = useState(-1);
  const [time, setTime] = useState(30);

  const moveToNextQuestion = useCallback(
    (bonus) => {
      setTimeout(() => {
        setSelectedAnswer(-1);
        setAnswer(-1);
        setAnswering(false);
        changeQuestion(bonus || 0);
        setTime(30);
      }, 1000);
    },
    [changeQuestion]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
      if (time === 1) {
        clearInterval(timer);
        moveToNextQuestion(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [question, time, changeQuestion, moveToNextQuestion]);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === question.answer ? "correct" : "incorrect";
    setClassToApply(classToApply);
    setAnswer(question.answer);
    const bonus = selectedAnswer === question.answer ? 10 : 0;
    moveToNextQuestion(bonus);
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
      <div
        className={classNames("timer", {
          mid: time <= 20,
          low: time <= 10,
        })}
      >
        {time}
      </div>
      {question.answerChoices.map((choice, index) => (
        <div
          key={index}
          className={`choice-container ${
            selectedAnswer === index && classToApply
          } ${answer === index && "correct"}`}
          onClick={() => checkAnswer(index)}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p
            className="choice-text"
            dangerouslySetInnerHTML={{ __html: choice }}
          ></p>
        </div>
      ))}
    </div>
  );
};
Question.propTypes = {
  question: PropTypes.shape({
    answer: PropTypes.number,
    question: PropTypes.string,
    answerChoices: PropTypes.arrayOf(PropTypes.string),
  }),
  changeQuestion: PropTypes.func.isRequired,
};

export default Question;
