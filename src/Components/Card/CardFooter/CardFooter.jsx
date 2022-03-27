import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

const CardFooter = ({ location, twitter, github, blog }) => {
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="footer__location">
          {location ? (
            <p>
              {" "}
              <GoLocation /> {location}{" "}
            </p>
          ) : (
            <p className="null">
              {" "}
              <GoLocation /> Not Available
            </p>
          )}
        </div>
        <div className="footer__twitter">
          {twitter ? (
            <p>
              {" "}
              <BsTwitter /> {twitter}{" "}
            </p>
          ) : (
            <p className="null">
              <BsTwitter /> Not Available
            </p>
          )}
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__github">
          {github ? (
            <a href={github}>
              <BsGithub /> <span>Github Page</span>{" "}
            </a>
          ) : (
            <p className="null">
              <BsGithub /> Not Available
            </p>
          )}
        </div>
        <div className="footer__blog">
          {blog ? (
            <a href={blog}>
              {" "}
              <MdWeb /> <span>Personal Site</span>{" "}
            </a>
          ) : (
            <p className="null">
              {" "}
              <MdWeb /> Not Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
