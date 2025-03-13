import React, { useState, useRef, useEffect } from "react";
import "../../styling/ChatBotSec.css";
import { ChatFrame } from "./ChatFrame";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidHandDown } from "react-icons/bi";
import { TbSend } from "react-icons/tb";

export const Chats2 = ({ chatboxOpen, chatboxOpener }) => {
  const chatContentRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", content: "Hi, Thank you for reaching out." },
    {
      sender: "bot",
      content: "Let's see what kind of projects we can help you with",
    },
  ]);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const options = [
    "Website",
    "Chatbot",
    "Handle social media",
    "LMS",
    "E commerce marketplace",
    "Something else",
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setMessages((prev) => [...prev, { sender: "user", content: option }]);
    if (option === "Something else") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: "Please describe your project" },
      ]);
      setCurrentStep(2);
    } else {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: "Tell us your name" },
      ]);
      setCurrentStep(3);
    }
  };

  const handleCustomDescription = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: userInput }]);
      setUserInput("");
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: "Tell us your name" },
      ]);
      setCurrentStep(3);
    }
  };

  const handleSubmit = () => {
    if (additionalInfo.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: additionalInfo }]);
    }
    console.log({
      projectType: selectedOption,
      name,
      organization,
      phone,
      email,
      additionalInfo,
    });
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        content: "Thank you! We'll get back to you within 2-3 business days.",
      },
    ]);
    setCurrentStep(8);
  };

  const handleRefresh = () => {
    setSelectedOption(null);
    setCurrentStep(1);
    setUserInput("");
    setMessages([
      { sender: "bot", content: "Hi, Thank you for reaching out." },
      {
        sender: "bot",
        content: "Let's see what kind of projects we can help you with",
      },
    ]);
    setName("");
    setOrganization("");
    setPhone("");
    setEmail("");
    setAdditionalInfo("");
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: userInput.trim() }]);
      setUserInput("");
    }
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, currentStep]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (<>
        
          <div className="options-container">
            {options.map((option) => (
              <button
                key={option}
                className={`option-btn ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleSelectOption(option)}
                disabled={selectedOption !== null}
                >
                {option}
              </button>
            ))}
            
          </div>
                </>
        );
      case 2:
        return (
          <div className="user-input-container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your project description"
              className="underlined-input"
            />
            <button className="next-btn" onClick={handleCustomDescription}>
              <FiArrowRight />
            </button>
          </div>
        );
      case 3:
        return (
          <div className="user-input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="underlined-input"
            />
            <button
              className="next-btn"
              onClick={() => {
                if (name.trim()) {
                  setMessages((prev) => [...prev, { sender: "user", content: name }]);
                  setCurrentStep(4);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "What's your organization name?" },
                  ]);
                }
              }}
            >
              <FiArrowRight />
            </button>
          </div>
        );
      case 4:
        return (
          <div className="user-input-container">
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Enter organization name"
              className="underlined-input"
            />
            <button
              className="next-btn"
              onClick={() => {
                if (organization.trim()) {
                  setMessages((prev) => [...prev, { sender: "user", content: organization }]);
                  setCurrentStep(5);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "Phone number (optional)" },
                  ]);
                }
              }}
            >
              <FiArrowRight />
            </button>
          </div>
        );
      case 5:
        return (
          <div className="user-input-container">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="underlined-input"

            />
            <div className="skip-container">
              <button
                className="next-btn"
                onClick={() => {
                  if (phone.trim()) {
                    setMessages((prev) => [...prev, { sender: "user", content: phone }]);
                  }
                  setCurrentStep(6);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "Email address (optional)" },
                  ]);
                }}
              >
                <FiArrowRight />
              </button>
              <button
                className="skip-btn"
                onClick={() => {
                  setCurrentStep(6);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "Email address (optional)" },
                  ]);
                }}
              >
                Skip
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="user-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="underlined-input"

            />
            <div className="skip-container">
              <button
                className="next-btn"
                onClick={() => {
                  if (email.trim()) {
                    setMessages((prev) => [...prev, { sender: "user", content: email }]);
                  }
                  setCurrentStep(7);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "Anything else you want us to know?" },
                  ]);
                }}
              >
                <FiArrowRight />
              </button>
              <button
                className="skip-btn"
                onClick={() => {
                  setCurrentStep(7);
                  setMessages((prev) => [
                    ...prev,
                    { sender: "bot", content: "Anything else you want us to know?" },
                  ]);
                }}
              >
                Skip
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="user-input-container">
            <input
              type="text"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Type your message"
              className="underlined-input"

            />
            <button className="next-btn" onClick={handleSubmit}>
              <TbSend />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {chatboxOpen && (
        <ChatFrame
          onBackClick={() => chatboxOpener(false)}
          title="Chat with us"
        >
          <div className="chat-content custom-scroll" ref={chatContentRef}>
            {messages.map((message, index) =>
              message.sender === "bot" ? (
                <div className="botMessage" key={index}>
                  <div className="botAvatar">
                    <img className="botImg" src="bot.png" alt="bot" />
                  </div>
                  <div className="messageText">
                    <p>{message.content}</p>
                  </div>
                </div>
              ) : (
                <div className="user-message" key={index}>
                  <p>{message.content}</p>
                </div>
              )
            )}
            {currentStep !== 8 && renderStepContent()}
          </div>

          {currentStep !== 8 && (
            <div className="input-container">
              <HiOutlineRefresh className="refreshIcon" onClick={handleRefresh} />
              <input
                className="chat-input"
                type="text"
                placeholder="Type here"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <TbSend
                className="sendIcon"
                onClick={handleSendMessage}
              />
            </div>
          )}
        </ChatFrame>
      )}
    </div>
  );
};