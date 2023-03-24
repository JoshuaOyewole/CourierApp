import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./_header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header container">
      <div className="left">
        <div className="info-item">
          <span className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <p className="address">42 Concord Way off Airport Road</p>
        </div>
        <div className="info-item">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <p className="tel">Tel: +234-700-CPLUSNG</p>
        </div>
        <div className="info-item">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <p className="email">Email: info@courierplus-ng.com</p>
        </div>
      </div>
      <div className="right">
        <div className="social-media-icons">
          <div className="social-media-icons link">
            
            <a href="https://facebook.com"  target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
          </div>
          <div className="social-media-icons link">
            <a href="https://twitter.com">
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
          </div>
          <div className="social-media-icons link">
            <a href="https://instagram.com">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
        <Link href="./track" className="btn primaryBtn">
          Track Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
