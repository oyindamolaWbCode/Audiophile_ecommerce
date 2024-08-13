import React from "react";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import earphoneImg from "../../assets/Images/image-earphones.png";
import "./Earphones.css";
import HeadphoneFeatures from "../../Data/product.json";

const Earphones = () => {
  return (
    <div className="earphone_container">
      <NavHeader centerIt="Earphones" />
      {HeadphoneFeatures.earphones.map(
        (earphone, index) => (
          console.log(earphone.image.product),
          (
            <div
              className={`index ${index === 1 ? "reverse-flex" : ""}`}
              key={index}
            >
              <div className="upper-components">
                <img
                  src={earphone.image.product}
                  // src={headphoneImg}
                  alt="componentsImages"
                  className="upperImgs"
                />

                <div className="upper-details">
                  <h3 className="new-product">NEW PRODUCT</h3>
                  <h1 className="product-title">
                    {earphone.shortName.toUpperCase()}
                  </h1>
                  <h1 className="product-title">
                    {earphone.category.toUpperCase()}
                  </h1>
                  <p className="product-paragragh">{earphone.description}</p>
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
};

export default Earphones;
