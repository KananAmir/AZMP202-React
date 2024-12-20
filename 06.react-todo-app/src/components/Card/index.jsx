import React, { useRef } from "react";
import Input from "../Input";

const Card = () => {
  const headingRef = useRef(null);
  return (
    <div>
      <Input headingRef={headingRef} />

      <h2 ref={headingRef}>lorem5</h2>
    </div>
  );
};

export default Card;
