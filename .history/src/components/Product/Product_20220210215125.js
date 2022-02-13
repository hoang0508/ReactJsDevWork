import React, { useEffect, useState } from "react";
import "./Product.scss";
import { FaStar } from "react-icons/fa";
import axios from "axios";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  // const [value, setValue] = useState([]);
  const fetchDataCategorie = async () => {
    const reponse2 = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    // setQuery(reponse2.data);
  };
  //
  const handleChangeSelect = (e) => {
    setQuery(e.target.value);
  };
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          `https://fakestoreapi.com/products/category/${query}`
        );
        setProduct(reponse.data);
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
        <select name="category" onChange={(e) => handleChangeSelect(e)}>
          {/* {query &&
            query.length > 0 &&
            query.map((item, index) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))} */}
          <option value="jewelery">jewelery</option>
          <option value="jewelery">jewelery</option>
        </select>
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
          <div className="product-price">{data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
