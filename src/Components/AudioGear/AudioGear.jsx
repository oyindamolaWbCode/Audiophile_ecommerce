import React from "react";
import "./AudioGear.css";

const AudioGear = () => {
  return (
    <div className="gear_container">
      <div className="gear_details">
        <h2>
          BRINGING YOU THE <span style={{ color: "red" }}>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="gear_image"></div>
    </div>
  );
};

export default AudioGear;
