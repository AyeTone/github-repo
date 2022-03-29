import React, { useContext, useState, useEffect } from "react";
import { UserData } from "../../../context/userDataContext";
import { TiSocialGithubCircular } from "react-icons/ti";

const SearchUser = () => {
  const { userSearchMounted, setUserSearchMounted, username, setUsername } =
    useContext(UserData);

  const mountedStyle = { animation: "userIn 1900ms " };
  const unmountedStyle = {
    animation: "userOut 2000ms",
    animationFillMode: "forwards",
  };

  const [searchInput, setSearchInput] = useState("");

  function changeUser(e) {
    e.preventDefault();
    setUsername(searchInput);
    setSearchInput("");
  }

  return (
    <form
      style={userSearchMounted ? mountedStyle : unmountedStyle}
      className="searchbar__form"
      onSubmit={(e) => changeUser(e)}
    >
      <TiSocialGithubCircular
        className="searchbar__icon"
        onClick={() => setUserSearchMounted(!userSearchMounted)}
      />
      <input
        value={searchInput}
        type="text"
        className="searchbar__input"
        placeholder="Search a Github User..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default SearchUser;
