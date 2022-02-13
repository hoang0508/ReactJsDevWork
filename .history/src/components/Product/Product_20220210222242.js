import React, { useEffect, useRef, useState } from "react";
import "./Product.scss";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import lodash from "lodash";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState("jewelery");
  const [value, setValue] = useState([]);

  // mounted
  const ismounted = useRef(true);
  useEffect(() => {
    //
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const handleChangeSelect = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  // UseEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Data List Category
        const reponse = await axios.get(
          `https://fakestoreapi.com/products/category/${query}`
        );
        if (ismounted.current) {
          setProduct(reponse.data);
        }
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
        {product &&
          product.length > 0 &&
          product.map((item, index) => (
            <ProductItem key={item.id} data={item} />
          ))}
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
          <div className="product-price">{data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
