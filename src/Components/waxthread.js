import React from "react";
import waxt1 from "../Assets/waxt3 (1).png"; // Make sure these paths are correct
import waxt2 from "../Assets/waxt3 (2).png";
import waxt3 from "../Assets/waxt3 (3).png";
import "../Styles/waxthread.css";
import { useNavigate } from "react-router-dom";

const menuData = [
    { service: "Upper-Lip Wax", normal: "₹30/-", chocolate: "₹40/-", rica: "₹60/-" },
    { service: "Eyebrow Wax", normal: "₹50/-", chocolate: "₹70/-", rica: "₹100/-" },
    { service: "Face Wax", normal: "₹200/-", chocolate: "₹250/-", rica: "₹350/-" },
    { service: "Underarm Wax", normal: "₹100/-", chocolate: "₹120/-", rica: "₹150/-" },
    { service: "Half Arm Wax", normal: "₹250/-", chocolate: "₹300/-", rica: "₹400/-" },
    { service: "Full Arm Wax", normal: "₹400/-", chocolate: "₹500/-", rica: "₹600/-" },
    { service: "Fullarm Wax+Underarm Wax", normal: "₹500/-", chocolate: "₹600/-", rica: "₹700/-" },
    { service: "Half Leg Wax", normal: "₹300/-", chocolate: "₹400/-", rica: "₹500/-" },
    { service: "Full Leg Wax", normal: "₹450/-", chocolate: "₹600/-", rica: "₹800/-" },
    { service: "Half Back Wax", normal: "₹200/-", chocolate: "₹300/-", rica: "₹400/-" },
    { service: "Full Back Wax", normal: "₹350/-", chocolate: "₹450/-", rica: "₹600/-" },
    { service: "Stomach Wax", normal: "₹300/-", chocolate: "₹400/-", rica: "₹500/-" },
    { service: "Chest Wax", normal: "₹150/-", chocolate: "₹200/-", rica: "₹300/-" },
    { service: "Bikini Line wax", normal: "₹300/-", chocolate: "₹450/-", rica: "₹600/-" },
    { service: "Bikini Brazilian Wax", normal: "₹900/-", chocolate: "₹1,200/-", rica: "₹1,500/-" },
    { service: "Full Hand + Full Leg", normal: "₹1,000/-", chocolate: "₹1,200/-", rica: "₹1,500/-" },
    { service: "Full Body Wax", normal: "₹1,500/-", chocolate: "₹1,700/-", rica: "₹2,200/-" },
];


const WaxAndThreading = () => {
    const navigate=useNavigate()
    const handleWaxBtn=()=>{
        navigate("/book-appointment")
    }
    return (
        <div className="waxing-threading-container">
            <h1 className="wax-main-title">Waxing - Threading</h1>

            <div className="wax-image-section">
                <div className="wax-left-image">
                    <img src={waxt2} alt="Waxing room setup" />
                </div>
                <div className="wax-right-images">
                    <img src={waxt1} alt="Waxing procedure on arm" />
                    <img src={waxt3} alt="Threading procedure on face" />
                </div>
            </div>

            <div className="service-inclusion">
                <h2>What We Include In The Service</h2>
                <ul>
                    <li>
                        A personalised consultation to understand your skin
                        type and suggest the best option for long-lasting results.
                    </li>
                </ul>
            </div>

            <div className="menu-section">
                <h2>Menu</h2>
                <div className="table-wrapper"> 
                    <table className="menu-table">
                        <thead>
                            <tr>
                                <th className="service-col">Service</th> 
                                <th className="price-col">Normal</th>
                                <th className="price-col">Chocolate</th>
                                <th className="price-col">Rica</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuData.map((item, index) => (
                                <tr key={index}>
                                    
                                    <td data-label="Service:" className="service-col">{item.service}</td>
                                    <td data-label="Normal:" className="price-col">{item.normal}</td>
                                    <td data-label="Chocolate:" className="price-col">{item.chocolate}</td>
                                    <td data-label="Rica:" className="price-col">{item.rica}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="cta-section">
                <button className="cta-button" onClick={handleWaxBtn}>Book an appointment</button>
            </div>
        </div>
    );
};

export default WaxAndThreading;