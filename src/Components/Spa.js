import React from "react";
import spa1 from "../Assets/spa1.png"; 
import spa2 from "../Assets/spa2.png"; 
import spa3 from "../Assets/spa3.png"; 
import "../Styles/spa.css"
import { useNavigate } from "react-router-dom";

const Spa = () => {

  const navigate=useNavigate()
  const handleSpaBtn=()=>{
    navigate("/book-appointment")
  }
    const menuItems = [
        { name: "Face Massage", duration: "20mins", price: "₹600/-" },
        { name: "Head Massage+ Wash", duration: "20 mins", price: "₹700/-" },
        { name: "Foot Relaxing Massage", duration: "20 mins", price: "₹800/-" },
        { name: "Head & Shoulder Massage", duration: "20 mins", price: "₹700/-" },
        { name: "Back Pain Relief Massage", duration: "20 mins", price: "₹800/-" },
        { name: "Leg Pain Relief Massage", duration: "20 mins", price: "₹800/-" },
        { name: "Stress Relief Massage", duration: "45 mins", price: "₹1,500/-" },
        { name: "Top to Toe Stress Relief Massage", duration: "60 mins", price: "₹2,000/-" },
        { name: "Deep Tissue Massage", duration: "60 Mins", price: "₹2,500/-" },
        { name: "Hot Stone Therapy Massage", duration: "60 mins", price: "₹2,200/-" },
        { name: "Full Body Massage", duration: "60 mins", price: "₹2,500/-" },
        { name: "Full Body Polishing", duration: "1hr 30mins", price: "₹4,000/-" }
    ];


    return (
        <div className="spa-page-container">
            <div className="spa-content-wrapper">
                <h1 className="spa-main-title">Spa</h1>

                <div className="spa-image-gallery">
                    <div className="spa-main-image">
                        <img src={spa1} alt="Spa treatment room with massage table" />
                    </div>
                    <div className="spa-side-images">
                        <img src={spa2} alt="Woman receiving head massage at spa" />
                        <img src={spa3} alt="Woman receiving facial treatment with cucumber slices" />
                    </div>
                </div>

                <div className="spa-service-includes">
                    <h2 className="spa-section-title">What We Include In The Service</h2>
                    <ul>
                        <li>Individualized consultation to determine your skin type and problems.</li>
                        <li>options that are tailored to your preferences, desired results, and skin health.</li>
                        <li>Make sure you're as relaxed as possible.</li>
                        <li>Appropriate direction to sustain the outcomes.</li>
                    </ul>
                </div>

                <div className="spa-menu-section">
                    <h2 className="spa-section-title spa-menu-title">Menu</h2>
                    <ul className="spa-menu-list">
                        {menuItems.map((item, index) => (
                            <li key={index} className="spa-menu-item">
                                <span className="spa-service-name">{item.name} ({item.duration})</span>
                                <span className="dashess">- - - - - -</span>
                                <span className="spa-service-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="spa-book-button" onClick={handleSpaBtn}>Book an appointment</button>
            </div>
        </div>
    );
};

export default Spa;