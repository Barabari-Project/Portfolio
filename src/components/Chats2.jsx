import React, { useState } from "react";
import "../styling/Chats2.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


export const Chats2 = ({chatboxOpen , chatboxOpener}) => {
  const BackClick = () => {
    chatboxOpener(false);
  };
  return (
    <div>
      {chatboxOpen && (
        <div className="chat-card">
          <div className="chat-header">
            <button className="back-button" onClick={BackClick}><FaRegArrowAltCircleLeft /></button>
            <h3>Chat with us</h3>
            <button className="close-button" onClick={BackClick}><IoCloseCircleOutline /></button>
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
      )}
    </div>
  );
};
