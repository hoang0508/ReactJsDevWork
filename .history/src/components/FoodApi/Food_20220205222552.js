// import lodas from "lodash";
import React, { useState } from "react";
import useHookFoodAPI from "../../hooks/useHookFoodAPI";
import "./Food.scss";

const Food = () => {
  // khởi tạo data ô input
  const [queryMeals, setQueryMeals] = useState("chicken_breast");
  const { data, loading, notFound, setUrl } = useHookFoodAPI(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
  );
  //
  const handleChangeFood = (e) => {
    setQueryMeals(e.target.value);
  };
  // Hàm Btn Click URL
  const handleDataFood = (e) => {
    e.preventDefault();
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
    );
  };
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
          <button onClick={(e) => handleDataFood(e)} className="food-btn">
            Search
          </button>
        </form>
        {/* loading */}
        {loading && <div className="food-loading"></div>}
        {/* Not found 404 */}
        {!loading && notFound && <p>404 not Found</p>}
        {/* foodlist */}
        <div className="food-list">
          {!data.meals && <div>Không tìm thấy tên món ăn</div>}
          {!loading &&
            data.meals &&
            data.meals.length > 0 &&
            data.meals.map((item, index) => {
              if (!item.strMeal || item.strMeal.length <= 0) {
                return null;
              }
              return (
                <div className="food-item" key={item.idMeal}>
                  <div className="food-image">
                    <img src={item.strMealThumb} alt="" />
                  </div>
                  <div className="food-title">{item.strMeal}</div>
                  <button className="food-btn food-btn--primary">
                    Watch Details
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Food;
