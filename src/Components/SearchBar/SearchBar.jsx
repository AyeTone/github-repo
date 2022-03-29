import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiSocialGithubCircular } from "react-icons/ti";
import { UserData } from "../../context/userDataContext";
import SearchRepo from "./SearchRepo/SearchRepo";
import SearchUser from "./SearchUser/SearchUser";

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
  const showRepoSearch = useDelayUnmount(isMounted, 2000);
  const [showUserSearch, setShowUserSearch] = useState(false);

  return (
    <div className="searchbar">
      <>
        {!showRepoSearch && !showUserSearch && (
          <>
            <TiSocialGithubCircular
              className="searchbar__userSearch"
              onClick={() => setShowUserSearch(!showUserSearch)}
            />
            <BiSearchAlt
              className="searchbar__repoSearch"
              onClick={() => setIsMounted(!isMounted)}
            />
          </>
        )}
      </>
      <>{showRepoSearch && <SearchRepo />}</>
      <>
        {showUserSearch && (
          <SearchUser
            showUserSearch={showUserSearch}
            setShowUserSearch={setShowUserSearch}
          />
        )}
      </>
    </div>
  );
};

export default SearchBar;
