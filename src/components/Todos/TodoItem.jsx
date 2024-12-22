import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todo/todo-slice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(deleteTodo(todo.id))}
      className="list-group-item mb-3"
    >
      {todo.label.toUpperCase()}
    </li>
  );
}

export default TodoItem;
