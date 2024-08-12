import React from "react";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import headphoneImg from "../../assets/Images/image-xx99-mark-two.jpg";
import "./Headphone.css";
import HeadphoneFeatures from "../../Data/product.json";

const Headphones = () => {
  return (
    <div className="headphones_container" style={{ backgroundColor: "white" }}>
      <NavHeader centerIt="Headphones" />
      {/* <Upper
        UpperImg={headphoneImg}
        UpperTitle="new product"
        UpperSubTitle="XX99 MARK II HEADPHONES"
        UpperParagraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      /> */}
      {HeadphoneFeatures.headphones.map((headphone, index) => (
        <div
          className={`index ${index === 1 ? "reverse-flex" : ""}`}
          key={index}
        >
          <div className="upper-components">
            <img
              src={headphone.image.product}
              // src={headphoneImg}
              alt="componentsImages"
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
      ))}
    </div>
  );
};

export default Headphones;
