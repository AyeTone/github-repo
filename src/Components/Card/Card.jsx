import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import { UserData } from "../../context/userDataContext";
import { useDelayUserReload } from "../SearchBar/DelayUnmount";

const Card = () => {
  const { data, username, userReload, setUserReload } = useContext(UserData);

  let name = data.login;
  let date = new Date(`${data.created_at}`);
  let fullDate = moment(date).format("MMMM D, Y");
  const govName = data.name;

  const reloadUser = useDelayUserReload(userReload, 0);

  /* animation swap */
  const reloadOne = { animation: "cardReload 1.9s" };
  const reloadTwo = {
    animation: "cardReloadTwo 2s",
  };

  return (
    <div className="card">
      <div
        style={reloadUser ? reloadOne : reloadTwo}
        className="card__container"
      >
        {data.login ? (
          <>
            <div className="card__avatar">
              <img src={data.avatar_url} alt={`${username} avatar`} />
              <h1 className="card__username">
                {name} {govName && <span>aka {govName} </span>}
              </h1>
            </div>
            <div className="card__content">
              <div className="card__content__header">
                <h1 className="header__username">
                  {name} {govName && <span>aka {govName} </span>}
                </h1>
                <p className="header__active">
                  {" "}
                  <span>Joined:</span> {fullDate}
                </p>
              </div>
              <CardBody
                bio={data.bio}
                repos={data.public_repos}
                followers={data.followers}
                following={data.following}
              />
              <CardFooter
                github={data.html_url}
                location={data.location}
                twitter={data.twitter_username}
                blog={data.blog}
              />
            </div>
          </>
        ) : (
          <div className="no__user">
            <p>'Tis a maidenless area. Try Jumping.</p>
            <img
              src="https://www.pcgamesn.com/wp-content/uploads/2022/02/elden-ring-pc-performance-issues-580x334.jpg"
              alt="Elden Ring"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
