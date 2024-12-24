import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>NotFound</h1>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
