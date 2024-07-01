import React from "react";
import "./XzSpeaker.css";
import XzSpeakerImg from "../../assets/Images/image-speaker-zx9 (1).png";

const XzSpeaker = () => {
  return (
    <div className="xz-container">
      <div className="xz-speaker">
        <img src={XzSpeakerImg} alt="xzSpeaker" />
      </div>
      <div className="xzSpeaker_details">
        <h3>xz9 speaker</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis
          velit rem! Pariatur exercitationem itaque sed rerum animi quisquam
        </p>
        <button className="product_view">See Product</button>
      </div>
    </div>
  );
};

export default XzSpeaker;
