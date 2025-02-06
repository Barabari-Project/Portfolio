import React, { useState } from "react";
import "../styling/Chats2.css";


export const Chats2 = () => {
  return (
      <div className="chat-card">
        <div className="chat-header">
          <button className="back-button">|-</button>
          <h3>Chat with us</h3>
          <button className="close-button">&times;</button>
        </div>
        <div className="chat-content">
          <img src="search.png" alt="" />
          <p>Hi, Thank you for reaching out.</p>
          <p>Let's see what kind of projects we can help you with</p>
          <p className="selectPara">| Select all that apply</p>
          <div className="button-group">
            <button className="option-button">Website</button>
            <button className="option-button">Mobile Application</button>
            <button className="option-button">Chatbot</button>
            <button className="option-button">CRM tools</button>
          </div>
          <button className="submit-button">
            Submit &rarr;
          </button>
        </div>
        <div>
          <input className="chat-input" type="text" placeholder="Type here" />
        </div>

      </div>


  );
};
