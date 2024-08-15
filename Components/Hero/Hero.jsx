import React from "react";
import Frame from "../../assets/Frame.svg";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="Home" className="hero">
      <img src={Frame} alt="" />
      <h1>
        <span>I'm Christophe Herman,</span> based in Morocco
      </h1>
      <p>I'm a Full stack Developper from Central African</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#Contacts">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
