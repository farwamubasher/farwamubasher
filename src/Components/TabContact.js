import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './TabContact.css';

const TabContact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:fmubasher08@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://github.com/farwamubasher" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/farwamubasher/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default TabContact;
