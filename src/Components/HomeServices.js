import React, { useRef, useState, useEffect } from "react"; 
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
import { Link } from "react-router-dom";
import "../Styles/services.css";

const HomeServiceSection = () => {
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

  const scrollRefWomen = useRef(null); 
  const scrollRefMen = useRef(null); 

  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

  
    handleResize();

    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  useEffect(() => {
    let womenIntervalId = null;
    let menIntervalId = null;

    const autoScroll = (ref) => {
      if (!ref.current) return null; 

      const carousel = ref.current;
     
      const firstCardLink = carousel.querySelector('.service-card-link');
      if (!firstCardLink) return null; 

   
      const gap = 16;
      const scrollDistance = firstCardLink.offsetWidth + gap;

      const intervalId = setInterval(() => {
         if (!carousel) return; 

        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        let nextScrollLeft = scrollLeft + scrollDistance;

        if (nextScrollLeft >= scrollWidth - clientWidth - (scrollDistance / 2)) {
          nextScrollLeft = 0;
        }

        carousel.scrollTo({
          left: nextScrollLeft,
          behavior: 'smooth',
        });
      }, 2000); 

      return intervalId; 
    };

    
    if (isMobile) {
      const timerId = setTimeout(() => {
        womenIntervalId = autoScroll(scrollRefWomen);
        menIntervalId = autoScroll(scrollRefMen);
      }, 200); 

      return () => {
        clearTimeout(timerId); 
        if (womenIntervalId) clearInterval(womenIntervalId);
        if (menIntervalId) clearInterval(menIntervalId);
      };
    }

   
    return () => {
      if (womenIntervalId) clearInterval(womenIntervalId);
      if (menIntervalId) clearInterval(menIntervalId);
    };

  }, [isMobile]); 

  const handleScroll = (ref, direction) => {
    if (ref.current) { 
      const scrollAmount = 320;
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* WOMEN SERVICES */}
      <div className="services-section">
        <h1 className="head-name">Services We Offer</h1>
        <div className="carousel-wrapper">
    
          {!isMobile && (
            <button onClick={() => handleScroll(scrollRefWomen, "left")} className="arrow left-only">❮</button>
          )}
          <div className="services-carousel" ref={scrollRefWomen}>
            {WomenServicesData.map((item) => {
              const servicePath = `/services/${item.id}`;
              return (
                <Link to={servicePath} key={item.id} className="service-card-link">
                  <div className="service-card">
                    <div className="circle-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {!isMobile && (
            <button onClick={() => handleScroll(scrollRefWomen, "right")} className="arrow right-only">❯</button>
          )}
        </div>
      </div>

      {/* MEN SERVICES */}
      <div className="services-section">
   
        <div className="carousel-wrapper">
           {!isMobile && (
             <button onClick={() => handleScroll(scrollRefMen, "left")} className="arrow left-only">❮</button>
           )}
          <div className="services-carousel" ref={scrollRefMen}>
            {MenServicesData.map((item) => {
              const servicePath = `/services/${item.id}`;
              return (
                <Link to={servicePath} key={item.id} className="service-card-link">
                  <div className="service-card">
                    <div className="circle-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
           {!isMobile && (
             <button onClick={() => handleScroll(scrollRefMen, "right")} className="arrow right-only">❯</button>
           )}
        </div>
      </div>
    </div>
  );
};
export default HomeServiceSection;