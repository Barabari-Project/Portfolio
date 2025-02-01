import React, { useState } from "react";
import "../styling/Chats2.css"
export const Chats2 = () => {
  const [step, setStep] = useState(1); 

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="chat-card">
      <div className="chat-header">
        <button onClick={handlePreviousStep} className="back-button">
          |&larr;
        </button>
        <h3>Chat with us</h3>
        <button className="close-button">&times;</button>
      </div>
      <div className="chat-content">    
        {step === 1 && (
          <>
          <img src="search.jpeg" alt="" />
          <p>Hi, Thankyou for reaching out.</p>
            <p>Let's see what kind of projects we can help you with</p>
            <p className="selectPara">|Select all that apply</p>
            <div className="button-group">
              <button className="option-button">Website</button>
              <button className="option-button">Mobile Application</button>
              <button className="option-button">Chatbot</button>
              <button className="option-button">CRM tools</button>
            </div>
            <button onClick={handleNextStep} className="submit-button">
              Submit &rarr;
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p>Awesome, can you let us know your budget?</p>
            <div className="button-group">
              <button className="option-button">Under 50K</button>
              <button className="option-button">50K-1L</button>
              <button className="option-button">1L+</button>
              <button className="option-button">To be Decided</button>
            </div>
            <button className="submit-button">Submit</button>
          </>
        )}
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Type here" className="chat-input" />
      </div>
    </div>
  );
};