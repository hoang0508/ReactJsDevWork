import React from "react";
import { useAuth } from "./Contexts/auth-context";

const SearchContext = () => {
  const { setQuery, setUrl, query } = useAuth();
  const hanldeClickUrl = (e) => {
    e.preventDefault();
    setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    document.querySelector(".input").value = "";
  };
  return (
    <div className="mt-10 flex justify-end p-3">
      <input
        type="text"
        className="max-w-[300px] w-full border border-gray-200 rounded-lg p-3 mr-3 outline-none input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-3 rounded-lg"
        onClick={(e) => hanldeClickUrl(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchContext;
