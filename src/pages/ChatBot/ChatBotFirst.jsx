import React, { useState } from "react";
import "../../styling/ChatBotFirst.css"; // Assuming you keep your CSS in Chats1.css
import { Chats2 } from "./ChatBotSec";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export const Chats1 = ({ chatBoxHandler, chatBoxVar }) => {
  const [chatboxOpen, setchatboxOpen] = useState(false);

  const onClickStartChat = () => {
    setchatboxOpen(true);
  };

  const handleBackClick = () => {
    chatBoxHandler(false);
  };

  return (
    <div className="chatPage">
      {chatBoxVar && (
        <div className={`chatContainer ${!chatboxOpen ? "hidden" : "block"}`}>
          <div className="chatHeader">
            <div className="backIcon" onClick={handleBackClick}>
              <FaRegArrowAltCircleLeft />
            </div>
            <div className="chatTitle">Chat with us</div>
            <div className="closeIcon" onClick={handleBackClick}>
              <IoCloseCircleOutline />
            </div>
          </div>
          <div className="contentArea">
            <img className="searchImg" src="search.png" alt="Search" />
            <h1 className="greeting">Hi There!</h1>
            <p className="question">Want to work with us?</p>
            <p className="description">
              We are happy to discuss any potential projects. If you have a
              couple of minutes, we would love to hear more.
            </p>
            <button className="startChatButton" onClick={onClickStartChat}>
              Start Chat <FiArrowRight className="arrow" />
            </button>
            <div className="emailSection">
              <h2 className="emailHeader">Got any other queries?</h2>
              <p className="emailText">
                Please drop us an email at <FiArrowRight />
              </p>
              <a
                href="mailto:barabaricollective@gmail.com"
                className="emailLink"
              >
                barabaricollective@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
      <Chats2 chatboxOpen={chatboxOpen} chatboxOpener={setchatboxOpen} />
    </div>
  );
};
