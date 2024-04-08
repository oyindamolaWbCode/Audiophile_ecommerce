import React from "react";
import "./card.css";
import icon from "../../assets/Icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";

function Card(props) {
  const { title, imgpath } = props;

  return (
    <div className="card-category">
      <img src={imgpath} alt="image" className="card-category-image" />
      <h5 className="card-category-text">{title}</h5>
      <div className="card-category-link-container">
        <Link to="" className="card-category-link">
          Shop
        </Link>
        <img className="card-category-icon" src={icon} />
      </div>
    </div>
  );
}

export default Card;
