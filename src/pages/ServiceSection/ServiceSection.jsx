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
    <div className="col-lg-4 col-md-6 col-sm-12 custommarginbottom flex justify-between">
      <div className="single-cases-card">
        <div className="feature-block-one">
          <div className="inner-box flex justify-center flex-col items-center shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">
            <div className="icon-box">
              <div className="anim-icon group">
                <span className="icon icon-1"></span>
                <span className="icon icon-2"></span>
                <span className="icon icon-3"></span>
              </div>
              <div className="text-icon">{icon}</div>
            </div>
            <h3>
              <a
                href="https://azim.commonsupport.com/Detox/index-2.html"
                className="text-[20px] font-extrabold"
              >
                {title}
              </a>
            </h3>
            <p className="text-gray-400 mt-2.5">{description}</p>

            {/* Bottom Strip */}
            <div className="bg-[#f3f7ff] w-full py-3 flex items-center justify-center gap-2 absolute bottom-0 left-0 right-0 rounded-b-[1.4rem]">
            <a href="#" className="text-blue-600 font-semibold">
                See More
              </a>
              <BsArrowUpRightCircleFill className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div>
      <section className="xs-section-padding" id="servicesSections">
        <div className="w-full">
          <div className="row no-gutters agency-filter-wraper">
            <div className="col-lg-12">
              <div
                className="agency-section-title"
                style={{ textAlign: "center", width: "100%" }}
              >
                <h3
                  style={{
                    fontSize: "45px",
                    color: "black",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Our Services
                </h3>
              </div>
            </div>
          </div>
          <div className="row gy-10 flex gap-20 flex-wrap justify-center">
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
