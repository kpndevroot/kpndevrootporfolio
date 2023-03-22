import React from "react";
import "../assets/css/CaroselCard.css";
interface SingleCardProps {
  name: string;
  image: string;
}
function CaroselCard({ name, image }: SingleCardProps) {
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="people"
      />
      <div className="carousel-item__details">
        <div className="controls">
          <span className="fas fa-play-circle"></span>
          <span className="fas fa-plus-circle"></span>
        </div>
        <h5 className="carousel-item__details--title">Descriptive Title</h5>
        <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
      </div>
    </div>
  );
}

export default CaroselCard;
