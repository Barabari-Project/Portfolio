import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export const ChatFrame = ({ onBackClick, title, children }) => {
  return (
    <div className="chat-card ">
      <div className="chatHeader">
        <div className="backIcon" onClick={onBackClick}>
          <FaRegArrowAltCircleLeft />
        </div>
        <div className="chatTitle">{title}</div>
        <div className="closeIcon" onClick={onBackClick}>
          <IoCloseCircleOutline />
        </div>
      </div>
      {children}
      
    </div>
  );
};