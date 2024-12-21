import { useNavigate, Form } from "react-router-dom";
import classes from "./CourseDetail.module.css";

function CourseForm() {
  const navigate = useNavigate();
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-dialog"]}>
        <h5 className="text-center">Add New Course</h5>
        <Form action="/courses/new" method="POST">
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
            />
            <label htmlFor="title">Course Title</label>
          </div>

          {/* duration */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="duration"
              id="duration"
              placeholder=""
            />
            <label htmlFor="duration">Course Duration</label>
          </div>
          {/* logo */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="logo"
              id="logo"
              placeholder=""
            />
            <label htmlFor="logo">Course Logo</label>
          </div>
          {/* buttons */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
            <div className="col">
              <div className="d-grid">
                <button
                  onClick={() => navigate("/courses")}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CourseForm;
