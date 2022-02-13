import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHookFoodAPI2(initialUrl, initialData) {
  // render data
  const [data2, setData] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Not found search
  const [notFound, setNotFound] = useState("");
  // url Link API
  const [url, setUrl2] = useState(initialUrl);
  const fetchDataFood = useRef();
  fetchDataFood.current = async () => {
    setLoading(true);
    try {
      const reponse = await axios.get(url);
      setData(reponse.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
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
    data2,
    loading,
    notFound,
    setUrl2,
  };
}
