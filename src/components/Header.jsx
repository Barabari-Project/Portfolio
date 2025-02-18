import React, { useState, useEffect } from "react";
import "../styling/Header.css";
export const Header = () => {
    const testimonials = [
        {
            img: "card.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            logo: "logo.jpeg"
        },
        {
            img: "card.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            logo: "logo.jpeg"
        },

        {
            img: "card.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            logo: "logo.jpeg"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="hDiv">
            <div className="headerDiv">
                <h2>Don't just take our word for it <br /> Hear from our clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tellus <br /> interdum venenatis auctor et nibh. Rhoncus a, sed lobortis nisi.</p>
            </div>
            <div className="sliderdiv">
                <div className="sliderContent">
                    <button onClick={goToPrev} className="prevButton">&#8249;</button>
                    <div className="cardDiv">
                        <img className="dot-Img" src="dot.png" alt="" />
                        <img className="paraImg" src={testimonials[currentIndex].img} alt="Testimonial" />
                        <img className="dotImg" src="dot.png" alt="" />
                    </div>

                    <div className="Para">
                        <img className="commaImg" src="comma.png" alt="" />
                        <p>{testimonials[currentIndex].text}</p>
                        <div className="company">
                            <div className="rayanDiv">
                                <img src="rayan.png" alt="" />
                            </div>
                            <div>
                                <h3>Name</h3>
                                <p>Manager,</p>
                                <p>XYZ company</p>

                            </div>
                            <div>
                                <img src={testimonials[currentIndex].logo} alt="Company Logo" />
                            </div>

                        </div>
                    </div>
                    <button onClick={goToNext} className="nextButton">&#8250;</button>
                </div>
                <h5>Xyz Chatbot</h5>
            </div>
        </div>

    );
};