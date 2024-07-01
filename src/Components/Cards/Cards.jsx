import React from "react";
import "./cards.css";
import Card from "../Card/Card";
import headphoneImg from "../../assets/Images/image-category-thumbnail-headphones.png";
import speakerImg from "../../assets/Images/image-category-thumbnail-speakers.png";
import earphoneImg from "../../assets/Images/image-category-thumbnail-speakers.png";
function Cards(style) {
  return (
    <div className="cards-category" style={style}>
      <Card title="headphone" imgpath={headphoneImg} />
      <Card title="speaker" imgpath={speakerImg} />
      <Card title="earphone" imgpath={earphoneImg} />
    </div>
  );
}

export default Cards;
