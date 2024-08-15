import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Frame from "../../assets/Frame.svg";
import "./About.css";

const About = () => {
  return (
    <div id="About Me" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Frame} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a technician specializing in web development.</p>

            <p>
              My passion for the web is not limited to web development, but
              extends far beyond that.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p> HTML & CSS</p> <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p> JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p> REACT JS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
