import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Omar Mahmoud
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/omar-mahmoud-b70063163/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/omar3060" target="_blank">
          <FaGithub />
        </a>
        <a href="#" target="_blank">
          <FaFacebook />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; <a href="#">Omar Mahmoud</a> All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
