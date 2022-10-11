import React from "react";
import { useLoaderData } from "react-router-dom";

const Question = () => {
  const allInfo = useLoaderData();
  const questions = allInfo.data.questions;
  console.log(questions);
  return <div></div>;
};

export default Question;
