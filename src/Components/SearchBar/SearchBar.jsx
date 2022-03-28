import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiSocialGithubCircular } from "react-icons/ti";
import { UserData } from "../../context/userDataContext";
import SearchRepo from "./SearchRepo/SearchRepo";

function useDelayUnmount(e, delayTime) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (e && !showDiv) {
      setShowDiv(true);
    } else if (!e && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [e, delayTime, showDiv]);
  return showDiv;
}

const SearchBar = () => {
  const { isMounted, setIsMounted } = useContext(UserData);
  const showRepoSearch = useDelayUnmount(isMounted, 450);

  function toggleMounted() {
    setIsMounted(!isMounted);
  }

  return (
    <div className="searchbar">
      <>
        {!showRepoSearch && (
          <>
            <TiSocialGithubCircular className="searchbar__userSearch" />
            <BiSearchAlt
              className="searchbar__repoSearch"
              onClick={() => toggleMounted()}
            />
          </>
        )}
      </>
      <>{showRepoSearch && <SearchRepo />}</>
    </div>
  );
};

export default SearchBar;
