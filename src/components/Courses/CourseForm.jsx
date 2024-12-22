import { useNavigate, Form, useSubmit } from "react-router-dom";
import classes from "./CourseDetail.module.css";
import { useRef } from "react";

function CourseForm({ course }) {
  const navigate = useNavigate();
  const submit = useSubmit();

  const titleRef = useRef();
  const durationRef = useRef();
  const logoRef = useRef();

  const editSaveClickHandler = (e) => {
    e.preventDefault();
    let theCourse = {
      title: titleRef.current.value,
      duration: durationRef.current.value,
      logo: logoRef.current.value,
    };

    let options = {
      action: `/courses/new`,
      method: "POST",
    };

    if (course) {
      options = {
        action: `/courses/${course.id}/edit`,
        method: "PATCH",
      };
    }

    submit(theCourse, options);
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-dialog"]}>
        <h5 className="text-center">
          {course ? "Edit Course" : "Add New Course"}
        </h5>
        <Form>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              ref={titleRef}
              defaultValue={course ? course.title : ""}
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
              ref={durationRef}
              defaultValue={course ? course.duration : ""}
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
              ref={logoRef}
              defaultValue={course ? course.logo : ""}
            />
            <label htmlFor="logo">Course Logo</label>
          </div>
          {/* buttons */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button
                  className="btn btn-primary"
                  onClick={editSaveClickHandler}
                >
                  {course ? "Edit" : "Save"}
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
