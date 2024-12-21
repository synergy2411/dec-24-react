import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Expenses from "./components/Expenses/Expenses";
import HomePage from "./pages/home/home";
import ContactUsPage from "./pages/contact/contact";
import RootLayoutPage from "./pages/root-layout/root-layout";
import CoursesPage, { CoursesLoader } from "./pages/courses/courses";
import CourseDetailPage, {
  CourseDetailLoader,
} from "./pages/courses/course-details";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <RootLayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
        loader: CoursesLoader,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetailPage />,
        loader: CourseDetailLoader,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
