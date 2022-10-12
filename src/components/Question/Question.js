import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "../image/eye.svg";

const Question = ({ questionDiv }) => {
  const { options, question, correctAnswer } = questionDiv;
  const notifyTrue = () => {
    toast.success("Your answer is CORRECT", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notifyFalse = () => {
    toast.error("WRONG answer", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notifyShowAnswer = () => {
    toast.info("Your answer is " + correctAnswer, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className=" border-2 border-green-500 shadow-lg shadow-green-500/50 rounded-2xl bg-green-700/20 hover:bg-green-800">
      <div>
        <img
          onClick={() => notifyShowAnswer(correctAnswer)}
          className="w-6 float-right mr-6"
          src={eye}
          alt=""
        />
        <h2 className="text-4xl m-5 ">
          {question.replace(/(<([^>]+)>)|&nbsp;/gi, " ")}
        </h2>
        <div className="flex flex-wrap justify-between drop-shadow-lg ">
          {options.map((option) => (
            <div>
              <button
                onClick={() =>
                  option === correctAnswer ? notifyTrue() : notifyFalse()
                }
                className="shadow-lg shadow-blue-500/50 border-2 border-sky-700 w-64 p-2 rounded-xl m-5 text-2xl bg-blue-900/50 hover:bg-blue-700"
              >
                {option}
              </button>
            </div>
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
