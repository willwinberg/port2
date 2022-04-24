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
          <h3>StreamNative</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">Feb 2021 - Present</em>
          </p>
          <li>Modularized the entire customer facing application into a custom component library leveraging Vue SFCs and Vuex, while swapping over to Vue 3/Composition API</li>
          <li>Built from scratch a Gridsome marketing site that leverages Netlify CMS for marketing teams to manage content without the need for developers' time</li>
          <li>Put in to place an extensive style guide and employed TypeScript and ESLint to ensure quality in a growing repositories with several contributors</li>
          <li>Collaborate closely with other engineers and marketing personnel alike to deliver quality solutions to problems, adapting to rapidly evolving needs</li>
        </div>
      </div>
    </div>

    <div className="nine columns main-col pull-right" style={{marginTop: '2em'}}>
      <div className="row item">
        <div className="twelve columns">
          <h3>PassiveCrypto</h3>
          <p className="info">
            Software Developer
            <span>&bull;</span>
            <em className="date">November 2019 - Feb 2021</em>
          </p>
          <li>Made partner within three months of being hired</li>
          <li>Leveraged Vue/Vuex/Tailwind to build an intuitive single page application for users to manage their crypto auto rebalancing</li>
          <li>Implement from start to finish the integration of rebalancing support for additional crypto exchanges</li>
          <li>Involved in all phases and steps in the software development life-cycle: requirements, design, implementation, testing and improving</li>
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
          <li>Built from scratch (Nuxt/Node/Mongo) a custom task management app to be use internally by engineers and non-technical management alike</li>
          <li> Preparing existing platforms for massive consolidation and integrating several Laravel apps in to one source of truth with custom composer packages</li>
          <li>Visualize, design, and develop new ecommerce features, being sure that changes are scalable, efficient, well reviewed and continuously integrated</li>
          <li>Examine existing systems, identifying flaws and creating solutions to improve customer and employee experience</li>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
