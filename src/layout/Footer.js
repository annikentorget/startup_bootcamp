import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className=" footer container-fluid">
      <div className="container row">
        <div className="icons col">
            <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
        <div className="footer-text col">
          <p>annikentorget@gmail.com</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
