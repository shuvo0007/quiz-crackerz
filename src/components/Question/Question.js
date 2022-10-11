import React from "react";

const Question = ({ questionDiv }) => {
  const { options, question, correctAnswer } = questionDiv;
  return (

    <div className=" border-2 border-green-500 shadow-lg shadow-green-500/50 rounded-2xl bg-green-700/20 hover:bg-green-800">
      <h2 className="text-4xl m-5 ">
        
        {question.replace(/(<([^>]+)>)|&nbsp;/gi, " ")}
      </h2>
      <div className="flex flex-wrap justify-between drop-shadow-lg ">
        {options.map((option) => (
          <button className="shadow-lg shadow-blue-500/50 border-2 border-sky-700 w-64 p-2 rounded-xl m-5 text-2xl bg-blue-900/50 hover:bg-blue-700">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
