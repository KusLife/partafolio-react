import React from 'react';
import prof_pic from '../../assets/pictures/prof_pic.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
// import LanguageToggle from '../Lang/LanguageToggle';
import LanguagesSwither from '../Lang/Languages';
import Waves from '../Animation/Waves';
import './About.css';
import { useLanguage } from '../../contexts/LanguageContext';

function About() {
  const { t } = useLanguage();

  const educationListHtml = t.education.courses.map((curs, i) => <p key={i}>{curs}</p>);

  return (
    <section className="about">
      <div className="about-container">
        {/* Part 1: Intro */}
        <div className="about-section intro">
          <div className="profile-pic-frame">
            <img src={prof_pic} alt="Your Name" className="profile-pic" />
          </div>
          <h2 className='about-name'>{t.about.title}</h2>
          <p>{t.about.description}</p>
        </div>

        {/* Part 2: Core Skills */}
        <div className="about-section skills">
          <FontAwesomeIcon icon={faCode} className="about-icons" />
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
          <h3>{t.education.header}</h3>
          {educationListHtml}
          <FontAwesomeIcon icon={faGraduationCap} className="about-icons" />
        </div>

        {/* Part 4: Languages */}
        <div className="about-section languages">
          <FontAwesomeIcon icon={faLanguage} className="about-icons" />
          <LanguagesSwither />
        </div>
      </div>

      <Waves />
    </section>
  );
}

export default About;
