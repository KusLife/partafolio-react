import React, { useState } from 'react';
import './Contact.css';
import Modal from './Modal';


export default function ContactFormValidation({formData,}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameValidationMsg, setNameValidationMsg] = useState('');
  const [nameLength, setNameLength] = useState(0);
  const [messageLength, setMessageLength] = useState(0);

  
  const FormValidation = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update name length and set message when name exceeds 40 characters
    if (name === 'name') {
      const length = value.length;
      const lengthLimit = 50;
      setNameLength(length);

      if (length === lengthLimit) {
        setNameValidationMsg("You've reached the maximum character limit.");
      } else if (length > 40) {
        setNameValidationMsg(`Left ${lengthLimit - length} character(s)`);
      } else {
        setNameValidationMsg('');
      }
    }

    // Auto-adjust textarea height
    if (name === 'message') {
      setMessageLength(value.length);
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation (min 3, max 50 characters)
    if (formData.name.length < 3) {
      setModalMessage('Name must be at least 3 characters long.');
      setIsModalOpen(true);
      return;
    }

    if (formData.name.length > 50) {
      setModalMessage('Name cannot be longer than 50 characters.');
      setIsModalOpen(true);
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage('Please fill out all fields.');
      setIsModalOpen(true);
      return;
    }

    // Check email format using a regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setModalMessage('Please enter a valid email address.');
      setIsModalOpen(true);
      return;
    }

    // Minimum message length check
    if (formData.message.length < 10) {
      setModalMessage('Message must be at least 10 characters long.');
      setIsModalOpen(true);
      return;
    }

    setModalMessage(`Thank You, ${formData.name}! We'll get in touch soon.`);
    setIsModalOpen(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Reset validation messages and character counts
    setNameValidationMsg('');
    setMessageLength(0);
    setNameLength(0); // Only if you have a length indicator for the name
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };





  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          {nameValidationMsg && (
            <span className="validation-message">{nameValidationMsg}</span>
          )}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={50}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <span className="char-count">{messageLength}/500</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </section>
  );
}
