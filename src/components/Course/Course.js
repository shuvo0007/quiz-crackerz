import React from "react";
import { Link } from "react-router-dom";
import Question from "../Question/Question";

const Course = ({ course }) => {
  const { id, name, logo, total } = course;

  return (
    <div className="bg-slate-400 bg-transparent rounded-lg border-2 border-blue-400 flex flex-col p-10 text-white gap-3">
      <img className="" src={logo} alt="" />
      <h2 className="text-3xl font-bolder text-center">{name}</h2>
      <p className="text-xl text-center">Total Question: {total}</p>
      <button
        
        className="text-white w-full bg-blue-500 rounded-lg p-5"
      >
        <Link className="text-white" to={`/questions/${id}`}>
          <span>Start Quiz</span>
        </Link>
      </button>
    </div>
  );
};

export default Course;
