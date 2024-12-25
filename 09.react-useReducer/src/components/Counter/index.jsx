import { useState } from "react";

const Counter = () => {
  const [countData, setCountData] = useState({ count: 0, inputVal: 0 });
  const handleIncrement = () => {
    setCountData((prevCount) => ({ ...prevCount, count: prevCount.count + 1 }));
  };
  const handleDecrement = () => {
    setCountData((prevCount) => ({ ...prevCount, count: prevCount.count - 1 }));
  };

  const handleIncrementByInputVal = () => {
    setCountData((prevCount) => ({
      ...prevCount,
      count: prevCount.count + prevCount.inputVal,
    }));
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <h2>{countData.count}</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setCountData((prevCount) => ({
            ...prevCount,
            inputVal: +e.target.value,
          }));
        }}
      />
      <button onClick={handleIncrementByInputVal}>inc by value</button>
    </div>
  );
};

export default Counter;
