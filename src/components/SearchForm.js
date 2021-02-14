import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        onKeyUp={handleKeyPress}
      />
      <button type="submit" onClick={onSubmit}>
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
