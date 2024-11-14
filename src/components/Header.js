import React, { useEffect, useState, useRef } from 'react';
import './Header.css';

function Header() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const h1X = position.x;
      const h1Y = position.y;
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      const pushDistance = 50; // Minimum distance to start pushing

      // Calculate the distance between the mouse and `h1`
      const distanceX = mouseX - h1X;
      const distanceY = mouseY - h1Y;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // Push `h1` away if the pointer is within `pushDistance`
      if (distance < pushDistance) {
        // Calculate push direction by normalizing the distance
        const angle = Math.atan2(distanceY, distanceX);
        const pushX = Math.cos(angle) * pushDistance;
        const pushY = Math.sin(angle) * pushDistance;

        // New position with bounds checking
        const newX = Math.min(
          Math.max(h1X - pushX, 0),
          containerRect.width - 100 // Adjust for `h1` size
        );
        const newY = Math.min(
          Math.max(h1Y - pushY, 0),
          containerRect.height - 40 // Adjust for `h1` size
        );

        setPosition({ x: newX, y: newY });
      }
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [position]);

  return (
    <header className="header">
      <div className="h1-container" ref={containerRef}>
        <h1
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          KYRYLO
        </h1>
      </div>
    </header>
  );
}

export default Header;
