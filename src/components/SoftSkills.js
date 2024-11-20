import React from 'react';
import profPic from '../assets/pictures/prof_pic.JPEG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faLanguage } from '@fortawesome/free-solid-svg-icons';
import './SoftSkills.css';

function SoftSkills() {
  return (
    <section className="soft-skills">
      <div className="soft-skills-container">
        {/* Intro Section */}
        <div className="soft-skills-section intro">
           
          <h2>Hi, I'm Kyrylo (or Kyro)</h2>
          <p>
            Passionate about growth and contributing to impactful projects, both individually and within teams.
          </p>
        </div>

        {/* Skills Section */}
        <div className="soft-skills-section skillset">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3>Key Soft Skills</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Problem-Solving</li>
            <li>Adaptability</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="soft-skills-section projects">
          <h3>Social Projects</h3>
          <p>Organized community coding workshops to empower beginners.</p>
          <p>Volunteered as a mentor in educational programs for underprivileged youth.</p>
          <p>Led a team project promoting environmental awareness through tech solutions.</p>
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
