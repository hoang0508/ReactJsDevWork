import axios from "axios";
import lodash from "lodash";
import React, { useEffect, useRef, useState } from "react";
import "./Food.scss";

const Food = () => {
  // render data
  const [foodMeals, setFoodMeals] = useState([]);
  // khởi tạo data ô input
  const [queryMeals, setQueryMeals] = useState("chicken_breast");
  // Loading
  const [loadingFood, setLoadingFood] = useState(true);
  // url Link API
  const [url, setUrl] = useState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
  );
  const fetchDataFood = useRef();
  fetchDataFood.current = async () => {
    setLoadingFood(true);
    try {
      const reponse = await axios.get(url);
      // console.log(reponse.data?.meals);
      setFoodMeals(reponse.data?.meals);
      setLoadingFood(false);
    } catch (err) {
      console.log(err);
    }
  };
  // Fuction onChange input
  const handleChangeFood = lodash.debounce((e) => {
    setQueryMeals(e.target.value);
  }, 500);
  const handleDataFood = () => {
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
    );
  };
  // useEffect
  useEffect(() => {
    fetchDataFood.current();
  }, [url]);
  return (
    <>
      <div className="food">
        <form>
          {/* input */}
          <input
            className="food-input"
            type="text"
            // defaultValue={queryMeals}
            placeholder="Your name food"
            onChange={(e) => handleChangeFood(e)}
          />
          <button onClick={() => handleDataFood()} className="food-btn">
            Search
          </button>
        </form>
        {/* loading */}
        {loadingFood && <div className="food-loading"></div>}
        {/* foodlist */}
        <div className="food-list">
          {!loadingFood &&
            foodMeals &&
            foodMeals.length > 0 &&
            foodMeals.map((item, index) => (
              <div className="food-item" key={item.idMeal}>
                <div className="food-image">
                  <img src={item.strMealThumb} alt="" />
                </div>
                <div className="food-title">{item.strMeal}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Food;
