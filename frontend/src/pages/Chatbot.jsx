
import React, { useEffect, useState, useRef } from 'react';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Chatbot = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { type: 'bot', content: "Hello! How can I help you?" } // Initial bot message
  ]);

  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = { text };

    try {
      setLoading(true);
      const res = await axios.post(`${url}/openai/chatbot`, obj, {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (res.status === 201) {
        toast.warn(res.data.msg);
      } else {
        setMessages([
          ...messages,
          { type: 'user', content: text }, // Add user message to state
          { type: 'bot', content: res.data } // Add bot response to state
        ]);
        setText("")
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Please login first, then access...");
    }
  };

  // Function to handle sending messages on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window after a new message is added
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <ToastContainer theme="colored" />
      <div id="chat-window">
        <div className="main-title" style={{textAlign:"center",color:"white"}}>CHAT BOT USING CHAT-GPT</div>
        <div id="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}-message`}>
              {message.type === 'bot' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSTcf9vxteFLXwKOVebZMuNkDh7PkAvwe7w&usqp=CAU" alt="bot icon" />}
              {message.type === 'user' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="user icon" />}
              <span>{message.content}</span>
            </div>
          ))}
          <div ref={inputRef} /> {/* Ref for scrolling */}
        </div>
        <form id="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            id="chat-input"
            autoComplete="off"
            placeholder="Type your message here"
            required
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      {loading && <Spinner />}
    </>
  );
};

export default Chatbot;