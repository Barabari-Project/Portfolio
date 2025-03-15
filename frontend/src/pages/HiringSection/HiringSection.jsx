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
      <div className="bg-white">
        <div className="max-w-7xl mx-auto max-md:px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 ">
            Why hire from us?
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#f3f7ff] p-6 rounded-lg shadow-[6px_6px_10px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
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
