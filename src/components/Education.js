import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lambda School</h3>
          <p className="info">
            Web Development and Computer Science
            <span>&bull;</span>
            <em className="date">August 2018</em>
          </p>

          <p>
            Lambda School is a full-time, 6-month online full
            stack coding school dedicated to teaching the most cutting-edge and
            in-demand technologies focused around JavaScript.
            Students will learn front end, back end, mobile, and
            neural network technologies. Their online classroom
            experience is the same as any physical classroom,
            live students, live instructors, full interaction,
            pair programming, and frequent code reviews. Their
            online, immersive format allows you to be connected
            to instructors at all times, chat with other students,
            or have someone instantly jump in to see your code.
            Lambda School is committed to helping students find
            employment by providing interview preparation, portfolio
            review, effective resume writing tips, and salary
            negotiation practice.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
