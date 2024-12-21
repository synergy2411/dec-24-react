import { Link } from "react-router-dom";
import classes from "./CourseDetail.module.css";

function CourseDetail({ course }) {
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
                  <button className="btn btn-success">Edit</button>
                </div>
              </div>
              <div className="col">
                <div className="d-grid">
                  <button className="btn btn-outline-danger">Delete</button>
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
