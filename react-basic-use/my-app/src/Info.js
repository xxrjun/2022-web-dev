import React from "react";
import Message from "./Message";

const Info = ({ messages, setMessages }) => {
  return (
    <div>
      {messages.map((msg) => (
        <Message
          msg={msg}
          messages={messages}
          setMessages={setMessages}
          key={msg.id}
        />
      ))}
    </div>
  );
};

export default Info;
