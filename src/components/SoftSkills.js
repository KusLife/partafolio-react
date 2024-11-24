import React from 'react';
import newYear from '../assets/pictures/newYear.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLanguage,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons';
import './SoftSkills.css';

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
                <li>Volunteering</li>
              </ul>
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
          <img src={newYear} alt="Project 1 Thumbnail" />
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
