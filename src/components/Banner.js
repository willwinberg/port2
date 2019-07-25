import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm William Winberg.</h1>
      <h3>
        I'm a <span>software developer</span>. From responsive UIs to sever endpoints, I love building
        and learning new things... Start scrolling and learn more about me.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
