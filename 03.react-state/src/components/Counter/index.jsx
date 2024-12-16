import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleIncrement = () => {
    //   setCount(count + 1);
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  const handleIncrementByInputValue = (e) => {
    // console.log(e.target.previousElementSibling.value);

    setCount((c) => c + inputValue);
  };

  const resetCounter = () => {
    setCount(0);
    setInputValue("");
  };
  return (
    <div>
      <input
        type="number"
        // defaultValue={0}
        value={inputValue}
        onChange={(e) => {
          setInputValue(+e.target.value);
        }}
      />
      <button onClick={handleIncrementByInputValue}>
        Increment by input value
      </button>
      <hr />
      <button onClick={handleIncrement}>Increment</button>
      <h2>{count}</h2>
      {/* <button onClick={()=>{handleDecrement()}}>Decrement</button> */}
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
