import React from "react";

const DynamicButton = ({
  text = "Hire from us",
  position = { left: "63px", top: "521px" },
  bgColor = "#334499",
  textColor = "white",
  onClick,
}) => {
  return (
    <div className="absolute z-20 max-md:flex max-md:justify-center max-md:w-full max-md:!left-0 max-md:!top-[445px]" style={position}>
      <div className=" relative">
        <div className="overflow-visible">
          <div
            className=" font-normal text-[18px] px-8 py-3 rounded-full perspective-300  cursor-pointer max-md:m-auto max-md:!left-0"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              whiteSpace: "nowrap",
              letterSpacing: "px",
              fontWeight: 500,
            }}
            onClick={onClick}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicButton;
