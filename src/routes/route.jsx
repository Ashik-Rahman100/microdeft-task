import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Courses from "../pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element: <Courses />
      }
    ]
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/Register",
    element: <App />,
  },
]);

export default router;
