import React, { useEffect, useState, useRef } from 'react';
import './Header.css';

function Header() {
  const containerRef = useRef(null);

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

  return (
    <header>
      <div className="h1-container" ref={containerRef}>
        {allHidden ? (
          <h1 className="center-name">KYRYLO</h1>
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
      </div>
    </header>
  );
}

export default Header;
