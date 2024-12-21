import { useLoaderData } from "react-router-dom";
import CourseItem from "../../components/Courses/CourseItem";

function CoursesPage() {
  const courses = useLoaderData();

  return (
    <>
      <h1 className="text-center mb-4">List of Courses</h1>
      <div className="row">
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}

export default CoursesPage;

export async function CoursesLoader() {
  const response = await fetch("http://localhost:3030/courses");
  if (!response.ok) {
    throw new Error("Could not fetch courses");
  }
  return response;
}
