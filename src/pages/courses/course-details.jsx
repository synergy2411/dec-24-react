import { redirect, useLoaderData } from "react-router-dom";
import CourseDetail from "../../components/Courses/CourseDetail";

function CourseDetailPage() {
  const course = useLoaderData();
  return <CourseDetail course={course} />;
}

export default CourseDetailPage;

export async function CourseDetailLoader({ params }) {
  const response = await fetch(
    `http://localhost:3030/courses/${params.courseId}`
  );
  if (!response.ok) {
    throw new Error("Could not fetch record for - " + params.courseId);
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
    throw new Error("Unable to delete record for - " + params.courseId);
  }

  return redirect("/courses");
}