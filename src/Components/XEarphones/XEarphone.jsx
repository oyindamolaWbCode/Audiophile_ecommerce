import React from "react";
import "./XEarphone.css";
import earpods from "../../assets/Images/download.jpg";

const XEarphone = (props) => {
  return (
    <div className="Xearphone">
      <div className="earphone"></div>
      <div className="earpods_details">
        <h2>yx1 earphone</h2>
        <button className="product_view">See Product</button>
      </div>
    </div>
  );
};

export default XEarphone;
