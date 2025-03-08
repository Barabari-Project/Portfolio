import React from "react";
import "../../styling/service.css";
import {
  FaCartPlus,
  FaTerminal,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const serviceData = [
  {
    title: "Websites",
    description: "Landing pages, Organisational pages and Profile pages",
    icon: <FaGlobe />,
  },
  {
    title: "Mobile/Web Applications",
    description: "Applications for your business requirements on all platforms",
    icon: <FaMobileAlt />,
  },
  {
    title: "Chatbots",
    description: "Custom chatbots to engage and assist your users",
    icon: <FaRobot />,
  },
  {
    title: "E-commerce Setup",
    description: "Expand your businesses with our tech tools",
    icon: <FaCartPlus />,
  },
  {
    title: "CRM Tools",
    description: "Custom dashboards for business use cases.",
    icon: <FaTerminal />,
  },
  {
    title: "No Code Applications",
    description: "Deploy and test your business ideas",
    icon: <FaCode />,
  },
];
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="w-full p-4 sm:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 max-md:flex max-md:justify-center">
      <div className="single-cases-card h-full">
        <div className="feature-block-one h-full">
          <div className="inner-box flex flex-col items-center justify-between shadow-[4px_4px_10px_rgba(0,0,0,0.2)] h-full relative pb-16">
            <div className="icon-box">
              <div className="anim-icon group">
                <span className="icon icon-1"></span>
                <span className="icon icon-2"></span>
                <span className="icon icon-3"></span>
              </div>
              <div className="text-icon">{icon}</div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[20px] xl:text-xl 2xl:text-2xl font-extrabold text-center px-2">
              <a href="#">{title}</a>
            </h3>
            <p className="text-gray-400 mt-2.5 text-sm sm:text-base px-4 text-center ">
              {description}
            </p>

            {/* Bottom Strip */}
            <div className="bg-[#f3f7ff] w-full py-3 flex items-center justify-center gap-2 absolute bottom-0 left-0 right-0 rounded-b-[1.4rem] mt-8">
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm sm:text-base"
              >
                See More
              </a>
              <BsArrowUpRightCircleFill className="text-blue-600 text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <section className="px-4 sm:px-6 lg:px-8" id="servicesSections">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h3>
          </div>
          <div className="flex flex-wrap -mx-4">
            {serviceData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
