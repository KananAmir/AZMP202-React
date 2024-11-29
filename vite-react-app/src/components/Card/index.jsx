import React from "react";
import "./index.css";
import Button from "../Button";
const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <h4>Price: {props.price}</h4>
      <Button name={props.title} />
    </div>
  );
};

export default Card;
