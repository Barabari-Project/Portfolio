import React,{useState} from "react";
// import { Star, Sun, Monitor, Briefcase,  } from "lucide-react";
import { Code, Lightbulb, Headset, Users } from "lucide-react";

import RoamingCircle from "../../components/RoamingCircle/RoamingCircle";
import { Meteors } from "../../components/ui/Meteors"; // Make sure to import the Meteors component
import { Particles } from "../../components/Particle/Particles";

function HireSection() {
  const [color, setColor] = useState("blue");

  const cardData = [
    {
      icon: <Code className="h-6 w-6 text-white" />, // Represents coding and advanced skills
      title: "Advanced Skills",
      description:
        "Barabari builders specialize in the latest tech stacks like MERN, Django-based, Sprint-based and etc.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />, // Represents innovative and tailored solutions
      title: "Contextualized Solutions",
      description:
        "We tailor-make our products specifically for your organisation use case.",
    },
    {
      icon: <Headset className="h-6 w-6 text-white" />, // Represents active support and customer service
      title: "Active Support",
      description:
        "Project Managers are available for client queries across different timezones.",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />, // Represents collaboration and long-term capacity building
      title: "Capacity Building",
      description:
        "Beyond single projects, we build long-term tech partnerships.",
    },
  ];

  return (
    <>
     <div className="bg-white relative overflow-hidden">
  

  {/* Particle effect */}
  <Particles
    className="absolute inset-0 z-50"
    quantity={100}
    ease={80}
    color={color}
    refresh
  />

  {/* Main content */}
  <div className="max-w-7xl mx-auto max-md:px-4 relative z-[60]">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
      Why hire us?
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cardData.map((card, index) => (
        <div key={index} className="relative w-full h-full">
          {/* Gradient background */}
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />

          {/* Card container */}
          <div className="relative h-full flex flex-col items-start justify-start overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl">
            {/* Icon container */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-500">
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mb-2 text-white">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.description}</p>

            {/* Meteors effect */}
            <Meteors number={10} />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="bg-[#3949ab] text-white relative overflow-hidden mt-16 md:mt-32 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full relative z-10">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Experience Our Landmarks Products
            </h1>
            <p className="text-base md:text-lg lg:text-[1.8rem] opacity-90">
              Across different business domains{" "}
            </p>
          </div>
        </div>
        <RoamingCircle />
      </div>
    </>
  );
}

export default HireSection;
