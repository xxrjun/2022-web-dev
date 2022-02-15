import React, { useState, useEffect } from "react";
// import Create from "./Create";
// import Info from "./Info";

const App = () => {
  let [name, setName] = useState("rjun");
  const buttonHandler = (e) => {
    e.preventDefault();
    setName("xxx");
  };
  useEffect(() => {
    console.log("useEffect is run one time.");
  }, [name]);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={buttonHandler}>Change name.</button>
    </div>
  );
};

export default App;

// const App = () => {
//   let [messages, setMessages] = useState([]);
//   useEffect(() => {
//     console.log("useEffect is run one time.");
//   });
//   return (
//     <div>
//       <Create messages={messages} setMessages={setMessages} />
//       <Info messages={messages} setMessages={setMessages} />
//     </div>
//   );
// };
