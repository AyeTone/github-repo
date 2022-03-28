import React, { useContext, useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { UserData } from "../../../context/userDataContext";

const SearchRepo = () => {
  const { isMounted, setIsMounted, searchRepo, setSearchRepo } =
    useContext(UserData);

  function toggleMounted() {
    setIsMounted(!isMounted);
  }

  const mountedStyle = { animation: "animeIn 450ms ease-in" };
  const unmountedStyle = {
    animation: "animeOut 470ms ease-out",
    animationFillMode: "forwards",
  };

  return (
    <form
      style={isMounted ? mountedStyle : unmountedStyle}
      className="searchbar__form"
    >
      <BiSearchAlt
        className="searchbar__icon"
        onClick={() => toggleMounted()}
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
