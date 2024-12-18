import { useEffect, useState } from "react";
import "./index.css";
const Card = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //   useEffect(() => {
  //     console.log("card component mounted");

  //     //cleanup function
  //     return () => {
  //       console.log("card component unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("card component updated");

    //cleanup function
    return () => {
      console.log("card component unmounted");
    };
  }, [count, inputValue]);

  
  return (
    <div className="card">
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iure
        laboriosam suscipit minus velit necessitatibus odio sint quibusdam
        maxime eaque vero qui mollitia, omnis fugiat pariatur cumque non nobis
        eos!
      </p>

      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInputValue(e.target.value.trim())}
      />
      <br />
      <h2>{inputValue}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Card;
