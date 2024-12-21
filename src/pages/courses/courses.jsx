import { useLoaderData } from "react-router-dom";

function CoursesPage() {
  const courses = useLoaderData();

  return (
    <>
      <h1>My Courses</h1>
      <div className="row">
        <div className="col-8 offset-2">
          <ul className="list-unstyled list-group">
            {courses.map((course) => (
              <li className="list-group-item" key={course.id}>
                {course.title}
              </li>
            ))}
          </ul>
        </div>
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
