# AI Chatbot 🤖

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) 
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.18.0-green)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-orange)](https://platform.openai.com/)

An AI-powered chatbot built with **React** (frontend) and **Node.js** (backend), leveraging OpenAI API for real-time AI responses. Clean UI, responsive design, and secure API handling.

---

## Demo

![Chatbot Demo](./public/chatbot-demo.gif)  
*Try multi-line messages using `Shift+Enter` and send with `Enter`.*

---

## Features

- Real-time AI chat using OpenAI API  
- Responsive UI with **CSS Style**  
- Multi-line messages support (`Shift + Enter`)  
- Clean, user-friendly message bubbles and icons  
- API key secured on the backend  

---

## Tech Stack

- **Frontend:** React, Vite, CSS Style  
- **Backend:** Node.js 
- **AI:** OpenAI API  
- **State Management:** React Hooks & Custom Hooks  

---

## Folder Structure

```bash
ai-chatbot/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
|   |   |   ├── Avatar.jsx
|   |   |   ├── Chat.jsx
|   |   |   ├── CopyButton.jsx
|   |   |   ├── Icons.jsx
|   |   |   └── MessageBubble.jsx
│   │   ├── services/
|   |   |   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
|   ├── server/
|   │   ├── server.js
|   │   ├── .env
|   |   └── package.json
│   ├── .env
|   └── package.json
└── README.md
```

---

## Installation

### Clone the repo

```bash
git clone https://github.com/yourusername/ai-chatbot.git
cd ai-chatbot
```
### Frontend
```bash
cd client
npm install
```
### Backend
```bash
cd ../server
npm install
```

---

# Environment Variables

### 1. Create a `.env` file in the server folder:
```bash
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```
### 2. Start the frontend:
```bash
cd client
npm run dev
```
### 3. Start the backend server:
```bash
cd ../server
npm run dev
```
### 4. Open your browser at http://localhost:5173

---

# License
```

This version is **ready-to-use**, visually appealing, with badges, a demo section, and proper Markdown formatting.  

I can also **create a matching `chatbot-demo.gif` placeholder and instructions** so your README looks exactly like a polished GitHub project.  

Do you want me to do that too?
```
