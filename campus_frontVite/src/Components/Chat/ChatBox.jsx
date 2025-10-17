// src/components/ChatBox.jsx
import React, { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../services/ChatService";

const ChatBox = ({ sender, receiver }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(sender, receiver);
      setMessages(data);
    };
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000); // auto-refresh every 2s
    return () => clearInterval(interval);
  }, [sender, receiver]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const messageObj = {
      sender,
      receiver,
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    await sendMessage(messageObj);
    setNewMessage("");
    const updatedMessages = await getMessages(sender, receiver);
    setMessages(updatedMessages);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "400px" }}>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === sender ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <b>{msg.sender}</b>: {msg.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ width: "70%" }}
        />
        <button onClick={handleSend} style={{ width: "28%", marginLeft: "2%" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
