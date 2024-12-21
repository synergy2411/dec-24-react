import { useNavigate } from "react-router-dom";
import classes from "./CourseItem.module.css";

function CourseItem({ course }) {
  const navigate = useNavigate();

  return (
    <div className="col-4">
      <div
        className={`card ${classes["highlight"]}`}
        onClick={() => navigate(`/courses/${course.id}`)}
      >
        <div className="card-header">
          <h6 className="text-center">{course.title.toUpperCase()}</h6>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
