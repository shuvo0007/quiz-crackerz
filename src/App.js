import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
