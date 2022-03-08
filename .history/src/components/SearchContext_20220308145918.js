import React from "react";

const SearchContext = () => {
  return (
    <div className="mt-10 flex justify-end p-3">
      <input type="text" className="border border-gray-200 rounded-lg p-5" />
      <button className="bg-blue-500 text-white p-5">Search</button>
    </div>
  );
};

export default SearchContext;
