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
          <h3>Freelance</h3>
          <p className="info">
            Web Application Developer
            <span>&bull;</span>
            <em className="date">Mar 2023 - Present</em>
          </p>
          <li>Built an MVP (WIP) e-commerce platform for a small business complete with grants them full autonomy over their platform, as opposed to using a subscription service</li>
          <li>Building a CMS platform for a gym to manage its personal training clients which will massively reduce logistical work and improve communication/upselling</li>
          <li>Consult clients on frontend Vue architecture and development</li>
        </div>
      </div>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>StreamNative</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">Nov 2020 - Mar 2023</em>
          </p>
          <li>Developed a custom well-documented and tested UI library in collaboration with product designers’ specs to be used across multiple projects, resulting in a considerably more efficient, uniform and streamlined development flow for new features</li>
          <li>Refactored the entire customer facing Vue application into well defined/documented and tested modules resulting in much more pleasant and productive developer experience</li>
          <li>Put into place an extensive style/contribution guide to ensure code quality/uniformity among several contributors in evergrowing repositories cutting review time in half reducing repetitive/cumbersome change requests</li>
          <li>Built from scratch a CMS marketing site which allowed marketing teams to manage content independently, cutting turnaround time by 90% completely eliminating the need for engineers in the content development flow</li>
          <li>Leveraged Cypress to increase e2e test coverage from 0 to to 87% (component library 100%) drastically improving the continuous integration development cycle</li>
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
            <em className="date">Dec 2019 - Nov 2020</em>
          </p>
          <li>Took lead of the Vue frontend within 2 months of being hired</li>
          <li>Implemented, from server to client, support for 5 additional crypto exchanges resulting in a 60% increase in user onboarding completion</li>
          <li>Developed a user analytics and bug tracking system which areas for improvement and increased user retention by 28%</li>
          <li>Implemented a contribution/style guide which eliminated cumbersome merge conflicts</li>
          <li>Developed an application new-user walkthrough which resulted in a 3x increase in users completing account setup requirements</li>
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
            <em className="date">Mar 2019 - Feb 2020</em>
          </p>
          <li>Developed a feature to notify users of discounted shipping on orders which meet minimum requirements. This increased average order profit margin by 12% and “featured” item sales by 33%</li>
          <li>Integrated SMS notifications for customers to track their shipments which decreased support requests by 14% (40% when opted into)</li>
          <li>Developed a polymorphic “persisted shopping cart” feature to be used across three separate e-commerce applications resulting in a 24% increase in cart retention</li>
          <li>Built from scratch a task tracking web app to streamline feature/bug reporting between engineers and non-technical teams which cut requirement/detail gathering time by 80%</li>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
