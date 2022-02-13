import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHookFoodAPI(initialUrl, initialData) {
  // render data
  const [foodMeals, setFoodMeals] = useState([]);
  // Loading
  const [loadingFood, setLoadingFood] = useState(true);
  // Not found search
  const [notFound, setNotFound] = useState("");
  // url Link API
  const [url, setUrl] = useState(initialUrl);
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
  // useEffect
  useEffect(() => {
    fetchDataFood.current();
  }, [url]);
  return {
    foodMeals,
    loadingFood,
    notFound,
    setUrl,
  };
}
