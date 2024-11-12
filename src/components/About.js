import React from 'react';
import prof_pic from '../assets/pictures/prof_pic.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCode,
  faGraduationCap,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <section className="about">
      {/* Part 1: Intro */}
      <div className="about-section intro">
        <img src={prof_pic} alt="Your Name" className="profile-pic" />
        <h2>Hi, I'm Kyrylo but you may call me just Kyro</h2>
        <p>
          A passionate Frontend Developer with a love for creating seamless user
          experiences.
        </p>
      </div>

      {/* Part 2: Core Skills */}
      <div className="about-section skills">
        <FontAwesomeIcon icon={faCode} className="icon" />
        <h3>Skills</h3>
        <ul>
          <li>JavaScript & React</li>
          <li>CSS & HTML</li>
          <li>Responsive Design</li>
          <li>Node.js, Git, Figma</li>
        </ul>
      </div>

      {/* Part 3: Experience & Education */}
      <div className="about-section experience">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        <h3>Experience & Education</h3>
        <p>Online courses</p>
        <p>Selfdeddacting</p>
        <p>Personal projects</p>
      </div>

      {/* Part 4: Languages */}
      <div className="about-section languages">
        <FontAwesomeIcon icon={faLanguage} className="icon" />
        <h3>Languages</h3>
        <ul>
          <li>English - B2</li>
          <li>Spanish - B1 (DELE)</li>
          <li>Ukrainian - Fluent</li>
          {/* Add more languages as needed */}
        </ul>
      </div>

       {/* 3D Wave Background */}
       <div className="wave-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0073e6" d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,160C672,171,768,213,864,202.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,160L1440,171V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
