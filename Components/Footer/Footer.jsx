import React from "react";
import "./Footer.css";
import flio from "../../assets/flio.svg";
import user_icon from "../../assets/user_icon.svg";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={flio} alt="" />
          <p>I am a technician specialized in software and web development.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input placeholder="Enter your Email" type="email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @2024 Christophe Herman. All rights
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services </p>
          <p>Privacy & Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
