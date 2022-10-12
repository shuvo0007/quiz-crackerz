import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ questionDiv }) => {
  const { options, question, correctAnswer } = questionDiv;
  function correctAnswerCheck(clickedOption) {
    toast.success("Your Answer is CORRECT", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    if (correctAnswer === clickedOption) {
    } else {
      toast.error("Your Answer is WRONG!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <div className=" border-2 border-green-500 shadow-lg shadow-green-500/50 rounded-2xl bg-green-700/20 hover:bg-green-800">
      <div>
        <h2 className="text-4xl m-5 ">
          {question.replace(/(<([^>]+)>)|&nbsp;/gi, " ")}
        </h2>
        <div className="flex flex-wrap justify-between drop-shadow-lg ">
          {options.map((option) => (
            
            <button
              onClick={() => correctAnswerCheck(option)}
              className="shadow-lg shadow-blue-500/50 border-2 border-sky-700 w-64 p-2 rounded-xl m-5 text-2xl bg-blue-900/50 hover:bg-blue-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Question;
