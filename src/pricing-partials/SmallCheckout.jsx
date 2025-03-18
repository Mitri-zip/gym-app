import React, { useState } from 'react';
import KbNav from '../partials/KbNav';
import KbFooter from '../partials/KbFooter';
import logo from '../assets/main-logo.png';
import '../page-styles/checkout.css'; // Import your new CSS file

function SmallCheckout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:5175/members', {
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

  const cost = 350.00;
  const itemName = 'Small Group Membership';

  return (
    <div>
      <KbNav />
      <div className="basicContainer">
        <div className="basicHeader">
          <h1 className="basicTitle">CHECKOUT</h1>
        </div>

        <div className="basicOrderItem">
          <div className="basicItemDetails">
            <img className="basicItemImage" src={logo} alt="Logo" />
            <div>
              <div className="basicItemName">{itemName}</div>
              <div className="basicItemPrice">${cost}</div>
            </div>
          </div>
        </div>

        <div className="basicSummary">
          <div>Order Summary</div>
          <div className="basicSummaryRow">
            <div>Items (1):</div>
            <div>${cost}</div>
          </div>
          <div className="basicSummaryRow">
            <div>Total:</div>
            <div className="basicTotalRow">${cost}</div>
          </div>
        </div>

        <div className="basicDeliveryOptions">
          <h2>Enter Your Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="basicDeliveryOption">
              <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
            </div>
            <div className="basicDeliveryOption">
              <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
            </div>
            <div className="basicDeliveryOption">
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
            </div>
            <div className="basicDeliveryOption">
              <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </label>
            </div>
            <button className="basicPlaceOrderButton">PLACE ORDER</button>
          </form>
        </div>
      </div>
      <KbFooter />
    </div>
  );
}

export default SmallCheckout;
