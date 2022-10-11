import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Main.css";

const main = () => {
  return (
    <div className="home-container">
      <Header className="fixed"></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default main;
