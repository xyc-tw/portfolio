import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
      <div className="footerContainer">
        <div>
          <a href="#home">
            <FontAwesomeIcon icon={faAngleUp} className="connectIcon" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/hsinyu.chen.18/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="connectIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hsinyu-chen-4b43b489/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="connectIcon" />
          </a>
          <a href="https://github.com/xyc-tw" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="connectIcon" />
          </a>
        </div>
        <hr />
        <div className="copyRight">
          <p>© 2022 Hsinyu Chen</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
