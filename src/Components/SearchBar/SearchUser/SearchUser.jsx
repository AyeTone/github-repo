import React, { useContext, useState } from "react";
import { UserData } from "../../../context/userDataContext";
import { TiSocialGithubCircular } from "react-icons/ti";

const SearchUser = () => {
  const { userSearchMounted, setUserSearchMounted, setUsername } =
    useContext(UserData);

  const mountedStyle = { animation: "userIn 1.9s " };
  const unmountedStyle = {
    animation: "userOut 2s",
    animationFillMode: "forwards",
  };

  const [searchInput, setSearchInput] = useState("");

  function changeUser(e) {
    e.preventDefault();
    setUsername(searchInput);
    setUserSearchMounted(!userSearchMounted);
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
