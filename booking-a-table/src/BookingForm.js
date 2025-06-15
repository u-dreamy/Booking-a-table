import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" required onChange={handleChange} />

      <label htmlFor="date">Date:</label>
      <input id="date" type="date" name="date" required onChange={handleChange} />

      <label htmlFor="time">Time:</label>
      <input id="time" type="time" name="time" required onChange={handleChange} />

      <label htmlFor="guests">Guests:</label>
      <input id="guests" type="number" name="guests" min="1" max="10" onChange={handleChange} />

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
