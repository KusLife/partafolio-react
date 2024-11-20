import React from 'react';
import tic_tac_toe from '../assets/pictures/tic_tac_toe.png'; // Replace with your image
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
          <div className="project-content">
            <p>Project 2</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <p>Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
