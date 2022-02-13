import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Food.scss";

const Food = () => {
  const [foodMeals, setFoodMeals] = useState([]);
  const [queryMeals, setQueryMeals] = useState("chicken_breast");
  const [loadingFood, setLoadingFood] = useState(true);
  const handleDataFood = async () => {
    try {
      const reponse = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
      );
      // console.log(reponse.data?.meals);
      setFoodMeals(reponse.data?.meals);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeFood = (e) => {
    setQueryMeals(e.target.value);
  };
  useEffect(() => {
    handleDataFood();
  }, [queryMeals]);
  return (
    <>
      <div className="food">
        {/* input */}
        <input
          className="food-input"
          type="text"
          // value={queryMeals}
          placeholder="Search"
          onChange={(e) => handleChangeFood(e)}
        />
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
