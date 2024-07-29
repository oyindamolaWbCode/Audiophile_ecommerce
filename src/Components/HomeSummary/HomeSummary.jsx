import React from "react";
import headset from "../../assets/Images/hero.jpeg";
import "./homesummary.css";

function HomeSummary(props) {
  return (
    <div className="home-summary">
      <div className="home-content">
        <h3 className="new-product">New Product</h3>
        <h1 className="product-title-header">XX99 Mark II Headphones</h1>
        <p className="headphone-paragragh">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="product_view">See Product</button>
      </div>
      <div className="home__headset">
        <img src={headset} alt="" className="headset" />
      </div>
    </div>
  );
}

export default HomeSummary;
