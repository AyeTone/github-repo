import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TiSocialGithubCircular } from "react-icons/ti";
import { UserData } from "../../context/userDataContext";
import SearchRepo from "./SearchRepo/SearchRepo";
import SearchUser from "./SearchUser/SearchUser";
import { useDelayRepoUnmount, useDelayUserUnmount } from "./DelayUnmount";

const SearchBar = () => {
  const {
    repoSearchMounted,
    setRepoSearchMounted,
    userSearchMounted,
    setUserSearchMounted,
  } = useContext(UserData);

  const showRepoSearch = useDelayRepoUnmount(repoSearchMounted, 2000);
  const showUserSearch = useDelayUserUnmount(userSearchMounted, 2000);

  return (
    <div className="searchbar">
      <div className="searchbar__icons">
        {!showRepoSearch && !showUserSearch && (
          <>
            <TiSocialGithubCircular
              className="searchbar__userSearch"
              onClick={() => setUserSearchMounted(!userSearchMounted)}
            />
            <BiSearchAlt
              className="searchbar__repoSearch"
              onClick={() => setRepoSearchMounted(!repoSearchMounted)}
            />
          </>
        )}
      </div>
      <>{showRepoSearch && <SearchRepo />}</>
      <>{showUserSearch && <SearchUser />}</>
    </div>
  );
};

export default SearchBar;
