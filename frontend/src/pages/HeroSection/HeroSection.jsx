import React, { useEffect, useRef, useState } from "react";
import vectorImg1 from "../../assets/images/home-11-vector-1.png";
import vectorImg2 from "../../assets/images/home-11-vector-2.png";
import vectorImg3 from "../../assets/images/home-11-vector-3.png";
import "./Animation.css";
// import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Chats1 } from "../ChatBot/ChatBotFirst";
import ChatBotImg from "../../assets/Home/botimg.png";
const Demo = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const dynamicImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const setDynamicImageSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = screen.height;

      if (dynamicImageRef.current) {
        dynamicImageRef.current.style.width = `${screenWidth}px`;
        dynamicImageRef.current.style.height = `${
          screenWidth / 2 + screenWidth * 0.17
        }px`;
      }

      if (secondImageRef.current) {
        secondImageRef.current.style.width = `${(screenWidth * 417) / 1536}px`;
        secondImageRef.current.style.height = `${(screenWidth * 374) / 1536}px`;
      }

      if (thirdImageRef.current) {
        thirdImageRef.current.style.width = `${(screenWidth * 417) / 1536}px`;
        thirdImageRef.current.style.height = `${(screenWidth * 349) / 1536}px`;
      }
    };

    setDynamicImageSize();
    window.addEventListener("resize", setDynamicImageSize);

    return () => {
      window.removeEventListener("resize", setDynamicImageSize);
    };
  }, []);

  const circleStyles = [
    {
      "--ani-duration": "1s",
      "--back-color": "#334499",
      "--ani-delay": "0s",
      "--half-opacity": "0",
      "--initial-width": "57.74vw",
      "--initial-height": "57.74vw",
      "--final-width": "64.25vw",
      "--final-height": "64.25vw",
      "--h-top": "-35.5vw",
      "--v-right": "-8.46vw",
    },
    {
      "--ani-duration": "0.5s",
      "--ani-delay": "1s",
      "--h-top": "-26.88vw",
      "--v-right": "-5.85vw",
      "--half-opacity": "0.5",
      "--back-color": "rgba(255, 255, 255, 0.1)",
      "--initial-width": "49.02vw",
      "--initial-height": "49.02vw",
      "--final-width": "55.53vw",
      "--final-height": "55.53vw",
    },
    {
      "--ani-duration": "0.5s",
      "--ani-delay": "1.5s",
      "--h-top": "-22.78vw",
      "--v-right": "-6vw",
      "--half-opacity": "0.5",
      "--back-color": "rgba(255, 255, 255, 0.07)",
      "--initial-width": "45.24vw",
      "--initial-height": "45.24vw",
      "--final-width": "51.75vw",
      "--final-height": "51.75vw",
    },
  ];

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
    <>
      <div className="max-sizer w-full 2xl:h-[140vh] max-md:h-[80vh] max-sm:h-[60vh] h-full">
        <div className={chatboxOpen ? "blur" : ""}>
          <section className="animation-header123 mb-20 max-md:mb-0 ">
            {/* Added mb-20 (or mb-[80px] if configured) */}
            {circleStyles.map((style, index) => (
              <div key={index} className="circle123" style={style} />
            ))}
            <div className="flex flex-col md:flex-row max-md:w-full justify-between relative left-16 top-52 max-md:left-0 max-md:p-2 max-md:top-20 ">
              {/* Text Content - Left Side */}
              <div className="w-full md:w-full z-20 mb-8 md:mb-0 space-y-11">
                <div className="flex flex-col gap-y-8">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-md:text-center ">
                    Let us build your <br className="hidden md:block" />
                    build your <br className="lg:hidden block" />
                    <span id="typingelement" className="text-[#2d41a2]"></span>
                  </h1>

                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-md:text-center">
                    {" "}
                    {/* Removed my-80 */}
                    We are a social tech collective building high Tech Products
                    and Services
                  </p>
                  <div className="max-md:flex max-md:justify-center">
                    <button
                      onClick={() => setChatboxOpen(true)}
                      className="bg-blue-800 text-white px-5 py-2 rounded-full text-lg hover:bg-blue-900 transition-colors "
                    >
                      Hire From Us
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Section - Right Side */}
            </div>
            <div className="header-image123 z-[15]">
              <div className="worker-img123">
                <img
                  ref={dynamicImageRef}
                  src={vectorImg1}
                  className="inner-image123"
                  alt="main vector"
                />

                <div className="second-image-loader123">
                  <img
                    ref={secondImageRef}
                    src={vectorImg2}
                    className="second-image123 z-[16]"
                    alt="secondary element"
                  />
                </div>

                <div className="third-image-loader123">
                  <img
                    ref={thirdImageRef}
                    src={vectorImg3}
                    className="third-image123 z-[17]"
                    alt="tertiary element"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className=" layer max-sm:h-[50vh] w-full h-screen absolute top-0 md:hidden block bg-white opacity-60 z-[15] max-md:h-[75vh]"></div>
          <div
            onClick={onClickChat}
            className={`chatbtn fixed bottom-16 right-3  p-4 rounded-full cursor-pointer flex justify-center items-center gap-3 z-[100] ${
              chatboxOpen ? "hidden" : "block"
            }`}
          >
            <img src={ChatBotImg} alt="" className="w-20 h-20 animate-shake" />
          </div>
        </div>
        <Chats1 chatBoxHandler={setChatboxOpen} chatBoxVar={chatboxOpen} />
      </div>
      {/* <HeroContent /> */}
    </>
  );
};

export default Demo;
