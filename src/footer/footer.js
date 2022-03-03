import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="countainer-fluid bg-dark m-0">
        <div className="row m-0 text-white">
          <div className="col-4 my-5 text-center">
            <p>GET IN TOUCH</p>
            <div>
              <p>
                <i  className="fa-solid fa-envelope mx-2"></i>
                davidzaki77@gmail.com
              </p>
              <p>
                <i  className="fas fa-phone mx-2"></i>
                717-355-743
              </p>
            </div>
          </div>

          <div className="col-4 my-5 text-center">
            <a
              href="mailto:davidzaki77@gmail.com"
              className="btn btn-dark btn-outline-light m-3"
              role="button"
            >
              Contact Me
            </a>
          </div>

          <div className="col-4 my-5 text-center">
            <a href="#" className="text-decoration-none link-light">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#" className="text-decoration-none link-light">
              <i className="fab fa-instagram-square mx-1"></i>
            </a>
            <a href="#" className="text-decoration-none link-light">
              <FontAwesomeIcon
                className="mx-1 text-light"
                icon={["fab", "instagram"]}
              />
            </a>
            <a href="#" className="text-decoration-none link-light">
              <FontAwesomeIcon
                className="mx-1 text-light"
                icon={["fab", "github"]}
              />
            </a>
            <p>copy right &copy; 2022 KR</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
