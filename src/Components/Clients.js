import React, { useState } from "react";
import "../Styles/Clients.css"; // Make sure the CSS file path is correct

const ClientSection = () => {
  const clientsData = [
    // Added the client from the image first for initial display matching
    {
      name: "Lipsa",
      testimonial:
        "I am so glad I found 'Suits Salon'. They do an outstanding job on my hair. Each time is such a treat with the wonderful head massage. I always feel so pampered!",
    },
    {
      name: "Riya",
      testimonial:
        "I contacted 'SUITS' to do my bridal makeup. Their skills are unmatched. I was looking gorgeous at my wedding. Wedding makeup is an important decision and you can definitely trust SUITS for the same.",
    },
    {
      name: "Rashmika",
      testimonial:
        "The team at Salon Suits is amazing! From their personalities to their level of service, they have become my go-to place for facial and spa. This salon team has provided a great experience that cannot be matched. She has given great styling tips and shown me products that have improved my skin health. You Rock! Thank you salon and suits.",
    },
    {
      name: "Naveen Kumar",
      testimonial:
        "I moved to Hyderabad from Chennai and was having a tough time finding a hair professional that I could trust. Then I found this 'Suits Salon' and decided to make an appointment. Now I realise I made the right decision after all, I am extremely happy I found 'Suits' and my hair has never felt so healthy.",
    },
    {
      name: "Monalisa",
      testimonial:
        "I got the best mani-pedi at SUITS and also got beautiful nail art that everyone admires. The staff is friendly, warm, and cooperative. They greet me with happy faces all the time. Love this place and its atmosphere. I’m surely visiting 'SUITS' again.",
    },
  ];

  // Find the index of "Lipsa" to start with the testimonial shown in the image
  const initialIndex = clientsData.findIndex(client => client.name === "Lipsa");
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? clientsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === clientsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const currentClient = clientsData[currentIndex];

  return (
   
    <>
      <h1 className="client-title">See What Our Clients Says</h1>
   
      <div className="client-section">
        <div className="carousel-container">
          <button
            onClick={goToPrevious}
            className="carousel-button prev-button"
            aria-label="Previous testimonial"
          >
            ❮ 
          </button>

          <div className="testimonial-content">
            {currentClient ? (
              <>
               
                <p className="testimonial-text">{currentClient.testimonial}</p>
               
                <p className="testimonial-author">{currentClient.name}</p>
              </>
            ) : (
               <p>No testimonials available.</p>
            )}
          </div>

          <button
             onClick={goToNext}
             className="carousel-button next-button"
             aria-label="Next testimonial"
          >
             ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientSection;