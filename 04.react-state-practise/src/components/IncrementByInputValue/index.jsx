import { useState } from "react";

// eslint-disable-next-line react/prop-types
const IncrementByInputValue = ({ setCount }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="number"
        // defaultValue={0}
        value={inputValue}
        onChange={(e) => {
          setInputValue(Number(e.target.value));
        }}
      />
      <button onClick={() => setCount((c) => c + inputValue)}>
        Increment by input value
      </button>
    </div>
  );
};

export default IncrementByInputValue;
