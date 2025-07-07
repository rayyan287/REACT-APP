import React from "react";
import "./CardSection.css";

const cards = [
  {
    title: "Let’s Talk Science",
    image: "https://images.unsplash.com/photo-1", // Replace with real image
    link: "#",
  },
  {
    title: "Innovative Courses",
    image: "https://images.unsplash.com/photo-2",
    link: "#",
  },
  {
    title: "Cloud Storage",
    image: "https://images.unsplash.com/photo-3",
    link: "#",
  },
  {
    title: "Online Education",
    image: "https://images.unsplash.com/photo-4",
    link: "#",
  },
];

const CardSection = () => {
  return (
    <div className="section">
      <h2 className="heading">Academics</h2>
      <div className="underline"></div>

      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <a href={card.link} className="learn-more">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
