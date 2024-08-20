import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import products from "../../Data/product.json";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const location = useLocation();
  const cat = location.search.substring(1, location.search.length).toString();

  let catProduct = products[cat];

  const singleProduct = catProduct.find((item) => item.id == id);
  console.log(singleProduct.price);

  return (
    <div className="single_product">
      <div className="product-in-details">
        <div className="product">
          <img
            src={singleProduct.image.product}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="product-details">
          <h3 className="new-product">NEW PRODUCT</h3>
          <h1 className="product-title">{singleProduct.shortName}</h1>
          <h1 className="product-title">{singleProduct.category}</h1>
          <p className="product-details-para">{singleProduct.description} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
