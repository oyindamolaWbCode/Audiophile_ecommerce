import React from "react";
import NavHeader from "../NavHeaders/NavHeader";

import "./Headphone.css";
import HeadphoneFeatures from "../../Data/product.json";
import Cards from "../Cards/Cards";
import AudioGear from "../AudioGear/AudioGear";

const Headphones = () => {
  return (
    <div className="headphones_container" style={{ backgroundColor: "white" }}>
      <NavHeader centerIt="Headphones" />
      <div className="headphone-content">
        {HeadphoneFeatures.headphones.map(
          (headphone, index) => (
            console.log(headphone.image.product),
            (
              <div
                className={`index ${index === 1 ? "reverse-flex" : ""}`}
                key={index}
              >
                <div className="upper-components">
                  <img
                    src={headphone.image.product}
                    // src={headphoneImg}
                    alt="components"
                    className="upperImgs"
                  />

                  <div className="upper-details">
                    <h3 className="new-product">NEW PRODUCT</h3>
                    <h1 className="product-title">
                      {headphone.shortName.toUpperCase()}
                    </h1>
                    <h1 className="product-title">
                      {headphone.category.toUpperCase()}
                    </h1>
                    <p className="product-paragragh">{headphone.description}</p>
                    <button className="product_view">See Product</button>
                  </div>
                </div>
              </div>
            )
          )
          // console.log(headphone.image.product)
        )}
        <div className="card-">
          <Cards />
        </div>
        <div className="headphone-gear" style={{ marginBottom: "50px" }}>
          <AudioGear />
        </div>
      </div>
    </div>
  );
};

export default Headphones;
