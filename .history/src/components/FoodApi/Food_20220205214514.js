// import lodas from "lodash";
import React from "react";
import useHookFoodAPI from "../../hooks/useHookFoodAPI";
import "./Food.scss";

const Food = () => {
  const { foodMeals, handleChangeFood, handleDataFood, loadingFood, notFound } =
    useHookFoodAPI();
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
        {loadingFood && <div className="food-loading"></div>}
        {/* Not found 404 */}
        {!loadingFood && notFound && <p>404 not Found</p>}
        {/* foodlist */}
        <div className="food-list">
          {!foodMeals && <div>Không tìm thấy tên món ăn</div>}
          {!loadingFood &&
            foodMeals &&
            foodMeals.length > 0 &&
            foodMeals.map((item, index) => {
              if (!item.strMeal || item.strMeal.length <= 0) {
                return null;
              }
              return (
                <div className="food-item" key={item.idMeal}>
                  <div className="food-image">
                    <img src={item.strMealThumb} alt="" />
                  </div>
                  <div className="food-title">{item.strMeal}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Food;
