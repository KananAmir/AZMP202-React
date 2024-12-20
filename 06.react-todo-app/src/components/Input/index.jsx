import { useRef, useState } from "react";

const Input = ({ headingRef }) => {
  //   const [value, setValue] = useState("");

  //useRef hook

  const inputRef = useRef(null);

  const handleClick = () => {
    // const input = document.querySelector("#search");
    // console.log(input.value);
    // console.log(inputRef.current.value);
    // const { current } = inputRef;
    // const { current: inputElem } = inputRef;
    // const { value } = inputElem;
    // console.log(value);

    inputRef.current.focus();

    console.log(headingRef.current);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="search"
        placeholder="search.."
        onChange={(e) => {
          //   setValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Input;
