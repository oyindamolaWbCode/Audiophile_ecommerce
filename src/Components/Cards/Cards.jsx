import React from "react";
import "./cards.css";
import Card from "../Card/Card";

function Cards(style) {
  return (
    <div className="cards-category" style={style}>
      <Card
        title="headphone"
        imgpath="../../assets/image-category-thumbnail-headphones.png"
      />
      <Card
        title="speaker"
        imgpath="../../assets/image-category-thumbnail-speakers.png"
      />
      <Card
        title="earphone"
        imgpath="../../assets/image-category-thumbnail-earphones.png"
      />
    </div>
  );
}

export default Cards;
