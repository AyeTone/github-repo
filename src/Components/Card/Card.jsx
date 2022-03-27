import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import CardBody from "./CardBody/CardBody";
import CardFooter from "./CardFooter/CardFooter";
import { UserData } from "../../context/userDataContext";

const Card = ({ username }) => {
  const { data, setData } = useContext(UserData);

  let name = data.login;
  let date = new Date(`${data.updated_at}`);
  let fullDate = moment(date).format("MMMM D, Y");

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__avatar">
          <img src={data.avatar_url} alt={`${username} avatar`} />
          <h1 className="card__username">
            {name} <span>aka {data.name}</span>
          </h1>
        </div>
        <div className="card__content">
          <div className="card__content__header">
            <h1 className="header__username">{name}</h1>
            <p className="header__active">
              {" "}
              <span>Last active:</span> {fullDate}
            </p>
          </div>
          <CardBody
            bio={data.bio}
            repos={data.public_repos}
            followers={data.followers}
            following={data.following}
          />
          <CardFooter
            github={data.url}
            location={data.location}
            twitter={data.twitter_username}
            blog={data.blog}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
