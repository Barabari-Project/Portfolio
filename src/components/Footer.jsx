import "../styling/Footer.css"
export const Footer = ({link, image})=>{
    return(
        <div>
             <a href={link}><img src={image} alt="" /></a>
        </div>
    )
}