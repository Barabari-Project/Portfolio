import React, { useState, useRef, useEffect} from "react";
import "../styling/Chats2.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidHandDown } from "react-icons/bi";
import { TbSend } from "react-icons/tb";

export const Chats2 = ({ chatboxOpen, chatboxOpener }) => {
  const chatContentRef = useRef(null);
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
      setTimeout(() => {
        const messages = document.querySelectorAll(".message-Left");
        if (messages.length > 0) {
          messages[messages.length - 1].scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [sentMessages, userInput, budgetOptions]);

  return (
    <div>
      {chatboxOpen && (
        <div className="chat-card">
          <div className="chatContainer">
            <div className="backChat">
              <div onClick={BackClick}><FaRegArrowAltCircleLeft /></div>
              <div className="chatWith">Chat with us</div>
              <div onClick={BackClick}><IoCloseCircleOutline /></div>
            </div>
            <div className="chat-content" ref={chatContentRef}>
              <div className="botimgDiv">
                <div className="botDiv">
                  <img className="botImg" src="bot.png" alt="bot image" />
                </div>
                <div className="thankPara">
                  <p>Hi, Thank you for reaching out.</p>
                </div>
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
                Submit <FiArrowRight />
              </button>

              {selectedOptions.includes("Website") && showMessage && (
                <div className="message-Left">
                  <p>{message}</p>
                </div>
              )}

              {step === 2 && (
                <>
                  <div>
                    <div className="botimgDiv">
                    <div className="bot-imgDiv">
                      <img className="botImg" src="bot.png" alt="" />
                    </div>
                    <div className="awesomePara">
                      <p>Awesome, can you let us know your budget?</p>
                    </div>
                    </div>
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
                    <div>
                      <div className="botimgDiv">
                        <div className="bot-imgDiv">
                          <img className="botImg" src="bot.png" alt="" />
                        </div>
                        <div className="soundGoodPara">
                          <p>Sound good. Can you please leave us your contact details?</p>
                        </div>
                      </div>
                      <div className="detailPara">
                        <p>You can type it in below <BiSolidHandDown className="below-icon" /></p>
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
                      <div className="botimgDiv">
                      <div className="bot-imgDiv">
                        <img className="botImg" src="bot.png" alt="" />
                      </div>
                      <div className="soundGoodPara">
                        <p>Thankyou! Is there anything else you would like to share? Please type it in below <BiSolidHandDown className="below-icon" /></p>
                      </div>
                      </div>
                      <div className="soundGoodpara">
                        <p>If not, kindly hit submit. We will get back to you in 2-3 business days.</p>
                      </div>
                      <button className="submitBtn">Submit Request <FiArrowRight /></button>
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
              <TbSend className="sendIcon" onClick={handleSendMessage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
