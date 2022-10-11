import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/layouts/Main";
import NotFound from "./components/NotFound/NotFound";
import Question from "./components/Question/Question";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        { path: "statistics", element: <Statistics></Statistics> },
        { path: "blog", element: <Blog></Blog> },
        {
          path: "/questions/:questionId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.questionId}`
            );
          },
          element: <Question></Question>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
