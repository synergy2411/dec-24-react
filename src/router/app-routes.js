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
import NotFoundPage from "../pages/not-found/page-not-found";
import TodoPage from "../pages/todo/todo";

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
            loader: CourseDetailLoader,
            id: "course-detail-loader",
            children: [
              {
                index: true,
                element: <CourseDetailPage />,
                action: CourseAction,
              },
              {
                path: "edit",
                element: <CourseEditPage />,
                action: CourseEditAction,
              },
            ],
          },
        ],
      },
      {
        path: "/todos",
        element: <TodoPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
