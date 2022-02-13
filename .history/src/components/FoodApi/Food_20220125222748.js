import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Food.scss";

const Food = () => {
  const [foodMeals, setFoodMeals] = useState([]);
  const handleDataFood = async () => {
    try {
      const reponse = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
      );
      // console.log(reponse.data?.meals);
      setFoodMeals(reponse.data?.meals);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleDataFood();
  }, []);
  return (
    <>
      <div className="food">
        <div className="food-list">
          {foodMeals &&
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
