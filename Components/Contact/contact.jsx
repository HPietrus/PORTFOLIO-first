import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8a6024c7-aa8d-423a-b8f1-8c9663316874");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("success", res);
    }
    alert(res.message);
  };

  return (
    <div id="Contacts" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to let
            me know about anything you want me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>alldjimch@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+212 77-3766-538</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Casablanca, Morocco</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Your Email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
