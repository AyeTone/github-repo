import React from "react";

const CardBody = ({ bio, repos, followers, following }) => {
  return (
    <div className="body">
      {bio ? (
        <p className="body__bio">{bio}</p>
      ) : (
        <p className="body__bio__none">👨‍💻This Profile has no bio...💁‍♂️</p>
      )}
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
