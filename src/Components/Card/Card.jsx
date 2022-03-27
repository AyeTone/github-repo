import React, { useEffect, useState } from "react";
import moment from "moment";
import CardBody from "./CardBody/CardBody";

const Card = () => {
  const [userInfo, setUserInfo] = useState([]);
  const username = "ayetone";
  let followers = userInfo.followers;
  let following = userInfo.following;
  let date = new Date(`${userInfo.updated_at}`);
  let fullDate = moment(date).format("MMMM D, Y");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  function conso(e) {
    console.log(e);
  }

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
            <p className="header__active">
              {" "}
              <span>Last active:</span> {fullDate}
            </p>
          </div>
          <CardBody
            bio={userInfo.bio}
            repos={userInfo.pubilc_repos}
            followers={followers}
            following={following}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
