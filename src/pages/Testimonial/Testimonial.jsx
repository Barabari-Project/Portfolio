import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialImages = [
  "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80",
];

function Testimonial() {
  return (
    <div className="min-h-screen bg-[#3949AB] text-white py-16 mt-20">
      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #3949AB;
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.8);
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Don't just take our word for it
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hear from our clients
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
            lobortis nisi.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col md:flex-row justify-evenly gap-8 max-w-6xl mx-auto relative ">
        <div className="absolute -left-8 -top-8 grid grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={`dot-top-${i}`} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
          <div className="absolute -left-8 top-0 grid grid-rows-12 gap-4 ">
            {[...Array(12)].map((_, i) => (
              <div key={`dot-left-${i}`} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
          <div className="absolute -right-8 bottom-0 grid grid-rows-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={`dot-right-${i}`} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
          <div className="absolute -right-8 -bottom-8 grid grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={`dot-bottom-${i}`} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Carousel */}
          <div className="w-[30vw] h-[60vh] max-md:w-full bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="h-[500px] overflow-y-auto custom-scroll">
              <div className="space-y-0">
                {testimonialImages.map((image, index) => (
                  <div key={index} className="relative h-[500px] p-4">
                    <img
                      src={image}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="w-[35vw] h-[60vh] max-md:w-full  bg-[#626fb1] backdrop-blur-sm rounded-2xl p-8 flex flex-col shadow-xl">
            <Quote className="w-12 h-12 mb-6 text-white/80" />
            <p className="text-xl leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a,
              sed lobortis nisi. Nulla scelerisque tellus interdum venenatis
              auctor et nibh.
            </p>

            <div className="mt-auto flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-200">Manager, XYZ company</p>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Company Logo"
                className="ml-auto h-8 invert opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;