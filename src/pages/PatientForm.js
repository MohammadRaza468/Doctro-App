import React, { useState } from 'react';

function PatientForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // Hide alert after 4 seconds
    // Handle form submission (e.g., send data to server)
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(images/Doctro.jpg)', // Background Image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    position: 'relative',
    animation: 'fadeIn 2s ease-out',
  };

  const alertStyle = {
    position: 'absolute',
    top: '5',
    left: '50%',
    transform: 'translateX(-50%) scale(1)', // Initial state
    opacity: 1, // Fully visible
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '45px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '25px',
    zIndex: 10,
    width: '30%',
    textAlign: 'center',
    transition: 'transform 0.5s ease, opacity 0.5s ease', // Smooth transition
  };

  const formTitleStyle = {
    color: '#333',
    fontSize: '26px',
    fontWeight: 'bold',
    marginTop: '50px',
    marginBottom: '20px',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Transparent background
    padding: '8px', // Reduced padding further
    borderRadius: '8px',
    maxWidth: '350px',  // Further reduced form width
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',  // Reduced gap between form elements
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)', // Lighter box-shadow for a smaller look
    animation: 'formSlideUp 1s ease-out',
    height: 'auto', // Height stays auto
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };

  // Effect for alert visibility
  if (showAlert) {
    setTimeout(() => {
      const alertElement = document.getElementById('alert');
      if (alertElement) {
        alertElement.style.transform = 'translateX(-50%) scale(1)';
        alertElement.style.opacity = 1;
      }
    }, 10); // Allow the component to render before starting the transition
  }

  return (
    <div style={containerStyle}>
      {/* Show alert after form submission */}
      {showAlert && (
        <div
          id="alert"
          style={alertStyle}
          onTransitionEnd={() => {
            if (!showAlert) {
              const alertElement = document.getElementById('alert');
              alertElement.style.transform = 'translateX(-50%) scale(0.5)';
              alertElement.style.opacity = 0;
            }
          }}
        >
          Submission Successful - Welcome to Doctro!
        </div>
      )}

      <h2 style={formTitleStyle}>Patient Registration</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="fullName" style={labelStyle}>Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="password" style={labelStyle}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="phoneNumber" style={labelStyle}>Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="gender" style={labelStyle}>Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
        </select>

        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
}

export default PatientForm;
