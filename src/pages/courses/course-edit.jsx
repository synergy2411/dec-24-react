import { json, redirect, useRouteLoaderData } from "react-router-dom";
import CourseForm from "../../components/Courses/CourseForm";

function CourseEditPage() {
  // const course = useLoaderData();
  const course = useRouteLoaderData("course-detail-loader");
  return <CourseForm course={course} />;
}

export default CourseEditPage;

export async function CourseEditAction({ request, params }) {
  const { courseId } = params;
  const formData = await request.formData();
  let theCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    logo: formData.get("logo"),
  };

  const response = await fetch(`http://localhost:3030/courses/${courseId}`, {
    method: request.method,
    body: JSON.stringify(theCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Unable to update course for " + params.courseId },
      { status: 400 }
    );
  }

  return redirect("/courses");
}
