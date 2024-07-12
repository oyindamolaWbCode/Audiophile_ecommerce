import React from "react";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import headphoneImg from "../../assets/Images/image-xx99-mark-two.jpg";
import "./Headphone.css";

const Headphones = () => {
  return (
    <div className="headphones_container">
      <NavHeader centerIt="Headphones" />
      <Upper
        UpperImg={headphoneImg}
        UpperTitle="new product"
        UpperSubTitle="XX99 MARK II HEADPHONES"
        UpperParagraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
    </div>
  );
};

export default Headphones;
