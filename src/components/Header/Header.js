import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { useLanguage } from '../../contexts/LanguageContext';

function Header() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [ , setShowName] = useState(false);
  const [ , setRestartFlow] = useState(false);
  

  const words = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Frontend',
    'Backend',
    'API',
    'Webpack',
    'Git',
    'Typescript',
    'Redux',
    'GraphQL',
  ];

  // Initialize the words with random positions and speeds
  const [wordPositions, setWordPositions] = useState(
    words.map(() => ({
      top: Math.random() * 80, // Random Y position within container height range (e.g., 0 to 80%)
      left: Math.random() * 100, // Start at a random position within the container
      speed: 0.15 + Math.random() * 1, // Random speed between 0.5 and 2.5
      hidden: false, // Initial hidden state is false
    }))
  );

  const [allHidden, setAllHidden] = useState(false);

  // Update each word's position independently
  useEffect(() => {
    const interval = setInterval(() => {
      setWordPositions((prevPositions) =>
        prevPositions.map((pos) => ({
          ...pos,
          left: pos.left < 100 ? pos.left + pos.speed : -10, // Reset position when it reaches the end
        }))
      );
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, []);

  // Check if all words are hidden and update allHidden state
  useEffect(() => {
    if (wordPositions.every((pos) => pos.hidden)) {
      setAllHidden(true);
    }
  }, [wordPositions]);

  // Handle hover event to hide the word
  const handleHover = (index) => {
    setWordPositions((prevPositions) =>
      prevPositions.map((pos, i) =>
        i === index ? { ...pos, hidden: true } : pos
      )
    );
  };

  // Manage showing the name and restarting words
  useEffect(() => {
    if (allHidden) {
      setShowName(true);

      const timeout = setTimeout(() => {
        setShowName(false);
        setAllHidden(false);
        setWordPositions(
          words.map(() => ({
            top: Math.random() * 80,
            left: Math.random() * 100,
            speed: 0.15 + Math.random() * 1,
            hidden: false,
          }))
        );
        setRestartFlow((prev) => !prev);
      }, 15000); // Show name for 10 seconds

      // Add fade-out effect after 8.5 seconds (before full timeout)
      const fadeTimeout = setTimeout(() => {
        document.querySelector('.center-name').classList.add('hidden');
      }, 11000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(fadeTimeout);
      };
    }
  }, [allHidden]);

  const [dots, setDots] = useState([]);

  // Generate random dots on mount
  useEffect(() => {
    const generateDots = () => {
      const dotArray = Array.from({ length: 45 }, () => ({
        x: Math.random() * 100, // Random X position (0-100%)
        y: Math.random() * 100, // Random Y position (0-100%)
        delay: Math.random() * 2, // Random animation delay (0-2s)
      }));
      setDots(dotArray);
    };

    generateDots();
  }, []);

  return (
    <header>
      <div className="h1-container" ref={containerRef}>
        {allHidden ? (
          <h1 className="center-name">{t.headerAnimationName}</h1>
        ) : (
          words.map((word, index) => (
            <span
              key={index}
              className={`moving-word ${
                wordPositions[index].hidden ? 'hidden' : ''
              }`}
              style={{
                left: `${wordPositions[index].left}%`,
                top: `${wordPositions[index].top}%`,
              }}
              onMouseEnter={() => handleHover(index)}
            >
              {word}
            </span>
          ))
        )}

        {/* Render twinkling dots */}
        {dots.map((dot, index) => (
          <span
            key={index}
            className="twinkling-dot"
            style={{
              top: `${dot.y}%`,
              left: `${dot.x}%`,
              animationDelay: `${dot.delay}s`,
            }}
          ></span>
        ))}
      </div>
    </header>
  );
}

export default Header;
