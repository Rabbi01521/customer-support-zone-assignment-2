import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons/faSquareLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto text-gray-200 border-b-2 border-gray-300 py-8 px-5">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <h1 className="mb-3 text-xl lg:text-xl">CS — Ticket System</h1>
            <p className="text-xs md:pr-0 lg:pr-50">
              Your dedicated platform for managing customer requests. From
              initial submission to final resolution, this system ensures every
              customer ticket is tracked, categorized, and resolved effectively.
            </p>
          </div>

          <div className="lg:flex md:grid md:grid-cols-2 md:gap-5">
            <div className="lg:px-5  mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Company</h2>
              <ul>
                <li>
                  <a className="text-xs" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Contact Saled
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Services</h2>
              <ul>
                <li>
                  <a className="text-xs " href="#">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Download Apps
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Information</h2>
              <ul>
                <li>
                  <a className="text-xs" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">
                Social Links
              </h2>
              <ul>
                <li>
                  <a className="text-xs items-center" href="#">
                   <FontAwesomeIcon icon={faTwitter} /> @CS — Ticket System{" "}
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                   <FontAwesomeIcon icon={faSquareLinkedin} /> @CS — Ticket System
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                   <FontAwesomeIcon icon={faSquareFacebook} /> @CS — Ticket System
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                    <FontAwesomeIcon icon={faEnvelope} /> support@cst.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <span className="text-gray-400 text-xs font-light lg:text-sm md:text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
