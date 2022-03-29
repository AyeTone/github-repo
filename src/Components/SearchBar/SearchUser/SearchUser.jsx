import React, { useContext, useState, useEffect } from "react";
import { UserData } from "../../../context/userDataContext";
import { TiSocialGithubCircular } from "react-icons/ti";

const SearchUser = ({ showUserSearch, setShowUserSearch }) => {
  return (
    <form className="searchbar__form">
      <TiSocialGithubCircular
        className="searchbar__icon"
        onClick={() => setShowUserSearch(!showUserSearch)}
      />
      <input
        type="text"
        className="searchbar__input"
        placeholder="Search a Github User..."
      />
    </form>
  );
};

export default SearchUser;
