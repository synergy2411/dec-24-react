import { Link, useNavigate, useSubmit } from "react-router-dom";
import classes from "./CourseDetail.module.css";

function CourseDetail({ course }) {
  const submit = useSubmit();
  const navigate = useNavigate();

  const editCourseHandler = (e) => {
    e.preventDefault();
    navigate(`/courses/${course.id}/edit`);
  };

  const deleteCourseHandler = (e) => {
    e.preventDefault();
    const proceed = window.confirm(
      "Are you sure to delete this element - " + course.title.toUpperCase()
    );
    if (!proceed) {
      return;
    }
    // delete the element
    submit({}, { action: `/courses/${course.id}`, method: "DELETE" });
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-dialog"]}>
        <div className="card">
          <img src={course.logo} className="card-img-top" alt={course.title} />
          <div className="card-body">
            <h5 className="card-title">{course.title.toUpperCase()}</h5>
            <p className="card-text">Duration : {course.duration}Hrs</p>

            <div className="row mb-4">
              <div className="col">
                <div className="d-grid">
                  <button
                    className="btn btn-success"
                    onClick={editCourseHandler}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="d-grid">
                  <button
                    className="btn btn-outline-danger"
                    onClick={deleteCourseHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center">
              See all available <Link to="/courses">courses</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
