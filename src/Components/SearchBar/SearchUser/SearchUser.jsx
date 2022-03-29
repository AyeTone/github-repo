import React, { useContext, useState, useEffect } from "react";
import { UserData } from "../../../context/userDataContext";
import { TiSocialGithubCircular } from "react-icons/ti";

const SearchUser = () => {
  const { userSearchMounted, setUserSearchMounted } = useContext(UserData);

  const mountedStyle = { animation: "userIn 1900ms " };
  const unmountedStyle = {
    animation: "userOut 2000ms",
    animationFillMode: "forwards",
  };

  return (
    <form
      style={userSearchMounted ? mountedStyle : unmountedStyle}
      className="searchbar__form"
    >
      <TiSocialGithubCircular
        className="searchbar__icon"
        onClick={() => setUserSearchMounted(!userSearchMounted)}
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
