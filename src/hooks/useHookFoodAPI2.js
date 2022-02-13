import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHookFoodAPI2(initialUrl, initialData) {
  // render data
  const [dataL, setData] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Not found search
  const [notFound, setNotFound] = useState("");
  // url Link API
  const [url2, setUrl2] = useState(initialUrl);
  const fetchDataFood = useRef();

  const isMounted = useRef(true);
  fetchDataFood.current = async () => {
    setLoading(true);
    try {
      const reponse = await axios.get(url2);
      if (isMounted) {
        setData(reponse.data);
        setLoading(false);
      }
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
  }, [url2]);
  return {
    dataL,
    loading,
    notFound,
    setUrl2,
  };
}
