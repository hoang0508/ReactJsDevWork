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
              <div className="food-item">
                <div className="food-image">
                  <img
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="food-title">Chicken</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Food;
