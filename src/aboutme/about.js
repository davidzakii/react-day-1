import React from "react";

class AboutMe extends React.Component {
  constructor() {
      super()
  }

  render() {
    return (
      <div className="row mx-0 my-5">
        <div className="col-4 ">
          <p className="fs-3 fw-3  d-flex justify-content-center" id="shadow">
            About Me
          </p>
        </div>
        <div className="col-8 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            iure praesentium odio earum nesciunt ullam maxime. Temporibus, vel
            accusantium sit odit harum commodi consectetur. Adipisci optio
            blanditiis fugit suscipit velit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero, iure praesentium odio earum
            nesciunt ullam maxime. Temporibus, vel accusantium sit odit harum
            commodi consectetur. Adipisci optio blanditiis fugit suscipit velit!
          </p>
          <a
            href="http://localhost:3000"
            download="My CV David Zaki"
            className="btn btn-dark text-white btn-outline-dark"
            role="button"
          >
            Download file
          </a>
        </div>
      </div>
    );
  }
}
export default AboutMe;
