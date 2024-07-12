import React from "react";
import "./Upper.css";

const Upper = (props) => {
  const { UpperImg, UpperParagraph, UpperTitle, UpperSubTitle } = props;
  return (
    <div className="upper-components">
      <img src={UpperImg} alt="componentsImages" className="upperImgs" />
      <div className="upper-details">
        <h3 className="new-product">{UpperTitle}</h3>
        <h1 className="product-title">{UpperSubTitle}</h1>
        <p className="product-paragragh">{UpperParagraph}</p>
        <button className="product_view">See Product</button>
      </div>
    </div>
  );
};

export default Upper;
