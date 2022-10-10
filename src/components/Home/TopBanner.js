import React from "react";
import logo from "../image/title.gif";
const TopBanner = () => {
  return (
    <div className="w-full mb-5 p-10 bg-slate-500 flex justify-center">
      <img className="w-10 rounded-full mx-5" src={logo} alt="logo" />
      <h2 className="text-3xl">
        Welcome to the Quiz Treasure Website. Text your skills today
      </h2>
      <img className="w-10 rounded-full mx-5" src={logo} alt="logo" />
    </div>
  );
};

export default TopBanner;
