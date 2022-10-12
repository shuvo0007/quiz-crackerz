import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const allInfo = useLoaderData();
  const questions = allInfo.data.questions;
  console.log(allInfo);

  return (
    <div className=" text-white">
      <div className=" flex flex-col items-center">
        <h1 className="text-6xl m-10">{allInfo.data.name}</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 drop-shadow-lg w-2/3">
          {questions.map((questionDiv) => (
            <Question key={questionDiv.id} questionDiv={questionDiv}></Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
