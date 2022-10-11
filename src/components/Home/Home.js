import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import TopBanner from "./TopBanner";
import './Home.css';

const Home = () => {
  const allCourses = useLoaderData();
  const courses = allCourses.data;
  return (
    <div className="home-container">
      <TopBanner></TopBanner>

      <div className="grid grid-cols-3 gap-20 mx-80">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Home;
