import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  // Query Search
  const [query, setQuery] = useState("margarita");
  // url
  const [url, setUrl] = useState(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  // API useEffetch
  useEffect(() => {
    const CookAPI = async () => {
      try {
        const respone = await axios.get(url);
        // console.log(respone.data.drinks);
        setCookList(respone.data.drinks);
      } catch (err) {
        console.log(err);
      }
    };
    CookAPI();
  }, [url, query]);
  // User
  const [user, setUser] = useState({
    userID: 1,
    name: "Huy Hoang",
    email: "hoang@gmail.com",
  });
  // THems
  const [theme, setTheme] = useState(false);
  // CookList
  const [cookList, setCookList] = useState([]);
  // CartList
  const [cartItem, setCartItem] = useState([]);
  // Add TO cart
  const addTocart = (newItem) => {
    setCartItem((prevItems) => {
      const isExisted = prevItems.some(
        (item) => item.idDrink === newItem.idDrink
      );
      if (isExisted) return [...prevItems];
      return [...prevItems, newItem];
    });
  };

  // remove Cart
  const removeCart = (cartId) => {
    setCartItem((prevItems) =>
      prevItems.filter((item) => item.idDrink !== cartId)
    );
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
