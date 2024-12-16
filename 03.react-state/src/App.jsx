import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
function App() {
  //hooks: useState, useEffect, useRef, useCallback, useMemo, useReducer

  const [studentName, setStudentName] = useState("Elcan");

  const [cardStatus, setCardStatus] = useState(false);
  // const changeStudentName = () => {
  //   setStudentName("Fatima");
  // };
  return (
    <>
      <h2>Student Name: {studentName}</h2>

      {/* <button onClick={changeStudentName}>change student name</button> */}
      <button
        onClick={() => {
          // setStudentName("Fatima");
          setStudentName((prevState) => {
            if (prevState === "Elcan") {
              return "Fatima";
            } else {
              return "Elcan";
            }
          });
        }}
      >
        change student name
      </button>

      <hr />

      <button
        onClick={() => {
          setCardStatus(true);
        }}
      >
        show card
      </button>
      <button
        onClick={() => {
          setCardStatus(false);
        }}
      >
        hide card
      </button>

      <hr />

      {/* <button
        onClick={() => {
          setCardStatus((prevState) => (prevState ? false : true));
        }}
      >
        Toggle
      </button> */}

      <button
        onClick={() => {
          // setCardStatus((prevState) => !prevState);
          setCardStatus(!cardStatus);
        }}
      >
        {cardStatus ? "hide" : "show"}
      </button>
      <hr />
      {/* {cardStatus ? <Card /> : "card gizledildi"} */}
      {/* {cardStatus ? <Card /> : null} */}
      {cardStatus && <Card />}

      <hr />
      <Counter />
    </>
  );
}

export default App;
