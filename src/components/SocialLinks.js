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
      <a href="https://github.com/Mehrunes-Dagon" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="linkedin.com/in/william-winberg" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/william.winberg.3" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/wiltraparberg" target="_blank">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
