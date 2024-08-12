"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { text: generateAIResponse(inputMessage), sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500);
  };

  const generateAIResponse = (userMessage) => {
    const responses = [
      "That's an interesting point. Could you elaborate on that?",
      "I understand. Let me think about that for a moment...",
      "Based on what you've said, I think we should consider the following...",
      "That's a complex issue. There are several factors to consider...",
      "I'm not sure I have all the information to answer that fully. Can you provide more context?",
      "That's a great question. Let's break it down step by step...",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light">
      <div className="w-full max-w-2xl h-[900px] bg-dark rounded-lg shadow-lg flex flex-col bg-dark">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
                message.sender === 'user' ? 'text-dark font-bold bg-acc text-xl' : ' text-whi bg-acc2 font-bold text-xl'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-whi rounded-lg p-3 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-acc2 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-light rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-dark rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 ">
          <div className="relative m-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Enter your prompt here"
              className="w-full h-16 text-whi p-2 pl-6 bg-light2 pr-16 text-lg placeholder-gray-200 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-whi text-white p-3 rounded-full hover:bg-acc focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;