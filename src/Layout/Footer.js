import React from "react";
import facebookImage from "../assests/Facebook Logo.png";
import spotifyImage from "../assests/Spotify Logo.png";
import youtubeImage from "../assests/Youtube.jpg";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="mainFooter">
      <span className="footerImage">The Generics</span>
      <div className="images">
        <a href="https://www.youtube.com/" target="blank">
          <img src={youtubeImage} alt="Youtube Logo" className="youtube" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <img src={spotifyImage} alt="Spotify logo" className="spotify" />
        </a>
        <a href="www.facebook.com">
          <img src={facebookImage} alt="Facebook Logo" className="facebook" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
