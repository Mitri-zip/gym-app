import React, { useState } from 'react';
import bicycle from '../assets/free-session-image.jpg';
import '../page-styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5175/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="image-container">
        <img src={bicycle} alt="Free Session" className="session-image" />
      </div>
      <div className="form-container">
        <h1 className="register-title">Grab your FREE Session at the Gym for Women!</h1>
        <form onSubmit={handleSubmit} className="form-layout">
          <input type="text" id="firstName" name="firstName" placeholder="First Name" className="input-field" onChange={handleChange} required />
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="input-field" onChange={handleChange} required />
          <input type="email" id="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          <input type="tel" id="phone" name="phone" placeholder="Phone" className="input-field" onChange={handleChange} required />
          <button type="submit" className="signup-button">REGISTER!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
