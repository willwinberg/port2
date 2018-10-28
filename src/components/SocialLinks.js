import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:wtpwinberg@gmail.com">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a href="https://github.com/Mehrunes-Dagon">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="linkedin.com/in/william-winberg">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/william.winberg.3">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/wiltraparberg/">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
