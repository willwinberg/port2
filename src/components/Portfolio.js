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
              id={"#modal-01"}
              pic={Coffee}
              title={"Rcruit"}
              description={"An employment app for matching job seekers with the jobs they want and employers with the qualified employees they need."}
              modal={CoffeeModal}
              synopsis={"Built in the MERN stack, an employment app for matching talent with the jobs they want and employers with the qualified employees they need. It utilizes a swipe interface where potential candidates and employers alike can filter through the fluff in an efficient and straightforward manner, eliminating the painstaking and tedious tasks of job searching or recruiting"}
              tech={"Node, React, MongoDB, Express, styled-components"}
              url={"http://www.rcruit.app"}
              git={"https://github.com/Lambda-School-Labs/CS8-jobme"}
            />
            <Project
              id={"#modal-02"}
              title={"Lambda Notes"}
              description={"A note-taking app built out with React, Redux, MongoDB and Express which features a scalable API and user authentication."}
              pic={Console}
              synopsis={"A note-taking app built out with React, Redux, MongoDB and Express which features a scalable API and user authentication"}
              tech={"Node, React, MongoDB, Express, Bootstap"}
              url={"https://bills-notes.herokuapp.com/"}
              git={"https://github.com/Mehrunes-Dagon/notesapp"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
