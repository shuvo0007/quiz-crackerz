import React from "react";
import title from "../image/title.png";
import menu from "../image/menu.svg";
import home from "../image/home.svg";
import stats from "../image/stats.svg";
import blog from "../image/blog.svg";
import { Link } from "react-router-dom";

const Header = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex">
              <img className="w-10 rounded-full mx-5" src={title} alt="logo" />
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="/"
              >
                Quiz Treasure
              </a>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img className="w-7" src={menu} alt="menu" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <img className="w-6" src={home} alt="home" />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/statistics"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <img className="w-6" src={stats} alt="statistics" />
                  <span className="ml-2">Statistics</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <img className="w-6" src={blog} alt="blog" />
                  <span className="ml-2">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
