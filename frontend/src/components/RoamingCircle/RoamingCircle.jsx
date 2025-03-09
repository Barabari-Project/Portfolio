import React from 'react';

function RoamingCircle() {
  return (
    <>
      <div className="max-lg:hidden">
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 h-full w-1/3 z-0">
          {/* Large circle */}
          <div
            className="absolute rounded-full bg-[#4a5ac1] opacity-50 pulse-slow"
            style={{
              right: '-15vw', // Responsive right position
              top: '-15vw', // Responsive top position
              width: '30vw', // Responsive width
              height: '30vw', // Responsive height
              maxWidth: '500px', // Max width to prevent excessive scaling
              maxHeight: '500px', // Max height to prevent excessive scaling
            }}
          ></div>

          {/* Medium circle */}
          <div
            className="absolute rounded-full bg-[#4a5ac1] opacity-40 pulse"
            style={{
              right: '-5vw', // Responsive right position
              top: '30%', // Responsive top position (percentage)
              width: '20vw', // Responsive width
              height: '20vw', // Responsive height
              maxWidth: '300px', // Max width to prevent excessive scaling
              maxHeight: '300px', // Max height to prevent excessive scaling
            }}
          ></div>

          {/* Small circle */}
          <div
            className="absolute rounded-full bg-[#4a5ac1] opacity-30 pulse-faster"
            style={{
              right: '5vw', // Responsive right position
              bottom: '5vw', // Responsive bottom position
              width: '15vw', // Responsive width
              height: '15vw', // Responsive height
              maxWidth: '200px', // Max width to prevent excessive scaling
              maxHeight: '200px', // Max height to prevent excessive scaling
            }}
          ></div>
        </div>
      </div>
      <style>{`
        .pulse-slow {
          animation: pulse 3s linear infinite;
        }

        .pulse {
          animation: pulse 1.5s linear infinite;
        }
        
        .pulse-faster {
          animation: pulse 1s linear infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}

export default RoamingCircle;