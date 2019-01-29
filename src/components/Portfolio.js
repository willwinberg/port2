import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";
import Project from "./Project";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg";
import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg";
import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg";
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg";
import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy.jpg";
import GirlModal from "../assets/images/portfolio/modals/m-girl.jpg";
import OrigamiModal from "../assets/images/portfolio/modals/m-origami.jpg";
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Project
              route={"#modal-01"}
              pic={Coffee}
              title={"Rcruit"}
              description={"An employment app for matching job seekers with the jobs they want and employers with the qualified employees they need."}
              modal={CoffeeModal}
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
              git={"https://github.com/Mehrunes-Dagon/notesapp"}
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
              git={"https://github.com/Mehrunes-Dagon/seasons"}
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
              git={"https://github.com/Mehrunes-Dagon/cusmgmt"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
