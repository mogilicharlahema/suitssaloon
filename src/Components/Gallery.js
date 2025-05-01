import React from "react";
import gallery1 from "../Assets/gallery1 (1).png";
import gallery2 from "../Assets/gallery1 (2).png";
import gallery3 from "../Assets/gallery1 (3).png";
import gallery4 from "../Assets/gallery1 (4).png";
import gallery5 from "../Assets/gallery1 (5).png";
import gallery6 from "../Assets/gallery1 (6).png";
import "../Styles/gallery.css"; 

const GallerySection = () => {
    return (
    
        <div className="gallery-container">
            <h1 className="gallery-title">Gallery</h1>

            <div className="section1">
                <img className="g1" src={gallery1} alt="Gallery image 1" /> 
                <img className="g2" src={gallery2} alt="Gallery image 2" /> 
            </div>

            <div className="section2">
                <img className="g3" src={gallery3} alt="Gallery image 3" /> 
                <img className="g4" src={gallery4} alt="Gallery image 4" /> 
                <img className="g5" src={gallery5} alt="Gallery image 5" /> 
            </div>

            <div className="section3">
                <img className="g6" src={gallery6} alt="Gallery image 6" />
            </div>
        </div>
    );
};

export default GallerySection;