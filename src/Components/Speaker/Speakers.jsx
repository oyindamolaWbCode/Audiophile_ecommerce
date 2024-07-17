import React from "react";
import "./Speaker.css";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import speakerImg from "../../assets/Images/image-speaker-zx9 (1).png";
function Speakers(props) {
  return (
    <div className="speaker_container">
      <NavHeader centerIt="Speakers" />
      <Upper
        UpperImg={speakerImg}
        UpperTitle="new product"
        UpperSubTitle="ZX9 SPEAKER"
        UpperParagraph="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />
    </div>
  );
}

export default Speakers;
