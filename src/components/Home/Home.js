import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import TopBanner from "./TopBanner";

const Home = () => {
  const allCourses = useLoaderData();
  const courses = allCourses.data;
  return (
    <div className="">
      <TopBanner></TopBanner>

      <div className="md:grid md:grid-cols-3 gap-20 md:mx-80 mx-10 ">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Home;
