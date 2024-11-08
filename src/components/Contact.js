import React, { useState } from 'react';
import './Contact.css';
import Modal from './Modal';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contacts">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </section>
  );
}
