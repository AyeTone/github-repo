import React, { useEffect, useState } from "react";

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="repolist">
      <div className="repolist__container">
        {repos.map((repo, id) => (
          <li key={id}>
            {" "}
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
      </div>
      {/* <button onClick={(e) => console.log(repos)}> console</button> */}
    </div>
  );
};

export default RepoList;
