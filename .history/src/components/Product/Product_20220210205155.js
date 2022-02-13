import React, { useEffect, useState } from "react";
import "./Product.scss";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          `https://fakestoreapi.com/products/category/jewelery`
        );
        setProduct(reponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="product">
      <div className="product-search">
        <input
          type="text"
          className="product-input"
          placeholder="Search product..."
        />
      </div>
      <div className="product-list">
        {product &&
          product.length > 0 &&
          product.map((item, index) => <ProductItem key={item.id} />)}
      </div>
    </div>
  );
};

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">
          John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
          Bracelet
        </h3>
        <p className="product-desc">
          From our Legends Collection, the Naga was inspired by the mythical
          water dragon that protects the ocean's pearl. Wear facing inward to be
          bestowed with love and abundance, or outward for protection.
        </p>
        <div className="product-coins">
          <div className="product-rating">
            <FaStar className="rating-color" />
            <span>4.6</span>
          </div>
          <div className="product-price">695.000đ</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
