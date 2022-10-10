import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/layouts/Main";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [],
    },
    { 
      path: "*",
      element: <NotFound></NotFound> 
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
