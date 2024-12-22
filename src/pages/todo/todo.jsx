import { useSelector } from "react-redux";
import TodoItem from "../../components/Todos/TodoItem";
import TodoForm from "../../components/Todos/TodoForm";

function TodoPage() {
  const todos = useSelector((store) => {
    return store.todoReducer.todos;
  });

  return (
    <>
      <h1>My Todos</h1>

      <div className="row">
        <div className="col mb-4">
          <TodoForm />
        </div>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
