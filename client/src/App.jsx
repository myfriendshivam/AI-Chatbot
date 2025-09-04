import React from "react";
import Chat from "./components/Chat.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="logo">
          <img src="/ai-chatbot.svg" alt="AI Logo" />
        </div>
        <div className="titles">
          <h1>Chat With AI</h1>
          <p>Clean UI • Your API key stays on server • Enter to send, Shift+Enter = newline</p>
        </div>
      </header>
      <Chat />
    </div>
  );
}