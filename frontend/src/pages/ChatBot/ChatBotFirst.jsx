import React, { useState } from "react";
import "../../styling/ChatBotFirst.css";
import { Chats2 } from "./ChatBotSec";
import { ChatFrame } from "./ChatFrame";
import { FiArrowRight } from "react-icons/fi";

export const Chats1 = ({ chatBoxHandler, chatBoxVar }) => {
  const [chatboxOpen, setchatboxOpen] = useState(false);

  const onClickStartChat = () => setchatboxOpen(true);
  const handleBackClick = () => chatBoxHandler(false);

  return (
    <div className="chatPage">
      {chatBoxVar && (
        <ChatFrame onBackClick={handleBackClick} title="Chat with us">
          <div className={`contentArea ${!chatboxOpen ? "hidden" : "block"}`}>
            <h1 className="greeting">Hi There!</h1>
            <p className="question">Want to work with us?</p>
            <p className="description">
            Give us the details of your requirements and our team will get back to you as soon as possible.

            </p>
            <button className="startChatButton " onClick={onClickStartChat}>
            Talk to us 
            <FiArrowRight className="arrow" />
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
        </ChatFrame>
      )}
      <Chats2 chatboxOpen={chatboxOpen} chatboxOpener={setchatboxOpen} />
    </div>
  );
};