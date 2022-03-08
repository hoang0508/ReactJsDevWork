import React from "react";

const SearchContext = () => {
  return (
    <div className="mt-10 flex justify-end p-3">
      <input
        type="text"
        className="max-w-[300px] border border-gray-200 rounded-lg p-3 mr-3"
      />
      <button className="bg-blue-500 text-white p-3">Search</button>
    </div>
  );
};

export default SearchContext;
