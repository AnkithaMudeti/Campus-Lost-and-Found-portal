import React, { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchHistory } from "../../Services/ChatService";
import { getUserDetails } from "../../Services/LoginService";

const WS_URL = "ws://localhost:9999/ws";

const ChatPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [peerInput, setPeerInput] = useState("");
  const [peer, setPeer] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const clientRef = useRef(null);
  const messagesEndRef = useRef(null);
  const currentUserRef = useRef(null);
  const peerRef = useRef("");

  useEffect(() => {
    getUserDetails().then((res) => {
      setCurrentUser(res.data);
      currentUserRef.current = res.data;
    });
    
    // Check if peer is provided in URL params
    const peerFromUrl = searchParams.get('peer');
    if (peerFromUrl) {
      setPeerInput(peerFromUrl);
      setPeer(peerFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    currentUserRef.current = currentUser;
  }, [currentUser]);

  useEffect(() => {
    peerRef.current = peer;
  }, [peer]);

  // Auto-start chat when peer is set from URL
  useEffect(() => {
    if (peer && currentUser && connected) {
      startChat();
    }
  }, [peer, currentUser, connected]);

  // Autoscroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Setup STOMP client once
  useEffect(() => {
    const client = new Client({
      brokerURL: WS_URL,
      reconnectDelay: 5000,
      onConnect: () => {
        setConnected(true);
        client.subscribe("/topic/messages", (payload) => {
          const msg = JSON.parse(payload.body);
          const u = currentUserRef.current;
          const p = peerRef.current;
          if (
            u && p && (
              (msg.senderId === u.username && msg.receiverId === p) ||
              (msg.senderId === p && msg.receiverId === u.username)
            )
          ) {
            setMessages((prev) => [...prev, msg]);
          }
        });
      },
      onStompError: () => setConnected(false),
      onWebSocketClose: () => setConnected(false),
    });
    client.activate();
    clientRef.current = client;
    return () => client.deactivate();
  }, []);

  const startChat = async () => {
    if (!currentUserRef.current || !peerInput.trim()) return;
    const selectedPeer = peerInput.trim();
    setPeer(selectedPeer);
    try {
      const res = await fetchHistory(currentUserRef.current.username, selectedPeer);
      setMessages(res.data || []);
    } catch {
      setMessages([]);
    }
  };

  const disconnect = () => {
    clientRef.current?.deactivate();
    setConnected(false);
    setPeer("");
    setMessages([]);
  };

  const send = () => {
    const u = currentUserRef.current;
    const p = peerRef.current;
    if (!input.trim() || !u || !p || !connected) return;
    const payload = {
      senderId: u.username,
      receiverId: p,
      content: input,
      timestamp: new Date().toISOString(),
    };
    clientRef.current?.publish({ destination: "/app/sendMessage", body: JSON.stringify(payload) });
    setInput("");
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="chat">💬</span>
            <h1 className="text-3xl font-bold">Private Chat</h1>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
          >
            Back
          </button>
        </div>

        <div className="bg-gray-100 text-gray-800 rounded px-4 py-2 mb-3">
          Logged in as: <span className="font-semibold">{currentUser?.username || "..."}</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <button onClick={disconnect} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded" disabled={!connected}>
            Disconnect
          </button>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Enter username to chat with"
            value={peerInput}
            onChange={(e) => setPeerInput(e.target.value)}
          />
          <button onClick={startChat} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded" disabled={!connected || !peerInput.trim()}>
            Start Chat
          </button>
        </div>

        <div className="border rounded h-96 overflow-y-auto p-3 bg-white mb-3">
          {messages.map((m, idx) => (
            <div key={idx} className={`mb-2 ${m.senderId === currentUser?.username ? "text-right" : "text-left"}`}>
              <div className={`inline-block px-3 py-2 rounded ${m.senderId === currentUser?.username ? "bg-indigo-600 text-white" : "bg-gray-200"}`}>
                <span className="font-semibold mr-2">{m.senderId}:</span>
                <span>{m.content}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          />
          <button onClick={send} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
