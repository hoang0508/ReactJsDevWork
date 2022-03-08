import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  useEffect(() => {
    const CookAPI = () => {
      const respone = axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      console.log(respone);
    };
    return CookAPI;
  }, []);
  const [user, setUser] = useState({
    userID: 1,
    name: "Huy Hoang",
    email: "hoang@gmail.com",
  });
  const [theme, setTheme] = useState(false);
  //
  const [cookList, setCookList] = useState([]);
  const value = { user, setUser, theme, setTheme };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
