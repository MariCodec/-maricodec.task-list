import "./App.css";
import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };

  //

  const editTodoHandler = (newtext, index) => {
    setTodos(
      todos.map((todo, ind) => {
        return index === ind ? newtext : todo;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="title">
        task list <br /> MariCodec
      </h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        editTodo={editTodoHandler}
      />
    </div>
  );
}

export default App;
