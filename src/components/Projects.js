import React from 'react';
import tic_tac_toe from '../assets/pictures/tic_tac_toe.png';  
import sportApp from '../assets/pictures/sportApp.png';  
import amazonSite from '../assets/pictures/amazonSite.png'
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-thumbnail">
            <img
              src={tic_tac_toe}
              alt="Project Thumbnail"
              className="project-background"
            />
          </div>
          <div className="project-content">
            <h3>Tic Tac Toe GAME</h3>
            <ul className="project-technologies">
              <li>JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="project-buttons">
              {/* Try It Button */}
              <a
                href="https://kuslife.github.io/tic_tac_toe/"
                target="_blank"
                rel="noopener noreferrer"
                className="try-it-btn"
              >
                Try It
              </a>
              
              {/* Learn More Button */}
              <a
                href="https://github.com/KusLife/tic_tac_toe"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-btn"
              >
                Repository
              </a>
            </div>
          </div>
        </div>

        {/* Placeholder Cards */}
        <div className="project-card">
          <div className="project-thumbnail">
            <img
              src={sportApp}
              alt="Project Thumbnail"
              className="project-background"
            />
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumbnail">
            <img
              src={amazonSite}
              alt="Project Thumbnail"
              className="project-background"
            />
          </div>
          <div className="project-content">
            <h3>Amazon clone</h3>
            <ul className="project-technologies">
              <li>JS,HTML,CSS</li>
              <li>Jasmin tests</li>
              <li></li>
            </ul>
            <div className="project-buttons">
              {/* Try It Button */}
              <a
                href="https://kuslife.github.io/javascript-amazon-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="try-it-btn"
              >
                Visite site
              </a>
              {/* Learn More Button */}
              <a
                href="https://github.com/KusLife/javascript-amazon-project/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-btn"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
