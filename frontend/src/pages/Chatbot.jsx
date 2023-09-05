import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import {message} from "antd"

const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const newUserMessage = { text: inputText, user: true };
            setMessages([...messages, newUserMessage]);
            setInputText('');
      
            // Simulate bot response (replace with actual bot logic)
            setTimeout(() => {
              const newBotMessage = { text: 'Bot response...', user: false };
              setMessages([...messages, newBotMessage]);
            }, 1000);
          }
    };
  
    return (
      <div className="chatbot-container">
        <div className="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.user ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    );
  }

export default Chatbot;