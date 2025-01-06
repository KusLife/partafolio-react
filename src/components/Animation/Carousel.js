import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import onRNE from '../../assets/pictures/onRNE.jpg';
import ridnaShcola from '../../assets/pictures/RidnaShcola.jpg';
import newYear from '../../assets/pictures/newYear.jpg';
import sportGroup from '../../assets/pictures/sportGroup.jpg';
import sportGroupSala from '../../assets/pictures/sportGroupSala.jpg';
import ridnaShcolaVish from '../../assets/pictures/rshVish.jpg';
import intervew from '../../assets/pictures/intervew.jpg';
import { useLanguage } from '../../contexts/LanguageContext';
import './Carousel.css'; // CSS for styling

function Carousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: newYear, description: t.carousel.newYear, alt: 'New Year pic' },
    { src: intervew, description: t.carousel.intervew, alt: 'Street intervew' },
    {
      src: ridnaShcola,
      description: t.carousel.ridnaShcola,
      alt: 'Voluntaring',
    },
    {
      src: ridnaShcolaVish,
      description: t.carousel.ridnaShcolaVish,
      alt: 'Intervew on radio',
    },
    { src: sportGroup, description: t.carousel.sportGroup, alt: 'sport Group' },
    {
      src: sportGroupSala,
      description: t.carousel.sportGroupSala,
      alt: 'sport Group',
    },
    { src: onRNE, description: t.carousel.onRNE, alt: 'Intervew on radio' },
  ];

  // Auto-slide every 10 seconds

   // Memoize the handleNext function to prevent unnecessary re-renders
   const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="carousel-container">
      <button className="nav-btn left-btn" onClick={handlePrev}>
        ❮
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.5, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5, x: -100 }}
          transition={{ duration: 0.3 }}
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
