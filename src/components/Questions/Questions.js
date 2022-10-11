import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const allInfo = useLoaderData();
  const questions = allInfo.data.questions;

  return (
    <div>
      {questions.map((questionDiv) => (
        <Question key={questionDiv.id} questionDiv={questionDiv}></Question>
      ))}
    </div>
  );
};

export default Questions;
