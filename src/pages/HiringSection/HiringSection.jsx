import React from "react";
import { Star, Sun, Monitor, Briefcase, Code } from "lucide-react";
import RoamingCircle from "../../components/RoamingCircle/RoamingCircle";

function HireSection() {
  const cardData = [
    {
      icon: <Sun className="h-6 w-6 text-gray-800" />,
      title: "Highly Skilled",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    },
    {
      icon: <Star className="h-6 w-6 text-gray-800" />,
      title: "Highly Skilled",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    },
    {
      icon: <Monitor className="h-6 w-6 text-gray-800" />,
      title: "Responsive Design",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-gray-800" />,
      title: "Personalized care",
      description:
        "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    },
  ];

  return (
    <>
      <div className="bg-white py-8 md:py-16 mt-20 md:mt-40 px-5 max-md:mt-48 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
            Why hire from us?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#f3f7ff] p-6 rounded-lg shadow-[6px_6px_10px_rgba(0,0,0,0.2)] min-h-[250px] md:min-h-[300px]"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-[52%] w-full h-[250px] sm:h-[300px] md:h-[35vh]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team members discussing project"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="bg-[#f3f7ff] p-6 rounded-lg flex flex-col justify-center lg:w-1/4 shadow-[6px_6px_10px_rgba(0,0,0,0.2)] min-h-[250px] sm:h-[300px] md:h-[35vh]">
              <div className="mb-4">
                <Code className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-600 text-sm">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>

            <div className="lg:w-1/4 w-full h-[250px] sm:h-[300px] md:h-[35vh]">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team members collaborating"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3949ab] text-white relative overflow-hidden mt-16 md:mt-32 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full relative z-10">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              We can help build just about anything
            </h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor
            </p>
          </div>
        </div>
        <RoamingCircle />
      </div>
    </>
  );
}

export default HireSection;
