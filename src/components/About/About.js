import React from 'react';
import prof_pic from '../../assets/pictures/prof_pic.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
// import LanguageToggle from '../Lang/LanguageToggle';
import Languages from '../Lang/Languages';
import Waves from '../Animation/Waves';
import './About.css';
import { useLanguage } from '../../contexts/LanguageContext';

function About() {
  const { t } = useLanguage();
  return (
    <section className="about">
      <div className="about-container">
        {/* Part 1: Intro */}
        <div className="about-section intro">
          <div className="profile-pic-frame">
            <img src={prof_pic} alt="Your Name" className="profile-pic" />
          </div>
          <h2>{ t.about.title }</h2>
          <p>{ t.about.description}</p>
        </div>

        {/* Part 2: Core Skills */}
        <div className="about-section skills">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Skills</h3>
          <ul>
            <li>CSS & HTML</li>
            <li>JavaScript & React</li>
            <li>Responsive Design</li>
            <li>Node.js, Git, VSCode</li>
            <li>Figma, WordPress, GPT & AIs</li>
          </ul>
        </div>

        {/* Part 3: Experience & Education */}
        <div className="about-section experience">
          <h3>Experience & Education</h3>
          <p>2022 Completed Online Courses</p>
          <p>Self-Taught</p>
          <p>Project-Based Experience</p>
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        </div>

        {/* Part 4: Languages */}
        <div className="about-section languages">
          <FontAwesomeIcon icon={faLanguage} className="icon" />
          <Languages />
          {/* <LanguageToggle/> */}
          {/* <h3>Languages</h3>
          <ul>
            <li>English - B2</li>
            <li>Spanish - B1 (DELE)</li>
            <li>Ukrainian - Fluent</li>
          </ul> */}
        </div>
      </div>

      <Waves />
    </section>
  );
}

export default About;