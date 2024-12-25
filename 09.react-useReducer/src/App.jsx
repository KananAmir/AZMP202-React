import "./App.css";
// import TodoApp from "./components/TodoApp";
import Counter from "./components/UseReducerCounter";
import TodoApp from "./components/UseReducerTodoApp";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* normal counter */}

      {/* <Counter /> */}
      <Counter />

      <hr />
      {/* <TodoApp /> */}

      {/* todo app with useReducer */}

      <TodoApp />
    </>
  );
}

export default App;
