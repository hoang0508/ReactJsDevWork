import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStrorage";

// Tạo createContext
const AuthContext = createContext();

const AuthProvider = (props) => {
  // Query Search
  const [query, setQuery] = useState("margarita");
  // url
  const [url, setUrl] = useState(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  // loading
  const [loading, setLoading] = useState(true);
  // API useEffetch
  useEffect(() => {
    const CookAPI = async () => {
      setLoading(true);
      try {
        const respone = await axios.get(url);
        // console.log(respone.data.drinks);
        setCookList(respone.data.drinks);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    CookAPI();
  }, [url]);
  // User
  const [user, setUser] = useState({
    userID: 1,
    name: "Huy Hoang",
    email: "hoang@gmail.com",
  });
  // THeme
  const [theme, setTheme] = useState(false);
  // CookList
  const [cookList, setCookList] = useState([]);
  // LocalStrorage
  const { storedValue, setValue } = useLocalStorage("cartValue", []);
  // CartList
  const [cartItem, setCartItem] = useState(storedValue);
  // Add TO cart
  const addTocart = (newItem) => {
    setCartItem((prevItems) => {
      const isExisted = prevItems.some(
        (item) => item.idDrink === newItem.idDrink
      );
      if (isExisted) {
        setValue([...prevItems]);
        return [...prevItems];
      }
      // xét value localStrorage
      setValue([...prevItems, newItem]);
      // return
      return [...prevItems, newItem];
    });
  };

  // remove Cart
  const removeCart = (cartId) => {
    setCartItem((prevItems) => {
      const result = prevItems.filter((item) => item.idDrink !== cartId);
      // xét localStroge
      setValue(result);
      // return
      return result;
    });
  };

  const value = {
    user,
    setUser,
    theme,
    setTheme,
    cookList,
    addTocart,
    cartItem,
    removeCart,
    setUrl,
    setQuery,
    query,
    loading,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
