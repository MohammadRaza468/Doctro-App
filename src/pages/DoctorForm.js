import React, { useState } from 'react';

function DoctorForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    profession: '',
    licenseNumber: '',
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
    top: '10',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '35px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '25px',
    animation: 'slideDown 1s ease-out',
    zIndex: 10,
    width: '30%',
    textAlign: 'center',
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

  return (
    <div style={containerStyle}>
      {/* Show alert after submission */}
      {showAlert && <div style={alertStyle}>Submission Successful - Welcome to Doctro!</div>}

      <h2 style={formTitleStyle}>Doctor Registration</h2>
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

        <label htmlFor="mobileNumber" style={labelStyle}>Mobile Number</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="profession" style={labelStyle}>Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="licenseNumber" style={labelStyle}>License Number</label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          value={formData.licenseNumber}
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

export default DoctorForm;
