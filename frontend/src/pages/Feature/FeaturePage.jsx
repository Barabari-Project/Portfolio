import React from "react";
import "../../styling/Feature.css";
import { SquareArrowOutUpRight } from "lucide-react";
const FeaturePage = () => {
  const featureData = [
    {
      title: "I am wellbeing",
      description: "E-learning platform landing page",
      image: "/webImages/web-1.png",
      src: "https://main.d228kk0n6wpyz0.amplifyapp.com/"
    },
    {
      title: "Protsahan",
      description: "Girls empowerment and development org.",
      image: "/webImages/web-2.png",
      src: "https://main.d1jtxne7po0rhl.amplifyapp.com/"
    },
    {
      title: "EdTech",
      description: "E-learning platform landing page",
      image: "/webImages/edTech.png",
      src: "https://academy.barabaricollective.org/"
    },
    {
      title: "Sprint Up, Startup LMS",
      description: "E-learning platform landing page",
      image: "/webImages/sprintup.png",
      src: "https://ed-tech-frontend-client-view.onrender.com/"
    },
    {
      title: "Raithan",
      description: "Channel between the seeker and provider",
      image: "/webImages/Raithan.png", 
      src: "https://drive.google.com/file/d/1d7vh6q2sUYkGljvljNSGYEyemifbFHUv/view"
    },
    {
      title: "Sampoorna Shiksha",
      description: "E-learning platform landing page",
      image: "/webImages/sampoorna-shiksha.png", 
      src: "https://www.sampoorna-shiksha.barabaricollective.org/school" // Added src for the new project
    },
  ];

  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1 className="featureH1">Featured Projects</h1>
      </div>

      <div className="card-grid">
        {featureData.map((item, ind) => (
          <div className="card p-3" key={ind}>
            <div className="card-image">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"  // Added lazy loading
              />
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="h5-container">
                {/* <h5></h5> */}
                <a href={item.src} target="_blank" className="flex gap-4 items-center">View Project <SquareArrowOutUpRight size={20} color="blue" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;