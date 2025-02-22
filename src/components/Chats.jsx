import React, { useState } from "react";
import "../styling/Chats.css";
import { Chats1 } from "./Chats1";

export const Chats = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);
  const onClickChat = () => {
    setChatboxOpen(true);
  };

  return (
    <>
    <div className="box">
      <div className={`contactDiv ${chatboxOpen ? "blur" : " "} `}>
        <div className="logoDiv">
          <div className="logodiv">
            <img src="logo.png" alt="Barabari logo" />
            <p>The Barabari Project</p>
          </div>
          <div className="contactButton">
            <button>Contact us</button>
            <svg className="icon" viewBox="0 0 100 80" width="46" height="20">
              <rect width="100" height="15"></rect>
              <rect y="35" width="100" height="15"></rect>
              <rect y="65" width="100" height="15"></rect>
            </svg>
          </div>
        </div>
        <div className="logoDivPara">
          <h1>
            Let our students build your <span>ChatBots</span>
          </h1>
          <p>
            We are Section 8 Non-Profit upskilling candidates
            from low-income families democratizing access
            to tech design employment opportunities.
          </p>
          <button className="hireButton">Hire from us</button>
        </div>
        <div className="animationImg">
          <img className="publicImg" src="circle.jpeg" alt="A public visual" />
          <button className="chatButton" onClick={onClickChat}>
            Chat with us
          </button>
        </div>
      </div>
      <Chats1 chatBoxHandler={setChatboxOpen} chatBoxVar={chatboxOpen} />
      </div>
    </>

  );
}