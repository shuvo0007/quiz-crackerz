import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, logo, total } = course;

  return (
    <div className="bg-slate-900 hover:bg-blue-900 bg-transparent rounded-lg border-2 border-blue-400 flex flex-col p-10 text-white gap-3 shadow-lg shadow-blue-500/50">
      <img className="" src={logo} alt="" />
      <h2 className="text-3xl font-bolder text-center">{name}</h2>
      <p className="text-xl text-center">Total Question: {total}</p>
      <Link className="text-white" to={`/questions/${id}`}>
        <button className="text-white w-full bg-blue-500 rounded-lg p-5 shadow-lg shadow-blue-500/50 hover:shadow-green-500/50  hover:bg-green-600">
          <span>Start Quiz</span>
        </button>
      </Link>
    </div>
  );
};

export default Course;
