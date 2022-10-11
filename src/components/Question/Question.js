import React from "react";

const Question = ({ questionDiv }) => {
  const { options, question, correctAnswer } = questionDiv;
  return (
    <div>
      <h2>{question.replace(/(<([^>]+)>)|&nbsp;/gi, " ")}</h2>
      <div>
        {options.forEach((option) => {
          console.log(option);
          <li>{option}</li>;
        })}
      </div>
    </div>
  );
};

export default Question;
