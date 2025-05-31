import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black-100 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Contact Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold text-purple-500">Get in Touch</h3>
          <p className="text-gray-400 mt-2">I'd love to connect with you. Feel free to reach out!</p>
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
            <a href="mailto:vasu21aug@gmail.com" className="hover:text-purple-400 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-2">vasu21aug@gmail.com</span>
            </a>
            <a href="tel:+919304483367" className="hover:text-purple-400 transition duration-300">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-2">(+91) 93044 83367</span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-purple-500">Follow Me</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/vasu-nandan-9bb342257/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/phoenixvasu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com/phoenix_vasu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 md:mt-0">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Vasu Nandan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
