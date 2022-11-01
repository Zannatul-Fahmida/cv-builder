import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import Signup from "./pages/Login/Signup/Signup";
import CreateCv from "./pages/CreateCv/CreateCv/CreateCv";
import CvForm from "./pages/CreateCv/CvForm/CvForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "signup",
    element: <Signup />,
    errorElement: <NotFound />,
  },
  {
    path: "createCv",
    element: <CreateCv />,
    errorElement: <NotFound />,
  },
  {
    path: "cvForm",
    element: <CvForm />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
