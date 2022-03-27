import React, { useEffect } from "react";

const RepoList = ({ username }) => {
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    );
  }, []);

  return <div>RepoList</div>;
};

export default RepoList;
