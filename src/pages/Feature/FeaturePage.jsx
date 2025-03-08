import React from "react";
import "../../styling/Feature.css";

const FeaturePage = () => {
  const featureData = [
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "/src/assets/webImages/web-1.png",
    },
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "/src/assets/webImages/web-2.png",
    },
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "img3.png",
    },
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "img4.png",
    },
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "img4.png", //fixed duplicate
    },
    {
      title: "Sprint Up Website",
      description: "E-learning platform landing page",
      image: "img4.png", //fixed duplicate
    },
  ];

  return (
    <div className="feature-page">
      <div className="feature-header">
        <h1 className="featureH1">Featured Projects</h1>
      </div>
      
      <div className="card-grid">
        {featureData.map((item, ind) => (
          <div className="card" key={ind}>
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
                <h5>View Project</h5>
                <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12.5" cy="13" r="12.5" fill="#334499" />
                    <path
                      d="M6.85979 15.5614C6.42233 15.814 6.27244 16.3734 6.52501 16.8108C6.77758 17.2483 7.33696 17.3982 7.77443 17.1456L6.85979 15.5614ZM18.7619 10.4927C18.8926 10.0048 18.603 9.50323 18.1151 9.37249L10.1639 7.24196C9.67597 7.11122 9.17445 7.40078 9.04371 7.88871C8.91297 8.37663 9.20252 8.87816 9.69045 9.0089L16.7582 10.9027L14.8644 17.9704C14.7337 18.4584 15.0232 18.9599 15.5111 19.0906C15.9991 19.2214 16.5006 18.9318 16.6313 18.4439L18.7619 10.4927ZM7.77443 17.1456L18.3357 11.0481L17.4211 9.46386L6.85979 15.5614L7.77443 17.1456Z"
                      fill="white"
                    />
                  </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;