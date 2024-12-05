import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Languages.css'

const Languages = () => {
  const { t, switchLanguage } = useLanguage();

  return (
    <div className="about-section languages">
      <h3>{t.languages.header}</h3>
      <ul>
        <li>
          <label className="toggle-switch">
            <input
              type="radio"
              name="language"
              onClick={() => switchLanguage('en')}
              defaultChecked
            />
            <span className="slider"></span>
          </label>
          {t.languages.english}

        </li>
        <li>
          <label className="toggle-switch">
            <input
              type="radio"
              name="language"
              onClick={() => switchLanguage('es')}
              defaultChecked
            />
            <span className="slider"></span>
          </label>
          {t.languages.spanish}

        </li>
        <li>
          <label className="toggle-switch">
            <input
              type="radio"
              name="language"
              onClick={() => switchLanguage('ua')}
              defaultChecked
            />
            <span className="slider"></span>
          </label>
          {t.languages.ukrainian}

        </li>
      </ul>
    </div>
  );
};

export default Languages;
