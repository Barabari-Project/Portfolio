import React, { useEffect, useState } from "react";
import "../../styling/HeroSection.css"; // Import CSS file for styles - Removed: Unused import and CSS is inlined.
import Typed from "typed.js";
import { Menu, Bot } from "lucide-react";
import DynamicButton from "../../components/ButtonComponent/ButtonComponent";
import AnimatedCircles from "../../components/Circle/Circle";
import { Chats1 } from "../ChatBot/ChatBotFirst";
import VectorImages from "../../components/VectorImages/VectorImages";
import ChatBotImg from "../../assets/Home/botimg.png";
const HeroSection = () => {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  const onClickChat = () => {
    setChatboxOpen(true);
  };

  useEffect(() => {
    // Add class to trigger entrance animation on component mount

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

    // const typedMobile = new Typed('#typingelement-mobile', options); - Removed: Unused Typed instance for mobile.

    return () => {
      typed.destroy();

      // typedMobile.destroy(); - Removed: Corresponding destroy for unused instance.
    };
  }, []);

  return (
    <div className="max-md:mb-[-25rem] w-full  h-[140vh] max-2xl:h-full ">
    <div className={chatboxOpen ? "blur" : ""}>
      <div
        id="rev_slider_15_1_wrapper"
        className="rev_slider_wrapper w-full h-screen fullwidthbanner-container mx-auto bg-transparent absolute overflow-visible"
      >
        <div
          id="rev_slider_15_1"
          className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive rev_redraw_on_blurfocus"
          style={{ maxHeight: "868px", height: "868px" }}
        >
          <ul className="tp-revslider-mainul visible block overflow-hidden w-full h-[150vh] max-h-none">
            <li
              className="tp-revslider-slidesli active-revslide relative w-full h-[150vh] overflow-hidden z-20 opacity-100 bg-transparent"
              data-index="rs-46"
              style={{ perspective: 6000 }}
            >
                <div
                  className="tp-bgimg defaultimg absolute inset-0 bg-no-repeat bg-cover bg-center z-20 h-full"
                  style={{
                    backgroundImage:
                      "url(/assets/services/images/rev-slider/transparent.png)",
                  }}
                />
             
              <div className="absolute max-md:w-full z-20 left-[55px] top-[180px] max-md:left-0 max-md:top-[100px] px-4">
                <div className="relative">
                  <div className="overflow-visible max-md:w-full max-md:flex max-md:justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-md:text-3xl max-md:text-center ">
                      Let our students <br className="max-md:hidden" /> build
                      your <br className="md:hidden" />
                      <span
                        id="typingelement"
                        className="text-[#2d41a2] ml-2 md:ml-3"
                      ></span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="tp-parallax-wrap absolute z-20 left-[70px] top-[400px] max-md:px-5 max-md:left-0 max-md:top-[250px]">
                <div className="relative">
                  <div className="tp-mask-wrap overflow-visible">
                    <div
                      className="text-gray-400 w-[600px] max-md:w-full font-extrabold text-[25px] max-md:text-center leading-[30px] tp-rs-perspective perspective-300 tp-with-parallax"
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
              <div className="absolute z-20 max-md:flex max-md:justify-center max-md:w-full max-md:!left-0 max-md:!top-[445px] left-[63px] top-[521px] ">
                <div className=" relative">
                  <div className="overflow-visible">
                    <div
                      className=" font-normal text-[18px] bg-blue-800 text-white px-8 py-3 rounded-full perspective-300  cursor-pointer max-md:m-auto max-md:!left-0"
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
    <Chats1 chatBoxHandler={setChatboxOpen} chatBoxVar={chatboxOpen} />
  </div>
  );
};

export default HeroSection;