import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <BiSearchAlt className="searchbar__icon" />
        <input
          type="text"
          className="searchbar__input"
          placeholder="Search for a repo..."
        />
        <button type="submit" className="searchbar__button">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
