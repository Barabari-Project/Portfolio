import React, { useState } from "react";
import "../styling/Chats.css";
// const [Popup, setPopup] = useState(false)

export const Chats = () => {
  const onClickChat = () => {
    const chatpage = document.querySelector(".chatPage");
    chatpage.style.display = "block"
  }
  return (
    <div className="contactDiv">
      <div>
        <div className="logoDiv">
          <img src="logo.png" alt="Barabari logo" />
          <p>The Barabari Project</p>
          <div className="contactButton">
            <button>Contact</button>
            <svg className="icon" viewBox="0 0 100 80" width="46" height="20">
              <rect width="100" height="15"></rect>
              <rect y="35" width="100" height="15"></rect>
              <rect y="65" width="100" height="15"></rect>
            </svg>

          </div>
        </div>
        <div className="publicImgDiv">
          <div className="logoDivPara">
            <h1>
              Let our students <br /> build your <span>ChatBots</span>
            </h1>
            <p>
              We are Section 8 Non-Profit upskilling candidates <br />
              from low-income families democratizing access <br />
              to tech design employment opportunities
            </p>
            <button>Hire from us</button>
          </div>
          <div>
            <img className="publicImg" src="public.png" alt="A public Image" />
            <button className="chatButton" onClick={onClickChat}>Chat with us</button>
          </div>
        </div>
      </div>
    </div>
  );
};