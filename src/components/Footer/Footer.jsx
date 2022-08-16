import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkdIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} alt="git" />
          <img src={Instagram} alt="insta" />
          <img src={LinkdIn} alt="linkdin" />
        </div>
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
    </div>
  );
};

export default Footer;
