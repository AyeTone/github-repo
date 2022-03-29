import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { UserData } from "../../../context/userDataContext";

const SearchRepo = () => {
  const { repoSearchMounted, setRepoSearchMounted, searchRepo, setSearchRepo } =
    useContext(UserData);

  const mountedStyle = { animation: "repoIn 1900ms " };
  const unmountedStyle = {
    animation: "repoOut 2000ms",
    animationFillMode: "forwards",
  };

  return (
    <form
      style={repoSearchMounted ? mountedStyle : unmountedStyle}
      className="searchbar__form"
    >
      <BiSearchAlt
        className="searchbar__icon"
        onClick={() => setRepoSearchMounted(!repoSearchMounted)}
      />
      <input
        value={searchRepo}
        type="text"
        className="searchbar__input"
        placeholder="Search for a repo..."
        onChange={(e) => setSearchRepo(e.target.value)}
      />
    </form>
  );
};

export default SearchRepo;
