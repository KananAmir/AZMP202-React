import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Customers from "./components/Customers";
import Products from "./components/Products";

//component lifecycle
//mounting
//unmounting
//updating
function App() {
  const [show, setShow] = useState(false);

  const handleToggleCard = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={handleToggleCard}>Toggle Card</button>
      {show && <Card />}

      <hr />
      {/* <Customers /> */}

      <Products />
    </>
  );
}

export default App;
