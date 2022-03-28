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
    .map((repo, id) => {
      let repoName = repo.name;

      if (repoName) {
        return <li key={id}> {repoName} </li>;
      } else if (search !== repoName) {
        return <li key={id}>The droids you are looking for are not here 👋</li>;
      }
    });

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
