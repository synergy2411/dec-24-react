import { useSelector } from "react-redux";
import TodoItem from "../../components/Todos/TodoItem";

function TodoPage() {
  const todos = useSelector((store) => {
    return store.todoReducer.todos;
  });

  return (
    <>
      <h1>My Todos</h1>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
