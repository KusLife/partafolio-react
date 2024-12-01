import React, { useState } from 'react';
import './LoaderAnimation.css';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Sending your message...</p>
    </div>
  );
}
