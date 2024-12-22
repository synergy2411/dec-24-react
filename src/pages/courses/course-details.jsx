import { json, redirect, useRouteLoaderData } from "react-router-dom";
import CourseDetail from "../../components/Courses/CourseDetail";

function CourseDetailPage() {
  // const course = useLoaderData();

  const course = useRouteLoaderData("course-detail-loader");

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;

export async function CourseDetailLoader({ params }) {
  const response = await fetch(
    `http://localhost:3030/courses/${params.courseId}`
  );
  if (!response.ok) {
    throw json(
      { message: "Unable to fetch course for " + params.courseId },
      { status: 404 }
    );
  }
  return response;
}

export async function CourseAction({ request, params }) {
  const response = await fetch(
    `http://localhost:3030/courses/${params.courseId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Unable to delete course for " + params.courseId },
      { status: 404 }
    );
  }

  return redirect("/courses");
}
