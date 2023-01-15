import { Flex } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function Footer() {
  return (
    <Flex mt="3rem" alignItems="flex-start">
      <a
        target="_blank"
        className="social-media-icon"
        rel="noopener"
        href="https://linkedin.com/in/nicholasdieke/"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        className="social-media-icon"
        rel="noopener"
        href="https://github.com/nicholasdieke"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="mailto:nicholasdieke@icloud.com?subject=Hello!"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </Flex>
  );
}

export default Footer;
