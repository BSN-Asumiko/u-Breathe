import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ imageSrc, text, link, title }) => {
  const isExternal = link.startsWith("http");

  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt="Card Image" className="card-image" />
          <p className="card-text">{text}</p>
        </a>
      ) : (
        <Link to={link}>
          <img src={imageSrc} alt="Card Image" className="card-image" />
          <p className="card-text">{text}</p>
        </Link>
      )}
    </div>
  );
};

export default Card;
