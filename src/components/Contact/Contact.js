import React, { useState } from 'react';
import './Contact.css';
import Modal from '../Modal/Modal';
import Loader from '../Animation/LoaderAnimation';
import { sendEmail } from '../../assets/services/ContactService';
import { validateFormData } from '../../assets/services/FormValidation';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Contact() {
  const {t} = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameValidationMsg, setNameValidationMsg] = useState('');
  const [ , setNameLength] = useState(0);
  const [messageLength, setMessageLength] = useState(0);

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage('Please fill out all fields.');
      setIsModalOpen(true);
      return;
    }

    // Validate form data using the service
    const { isValid, errors } = validateFormData(formData);

    if (!isValid) {
      const { nameError, emailError, messageError } = errors;
      setModalMessage(nameError || emailError || messageError);
      setIsModalOpen(true);
      return;
    }

    setLoading(true);

    // API request to email
    try {
      await sendEmail(formData);
      setModalMessage(`Thank You, ${formData.name}! We'll get in touch soon.`);
      setIsModalOpen(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send message:', error); // Log error
      setModalMessage(
        `Failed to send message. Please try again later, ${formData.name}.`
      );
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }

    // Reset validation messages and character counts
    setNameValidationMsg('');
    setMessageLength(0);
    setNameLength(0);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact">
      <h2>{t.contactFoem.header} <a className='contactSection-header'>
      kyryloficial@gmail.com</a></h2>
      <form onSubmit={handleSubmit}>
        <label>
          {t.contactFoem.name}{' '}
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
        {t.contactFoem.email}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        {t.contactFoem.message}
          <span className="char-count">{messageLength}/500</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            required
          ></textarea>
        </label>

        {loading && <Loader />}
        <button type="submit">{t.contactFoem.sendBtn}</button>
      </form>

      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </section>
  );
}
