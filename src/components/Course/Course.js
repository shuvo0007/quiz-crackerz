import React from "react";

const Course = ({ course }) => {
  const {id, name, logo, total } = course;
  return (
    <div className="bg-slate-500 rounded-lg ">
      <img className="w-3/4 " src={logo} alt="" />
      <h2>Name: {name}</h2>
      <p>Total Question: {total}</p>
      <button>Start quiz</button>
    </div>
  );
};

export default Course;
