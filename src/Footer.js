import { Flex } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function Footer() {
  let mobile = window.innerWidth <= 425;
  console.log(window.innerWidth);
  return (
    <Flex mt="1rem" alignItems="flex-start">
      <a
        target="_blank"
        className="social-media-icon"
        rel="noopener"
        href="https://linkedin.com/in/nicholasdieke/"
        aria-label="LinkedIn"
      >
        {mobile && <FontAwesomeIcon icon={faLinkedin} size="2x" />}
        {!mobile && <FontAwesomeIcon icon={faLinkedin} size="lg" />}
      </a>
      <a
        target="_blank"
        className="social-media-icon"
        rel="noopener"
        href="https://github.com/nicholasdieke"
        aria-label="GitHub"
      >
        {mobile && <FontAwesomeIcon icon={faGithub} size="2x" />}
        {!mobile && <FontAwesomeIcon icon={faGithub} size="lg" />}
      </a>
      <a
        target="_blank"
        rel="noopener"
        className="social-media-icon"
        href="mailto:nicholasdieke@icloud.com?subject=Hello!"
        aria-label="Email"
      >
        {mobile && <FontAwesomeIcon icon={faEnvelope} size="2x" />}
        {!mobile && <FontAwesomeIcon icon={faEnvelope} size="lg" />}
      </a>
    </Flex>
  );
}

export default Footer;
