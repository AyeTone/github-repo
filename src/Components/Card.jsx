import React, { useEffect, useState } from "react";

const Card = () => {
  const username = "ayetone";

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  function conso() {
    console.log(userInfo);
  }

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container__avatar">
          <img src={userInfo.avatar_url} alt={`${username} avatar`} />
        </div>
        <div className="card__container__content">
          <div className="card__container__content__header">
            <h1>{userInfo.login}</h1>
            <p>{userInfo.created_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
