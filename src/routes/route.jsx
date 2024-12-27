import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AllCourses from "../pages/AllCourses";
import CreateCourse from "../pages/CreateCourse";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/all-courses",
        element: (
          <ProtectedRoute>
            <AllCourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-course",
        element: (
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <h2>404 Not Found</h2>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
 
]);

export default router;
