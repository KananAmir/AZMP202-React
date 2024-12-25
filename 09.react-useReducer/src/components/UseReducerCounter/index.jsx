import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  INCREMENT_BY_INPUT_VALUE: "INCREMENT_BY_INPUT_VALUE",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
};

const initialState = { count: 0, inputValue: 0 };

const reducer = (state, action) => {
  //   console.log("state", state);
  //   console.log("action", action);

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };

    case ACTIONS.RESET:
      return { ...state, count: 0, inputValue: 0 };
    case ACTIONS.INCREMENT_BY_INPUT_VALUE:
      return { ...state, count: state.count + state.inputValue };
    case ACTIONS.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    default:
      console.log("invalid action type!");

      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        Increment
      </button>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESET });
        }}
      >
        Reset
      </button>
      <hr />
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) => {
          dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: +e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT_BY_INPUT_VALUE });
        }}
      >
        inc by value
      </button>
    </div>
  );
};

export default Counter;
