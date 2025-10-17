// src/components/ChatList.jsx
import React from "react";

const ChatList = ({ chats, selectChat }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <h3>Chats</h3>
      {chats.map((chat, idx) => (
        <div
          key={idx}
          onClick={() => selectChat(chat)}
          style={{
            padding: "5px",
            cursor: "pointer",
            borderBottom: "1px solid #ccc",
          }}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatList;