import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <BiSearchAlt className="searchbar__icon" />
        <input
          value={search}
          type="text"
          className="searchbar__input"
          placeholder="Search for a repo..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button type="submit" className="searchbar__button">
          {" "}
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
