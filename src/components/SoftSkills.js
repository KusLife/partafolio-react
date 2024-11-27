import React from 'react';
// import newYear from '../assets/pictures/newYear.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLanguage,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons';
import './SoftSkills.css';
import Carousel from './Carousel';

function SoftSkills() {
  return (
    <section className="soft-skills">
      <div className="soft-skills-container">
        {/* Intro Section */}
        <div className="soft-skills-section intro">
          <div className="soft-skills-tittle">
            <h2>My Social Activity</h2>
            <FontAwesomeIcon icon={faPersonChalkboard} className="icon" />
          </div>
          <div className="soft-skills-tittle-container">
            <div className="soft-skills-activities">
              <h3>What has been accomplished:</h3>
              <ul>
                <li>Coaching adults</li>
                <li>Teaching children</li>
                <li>Volunteering:</li>
              </ul>
              <a href="https://www.asvona.com/" target="blanc">
                {' '}
                <span className="link-text">&#x27A5; Asociación Asvona</span>
                <div className="progress-line"></div>
              </a>
              <a href="https://alasdeucrania.es/" target="blanc">
                {' '}
                <span className="link-text">&#x27A5; Alas de Ucrania</span>
                <div className="progress-line"></div>
              </a>
              <a href="https://www.instagram.com/ridna.shkola/" target="blanc">
                {' '}
                <span className="link-text">&#x27A5; Ridna Shkola</span>
                <div className="progress-line"></div>
              </a>
              <a
                href="https://www.pamplona.es/entidades/asociacion-berehynia"
                target="black"
              >
                <span className="link-text">&#x27A5; Asociación Berehynia</span>
                <div className="progress-line"></div>
              </a>
            </div>

            <div className="skillset">
              <h3>Responsibilities:</h3>
              <ul>
                <li>
                  Organization of classes <br /> and events
                </li>
                <li>
                  Communication <br /> and problem-solving
                </li>
                <li>
                  Maintaining and creating <br /> forms in Google Docs
                </li>
                <li>
                  Content creation and posting on <br /> Instagram, WhatsApp,
                  and YouTube
                </li>
                <li>Video editing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="soft-skills-section photo">
          {/* <img src={newYear} alt="Project 1 Thumbnail" /> */}
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
