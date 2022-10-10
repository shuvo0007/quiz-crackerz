import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[

      ]
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
