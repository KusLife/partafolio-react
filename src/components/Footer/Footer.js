import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const {t} = useLanguage()
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()}{t.footer.copirite}
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
