import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { UserData } from "../../context/userDataContext";

function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}

const SearchBar = ({ search, setSearch }) => {
  const { isMounted, setIsMounted } = useContext(UserData);
  const showDiv = useDelayUnmount(isMounted, 450);
  const mountedStyle = { animation: "animeIn 450ms ease-in" };
  const unmountedStyle = {
    animation: "animeOut 470ms ease-out",
    animationFillMode: "forwards",
  };
  const fadeIn = { animation: "fadeIn 450ms ease-in" };

  function toggleMounted() {
    setIsMounted(!isMounted);
  }

  return (
    <div className="searchbar">
      <>
        {!showDiv && (
          <>
            <BiSearchAlt
              style={!isMounted ? fadeIn : null}
              className="searchbar__unmounted"
              onClick={() => toggleMounted()}
            />
          </>
        )}
      </>
      <>
        {showDiv && (
          <form
            style={isMounted ? mountedStyle : unmountedStyle}
            className="searchbar__form"
          >
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
      </>
    </div>
  );
};

export default SearchBar;
