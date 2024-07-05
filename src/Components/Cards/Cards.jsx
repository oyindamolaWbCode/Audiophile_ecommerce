import React from "react";
import "./cards.css";
import Card from "../Card/Card";
import headphoneImg from "../../assets/Images/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/Images/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assets/Images/image-category-thumbnail-earphones.png";
function Cards(style) {
  return (
    <div className="cards-category" style={style}>
      <Card title="headphone" imgpath={headphoneImg} link="/headphones" />
      <Card title="speaker" imgpath={speakerImg} link="/speakers" />
      <Card title="earphone" imgpath={earphoneImg} link="/earphones" />
    </div>
  );
}

export default Cards;
