import "../styling/Footer.css"
import { AiFillGithub } from "react-icons/ai";

export const Footer = ({ link, image }) => {
    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="" />
        </a>
      </div>
    )
  };