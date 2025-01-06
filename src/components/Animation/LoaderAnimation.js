import React  from 'react';
import './LoaderAnimation.css';

export default function Loader() {

  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Sending your message...</p>
    </div>
  );
}
