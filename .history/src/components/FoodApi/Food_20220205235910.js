// import lodas from "lodash";
import React, { useState } from "react";
import useHookFoodAPI from "../../hooks/useHookFoodAPI";
import useHookFoodAPI2 from "../../hooks/useHookFoodAPI2";
import "./Food.scss";

const Food = () => {
  // khởi tạo data ô input
  const [queryMeals, setQueryMeals] = useState("chicken_breast");
  const { data, loading, notFound, setUrl } = useHookFoodAPI(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
  );
  const { dataL, setUrl2 } = useHookFoodAPI2(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=1`
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
  const handleBtnDetails = (e, id) => {
    e.preventDefault();
    setUrl2(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  };
  console.log(dataL.meals);
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
                  <button
                    onClick={(e, id) => handleBtnDetails(e, item.idMeal)}
                    className="food-btn food-btn--primary"
                  >
                    Watch Details
                  </button>
                </div>
              );
            })}
        </div>
        <div className="food-modal">
          <div className="food-container">
            {dataL.meals &&
              dataL.meals.length &&
              dataL.meals.map((item, index) => (
                <div key={item.idMeal}>
                  <div>{item.strMeal}</div>
                </div>
              ))}
            <div className="food-title"></div>
            <h3>Details: </h3>
            <div className="food-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad,
              facere repellat laudantium unde sunt quas enim quia eius possimus
              magnam obcaecati accusantium vero, delectus tenetur inventore
              dolore culpa animi.
            </div>
            <div className="modal-images">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
