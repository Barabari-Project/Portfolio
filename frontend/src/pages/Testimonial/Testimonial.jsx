import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Linkedin,
  Instagram,
} from "lucide-react";
import { AnimatedTooltip } from "../../components/Team/TooltipTeam";
import JsonData from "../../Json/Testimonial.json";
function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? JsonData.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === JsonData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // const images = JsonData.testimonialImages[currentIndex].scrollImg;
  // const [imageIndex, setImageIndex] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(true);
  // const sliderRef = useRef(null);

  // Reset index when currentIndex changes
  // useEffect(() => {
  //   setImageIndex(0);
  //   setIsTransitioning(true);
  // }, [currentIndex]);

  // Auto-slide effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (imageIndex >= images.length) {
  //       setIsTransitioning(false); // Remove animation
  //       setImageIndex(0); // Instant reset
  //       setTimeout(() => setIsTransitioning(true), 50); // Restore animation
  //     } else {
  //       setImageIndex((prev) => prev + 1);
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [imageIndex, images.length]);
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <div className="min-h-screen bg-[#3949AB] text-white py-8 md:py-16 mt-12 md:mt-20">
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
          height:12px; 
        }
        @media (min-width: 768px) {
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 5px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #3949AB;
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: gray;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Don't just take our word for it
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Hear from our clients
          </h2>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {/* Mobile Navigation Buttons */}
          {/* Decoration Dots - Hidden on mobile */}
          <div className="hidden md:absolute md:-left-8 -top-8 md:grid grid-cols-7 gap-3 lg:gap-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={`dot-top-${i}`}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
          <div className="hidden md:absolute md:-left-8 top-0 md:grid grid-rows-12 gap-3 lg:gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={`dot-left-${i}`}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
          <div className="hidden md:absolute md:-right-8 bottom-0 md:grid grid-rows-12 gap-3 lg:gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={`dot-right-${i}`}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
          <div className="hidden md:absolute md:-right-8 -bottom-8 md:grid grid-cols-7 gap-3 lg:gap-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={`dot-bottom-${i}`}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
              />
            ))}
          </div>

          {/* Image Carousel */}
          {/* <div className="w-full md:w-[45%] lg:w-[40%] h-[40vh] sm:h-[50vh] md:h-[60vh] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
            <div className="h-full overflow-hidden">
              <div
                ref={sliderRef}
                className={`flex h-full`}
                 ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }

              style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              >
                {images.concat(images[0]).map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] p-3 md:p-4"
                  >
                    <img
                      src={imgSrc}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover obj rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/* Testimonial Content */}
          <div className="w-full lg:w-[60%] min-h-[400px] md:h-[65vh]   bg-[#626fb1] backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col shadow-lg md:shadow-xl overflow-hidden">
  {/* Header Section: Company Name & Logo */}
  <div className="flex justify-between items-center mb-6">
    <p className="text-lg md:text-xl text-white font-bold">
      {JsonData.testimonials[currentIndex].organisation.name} (
      {JsonData.testimonials[currentIndex].organisation.type})
    </p>
    {JsonData.testimonials[currentIndex].companyLogo && (
      <img
        src={JsonData.testimonials[currentIndex].companyLogo}
        alt="Company Logo"
        className="h-10 md:h-14 rounded-lg object-contain shadow-md hover:scale-105 transition-all duration-200"
      />
    )}
  </div>

  {/* Main Section */}
  <div className="flex flex-1 w-full relative">
    {/* Text Content */}
    <div className="flex-1 pr-4 flex flex-col justify-between">
      <div>
        <Quote className="w-6 h-6 text-white/80 mb-3" />
        <p className="text-sm md:text-base text-white leading-relaxed mb-4 w-[100%]">
          {JsonData.testimonials[currentIndex].quote}
        </p>

        <div className="mt-2 flex flex-wrap gap-2 w-[70%]">
          <span className="font-semibold text-white">Tech used:</span>
          {JsonData.testimonials[currentIndex].techUsed.map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm bg-white/10 text-white py-1 px-3 rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Profile Section */}
    {JsonData.testimonials[currentIndex].author.profileImg && (
      <div className="w-28 md:w-32 lg:w-40 flex flex-col items-center">
        <img
          src={JsonData.testimonials[currentIndex].author.profileImg}
          alt={JsonData.testimonials[currentIndex].name}
          className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-white/20 transition-transform duration-200 hover:scale-105"
        />
        <div className="mt-2 text-center">
          <h3 className="font-semibold text-sm md:text-base text-white">
            {JsonData.testimonials[currentIndex].name}
          </h3>
          <p className="text-xs md:text-sm text-white/80">
            {JsonData.testimonials[currentIndex].Designation}
          </p>
        </div>
      </div>
    )}
  </div>
  <div className="w-full flex justify-center mt-4">
  <div className="w-full md:w-[50%] lg:w-[60%] border-t border-white/20 pt-4">
    <div className="flex justify-center items-center gap-[4px]">
      <AnimatedTooltip items={JsonData.testimonials[currentIndex].developerDetails} />
    </div>
  </div>
</div>

</div>

 {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between">
            <button
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors -translate-x-12"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors translate-x-12"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="md:hidden flex justify-center gap-4 w-full">
            <button
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
