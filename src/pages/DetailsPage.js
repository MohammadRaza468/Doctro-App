import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hospitalData } from './data';
import './DetailsPage.css';

const DetailsPage = () => {
  const { hospitalId } = useParams();
  const hospital = hospitalData.find(h => h.id === parseInt(hospitalId));

  const [appointment, setAppointment] = useState(false);

  if (!hospital) {
    return <h1>Hospital not found</h1>;
  }

  const handleAppointmentSubmit = () => {
    setAppointment(true);
    setTimeout(() => {
      setAppointment(false);
    }, 3000); // Show alert for 3 seconds
  };

  return (
    <div className="details-page">
      <h1 className="hospital-name">{hospital.name}</h1>

      {/* Hospital Images */}
      <div className="hospital-images">
        <img src={hospital.image1} alt={`${hospital.name} view 1`} className="hospital-image" />
        <img src={hospital.image2} alt={`${hospital.name} view 2`} className="hospital-image" />
      </div>

      <p className="hospital-address"><strong>Address:</strong> {hospital.address}</p>

      <h2 className="section-heading">Facilities:</h2>
      <ul className="facilities-list">
        <li>24/7 Emergency</li>
        <li>Ambulance Services</li>
        <li>ICU</li>
        <li>General Surgery</li>
        <li>Outpatient Services</li>
      </ul>

      <h2 className="section-heading">Doctors</h2>
      <div className="doctor-list">
        {hospital.doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={`${doctor.name}`} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p>{doctor.profession}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Contact: {doctor.mobile}</p>
            <p>{doctor.intro}</p>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Book Appointment</h2>
      <form
        className="appointment-form"
        onSubmit={(e) => { e.preventDefault(); handleAppointmentSubmit(); }}
      >
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Contact:
          <input type="text" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <button type="submit">Submit</button>
      </form>

      {appointment && <div className="alert">Appointment request submitted!</div>}
    </div>
  );
};

export default DetailsPage;
