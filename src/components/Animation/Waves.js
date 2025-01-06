import React, { useState, useEffect } from 'react';
import './Waves.css'


// Simple function to generate random oscillations
function smoothNoise(seed, speed = 0.1) {
  return Math.sin(seed * speed) * 0.5 + Math.cos(seed * speed * 1.2) * 0.5;
}


export default function Waves() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [waveOffsets, setWaveOffsets] = useState([0, 0, 0]);

  useEffect(() => {
    let animationFrameId;
    const damping = 0.95; // damping factor for smooth stopping

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const animateWaves = () => {
      setWaveOffsets((offsets) =>
        offsets.map((offset, index) => {
          const speed = 0.05 + index * 0.02; // unique speed per wave
          const direction = index % 2 === 0 ? 1 : -1; // alternate directions
          const noiseFactor = smoothNoise(offset, speed);
          return offset * damping + direction * noiseFactor * mousePos.y * 0.1;
        })
      );

      animationFrameId = requestAnimationFrame(animateWaves);
    };

    document
      .querySelector('.about')
      .addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateWaves);

    return () => {
      document
        .querySelector('.about')
        .removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div className="wave-background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          transform: `translate(${waveOffsets[0] * 10}px, ${
            waveOffsets[0] * 5
          }px)`,
        }}
      >
        <path
          fill="#000000"
          d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,160C672,171,768,213,864,202.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,160L1440,171V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          transform: `translate(${waveOffsets[1] * 18}px, ${
            waveOffsets[1] * 4
          }px)`,
        }}
      >
        <path
          fill="#0099ff"
          fillOpacity="0.7"
          d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,48C420,75,480,149,540,149.3C600,149,660,75,720,85.3C780,96,840,192,900,234.7C960,277,1020,267,1080,250.7C1140,235,1200,213,1260,176C1320,139,1380,85,1410,58.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          transform: `translate(${waveOffsets[2] * 16}px, ${
            waveOffsets[2] * 3
          }px)`,
        }}
      >
        <path
          fill="#0099ff"
          fillOpacity="0.9"
          d="M0,32L30,74.7C60,117,120,203,180,197.3C240,192,300,96,360,96C420,96,480,192,540,218.7C600,245,660,203,720,160C780,117,840,75,900,58.7C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,202.7C1320,235,1380,245,1410,250.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
