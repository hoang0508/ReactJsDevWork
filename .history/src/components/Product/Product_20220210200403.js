import React from "react";
import "./Product.scss";
const Product = () => {
  return (
    <div className="product">
      <div className="product-search">
        <input
          type="text"
          className="product-input"
          placeholder="Search product..."
        />
      </div>
    </div>
  );
};

export default Product;
