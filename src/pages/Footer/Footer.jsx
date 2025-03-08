import React from "react";
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import FooterBg from "../../assets/motpath.svg"
const Footer = () => {
  const socialIcons = [
    {
      href: "https://github.com/Barabari-Project",
      icon: <Github size={20} className="text-white" />,
      bgColor: "#3b5998",
    },
    {
      href: "https://x.com/BarabariProject",
      icon: <Twitter size={20} className="text-white" />,
      bgColor: "#1DA1F2",
    },
    {
      href: "https://www.linkedin.com/company/the-barabari-project",
      icon: <Linkedin size={20} className="text-white" />,
      bgColor: "#0077b5",
    },
    {
      href: "https://www.instagram.com/thebarabariproject/",
      icon: <Instagram size={20} className="text-white" />,
      bgColor: "#E1306C",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      className="py-8 h-[50vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundColor: "#15212a",
      }}
    >
      <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
  {socialIcons.map((item, index) => (
    <div key={index} className="">
      <a
        href={item.href}
        className={`bg-[${item.bgColor}] p-2 rounded-full hover:opacity-80 transition-opacity`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-3 bg-black opacity-80 rounded-full transition-all duration-300 scale-90 hover:scale-100">
          {item.icon}
        </div>
      </a>
    </div>
  ))}
</div>

        <div className="text-white text-sm">
          <p className="mb-1">2024 © All Rights Reserved</p>
          <p>Designed and Developed by Barabari Project Dev Team</p>
        </div>
      </div>
      <div className="fixed bottom-6 right-9 z-50">
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-violet-300 animate-bounce ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <FaArrowUp className="text-white text-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
      </button>
    </div>
    </footer>
  );
};

export default Footer;
