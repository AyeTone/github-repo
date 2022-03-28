import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { UserData } from "../../context/userDataContext";

const SearchBar = ({ search, setSearch }) => {
  const { isMounted, setIsMounted } = useContext(UserData);

  return (
    <div className="searchbar">
      {!isMounted ? (
        <BiSearchAlt className="searchbar__unmounted" />
      ) : (
        <form className="searchbar__form">
          <BiSearchAlt className="searchbar__icon" />
          <input
            value={search}
            type="text"
            className="searchbar__input"
            placeholder="Search for a repo..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};

export default SearchBar;
