import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todo-slice";

function TodoForm() {
  const labelRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(labelRef.current.value));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-7">
          {/* label */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="label"
              id="label"
              placeholder=""
              ref={labelRef}
            />
            <label htmlFor="label">Todo Label</label>
          </div>
        </div>
        <div className="col-5">
          {/* button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
