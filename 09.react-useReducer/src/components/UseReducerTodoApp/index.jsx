import { nanoid } from "nanoid";
import { useReducer } from "react";

import { FaTrashAlt } from "react-icons/fa";

class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.isCompleted = false;
    this.id = nanoid();
  }
}

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  SET_TODO_INPUT_VALUE: "SET_TODO_INPUT_VALUE",
  RESET_INPUT_VALUE: "RESET_INPUT_VALUE",
  CLEAR_ALL_TODOS: "CLEAR_ALL_TODOS",
};

const initialState = { todos: [], todoInputValue: "" };
const reducer = (state, action) => {
  //   console.log("state", state);
  //   console.log("action", action);

  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((q) => q.id !== action.payload),
      };
    case ACTIONS.TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.isCompleted = !todo.isCompleted;
          }

          return todo;
        }),
      };

    case ACTIONS.RESET_INPUT_VALUE:
      return { ...state, todoInputValue: "" };
    case ACTIONS.CLEAR_ALL_TODOS:
      break;
    case ACTIONS.SET_TODO_INPUT_VALUE:
      return { ...state, todoInputValue: action.payload };

    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddTodo = (event) => {
    event.preventDefault();

    if (state.todoInputValue) {
      const todo = new Todo(state.todoInputValue);

      dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
      dispatch({ type: ACTIONS.RESET_INPUT_VALUE });
    } else {
      window.alert("fill input!");
    }
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: todoId });
  };

  const handleToggleCompleted = (todoId) => {
    // console.log(todoId);

    dispatch({ type: ACTIONS.TOGGLE_COMPLETED, payload: todoId });
    console.log(state.todos);
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="type here.."
          value={state.todoInputValue}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.SET_TODO_INPUT_VALUE,
              payload: e.target.value,
            });
          }}
        />
        <button type="submit">ADD</button>
      </form>

      <hr />

      {state.todos.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {state.todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => {
                  handleToggleCompleted(todo.id);
                }}
              />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "unset",
                }}
              >
                {todo.todoText}
              </span>{" "}
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <FaTrashAlt style={{ color: "red" }} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>There is no todo yet!</p>
      )}
    </div>
  );
};

export default TodoApp;
