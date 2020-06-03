import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>PassiveCrypto</h3>
          <p className="info">
            Software Developer
            <span>&bull;</span>
            <em className="date">November 2019 - Present</em>
          </p>

          <li>Made partner within three months of being hired</li>
          <li>Design, implement and develop new features to the codebase as well as improve existing code</li>
          <li>Involved in all phases and steps in the software development life-cycle: requirements, design, implementation, testing and improving</li>
          <li>Work as a team adhering to agile and scrum philosophies as well as solo</li>

        </div>
      </div>
    </div>
    <div className="nine columns main-col" style={{marginTop: '2em'}}>
      <div className="row item">
        <div className="twelve columns">
          <h3>G.O. Green Enterprises</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">March 2019 - November 2019</em>
          </p>

          <li>Preparing existing platform for massive consolidation and integrating several apps in to one source of truth</li>
          <li>Visualize, design, and develop creative and innovative upgrades to the massive code base, being sure that changes are scalable, efficient, well reviewed and checked regularly for continuous integration</li>
          <li>Examine existing systems, identifying flaws and creating solutions to improve customer and employee experience</li>
          <li>Plan and execute the full software development life cycle for each assigned project, adhering to company standards and expectations</li>

        </div>
      </div>
    </div>
  </div>
);

export default Work;
