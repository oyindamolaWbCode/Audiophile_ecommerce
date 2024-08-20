import React from "react";
import "./Speaker.css";
import NavHeader from "../NavHeaders/NavHeader";
import Upper from "../Uppercomponent/Upper";
import speakerImg from "../../assets/Images/image-speaker-zx9 (1).png";
import HeadphoneFeatures from "../../Data/product.json";
import Cards from "../Cards/Cards";
import AudioGear from "../AudioGear/AudioGear";
import { useNavigate } from "react-router-dom";

function Speakers(props) {
  const navigate = useNavigate();

  const SingleProduct = (id) => {
    navigate(`/product/${id}?speakers`);
  };
  return (
    <div className="speaker_container">
      <NavHeader centerIt="Speakers" />
      <div className="speaker-content">
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
                    <button
                      onClick={() => SingleProduct(speaker.id)}
                      className="product_view"
                    >
                      See Product
                    </button>
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
}

export default Speakers;
