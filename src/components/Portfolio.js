import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import Project from "./Project";

import Rcruit from "../assets/images/portfolio/rcruit.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import BlueTube from "../assets/images/portfolio/bluetube.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import RcruitModal from "../assets/images/portfolio/modals/m-rcruit.jpg";
import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg";
import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg";
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg";
import BlueTubeModal from "../assets/images/portfolio/modals/m-bluetube.jpg";
import GirlModal from "../assets/images/portfolio/modals/m-girl.jpg";
import OrigamiModal from "../assets/images/portfolio/modals/m-origami.jpg";
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Project
              route={"#modal-05"}
              pic={BlueTube}
              title={"BlueTube"}
              description={"Like YouTube but only sad videos are allowed"}
              modal={BlueTubeModal}
              id={"modal-05"}
              synopsis={"This is a cool YouTube clone I made to help me learn PHP. It handles video uploads as well as avatar photo uploads. Also has functionality for users to subscribe to channels, like or dislike videos, leave comments, like or dislike comments and search for and sort videos. Unfortunately, since I don't have the super cool job yet that you're looking to fill, you should stick to small file uploads if you want to test it out. It was pretty amazing moving on to Laravel after building this from scratch.. Haha"}
              tech={"Vanilla PHP, PDO, ffmpeg, Ajax, Jquery, Bootstrap"}
              url={"http://www.bluetube.site"}
              git={"https://github.com/willwinberg/bluetube-vanilla"}
            />
            <Project
              route={"#modal-01"}
              pic={Rcruit}
              title={"Rcruit"}
              description={"An employment app for matching job seekers with the jobs they want and employers with the qualified employees they need."}
              modal={RcruitModal}
              id={"modal-01"}
              synopsis={"Built in the MERN stack, an employment app for matching talent with the jobs they want and employers with the qualified employees they need. It utilizes a swipe interface where potential candidates and employers alike can filter through the fluff in an efficient and straightforward manner, eliminating the painstaking and tedious tasks of job searching or recruiting"}
              tech={"Node, React, MongoDB, Express, styled-components"}
              url={"http://www.rcruit.app"}
              git={"https://github.com/Lambda-School-Labs/CS8-jobme"}
            />
            <Project
              route={"#modal-02"}
              pic={Console}
              title={"Lambda Notes"}
              description={"A note-taking app built out with React, Redux, MongoDB and Express which features a scalable API and user authentication."}
              modal={ConsoleModal}
              id={"modal-02"}
              synopsis={"A note-taking app built out with React, Redux, MongoDB and Express which features a scalable API and user authentication"}
              tech={"Node, React, MongoDB, Express, Bootstrap"}
              url={"https://bills-notes.herokuapp.com/"}
              git={"https://github.com/willwinberg/notesapp"}
            />
            <Project
              route={"#modal-03"}
              pic={Judah}
              title={"whereami"}
              description={"A web app that uses you location to tell you what the season is."}
              modal={JudahModal}
              id={"modal-03"}
              synopsis={"This app makes use of the cool navigator.geolocation API and uses the latitude and longitude of the IP address of the user to predict the season of their hemesphere."}
              tech={"React, geolocation API, semantic-ui"}
              url={"https://seasons.netlify.com/"}
              git={"https://github.com/willwinberg/seasons"}
            />
            <Project
              route={"#modal-04"}
              pic={IntoTheLight}
              title={"CustomerMGMT"}
              description={"A web app for keeping track of customers' charge account balances."}
              modal={IntoTheLightModal}
              id={"modal-04"}
              synopsis={"This app uses a MySQL database to keep track of managers and their corresponding employees. A user may create, edit and delete an account. Also, they may andd employees to their account with details."}
              tech={"PHP, PDO, Jquery, Bootstrap"}
              url={"https://helloworldwide.tech/"}
              git={"https://github.com/willwinberg/cusmgmt"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
