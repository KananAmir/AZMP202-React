import { useState } from "react";
import { nanoid } from "nanoid";
import { list } from "postcss";

class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.isCompleted = false;
    this.id = nanoid();
  }
}
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();

    const todo = new Todo(todoInputValue);

    setTodos([...todos, todo]);
    setTodoInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((q) => q.id !== id));
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="type here.."
          value={todoInputValue}
          onChange={(e) => {
            setTodoInputValue(e.target.value);
          }}
        />
        <button type="submit">ADD</button>
      </form>

      <hr />

      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span>{todo.todoText}</span>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ color: "red" }}>There is no todo yet!</p>
      )}
    </div>
  );
};

export default TodoApp;
