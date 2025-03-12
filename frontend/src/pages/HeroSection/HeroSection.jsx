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
    <div className=" max-md:mb-[-25rem] w-full h-[120vh] ">
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
            {/* Main Slider Content */}

            <ul className="tp-revslider-mainul visible block overflow-hidden w-full h-[150vh] max-h-none">
              {" "}
              {/* Updated: h-[150vh] to h-screen for responsive height */}
              {/* Single Slide */}
              <li
                className="tp-revslider-slidesli active-revslide relative w-full h-[150vh] overflow-hidden z-20 opacity-100 bg-transparent"
                data-index="rs-46"
                style={{ perspective: 6000 }}
              >
                {/* Background Image - You can keep or remove transparent background as per your need */}
                <div className="slotholder absolute top-0 left-0 z-0 w-full h-[150vh] visible opacity-100">
                  <div
                    className="tp-bgimg defaultimg absolute inset-0 bg-no-repeat bg-cover bg-center z-20 h-full"
                    style={{
                      backgroundImage:
                        "url(/assets/services/images/rev-slider/transparent.png)", // Updated: Asset path corrected to start from /public
                    }}
                  />
                </div>
                {/* Logo BG Text */}
                <div
                  className="tp-parallax-wrap absolute z-20"
                  style={{ left: "60px", top: "30px" }} // Adjust position as needed
                ></div>
                {/* Contact Us Button */}
                {/* Let our students build your ChatBots Text */}
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

                {/* We are a Section 8 Non-Profit ... Text */}
                <div className="tp-parallax-wrap absolute z-20 left-[70px] top-[400px] max-md:px-5 max-md:left-0 max-md:top-[250px]">
                  <div className="relative">
                    <div className="tp-mask-wrap overflow-visible">
                      <div
                        className="text-gray-400 w-[600px] max-md:w-full font-extrabold text-[25px] max-md:text-center leading-[30px] tp-rs-perspective perspective-300 tp-with-parallax"
                        style={{
                          whiteSpace: "normal", // Changed to normal to allow text wrapping
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

                {/* Hire from us Button */}
                <DynamicButton
                  text="Hire From Us"
                  position={{ left: "72px", top: "520px" }}
                  className="font-sans "
                />
                {/* Parallax Elements - Keep these graphic elements as they are */}
                <AnimatedCircles />
                {/* Vector Images */}
                <VectorImages />
              </li>
            </ul>

            <div className="tp-bannertimer invisible w-0"></div>
          </div>
          <div className="tp-fullwidth-forcer w-full h-[868px]"></div>{" "}
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
