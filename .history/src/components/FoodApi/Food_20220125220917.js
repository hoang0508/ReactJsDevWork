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
      console.log(reponse);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleDataFood();
  }, []);
  return (
    <>
      <div>Hoang</div>
    </>
  );
};

export default Food;
