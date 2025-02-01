import React, { useState } from "react";
import "../styling/Chats1.css"
export const Chats1 = ({ onBack }) => {
    const [Chats2, setChats2] = useState(false);


      // Function to go back to the main page
  const handleBackClick = () => {
    setChats2 (false);
  }

    return (
      <div className="chatPage">
        <button className="backButton" onClick={onBack}>
        </button>
        <div className="chatContainer">
          <div className="backChat">
            <div onClick={onBack}>|-</div>
            <div>Chat with us</div>
            <div onClick={onBack}>x</div>
          </div>
          <img className="searchImg" src="search.png" alt="" />
          <h1>Hi There!</h1>
          <p className="whatpara">Want to work with us?</p>
          <p>
            We are happy to discuss any potential projects. If you have a couple
            of minutes, we would love to hear more.
          </p>
          <button className="startChatButton">Start Chat</button>
          <div className="startChatButtonPara">
            <h2>Got any other queries?</h2>
            <p>Please drop us an email at </p>
            <a href="mailto:barabaricollective@gmail.com">
              barabaricollective@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  };