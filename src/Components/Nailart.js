import React from "react";
import "../Styles/Nailart.css";
import nail1 from "../Assets/nail1.png";
import nail2 from "../Assets/nail2.png";
import nail3 from "../Assets/nail3.png";
import { useNavigate } from "react-router-dom";


const menuData = [
    { name: "Gel polish(shellac)", price1: "₹99/-", price10: "₹899/-" },
    { name: "Builder Gel", price1: "₹149/-", price10: "₹1,499/-" },
    { name: "Poly Gel", price1: "₹149/-", price10: "₹1,499/-" },
    { name: "Acrylic Nail", price1: "₹199/-", price10: "₹1,999/-" },
    { name: "Acrylic Gel (Shellac)", price1: "₹199/-", price10: "₹1,999/-" },
    { name: "Gel Extensions+Gel", price1: "₹249/-", price10: "₹2,499/-" },
    { name: "Acrylic Extensions+Gel", price1: "₹249/-", price10: "₹2,999/-" },
    { name: "French Gel Polish", price1: "₹149/-", price10: "₹1,499/-" },
    { name: "Ombre Nail", price1: "₹199/-", price10: "₹1,799/-" },
    { name: "Cat Eye Nail", price1: "₹199/-", price10: "₹1,799/-" },
    { name: "Nail Art", price1: "₹199/-", price10: "₹1,999/-" },
    { name: "3rd Nail Art", price1: "₹299/-", price10: "₹2,999/-" },
    { name: "Stone Nail Art", price1: "₹149/-", price10: "₹1,499/-" },
    { name: "Refilling Gel", price1: "₹149/-", price10: "₹1,199/-" },
    { name: "Refilling Acrylic", price1: "₹199/-", price10: "₹1,499/-" },
    { name: "Extensions+Ombre", price1: "₹299/-", price10: "₹3,499/-" },
    { name: "Extensions+Cat Eye", price1: "₹299/-", price10: "₹3,499/-" },
    { name: "Press on Nail", price1: "-", price10: "₹1,799/-" },
    { name: "Paper Extensions", price1: "₹349/-", price10: "₹3,999/-" },
];


const NailArtSection = () => {
    const navigate=useNavigate()
    const handleNailBtn=()=>{
        navigate("/book-appointment")
    }
    return (
        <div className="nail-art-container">
        
            <h2 className="nail-name">Nail Art</h2>

            <div className="nail-images">
                <img src={nail1} alt="nail1" className="nail-img1" />
                <img src={nail2} alt="nail2" className="nail-img2" />
                <img src={nail3} alt="nail3" className="nail-img3" />
            </div>

            <div className="nail-service-section">
                <h1 className="nail-art-title">What We Include In The Service</h1>
                <ul className="nail-list">
                    <li>
                        Personalised consultation to determine your desired nail look and ensure a proper fit.<br></br>
                        This may include asking about your preferred nail shape, length, and style,
                        as well as <br></br>your lifestyle and activities that may affect your nails.
                    </li>
                    <li>
                        To understand if you have any sensitivities or allergies and your desired level of maintenance and upkeep.
                    </li>
                    <li>
                        Proper guidance on the maintenance of the nail extension.
                    </li>
                </ul>
            </div>

         
            <div className="nail-menu">
                <h3 className="menu-text">Menu</h3>
                <table className="table-container">
                    <thead>
                        <tr>
                        
                            <th className="header-item"></th>
                            <th className="header-price">1 Finger</th>
                            <th className="header-price">10 Fingers</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {menuData.map((item, index) => (
                            <tr key={index}>
                                <td className="menu-item-name">{item.name}</td>
                                <td className="menu-item-price">{item.price1}</td>
                                <td className="menu-item-price">{item.price10}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="nail-book-button" onClick={handleNailBtn }>Book an Appointment</button>
        </div>
    );
};

export default NailArtSection;