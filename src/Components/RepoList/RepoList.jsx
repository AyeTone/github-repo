import React, { useContext, useEffect, useState } from "react";
import { UserData } from "../../context/userDataContext";

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const { searchRepo } = useContext(UserData);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  let filteredRepos = repos
    .filter((repo) => {
      if (searchRepo == "") {
        return repo;
      } else if (repo.name.toLowerCase().includes(searchRepo.toLowerCase())) {
        return repo;
      }
    })
    .map((repo, id) => (
      <a key={id} href={repo.html_url}>
        <span>{repo.name}</span>
      </a>
    ));

  return (
    <div className="repolist">
      <div className="repolist__container">
        {filteredRepos.length ? (
          [filteredRepos]
        ) : (
          <div className="repolist__container__empty">
            <p>The droids you are looking for are not here.</p>
            <iframe
              title="no droids"
              src="https://giphy.com/embed/l2JJKs3I69qfaQleE"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoList;
