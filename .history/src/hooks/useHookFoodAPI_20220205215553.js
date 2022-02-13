import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHookFoodAPI(initialUrl, initialData) {
  // render data
  const [data, setData] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Not found search
  const [notFound, setNotFound] = useState("");
  // url Link API
  const [url, setUrl] = useState(initialUrl);
  const fetchDataFood = useRef();
  fetchDataFood.current = async () => {
    setLoading(true);
    try {
      const reponse = await axios.get(url);
      // console.log(reponse.data?.meals);
      console.log(reponse);
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
    data,
    loading,
    notFound,
    setUrl,
  };
}
