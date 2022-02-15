import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ messages, setMessages }) => {
  let [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setMessages([...messages, { input, id: uuidv4() }]);
    setInput("");
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default Create;
