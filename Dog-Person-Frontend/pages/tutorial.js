import React, { useEffect, useState } from "react";
import axios from "axios";

const tutorial = () => {
  const [value, setValue] = useState("Hello world");
  const handleButton = () => {
    setValue("mori jha");
  };
  useEffect(()=>{
    alert("gazab bejjati hae")
  },[value])
  return (
    <div>
      {value}
      <button onClick={handleButton}>Click</button>
    </div>
  );
};

export default tutorial;
