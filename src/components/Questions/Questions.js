import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const allInfo = useLoaderData();
  const questions = allInfo.data.questions;

  return (
    <div className="flex justify-center  text-white">
      <div className="flex flex-col gap-10 drop-shadow-lg w-2/3">
        {questions.map((questionDiv) => (
          <Question key={questionDiv.id} questionDiv={questionDiv}></Question>
        ))}
      </div>
    </div>
  );
};

export default Questions;
