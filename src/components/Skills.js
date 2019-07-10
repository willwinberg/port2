import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="twelve main-col">
      <p>
        I am a full-stack developer well versed in the MERN stack as well as many other languages, technologies and frameworks.
      </p>

      <div className="skill-tables">
        <div className="bars">
          <ul className="skills">
            <li>
              <span className="bar-expand javascript" />
              <em>PHP</em>
            </li>
            <li>
              <span className="bar-expand react" />
              <em>Laravel</em>
            </li>
            <li>
              <span className="bar-expand react" />
              <em>SQL</em>
            </li>
            <li>
              <span className="bar-expand mongodb" />
              <em>Vue</em>
            </li>
            <li>
              <span className="bar-expand mongodb" />
              <em>MongoDB</em>
            </li>
            <li>
              <span className="bar-expand css" />
              <em>CSS3</em>
            </li>
            <li>
              <span className="bar-expand html5" />
              <em>HTML5</em>
            </li>
          </ul>
        </div>
        <div className="bars">
          <ul className="skills">
            <li>
              <span className="bar-expand javascript" />
              <em>Javascript</em>
            </li>
            <li>
              <span className="bar-expand react" />
              <em>React</em>
            </li>
            <li>
              <span className="bar-expand react" />
              <em>Express</em>
            </li>
            <li>
              <span className="bar-expand mongodb" />
              <em>Nodejs</em>
            </li>
            <li>
              <span className="bar-expand mongodb" />
              <em>MongoDB</em>
            </li>
            <li>
              <span className="bar-expand css" />
              <em>CSS3</em>
            </li>
            <li>
              <span className="bar-expand html5" />
              <em>HTML5</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
