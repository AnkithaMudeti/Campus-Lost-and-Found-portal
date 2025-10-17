import axios from "axios";

axios.defaults.withCredentials = true;

const CHAT_API = "http://localhost:9999/api/chat";

export const fetchHistory = (user1, user2) =>
  axios.get(`${CHAT_API}/history/${encodeURIComponent(user1)}/${encodeURIComponent(user2)}`);