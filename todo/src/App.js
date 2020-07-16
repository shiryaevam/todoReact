import React from "react";
import TodoList from "./Todo/Todolist";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить квас" },
    { id: 2, completed: false, title: "Купить пиво" },
    { id: 3, completed: false, title: "Купить сыр" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>Todo</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
