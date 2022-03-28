import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { UserData } from "../../context/userDataContext";

const SearchBar = ({ search, setSearch }) => {
  const { isMounted, setIsMounted } = useContext(UserData);

  function toggleMounted() {
    setIsMounted(!isMounted);
  }

  return (
    <div className="searchbar">
      {!isMounted ? (
        <BiSearchAlt
          className="searchbar__unmounted"
          onClick={() => toggleMounted()}
        />
      ) : (
        <form className="searchbar__form">
          <BiSearchAlt
            className="searchbar__icon"
            onClick={() => toggleMounted()}
          />
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
