import { createBrowserRouter } from "react-router-dom";
import RootLayoutPage from "../pages/root-layout/root-layout";
import HomePage from "../pages/home/home";
import Expenses from "../components/Expenses/Expenses";
import CoursesPage, { CoursesLoader } from "../pages/courses/courses";
import NewCoursePage, { NewCourseAction } from "../pages/courses/new-course";
import CourseDetailPage, {
  CourseDetailLoader,
  CourseAction,
} from "../pages/courses/course-details";
import CourseEditPage, { CourseEditAction } from "../pages/courses/course-edit";
import ContactUsPage from "../pages/contact/contact";
import ErrorPage from "../pages/error/error-page";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
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
        children: [
          {
            path: "new",
            element: <NewCoursePage />,
            action: NewCourseAction,
          },
          {
            path: ":courseId",
            element: <CourseDetailPage />,
            loader: CourseDetailLoader,
            action: CourseAction,
          },
          {
            path: ":courseId/edit",
            element: <CourseEditPage />,
            loader: CourseDetailLoader,
            action: CourseEditAction,
          },
        ],
      },

      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);

export default router;
