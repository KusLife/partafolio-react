import React from 'react';
import tic_tac_toe from '../../assets/pictures/tic_tac_toe.png';
import sportApp from '../../assets/pictures/sportApp.png';
import amazonSite from '../../assets/pictures/amazonSite.png';
import { useLanguage } from '../../contexts/LanguageContext';
import './Projects.css';

function Projects() {
  const { t } = useLanguage();

  return (
    <section className="projects-section">
      <h2>{t.projects.header}</h2>
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
            <h3>{t.ticTacToe.header}</h3>
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
                {t.ticTacToe.tryItBtn}
              </a>

              {/* Learn More Button */}
              <a
                href="https://github.com/KusLife/tic_tac_toe"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-btn"
              >
                {t.ticTacToe.repoBtn}
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

          <div className="project-content">
            <h3>{t.sportNoteBook.header}</h3>
            {/* <ul className="project-technologies">
              <li>JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul> */}
            <div className="project-buttons">
              {/* Try It Button */}
              {/* <a
                href="https://kuslife.github/"
                target="_blank"
                rel="noopener noreferrer"
                className="try-it-btn"
              >
              {t.sportNoteBook.tryItBtn}

              </a> */}

              {/* Learn More Button */}
              <a
                href="https://www.figma.com/design/xhkuGL4clVIbOAlfUTW0HQ/ProSport?node-id=0-1&t=PZ5AZyVTyRwFpWxr-1"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-btn"
              >
                {t.sportNoteBook.repoFigmaBtn}
              </a>
            </div>
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
            <h3>{t.amazonClone.header}</h3>
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
                {t.amazonClone.tryItBtn}
              </a>
              {/* Learn More Button */}
              <a
                href="https://github.com/KusLife/javascript-amazon-project/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-btn"
              >
                {t.amazonClone.repoBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
