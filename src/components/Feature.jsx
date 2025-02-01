import "../styling/Feature.css";
export const Feature = ({ title, description, image }) =>{
  return (
    <div className="card">
      <div className="card-image">
         <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>View Project</h5>
      </div>
    </div>
  );
}
