import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faGraduationCap,
  faLanguage,
  faPersonChalkboard,
} from '@fortawesome/free-solid-svg-icons';
import Carousel from '../Animation/Carousel';
import { useLanguage } from '../../contexts/LanguageContext';
import './SoftSkills.css';

function SoftSkills() {
  const { t } = useLanguage();

  const achievementsListHtml = t.achievements.activities.map((act, i) => {
    return <li key={i}>{act}</li>;
  });

  const responsibilitiesListHtml = t.responsibilities.activities.map(
    (item, i) => <li key={i}>{item}</li>
  );

  return (
    <section className="soft-skills">
      <div className="soft-skills-container">
        {/* Intro Section */}
        <div className="soft-skills-section intro">
          <div className="soft-skills-title">
            <h2>{t.mySocialActivity.header}</h2>
            <FontAwesomeIcon icon={faPersonChalkboard} className="icon" />
          </div>

          <div className="soft-skills-title-container">
            {/* Activities Section */}
            <div className="soft-skills-activities">
              <h3>{t.achievements.header}</h3>
              <ul>{achievementsListHtml}</ul>

              {/* Volunteer Links */}
              <a
                href="https://www.asvona.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-text">
                  &#x27A5; {t.achievements.links.asvona}
                </span>
                <div className="progress-line"></div>
              </a>

              <a
                href="https://alasdeucrania.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-text">
                  &#x27A5; {t.achievements.links.alas}
                </span>
                <div className="progress-line"></div>
              </a>

              <a
                href="https://www.instagram.com/ridna.shkola/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-text">
                  &#x27A5; {t.achievements.links.ridna}
                </span>
                <div className="progress-line"></div>
              </a>

              <a
                href="https://www.pamplona.es/entidades/asociacion-berehynia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="link-text">
                  &#x27A5; {t.achievements.links.berehynia}
                </span>
                <div className="progress-line"></div>
              </a>
            </div>

            {/* Responsibilities Section */}
            <div className="skillset">
              <h3>{t.responsibilities.header}</h3>
              <ul>{responsibilitiesListHtml}</ul>
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="soft-skills-section photo">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
