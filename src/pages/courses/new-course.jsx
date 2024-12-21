import { redirect } from "react-router-dom";
import CourseForm from "../../components/Courses/CourseForm";

function NewCoursePage() {
  return <CourseForm />;
}

export default NewCoursePage;

export async function NewCourseAction({ request, params }) {
  const formData = await request.formData();
  const newCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    logo: formData.get("logo"),
  };
  const responae = await fetch("http://localhost:3030/courses", {
    method: request.method,
    body: JSON.stringify(newCourse),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!responae.ok) {
    throw new Error("Unable to create new record");
  }

  return redirect("/courses");
}
