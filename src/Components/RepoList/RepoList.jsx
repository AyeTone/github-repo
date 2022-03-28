import React, { useContext, useEffect, useState } from "react";
import { UserData } from "../../context/userDataContext";

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const { search } = useContext(UserData);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  let filteredRepos = repos
    .filter((repo) => {
      if (search == "") {
        return repo;
      } else if (repo.name.toLowerCase().includes(search.toLowerCase())) {
        return repo;
      }
    })
    .map((repo, id) => (
      <li key={id}>
        {" "}
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>
      </li>
    ));

  return (
    <div className="repolist">
      <div className="repolist__container">{filteredRepos}</div>
    </div>
  );
};

export default RepoList;
