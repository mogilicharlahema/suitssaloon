import React from "react";
import aboutimage from "../Assets/about image.png";
import "../Styles/AboutUs.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div >
          <img src={aboutimage} alt="About Suits Salon" className="about-image" />
        </div>

        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Suits Salon, we set out with a simple mission to help people feel confident and beautiful.
            We started with just a few chairs and the big dream of becoming the top salon in our area.
            We believe that beauty is all about you, it's unique, expressive, and totally personal.
            Our mission is to help you look and feel your absolute best in a space that celebrates comfort,
            creativity, and confidence. Welcoming space where individuality and confidence shine.
            Whether you're after a bold transformation or just a little refresh, our awesome team of stylists,
            colorists, and beauty pros combines the latest trends with good old-fashioned care to bring your vision to life.
            From the moment you walk in, it's all about celebrating your glow, your story, and your personal style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
