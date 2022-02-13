import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHookFoodAPI() {
  // render data
  const [foodMeals, setFoodMeals] = useState([]);
  // khởi tạo data ô input
  const [queryMeals, setQueryMeals] = useState("chicken_breast");
  // Loading
  const [loadingFood, setLoadingFood] = useState(true);
  // Not found search
  const [notFound, setNotFound] = useState("");
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
      setLoadingFood(false);
      setNotFound(`404 ${err}`);
    }
  };
  // Fuction onChange input
  // const handleChangeFood = lodash.debounce((e) => {
  //   setQueryMeals(e.target.value);
  // }, 500);
  const handleChangeFood = (e) => {
    setQueryMeals(e.target.value);
  };
  const handleDataFood = (e) => {
    e.preventDefault();
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${queryMeals}`
    );
  };
  // useEffect
  useEffect(() => {
    fetchDataFood.current();
  }, [url]);
  return {
    handleChangeFood,
    handleDataFood,
    foodMeals,
    loadingFood,
    queryMeals,
    notFound,
  };
}
