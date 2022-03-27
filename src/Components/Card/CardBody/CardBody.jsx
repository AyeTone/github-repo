import React from "react";

const CardBody = ({ bio, repos, followers, following }) => {
  return (
    <div className="card__content__body">
      <p className="body__bio">{bio}</p>
      <div className="body__stats">
        <p className="body__stats__content">
          Repos: <span>{repos}</span>
        </p>
        <p className="body__stats__content">
          Followers:{" "}
          {followers === 0 ? (
            <p className="shame">
              Shameful <span>0</span>
            </p>
          ) : (
            <span>{followers}</span>
          )}
        </p>
        <p className="body__stats__content">
          Following:{" "}
          {followers === 0 ? (
            <p className="shame">
              Shameless <span>0</span>
            </p>
          ) : (
            <span>{following}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CardBody;
