import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import book from '../assets/bookclass.jpg';
import '../page-styles/booking.css';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [message, setMessage] = useState('');
  const [classMessages, setClassMessages] = useState({});

  const classSchedule = {
    'Monday': ['UPPER BODY BLAST - 6:15PM', 'Barre - 7:15PM'],
    'Tuesday': ['TUMMY TUESDAY/ABS - 6:15PM'],
    'Wednesday': ['Sexy HIIT LEGS - 6:15AM', 'BOOTY AND ABS - 7:15PM'],
    'Thursday': ['TOTAL BODY BURN - 6:15PM'],
    'Saturday': ['KILLER BODY BOOTCAMP - 9:00AM'],
    'Sunday': ['KILLER BODY BOOTCAMP- 9:00AM']
  };

  useEffect(() => {
    if (selectedDate) {
      setMessage('');
      setClassMessages({});
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowEmailInput(false);
    setEmail('');
    setSelectedClass(null);
  };

  const handleBookClick = (className) => {
    setSelectedClass(className);
    setShowEmailInput(true);
  };

  const handleEmailSubmit = () => {
    if (email && selectedClass) {
      fetch('/bookClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, className: selectedClass }),
      })
      .then(response => response.text())
      .then(message => {
        setMessage(message);
        setShowEmailInput(false);
        setEmail('');
        setSelectedClass(null);
        setClassMessages((prevMessages) => ({
          ...prevMessages,
          [selectedClass]: message,
        }));
      })
      .catch(err => console.error(err));
    } else {
      setMessage('Please enter your email');
      setClassMessages((prevMessages) => ({
        ...prevMessages,
        [selectedClass]: 'Please enter your email',
      }));
    }
  };

  const dayOfWeek = selectedDate ? format(selectedDate, 'eeee') : null;
  const formattedDate = selectedDate ? format(selectedDate, 'EEEE, MMMM d') : '';

  const scheduleHTML = (classSchedule[dayOfWeek] || []).map((className) => {
    const [name, time] = className.split(' - ');
    const startTime = time;
    const endTime = format(new Date(new Date().setHours(parseInt(time.split(':')[0]) + 1, parseInt(time.split(':')[1]) + 45)), 'h:mm a');
    return (
      <div key={className} className="class-container">
        <div className="class-info-container">
          <div className="class-info">
            <p className="class-time">{formattedDate}</p>
            <p className="class-time">{`${startTime} - ${endTime}`}</p>
            <p className="class-name">{name}</p>
          </div>
          <button onClick={() => handleBookClick(className)} className="book-button">BOOK</button>
        </div>
        {selectedClass === className && showEmailInput && (
          <div className="email-container">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              className="email-input" 
            />
            <button onClick={handleEmailSubmit} className="submit-button">Submit</button>
          </div>
        )}
        {classMessages[className] && <div className="message">{classMessages[className]}</div>}
      </div>
    );
  });

  return (
    <div>
      <div className="classes-layout">
        <div className="booking-image-layout">
          <img src={book} className="booking-image" alt="Booking" />
        </div>
        <div className="schedule-booking-layout">
          <div className="booking-calendar">
            <h1>Book a Class</h1>
            <div className="calendar-layout">
              Date: <DatePicker selected={selectedDate} onChange={handleDateChange} />
            </div>
            <div className="class-schedule">
              {scheduleHTML}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
