import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Linkedin,
  Instagram,
} from "lucide-react";
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

  const images = JsonData.testimonialImages[currentIndex].scrollImg;
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
          <div className="w-full md:w-[45%] lg:w-[40%] h-[40vh] sm:h-[50vh] md:h-[60vh] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
            <div className="h-full overflow-hidden">
              <div
                // ref={sliderRef}
                className={`flex h-full`}
                //    ${
                //   isTransitioning
                //     ? "transition-transform duration-500 ease-in-out"
                //     : ""
                // }
                
                // style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              >
                {/* Render slides */}
                {images.concat(images[0]).map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] p-3 md:p-4"
                  >
                    <img
                      src={imgSrc}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Testimonial Content */}
          <div className="w-full md:w-[50%] lg:w-[45%] h-auto min-h-[400px] md:h-[65vh] bg-[#626fb1] backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col shadow-lg md:shadow-xl">
  {/* Header Section: Company Name & Logo */}
  <div className="flex justify-between items-center mb-6">
    {/* Company Name */}
    <p className="text-lg md:text-xl text-gray-200 font-bold">
      {JsonData.testimonials[currentIndex].organisation.name} (
      {JsonData.testimonials[currentIndex].organisation.type})
    </p>
    {/* Company Logo */}
    {JsonData.testimonials[currentIndex].companyLogo && (
      <img
        src={JsonData.testimonials[currentIndex].companyLogo}
        alt="Company Logo"
        className="h-10 md:h-14 rounded-lg object-contain shadow-md hover:scale-105 transition-all duration-200"
      />
    )}
  </div>
  <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/80 mb-3 md:mb-4" />

  {/* Quote Section */}
  <p className="text-sm md:text-base lg:text-lg leading-relaxed italic mb-4">
    {JsonData.testimonials[currentIndex].quote}
  </p>

  {/* Technologies Used */}
  <div className="mt-2 flex flex-wrap gap-2">
    <span className="font-semibold">Tech used:</span>
    {JsonData.testimonials[currentIndex].techUsed.map((tech, index) => (
      <span
        key={index}
        className="text-xs md:text-sm bg-white/10 text-white py-1 px-3 rounded-full shadow-md"
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Footer Section: Author Details & Social Media */}
  <div className="mt-auto flex justify-between items-center w-full pt-6">
    {/* Author Profile */}
    <div className="flex items-center gap-3">
      {JsonData.testimonials[currentIndex].author.profileImg && (
        <img
          src={JsonData.testimonials[currentIndex].author.profileImg}
          alt={JsonData.testimonials[currentIndex].name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
        />
      )}
      <h3 className="font-semibold text-sm md:text-base">
        {JsonData.testimonials[currentIndex].name}
      </h3>
    </div>
    
    {/* Social Media Links */}
    <div className="flex gap-4">
      {JsonData.testimonials[currentIndex].organisation.instagram && (
        <a
          href={JsonData.testimonials[currentIndex].organisation.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full shadow-md p-2 bg-white/10 backdrop-blur-md dark:text-white hover:scale-110 transition-all duration-300"
        >
          <Instagram />
        </a>
      )}
      {JsonData.testimonials[currentIndex].organisation.linkedin && (
        <a
          href={JsonData.testimonials[currentIndex].organisation.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full shadow-md p-2 bg-white/10 backdrop-blur-md dark:text-white hover:scale-110 transition-all duration-300"
        >
          <Linkedin />
        </a>
      )}
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
