import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Chats1 } from "../ChatBot/ChatBotFirst";
import AnimatedCircles from "../../components/Circle/Circle";
import VectorImages from "../../components/VectorImages/VectorImages";
import ChatBotImg from "../../assets/Home/botimg.png"
import "../../styling/HeroSection.css";
const HeroSection = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const onClickChat = () => {
    setChatboxOpen(true);
  };

  useEffect(() => {
    const parallaxWraps = document.querySelectorAll(
      ".tp-parallax-wrap.vector-image"
    );

    parallaxWraps.forEach((wrap) => {
      wrap.classList.add("animate-on-load");
    });
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Websites", "Apps", "ChatBots", "CRM Tools"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    const typed = new Typed("#typingelement", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className=" max-sizer w-full h-[104vh] max-md:h-[100vh] relative overflow-hidden 2xl:h-[150vh]">
      <div className={chatboxOpen ? "blur" : ""}>
        <div id="rev_slider_15_1_wrapper" className="w-full h-screen absolute">
          <div id="rev_slider_15_1" className="w-full h-full relative">
            <ul className="w-full h-full relative">
              <li
                className="w-full h-full relative"
                style={{ perspective: 6000 }}
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-center z-20"
                  style={{
                    backgroundImage:
                      "url(/assets/services/images/rev-slider/transparent.png)",
                  }}
                />

                <div className="absolute w-full md:w-auto z-20 left-4 max-md:left-0 md:left-[55px] top-[100px] md:top-[180px] px-4">
                  <div className="relative">
                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-left max-md:text-center">
                        Let our students <br className="hidden md:block" />{" "}
                        build your <br className="md:hidden" />
                        <span
                          id="typingelement"
                          className="text-[#2d41a2] ml-2 md:ml-3"
                        ></span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full md:w-auto z-20 left-4 max-md:left-0 md:left-[70px] top-[250px] md:top-[400px] px-5 md:px-0">
                  <div className="relative">
                    <div className="overflow-visible">
                      <div
                        className="text-gray-400 w-full md:w-[600px] font-extrabold text-[20px] md:text-[25px] text-left max-md:text-center leading-[30px]"
                        style={{
                          whiteSpace: "normal",
                          letterSpacing: "px",
                          fontWeight: 400,
                        }}
                      >
                        We are a Section 8 Non-Profit upskilling candidates from
                        low-income families democratizing access to tech and
                        design employment opportunities.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full md:w-auto z-20 left-4 md:left-[63px] max-md:left-0 top-[445px] md:top-[521px] flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="overflow-visible">
                      <div
                        className="font-normal text-[16px] md:text-[18px] bg-blue-800 text-white px-6 md:px-8 py-3 rounded-full cursor-pointer"
                        style={{
                          whiteSpace: "nowrap",
                          letterSpacing: "px",
                          fontWeight: 500,
                        }}
                        onClick={onClickChat}
                      >
                        Hire From Us
                      </div>
                    </div>
                  </div>
                </div>
                <AnimatedCircles />
                <VectorImages />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={onClickChat}
        className={`chatbtn fixed bottom-16 right-3  p-4 rounded-full cursor-pointer flex justify-center items-center gap-3 z-[100] ${
          chatboxOpen ? "hidden" : "block"
        }`}
      >
        <img src={ChatBotImg} alt="" className="w-20 h-20 animate-shake" />
      </div>
      <Chats1 chatBoxHandler={setChatboxOpen} chatBoxVar={chatboxOpen} />
    </div>
  );
};

export default HeroSection;
