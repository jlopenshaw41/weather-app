import React from "react";

const SearchForm = () => {
  return (
    <div className="search-form">
      <input type="text" value="Enter a town or city" />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
