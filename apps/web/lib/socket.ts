"use client";

import { io } from "socket.io-client";

export const socket = io("http://localhost:8000", {
  path: "/socket.io",        // 🔥 MUST MATCH backend mount
  transports: ["websocket"], // 🔥 avoid polling completely
  autoConnect: false,        // 🔥 important for Next.js
});