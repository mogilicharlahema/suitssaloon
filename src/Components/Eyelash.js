import React from "react";
import eye1 from "../Assets/eye1.png";
import eye2 from "../Assets/eye2.png"; 
import eye3 from "../Assets/eye3.png"; 
import "../Styles/eyelash.css";
import { useNavigate } from "react-router-dom";

const EyelashExtension = () => {
    const navigate=useNavigate()
    const handleEyeBtn=()=>{
        navigate("/book-appointment")
    }
    return (
        <div className="eyelash-extension-container">
            <h1>Eyelash Extension</h1>

            <div className="eye-image-gallery">
                <div className="eye-gallery-left">
                    <img src={eye1} alt="Salon interior with chairs and mirrors" className="eye-left-gallery-img"/>
                </div>
                <div className="eye-gallery-right">
                    <img src={eye2} alt="Eyelash extension application process" className="eye-right-gallery-img"/>
                    <img src={eye3} alt="Close up of finished extended eyelashes" className="eye-right-gallery-img"/>
                </div>
            </div>

            <div className="eye-service-details">
                <h2>What We Include In The Service</h2>
                <ul>
                    <li>
                        Personalized consultation to determine your desired lash
                        look and ensure a safe and comfortable application
                        process.
                    </li>
                    <li>
                        This may include asking about your lash style preferences,
                        lash length and thickness, and any allergies or sensitivities
                        to adhesives or materials.
                    </li>
                    <li>
                        Suggest the best eyelash extension based on your eye
                        shape and size.
                    </li>
                    <li>
                        Proper guidance on maintenance of the eyelash extension.
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h2>Menu</h2>
                <ul className="menu-list">
                    <li className="menu-item">
                        <span className="service-name">Classic Eyelash</span>
                        <span className="dashes">- - - - - -</span>
                        <span className="service-price">₹2,999/-</span>
                    </li>
                    <li className="menu-item">
                        <span className="service-name">Hybrid Eyelash</span>
                        <span className="dashes">- - - - - -</span>
                        <span className="service-price">₹3,999/-</span>
                    </li>
                    <li className="menu-item">
                        <span className="service-name">Volume Eyelash</span>
                        <span className="dashes">- - - - - -</span>
                        <span className="service-price">₹4,999/-</span>
                    </li>
                    <li className="menu-item">
                        <span className="service-name">Mega Volume Eyelash</span>
                        <span className="dashes">- - - - - -</span>
                        <span className="service-price">₹5,999/-</span>
                    </li>
                </ul>
            </div>

            <button className="book-button" onClick={handleEyeBtn}>Book an appointment</button>
        </div>
    );
};

export default EyelashExtension;