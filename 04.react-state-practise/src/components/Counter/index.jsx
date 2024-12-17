import { useState } from "react";
import Increment from "../Increment";
import Count from "../Count";
import Decrement from "../Decrement";
import Reset from "../Reset";
import IncrementByInputValue from "../IncrementByInputValue";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IncrementByInputValue setCount={setCount} />
      <hr />
      <Increment setCount={setCount} />
      <Count count={count} />
      <Decrement setCount={setCount} />
      <hr />
      <Reset setCount={setCount} />
    </div>
  );
};

export default Counter;
