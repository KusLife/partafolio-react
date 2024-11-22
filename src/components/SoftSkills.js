import React from 'react';
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
          <h3>What has been accomplished:</h3>
          <div className="soft-skills-activities">
            <ul>
              <li>Coaching adults</li>
              <li>Teaching children</li>
              <li>Volunteering</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="soft-skills-section skillset">
          <FontAwesomeIcon icon={faCode} className="icon" />
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
              Content creation and posting on <br />  Instagram, WhatsApp, and
              YouTube
            </li>
            <li>Video editing</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="soft-skills-section projects">
          <h3>Social Projects</h3>
          <p>Organized community coding workshops to empower beginners.</p>
          <p>
            Volunteered as a mentor in educational programs for underprivileged
            youth.
          </p>
          <p>
            Led a team project promoting environmental awareness through tech
            solutions.
          </p>
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        </div>

        {/* Languages Section */}
        <div className="soft-skills-section languages">
          <FontAwesomeIcon icon={faLanguage} className="icon" />
          <h3>Languages</h3>
          <ul>
            <li>English - B2</li>
            <li>Spanish - B1 (DELE)</li>
            <li>Ukrainian - Fluent</li>
          </ul>
        </div>
      </div>

      {/* Background Waves */}
      <div className="soft-skills-background">
        {/* The background can be customized here */}
      </div>
    </section>
  );
}

export default SoftSkills;
