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
  const [projectDescription, setProjectDescription] = useState("");

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

  const handleSubmit = () => {
    if (additionalInfo.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: additionalInfo }]);
    }

     fetch("https://backend.barabaricollective.org/barabari-portfolio/save", {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectType: selectedOption,
        name,
        organization,
        phone,
        email,
        additionalInfo,
      }),
    });
    
    console.log({
      projectType:
        selectedOption === "Something else"
          ? projectDescription
          : selectedOption,
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
    setProjectDescription("");
  };

  const getPlaceholder = () => {
    switch (currentStep) {
      case 1:
        return "Select an option above";
      case 2:
        return "Describe your project";
      case 3:
        return "Enter your name";
      case 4:
        return "Enter organization name";
      case 5:
        return "Enter phone number (optional)";
      case 6:
        return "Enter email address (optional)";
      case 7:
        return "Anything else you want us to know?";
      default:
        return "Type here";
    }
  };

  const handleSendMessage = () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    setMessages((prev) => [...prev, { sender: "user", content: trimmedInput }]);
    setUserInput("");

    switch (currentStep) {
      case 2:
        setProjectDescription(trimmedInput);
        setCurrentStep(3);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Tell us your name" },
        ]);
        break;
      case 3:
        setName(trimmedInput);
        setCurrentStep(4);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "What's your organization name?" },
        ]);
        break;
      case 4:
        setOrganization(trimmedInput);
        setCurrentStep(5);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Phone number (optional)" },
        ]);
        break;
      case 5:
        setPhone(trimmedInput);
        setCurrentStep(6);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Email address (optional)" },
        ]);
        break;
      case 6:
        setEmail(trimmedInput);
        setCurrentStep(7);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Anything else you want us to know?" },
        ]);
        break;
      case 7:
        setAdditionalInfo(trimmedInput);
        handleSubmit();
        break;
    }
  };

  const handleSkip = () => {
    switch (currentStep) {
      case 5:
        setCurrentStep(6);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Email address (optional)" },
        ]);
        break;
      case 6:
        setCurrentStep(7);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", content: "Anything else you want us to know?" },
        ]);
        break;
    }
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, currentStep]);

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
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
      );
    }
    return null;
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
              <HiOutlineRefresh
                className="refreshIcon"
                onClick={handleRefresh}
              />
              <input
                className="chat-input"
                type="text"
                placeholder={getPlaceholder()}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={currentStep === 1}
              />
              {(currentStep === 5 || currentStep === 6) && (
                <button className="skip-btn" onClick={handleSkip}>
                  Skip
                </button>
              )}
              <TbSend
                className="sendIcon"
                onClick={handleSendMessage}
                disabled={currentStep === 1}
              />
            </div>
          )}
        </ChatFrame>
      )}
    </div>
  );
};
