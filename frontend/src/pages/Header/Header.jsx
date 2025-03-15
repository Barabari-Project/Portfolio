import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../styling/Header.css";
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "../../assets/barabari_logo.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Responsive layout handler
  useEffect(() => {
    const checkScreenSize = () => {
      const element = document.querySelector(
        ".forcefullwidth_wrapper_tp_banner"
      );
      const section = document.querySelector(".for-small-size");

      if (window.innerWidth <= 999) {
        section?.style?.setProperty("display", "block", "important");
        element?.style?.setProperty("display", "none", "important");
      } else {
        element?.style?.setProperty("display", "block", "important");
        section?.style?.setProperty("display", "none", "important");
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => checkScreenSize();

    checkScreenSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu toggle handler
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("nav-is-open");
  };

  // Navigation items configuration
  const menuItems = [
    { path: "/", text: "HOME" },
    { path: "/", text: "SERVICES", route: true }, // Regular route
  ];

  const socialLinks = [
    {
      icon: <Github className="text-gray-800" />, // GitHub: Typically dark gray
      url: "https://github.com/Barabari-Project",
      ariaLabel: "Github profile",
    },
    {
      icon: <Twitter className="text-sky-500" />, // Twitter/X: Typically light blue
      url: "https://x.com/BarabariProject",
      ariaLabel: "Twitter profile",
    },
    {
      icon: <Linkedin className="text-blue-700" />, // LinkedIn: Typically dark blue
      url: "https://www.linkedin.com/company/the-barabari-project",
      ariaLabel: "Linkedin profile",
    },
    {
      icon: (
        <Instagram className="text-gradient-to-tr from-yellow-500 via-red-500 to-purple-500" />
      ), // Instagram: Gradient
      url: "https://www.instagram.com/thebarabariproject/",
      ariaLabel: "Instagram profile",
    },
  ];
  const contactInfo = [
    {
      icon: <MapPin className="text-[#ffcc33]" />,
      text: "Hyderabad",
      link: "https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4123487,78.4080455,11z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.406498!4d78.4772439!16zL20vMDljNnc?entry=ttu",
    },
    {
      icon: <Phone className="text-[#ffcc33]" />,
      text: "+91 8639322365",
      link: "tel:+918639322365",
    },
    {
      icon: <Mail className="text-[#ffcc33]" />,
      text: "thebarabariproject@gmail.com",
      link: "mailto:support@barabariproject.org",
    },
  ];
  return (
    <div
      className="header-transparent nav-sticky nav-light"
      data-scroll-to="top"
    >
      <div
        className={`off-canvas-menu-area menuHeader  ${
          isMenuOpen ? "nav-is-open" : ""
        }`}
      >
        <div className="container !bg-white ">
          <div className="offset-menu-wraper clearfix ">
            <div className="float-left ml-[4rem] mt-4 max-md:ml-5">
              <Link
                to="/"
                className="offcanvas-nav-brand"
                style={{ display: "flex", alignItems: "center" }}
                aria-label="Home"
              >
                <img
                  src={Logo}
                  alt="Barabari Logo"
                  className="barabari-logo w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]"
                 
                  loading="lazy"
                />
                <div className=" ml-2 text-[10px] !flex !items-center">
                  <p className="banner-title website-name !text-2xl !mb-0 max-md:!text-[18px]">
                    The Barabari Collective
                  </p>
                </div>
              </Link>
            </div>

            <div
              className={`humburger style3 fullscreen_menu_tigger right-32 max-lg:right-0 max-md:right-[22px] max-md:top-[10px] ${
                isMenuOpen ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              <div className={`humburger-icons ${isMenuOpen ? 'hamburger-open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
</div>
            </div>
          </div>
        </div>

        <div className="menu-overlay" role="presentation"></div>

        <div
          className={`offcanvas-menu-wraper clearfix menuWrapper ${
            isMenuOpen ? "active" : ""
          }`}
        >
          <div
            className="menu-overlay"
            onClick={toggleMenu}
            role="presentation"
          ></div>
          <div className="">
          <div className="menu-container">
            <nav aria-label="Main navigation" className="navbar">
              <ul className="offcanvas-menu">
                {menuItems.map((item, index) => (
                  <li key={index} onClick={() => setIsMenuOpen(false)}>
                    {item.scroll ? (
                      <ScrollLink
                        to={item.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link"
                        role="button"
                      >
                        {item.text}
                      </ScrollLink>
                    ) : item.route ? (
                      <Link to={item.path} className="nav-link">
                        {item.text}
                      </Link>
                    ) : (
                      <a href={item.path} className="nav-link">
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="offcanvas-content-wraper ">
            <div className="offcanvas-content">
              <section aria-labelledby="contact-heading">
                <h2 className="offcanvas-title max-md:!text-[20px]" id="contact-heading ">
                  GET IN TOUCH
                </h2>
                <ul className="offcanvas-list-widget max-md:!text-[15px]">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="max-md:!text-[1px]">
                      <p className="flex items-center gap-2 max-md:!text-[15px]">
                        {item.icon}
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : ""}
                        >
                          {item.text}
                        </a>
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="social-heading">
                <h2 className="offcanvas-title max-md:!text-[20px]" id="social-heading">
                  GET SOCIAL TOGETHER
                </h2>
                <ul className="social-list version-4 flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <div className="rounded-full p-3 bg-white scale-90 hover:scale-100 transition-all duration-200">

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        >
                        {link.icon}
                      </a>
                        </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
        </div>
        </div>
       
        </div>
      </div>

      <style>{`
        /* Enhanced accessibility styles */
       .humburger.active .humburger-icons span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.humburger.active .humburger-icons span:nth-child(2) {
  opacity: 0;
}

.humburger.active .humburger-icons span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
        
        .nav-link:focus {
          outline: 2px solid #ffcc33;
          outline-offset: 4px;
        }
        
        /* Rest of your styles remain same */
      `}</style>
    </div>
  );
};

export default Header;
