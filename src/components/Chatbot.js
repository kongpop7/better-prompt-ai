// /components/Chatbot.js
"use client"
import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, user: true }]);

    const aiResponse = await getAIResponse(input);

    setMessages([...messages, { text: input, user: true }, { text: aiResponse, user: false }]);

    setInput('');
  };

  const getAIResponse = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`AI response to: "${message}"`);
      }, 1000);
    });
  };

  return (
    <div className="w-full h-full mx-auto p-4 rounded-lg shadow-lg bg-[#1E2019]">
      <div className="h-96 overflow-y-scroll p-4 bg-white rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-md ${msg.user ? 'bg-[#CFEE9E] text-black self-end' : 'bg-[#1E2019] text-white self-start'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row justify-center relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-4 border rounded-md pr-16 "
          placeholder="Type your prompt..."
        />
        <button
          onClick={handleSend}
          className="absolute right-0 top-0 mt-2 mr-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
