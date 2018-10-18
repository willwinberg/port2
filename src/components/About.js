import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm a full stack software engineer from LA, transplanted in the PNW.
          From layouts to sever endpoints, I love building and learning new
          things. When I'm not in cyberspace, you'll still usually find me
          creating things or soaking in the infinite knowledge of this universe
          in one way or another. That is, unless I'm destroying things, but
          that's back in cyberspace... Just to clarify, I'm talking about video
          games.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>William Winberg</span>
              <br />
              <span>
                Portland Area
              </span>
              <br />
              <span>(626)824-4181</span>
              <br />
              <span>wtpwinberg@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
