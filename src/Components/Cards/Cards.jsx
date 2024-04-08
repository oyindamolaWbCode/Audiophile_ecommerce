import React from "react";
import "./cards.css";
import Card from "../Card/Card";

function Cards(style) {
  return (
    <div className="cards-category" style={style}>
      <Card
        title="headphone"
        imgpath="../../assets/Images/image-category-thumbnail-headphones.png"
      />
      <Card
        title="speaker"
        imgpath="../../assets/Images/image-category-thumbnail-speakers.png"
      />
      <Card
        title="earphone"
        imgpath="../../assets/Images/image-category-thumbnail-earphones.png"
      />
    </div>
  );
}

export default Cards;
