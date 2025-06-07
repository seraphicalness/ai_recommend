import React, { useState } from 'react';
import { getChatResponse } from '../services/ChatService';
import '../styles/ChatPage.css';

function ChatPage() {
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setChats((prev) => [...prev, userMessage]);

    const aiReply = await getChatResponse(input);
    const botMessage = { sender: 'bot', text: aiReply };
    setChats((prev) => [...prev, botMessage]);

    setInput('');
  };

  return (
    <div className="chat-container">
      <h2>🎓 전공 추천 챗봇</h2>
      <div className="chat-box">
        {chats.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="전공 관련 질문을 입력하세요!"
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default ChatPage;