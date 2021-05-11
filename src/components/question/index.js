import React, { useEffect, useState } from "react";

export default function Question({ question, changeQuestion }) {
  const [classToApply, setClassToApply] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);
  const [answer, setAnswer] = useState(-1);
  const [time, setTime] = useState(30);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;

    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === question.answer ? "correct" : "incorrect";
    setClassToApply(classToApply);
    setAnswer(question.answer);
    const bonus = selectedAnswer === question.answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
      setTime(30);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        clearInterval(timer);
        setTimeout(() => {
          setSelectedAnswer(-1);
          setAnswer(-1);
          setAnswering(false);
          changeQuestion(0);
          setTime(30);
        }, 0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [question, time, changeQuestion]);
  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }}></h3>
      <strong>{time}</strong>
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
}
