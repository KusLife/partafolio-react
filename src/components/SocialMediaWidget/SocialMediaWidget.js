import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './SocialMediaWidget.css';

const SocialMediaWidget = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // Track which icon is hovered
  const { t } = useLanguage();

  const socialMedia = [
    {
      name: t.socialMediaTooltip.cv,
      icon: <FaFileAlt />,
      fileName: 'Sierbinov_Kyrylo_CV.pdf',
      url: '/Sierbinov_Kyrylo_CV.pdf',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/kuslife',
    },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/KusLife' },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/Kuslife',
    },
  ];

  const widgets = socialMedia.map((platform, index) => (
    <a
      href={platform.url}
      rel="noopener noreferrer"
      className="social-link social-media-icon"
      target="blank"
      download={platform.fileName || null}
      key={index}
      onMouseEnter={() => setHoveredIcon(platform.name)}
      onMouseLeave={() => setHoveredIcon(null)}
    >
      {platform.icon}
      {hoveredIcon === platform.name && (
        <span className="tooltip">{platform.name}</span>
      )}
    </a>
  ));

  useEffect(() => {
    const widgets = document.querySelector('.social-media-widget');
    const importantSection = document.querySelector('.skillset');

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Ensure widgets remain fixed on larger screens
        widgets.classList.remove('stuck');
        return;
      }

      // Check if widgets are near the bottom of the important content
      const widgetsHeight = widgets.offsetHeight;
      const viewportHeight = window.innerHeight;
      const contentBottom = importantSection.getBoundingClientRect().top;

      // Add or remove the 'stuck' class based on scroll position
      widgets.classList.toggle(
        'stuck',
        contentBottom < viewportHeight - widgetsHeight
      );
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    // Clean up on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="social-media-widget">{widgets}</div>;
};

export default SocialMediaWidget;
