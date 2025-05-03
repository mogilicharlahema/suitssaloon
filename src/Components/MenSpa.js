import React from "react";
import spa1 from "../Assets/spa1.png"; 
import spamen1 from "../Assets/spamen2 (1).png"; 
import spamen2 from "../Assets/spamen2 (2).png"; 
import "../Styles/menspa.css"
import { useNavigate } from "react-router-dom";

const MenSpa = () => {
    const navigate=useNavigate()

    const handleMenSpaBtn=()=>{
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

                <div className="men-spa-image-gallery">
                    <div className="men-spa-main-image">
                        <img src={spa1} alt="Spa treatment room with massage table" />
                    </div>
                    <div className="men-spa-side-images">
                        <img src={spamen1} alt="Woman receiving head massage at spa" />
                        <img src={spamen2} alt="Woman receiving facial treatment with cucumber slices" />
                    </div>
                </div>

                <div className="spa-service-includes">
                    <h2 className="spa-section-title">What We Include In The Service</h2>
                    <ul>
                        <li>To determine your skin type and issues, a personalized consultation is required.</li>
                        <li> Solutions tailored to your skin health, preferences, and objective.</li>
                        <li>A stress-free, cozy experience created especially for you.</li>
                        <li>Detailed instructions to help you sustain effects that last.</li>
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

                <button className="spa-book-button" onClick={handleMenSpaBtn}>Book an appointment</button>
            </div>
        </div>
    );
};

export default MenSpa;