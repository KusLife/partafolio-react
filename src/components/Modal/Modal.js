import React from 'react';
import './Modal.css';

export default function Modal({ message, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className='modal-message'>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
