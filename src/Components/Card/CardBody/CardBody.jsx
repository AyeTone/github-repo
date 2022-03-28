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
        <div className="body__stats__content">
          <p>Repos </p>
          {repos === 0 ? (
            <p className="shame">
              Newbie?
              <span>0</span>
            </p>
          ) : (
            <span>{repos}</span>
          )}
        </div>
        <div className="body__stats__content">
          <p>Followers </p>
          {followers === 0 ? (
            <p className="shame">
              Madienless <span>0</span>
            </p>
          ) : (
            <span>{followers}</span>
          )}
        </div>
        <div className="body__stats__content">
          <p>Following </p>
          {followers === 0 ? (
            <p className="shame">
              Shameless <span>0</span>
            </p>
          ) : (
            <span>{following}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
