import React, { useState } from 'react';
import '../page-styles/canni-sign-up.css';

function CanniSignUp() {
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
    fetch('http://localhost:5175/vibes', {
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
    <div className="highvibes-signup-margin">
      <div className="signup-msg-layout">
        <div className="canni-title">CANNI FRIENDLY CLASSES</div>
        <p className="canni-msg">Stay updated with future canni-classes and events!</p>
      </div>
      <form onSubmit={handleSubmit} className="signup-input-layout">
        <div className="canni-input-layout">
          <div className="input-group">
            <input 
              type="text" 
              id="firstName" 
              name="firstName"  
              placeholder="e.g., Jane" 
              onChange={handleChange} 
              className="canni-input" 
            />
            <label htmlFor="firstName" className="label">First Name</label>
          </div>
          <div className="input-group">
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="e.g., Smith" 
              onChange={handleChange} 
              className="canni-input" 
            />
            <label htmlFor="lastName" className="label">Last Name</label>
          </div>
        </div>
        <div className="canni-input-layout">
          <div className="input-group">
            <input 
              type="text" 
              id="email" 
              name="email"  
              placeholder="e.g., email@example.com" 
              onChange={handleChange} 
              className="canni-input" 
            />
            <label htmlFor="email" className="label">Email</label>
          </div>
          <div className="input-group">
            <input 
              type="number" 
              id="phone" 
              name="phone" 
              placeholder="e.g., 555-555-5555" 
              onChange={handleChange} 
              className="canni-input" 
            />
            <label htmlFor="phone" className="label">Phone</label>
          </div>
        </div>
        <button type="submit" className="canni-signup">SIGN UP!</button>
      </form>
    </div>
  );
}

export default CanniSignUp;
