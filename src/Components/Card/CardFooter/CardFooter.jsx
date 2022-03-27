import React from "react";

const CardFooter = ({ location, twitter, github, blog }) => {
  return (
    <div className="footer">
      <p className="footer__location">
        {location ? <p> {location} </p> : <p className="null">null</p>}
      </p>
      <p className="footer__twitter">
        {twitter ? (
          <a href={twitter}> Github Page </a>
        ) : (
          <p className="null">null</p>
        )}
      </p>
      <p className="footer__github">
        {github ? (
          <a href={github}> Github Page </a>
        ) : (
          <p className="null">null</p>
        )}
      </p>
      <p className="footer__blog">
        {blog ? (
          <a href={blog}> Personal Site </a>
        ) : (
          <p className="null">null</p>
        )}
      </p>
    </div>
  );
};

export default CardFooter;
