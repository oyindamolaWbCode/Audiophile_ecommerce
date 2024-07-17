import React from "react";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import earphoneImg from "../../assets/Images/image-earphones.png";
import "./Earphones.css";
const Earphones = () => {
  return (
    <div className="earphone_container">
      <NavHeader centerIt="Earphones" />
      <Upper
        UpperImg={earphoneImg}
        UpperTitle="new product"
        UpperSubTitle="YX1 WIRELESS EARPHONES"
        UpperParagraph="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
    </div>
  );
};

export default Earphones;
