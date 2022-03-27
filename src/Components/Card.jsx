import React, { useEffect, useState } from "react";
import moment from "moment";

const Card = () => {
  const username = "ayetone";

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  function conso(e) {
    console.log(e);
  }

  let date = new Date(`${userInfo.updated_at}`);
  let fullDate = moment(date).format("MMMM D, Y");

  return (
    <div className="card">
      {/* <button onClick={() => conso(userInfo)}>Console</button> */}
      <div className="card__container">
        <div className="card__avatar">
          <img src={userInfo.avatar_url} alt={`${username} avatar`} />
        </div>
        <div className="card__content">
          <div className="card__content__header">
            <h1 className="header__username">{userInfo.login}</h1>
            <p className="header__joined">
              {" "}
              <span>Last active:</span> {fullDate}
            </p>
          </div>
          <div className="card__content__body">
            <p>{userInfo.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
