import React from "react";
import "./card.css";
import icon from "../../assets/Icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function Card(props) {
  const { title, imgpath, link } = props;

  return (
    <div className="card-category">
      <img src={imgpath} alt="image" className="card-category-image" />
      <h5 className="card-category-text">{title}</h5>
      <div className="card-category-link-container">
        <Link to={link} className="card-category-link">
          Shop
        </Link>
        <img src={icon} className="card-category-icon" />
      </div>
    </div>
  );
}

export default Card;
