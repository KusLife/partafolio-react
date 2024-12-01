import React, { useState } from 'react';
import { FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './SocialMediaWidget.css';

const SocialMediaWidget = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null); // Track which icon is hovered

  const socialMedia = [
    { name: 'Download CV', icon: <FaFileAlt />, url: '/path/to/your-cv.pdf' },
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

  return <div className="social-media-widget">{widgets}</div>;
};

export default SocialMediaWidget;
