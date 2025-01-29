import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import Header component
import HomePage from './pages/HomePage'; // Placeholder for future home page
import DetailsPage from './pages/DetailsPage';
import AmbulanceDetailsPage from './pages/AmbulanceDetailsPage';



import DoctorForm from './pages/DoctorForm'; // Doctor Registration Form
import PatientForm from './pages/PatientForm'; // Patient Registration Form

import DiseaseCards from "./pages/DiseaseCards";
import DiseaseDetail from "./pages/DiseaseDetail";

import AboutPage from './pages/AboutPage'; // About Us Page


import './Header.css'; // Centralized CSS for all styles
// import './DoctorForm.css';
// import './PatientForm.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />``
       

        {/* <Route path="/Hospital And Doctor Appintment" element={<DetailsPage />} /> */}
        <Route path="/details/:hospitalId" element={<DetailsPage />} />
        <Route path="/ambulance/details/:ambulanceId" element={<AmbulanceDetailsPage />} />

        
         <Route path="/about" element={<AboutPage />} />

        <Route path="/doctor-form" element={<DoctorForm />} />
        <Route path="/patient-form" element={<PatientForm />} />

        <Route path="/" element={<DiseaseCards />} />
        <Route path="/disease/:id" element={<DiseaseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
