import React, { useState } from "react";
import "../styling/Chats1.css";
import { Chats2 } from "./Chats2";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export const Chats1 = ({ chatBoxHandler, chatBoxVar }) => {
  const [chatboxOpen , setchatboxOpen] = useState(false);
  const onClickStartChat = () => {
    setchatboxOpen(true);
  };
  const handleBackClick = () => {
    chatBoxHandler(false);
  };
  return (
    <div className="chatPage">
      <button className="backButton"></button>
      {chatBoxVar && (  // Conditionally render the chatContainer
        <div className="chatContainer">
          <div className="backChat">
            <div onClick={handleBackClick}><FaRegArrowAltCircleLeft /></div>
            <div>Chat with us</div>
            <div onClick={handleBackClick}><IoCloseCircleOutline /></div>
          </div>
          <img className="searchImg" src="search.png" alt="" />
          <h1>Hi There!</h1>
          <p className="whatpara">Want to work with us?</p>
          <p>
            We are happy to discuss any potential projects. If you have a couple
            of minutes, we would love to hear more.
          </p>
          <button className="startChatButton" onClick={onClickStartChat}>
            Start Chat
          </button>
          <div className="startChatButtonPara">
            <h2>Got any other queries?</h2>
            <p>Please drop us an email at </p>
            <a href="mailto:barabaricollective@gmail.com">
              barabaricollective@gmail.com
            </a>
          </div>
        </div>
      )}
      <Chats2 chatboxOpen = {chatboxOpen} chatboxOpener = {setchatboxOpen}/>
    </div>
  );
}
