import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} KYRYLO All Rights Reserved.
        <span className="social-icons">
          <a
            href="https://github.com/KusLife"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kuslife"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/Kuslife"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </p>
    </footer>
  );
}
