import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import onRNE from '../assets/pictures/onRNE.jpg';
import ridnaShcola from '../assets/pictures/RidnaShcola.jpg';
import newYear from '../assets/pictures/newYear.jpg';
import sportGroup from '../assets/pictures/sportGroup.jpg';
import sportGroupSala from '../assets/pictures/sportGroupSala.jpg';
import ridnaShcolaVish from '../assets/pictures/rshVish.jpg';
import intervew from '../assets/pictures/intervew.jpg';
import './Carousel.css'; // CSS for styling

const images = [
  { src: newYear, description: "Happy New Year Hollidays", alt: 'New Year pic' },
  { src: intervew, description: 'An intervew about the situation in Ukraine. Voluntering association "Alas de Ucrania" 2023', alt: 'Street intervew' },
  { src: ridnaShcola, description: 'Voluntaring as a fisical activity couch with aproximate 50 children in "Ridna Shkola" ', alt: 'Voluntaring' },
  { src: ridnaShcolaVish, description: 'Preparing with the team and children cultural events "Ridna Shkola" 2023-2024', alt: 'Intervew on radio' },
  { src: sportGroup, description: 'Personal project of couching adults for more then a year. With voluntering association "Berehynia"', alt: 'sport Group' },
  { src: sportGroupSala, description: 'About 30 person in general was in the group. 2023-2024', alt: 'sport Group' },
  { src: onRNE, description: 'An intervew on radio. Voluntaring organosation "Alas de Ucrania" 2023', alt: 'Intervew on radio' },
];


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left-btn" onClick={handlePrev}>
          ❮
      </button>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="carousel-slide"
        >
        
          
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <p className="carousel-description">
            {images[currentIndex].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <button className="nav-btn right-btn" onClick={handleNext}>
          ❯
      </button>
    </div>
  );
}

export default Carousel;
