import "../styling/Footer.css"
import { PiGithubLogoFill } from "react-icons/pi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
export const Footer = () => {
  return (
    <div className="logoMaindiv">
      <div className="logodiv">
        <a href="https://github.com/Barabari-Project"> <div className="githubdiv"><PiGithubLogoFill className="logo" /> </div> </a>
        <a href="https://x.com/BarabariProject"><div className="twitterdiv"><TfiTwitterAlt className="logo" /></div> </a>
        <a href="https://www.linkedin.com/company/the-barabari-project"> <div className="linkedIndiv"><FaLinkedinIn className="logo" /></div></a>
        <a href="https://www.instagram.com/thebarabariproject/"> <div className="instadiv"><BiLogoInstagramAlt className="instalogo" /></div> </a>
      </div>
      <div className="paraDiv">
        <p className="paraDivfirstPara">2024 @ All Right Reserved</p>
        <p>Designed and Developed by Barabari Project Dev Team</p>
      </div>
    </div>
  )
};