import React from "react";
import { Link } from "react-router-dom";
import dtan from "../Assets/dtan.png";
import bridal from "../Assets/bridal.png";
import eyelash from "../Assets/eyelash.png";
import facial from "../Assets/facial.png";
import manicure from "../Assets/manicure.png";
import nailart from "../Assets/nail art.png";
import spa from "../Assets/spa.png";
import waxing from "../Assets/waxing.png";
import hairstyling from "../Assets/hairstyling.png";
import haircut from "../Assets/haircut.png";
import shave from "../Assets/shave.png";
import menspa from "../Assets/menspa.png";
import menfacial from "../Assets/menfacial.png";
import haircolor from "../Assets/haircolor.png";
import hairwash from "../Assets/hairwash.png";

import "../Styles/Nav-services.css"; 

const NavServiceSection = () => {
  const WomenServicesData = [
   
    { id: "hair-styling", title: "Hair Styling", description: "Experience the best hair service in hyderabad! From hair cutting and hair colouring to hair styling, all in one salon", image: hairstyling },
    { id: "nail-art", title: "Nail Art", description: "Style and nail art go hand in hand” believe this line?Then our nail art service is the solution. We’ll nail it. ", image: nailart },
    { id: "dtan-bleach", title: "D-Tan & Bleach", description: "Revitalise your skin with our Detan and Bleach Services to get a radiant complexion and even tone. Your beauty is our dut", image: dtan },
    { id: "waxing-threading", title: "Waxing & Threading", description: "Smooth skin, flawless look with our waxing/threading services.", image: waxing },
    { id: "manicure-pedicure", title: "Manicure & Pedicure", description: "Manicure & pedicure services mean a polished perfection for your hands & feet. We put the “cure” in manicures and pedicures with care", image: manicure },
    { id: "facial", title: "Facial", description: "Beat facial treatments near you in Hyderabad. Our facial service will make you say, “Getting clear skin is not impossible.", image: facial },
    { id: "bridal-package", title: "Bridal Package", description: "The ultimate all-inclusive bridal package that takes care of every little detail to make you look stunning on your special day", image: bridal },
    { id: "eyelash-extension", title: "Eyelash Extension", description: " Get premium eyelash extensions for stunning, natural appearance", image: eyelash },
    { id: "spa", title: "Spa", description: "Let us exceed your expectations with our spa and massage services. Sit back and relax. We’ll pamper you to perfection.", image: spa },
  ];

  const MenServicesData = [
 
    { id: "mens-hair-cut", title: "Hair Cut", description: "A timeless style that never goes out of fashion. Our classic haircut features clean lines, balanced length, and a neat finish.", image: haircut },
    { id: "mens-shave", title: "Shave", description: "Step into timeless tradition with our classic straight razor shave. Enjoy a rich, hot lather followed by a precise, close shave that leaves your skin smooth and refreshed.", image: shave },
    { id: "mens-hair-color", title: "Hair Color", description: "A timeless look for the modern man. Deep, rich black hair color that adds boldness and enhances natural features. Perfect for a sleek, professional vibe.", image: haircolor },
    { id: "mens-hair-wash", title: "Hair Wash", description: "Our professional men's hair wash service uses premium shampoos and conditioners to cleanse your scalp and strands, removing dirt, oil, and product build-up.", image: hairwash },
    { id: "mens-facial", title: "Facial", description: "This men's skin treatment effectively removes dirt, oil, and impurities, revitalizing and hydrating the skin for a healthy, well-groomed appearance.", image: menfacial },
    { id: "mens-spa", title: "Spa", description: "Let us exceed your expectations with our spa and massage services. Sit back and relax. We’ll pamper you to perfection.", image: menspa }
  ];




  return (
    <div className="nav-service-page-container">
      <div className="nav-services-section">
        <h1 className="nav-section-heading">Women's Services</h1>
        <div className="nav-services-grid">
          {WomenServicesData.map((item) => (
          
            <Link to={`/services/${item.id}`} key={item.id} className="nav-service-card-link">
              <div className="nav-service-card">
                <div className="nav-circle-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="nav-services-section">
        <h1 className="nav-section-heading">Men's Services</h1>
        <div className="nav-services-grid">
          {MenServicesData.map((item) => (
           
            <Link to={`/services/${item.id}`} key={item.id} className="nav-service-card-link">
              <div className="nav-service-card">
                <div className="nav-circle-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavServiceSection;