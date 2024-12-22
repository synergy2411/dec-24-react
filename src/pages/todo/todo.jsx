import { useSelector } from "react-redux";

function TodoPage() {
  const todos = useSelector((store) => {
    return store.todoReducer.todos;
  });

  return (
    <>
      <h1>My Todos</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.label.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoPage;
