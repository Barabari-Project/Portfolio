import React, { useState } from "react";
import "../styling/Chats2.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { TbSend } from "react-icons/tb";

export const Chats2 = ({ chatboxOpen, chatboxOpener }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showBudgetMessage, setShowBudgetMessage] = useState(false);
  const [budgetMessage, setBudgetMessage] = useState("");
  const [goodSoundMessage, setGoodSoundMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const options = ["Website", "Mobile Application", "Chatbot", "CRM tools"];
  const budgetOptions = ["Under 50K", "50K-1L", "1L+", "To be Decided"];

  const handleSelectOption = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([option]);
    }
  };

  const handleBudgetSelect = (selectedBudget) => {
    setBudget(selectedBudget);
    if (selectedBudget === "Under 50K") {
      setShowBudgetMessage(true);
      setBudgetMessage("Under 50K");
      setGoodSoundMessage("Sounds good!");
    } else {
      setShowBudgetMessage(false);
      setGoodSoundMessage("");
    }
  };

  const handleSubmit = () => {
    setStep(2);
    if (selectedOptions.includes("Website")) {
      setShowMessage(true);
      setMessage("Website");
    }
  };

  const handleFinalSubmit = () => {
    alert(`Selected: ${selectedOptions.join(", ")}\nBudget: ${budget}`);
  };

  const BackClick = () => {
    chatboxOpener(false);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setSentMessages([...sentMessages, userInput]);
      setUserInput("");
      setShowThankYouMessage(true);
    }
  };

  const handleRefresh = () => {
    setSelectedOptions([]);
    setStep(1);
    setBudget(null);
    setShowMessage(false);
    setMessage("");
    setShowBudgetMessage(false);
    setBudgetMessage("");
    setGoodSoundMessage("");
    setUserInput("");
    setSentMessages([]);
    setShowThankYouMessage(false);
  };

  return (
    <div>
      {chatboxOpen && (
        <div className="chat-card">
          <div className="chatContainer">
            <div className="backChat">
              <div onClick={BackClick}><FaRegArrowAltCircleLeft /></div>
              <div>Chat with us</div>
              <div onClick={BackClick}><IoCloseCircleOutline /></div>
            </div>
            <div className="chat-content">
              <img src="search.png" alt="" />
              <div className="thankPara">
                <p>Hi, Thank you for reaching out.</p>
              </div>
              <div className="para-Div">
                <p>Let's see what kind of projects we can help you with</p>
              </div>
              <div className="options-container">
                {options.map((option) => (
                  <button
                    key={option}
                    className={`option-btn ${selectedOptions.includes(option) ? "selected" : ""}`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
              >
                Submit
              </button>

              {selectedOptions.includes("Website") && showMessage && (
                <div className="message-Left">
                  <p>{message}</p>
                </div>
              )}

              {step === 2 && (
                <>
                  <div className="awesomePara">
                    <p>Awesome, can you let us know your budget?</p>
                  </div>
                  <div className="options-container">
                    {budgetOptions.map((option) => (
                      <button
                        key={option}
                        className={`option-btn ${budget === option ? "selected" : ""}`}
                        onClick={() => handleBudgetSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {budget === "Under 50K" && showBudgetMessage && (
                    <div className="messageLeft">
                      <p>{budgetMessage}</p>
                    </div>
                  )}

                  {budget === "Under 50K" && goodSoundMessage && (
                    <div className="para-div">
                      <div className="soundGoodPara">
                        <p>Sound good. Can you please leave us your contact details?</p>
                      </div>
                      <div className="detailPara">
                        <p>You can type it in below</p>
                      </div>
                    </div>
                  )}

                  {sentMessages.map((msg, index) => (
                    <div key={index} className="message-Left">
                      <p>{msg}</p>
                    </div>
                  ))}

                  {showThankYouMessage && (
                    <div>
                      <div className="soundGoodPara">
                        <p>Thank you for your message!</p>
                      </div>

                      <div className="soundGoodPara">
                        <p>Hello</p>
                      </div>
                      <button className="submit-btn">Submit Request</button>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="icons-container">
              <HiOutlineRefresh className="refreshIcon" onClick={handleRefresh} />
              <input
                className="chat-input"
                type="text"
                placeholder="Type here"
                value={userInput}
                onChange={handleInputChange}
              />
              <TbSend onClick={handleSendMessage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
