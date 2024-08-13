import React from "react";
import "./Speaker.css";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import speakerImg from "../../assets/Images/image-speaker-zx9 (1).png";
import HeadphoneFeatures from "../../Data/product.json";
function Speakers(props) {
  return (
    <div className="speaker_container">
      <NavHeader centerIt="Speakers" />
      {HeadphoneFeatures.speakers.map(
        (speaker, index) => (
          console.log(speaker.image.product),
          (
            <div
              className={`index ${index === 1 ? "reverse-flex" : ""}`}
              key={index}
            >
              <div className="upper-components">
                <img
                  src={speaker.image.product}
                  // src={headphoneImg}
                  alt="componentsImages"
                  className="upperImgs"
                />

                <div className="upper-details">
                  <h3 className="new-product">NEW PRODUCT</h3>
                  <h1 className="product-title">
                    {speaker.shortName.toUpperCase()}
                  </h1>
                  <h1 className="product-title">
                    {speaker.category.toUpperCase()}
                  </h1>
                  <p className="product-paragragh">{speaker.description}</p>
                  <button className="product_view">See Product</button>
                </div>
              </div>
            </div>
          )
        )
        // console.log(headphone.image.product)
      )}
    </div>
  );
}

export default Speakers;
