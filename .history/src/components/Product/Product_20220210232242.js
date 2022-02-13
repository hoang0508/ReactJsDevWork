/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./Product.scss";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import LoadingSkeleton from "../Loading/LoadingSkeleton";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("jewelery");
  const [value, setValue] = useState([]);

  // mounted
  const ismounted = useRef(true);
  useEffect(() => {
    //
    return () => {
      // mounted
      ismounted.current(false);
    };
  }, []);
  // Data CateGori
  const fetchDataCategorie = async () => {
    const reponse2 = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    setValue(reponse2.data);
  };
  // Change Select
  const handleChangeSelect = (e) => {
    setQuery(e.target.value);
  };
  // UseEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Data List Category
        const reponse = await axios.get(
          `https://fakestoreapi.com/products/category/${query}`
        );
        setTimeout(() => {
          if (ismounted.current) {
            setProduct(reponse.data);
          }
        }, 500);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataCategorie();
    fetchData();
  }, [query]);
  return (
    <div className="product">
      <div className="product-search">
        <select
          name="category"
          className="product-input"
          onChange={(e) => handleChangeSelect(e)}
        >
          {value &&
            value.length > 0 &&
            value.map((item, index) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          {/* <option value="jewelery">jewelery</option>
          <option value="jewelery">jewelery</option> */}
        </select>
      </div>
      <div className="product-list">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
      <div className="product-list">
        {product &&
          product.length > 0 &&
          product.map((item, index) => (
            <ProductItem key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
};

// Loading
const LoadingProduct = () => {
  return (
    <div className="product-item">
      <div className="product-image product-image2">
        <LoadingSkeleton width="100%" height="100%" radius="16px" />
      </div>
      <div className="product-content">
        <h3 className="product-title">
          <LoadingSkeleton height="20px" />
        </h3>
        <div className="product-desc">
          <LoadingSkeleton height="50px" />
        </div>
        <div className="product-coins block">
          <div className="product-rating mb-1">
            <FaStar className="rating-color" />
            <span>
              <LoadingSkeleton height="10px" />
            </span>
          </div>
          <div className="product-price">
            <LoadingSkeleton height="10px" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Item product
const ProductItem = ({ data }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={data.image} alt="" />
      </div>
      <div className="product-content">
        <h3 className="product-title">{data.title}</h3>
        <p className="product-desc">{data.description}</p>
        <div className="product-coins">
          <div className="product-rating">
            <FaStar className="rating-color" />
            <span>{data.rating.rate}</span>
          </div>
          <div className="product-price">{data.price}đ</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
