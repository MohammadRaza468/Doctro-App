import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const diseaseDetails = [
  // Your diseaseDetails array remains the same.
  {
    id: 1,
    name: "Diabetes",
    description:
      "Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). Common treatments include insulin therapy, medication, and lifestyle changes.",
    treatments: [
      "Insulin therapy",
      "Oral medication",
      "Dietary modifications",
      "Regular exercise",
    ],
    doctors: [
      { name: "Dr. John Doe", experience: 10, fee: 500 },
      { name: "Dr. Sarah Smith", experience: 8, fee: 400 },
      { name: "Dr. Emily Johnson", experience: 12, fee: 600 },
    ],
  },
  // Add more diseases here
  {
    id: 2,
    name: "Asthma",
    description:
      "Asthma is a condition in which your airways narrow and swell, making it difficult to breathe. Treatments often include inhalers, steroids, and bronchodilators.",
    treatments: [
      "Inhalers",
      "Steroid therapy",
      "Bronchodilators",
      "Lifestyle changes",
    ],
    doctors: [
      { name: "Dr. Alice White", experience: 15, fee: 550 },
      { name: "Dr. Bob Green", experience: 6, fee: 450 },
      { name: "Dr. Chris Black", experience: 9, fee: 500 },
    ],
  },
  {
    id: 3,
    name: "Hypertension",
    description:
      "Hypertension, also known as high blood pressure, can cause severe complications if left untreated. Management includes medications, dietary changes, and exercise.",
    treatments: [
      "Blood pressure medication",
      "Dietary modifications",
      "Regular physical activity",
    ],
    doctors: [
      { name: "Dr. Karen Blue", experience: 7, fee: 400 },
      { name: "Dr. Nathan Red", experience: 13, fee: 550 },
      { name: "Dr. Emma Gray", experience: 11, fee: 600 },
    ],
  },
  {
    id: 4,
    name: "Cancer",
    description:
      "Cancer is a group of diseases involving abnormal cell growth. Treatment options vary depending on the type of cancer, including chemotherapy, radiation, and surgery.",
    treatments: [
      "Chemotherapy",
      "Radiation therapy",
      "Surgery",
      "Immunotherapy",
    ],
    doctors: [
      { name: "Dr. Olivia White", experience: 15, fee: 800 },
      { name: "Dr. Liam Brown", experience: 10, fee: 750 },
      { name: "Dr. Sophia Purple", experience: 20, fee: 900 },
    ],
  },
  {
    id: 5,
    name: "Pneumonia",
    description:
      "Pneumonia is an infection that inflames the air sacs in one or both lungs. Treatment involves antibiotics, antivirals, or antifungals depending on the type of pneumonia.",
    treatments: [
      "Antibiotics",
      "Antivirals",
      "Oxygen therapy",
      "Rest and fluids",
    ],
    doctors: [
      { name: "Dr. Jack Gold", experience: 18, fee: 600 },
      { name: "Dr. Grace Silver", experience: 10, fee: 500 },
      { name: "Dr. Lucy Copper", experience: 12, fee: 650 },
    ],
  },
  {
    id: 6,
    name: "Migraine",
    description:
      "Migraines are severe headaches that can cause nausea, vomiting, and sensitivity to light. Treatments often include pain relief medications, lifestyle changes, and preventive treatments.",
    treatments: [
      "Pain relief medications",
      "Lifestyle changes",
      "Preventive treatments",
    ],
    doctors: [
      { name: "Dr. Kate Violet", experience: 9, fee: 450 },
      { name: "Dr. Daniel Pink", experience: 8, fee: 400 },
      { name: "Dr. Natalie Green", experience: 14, fee: 500 },
    ],
  },
];



const DiseaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const disease = diseaseDetails.find((d) => d.id === parseInt(id));

  const [showForm, setShowForm] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");

  if (!disease) {
    return (
      <div style={styles.notFound}>
        <h1>Disease not found</h1>
        <motion.button
          style={styles.backButton}
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.1 }}
        >
          Go Back
        </motion.button>
      </div>
    );
  }

  const handleBooking = () => setShowForm(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const appointmentNumber = Math.floor(1000 + Math.random() * 9000);
    setBookingMessage(
      `Appointment booked successfully! Your appointment number is ${appointmentNumber}.`
    );
    setShowForm(false);
    setTimeout(() => setBookingMessage(""), 5000);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
      >
        ← Back
      </motion.button>
      <motion.h1 style={styles.title}>{disease.name}</motion.h1>
      <motion.p style={styles.description}>{disease.description}</motion.p>
      <motion.h2 style={styles.subHeading}>Treatment Options:</motion.h2>
      <ul style={styles.treatmentList}>
        {disease.treatments.map((treatment, index) => (
          <li key={index} style={styles.listItem}>
            {treatment}
          </li>
        ))}
      </ul>
      <motion.h2 style={styles.subHeading}>Available Doctors:</motion.h2>
      <div style={styles.doctorContainer}>
        {disease.doctors.map((doctor, index) => (
          <motion.div
            key={index}
            style={styles.doctorCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{doctor.name}</h3>
            <p>Experience: {doctor.experience} years</p>
            <p>Fee: ₹{doctor.fee}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        style={styles.bookButton}
        onClick={handleBooking}
        whileHover={{ scale: 1.1 }}
      >
        Book Appointment
      </motion.button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            style={styles.formContainer}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2>Enter Your Details</h2>
            <form onSubmit={handleFormSubmit} style={styles.form}>
              <input type="text" placeholder="Full Name" required style={styles.input} />
              <input type="number" placeholder="Age" required style={styles.input} />
              <select required style={styles.input}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                required
                style={styles.input}
              />
              <textarea placeholder="Address" required style={styles.textarea} />
              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{ scale: 1.1 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {bookingMessage && (
          <motion.div
            style={styles.alert}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {bookingMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "40px auto", // Added more vertical margin
        marginTop: "60px",   // Ensures space from the top
        maxWidth: "1300px",
      
      
  },
  backButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  subHeading: {
    fontSize: "1.5rem",
    color: "#444",
    margin: "15px 0",
  },
  treatmentList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#555",
  },
  doctorContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  doctorCard: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    flex: "1 1 30%",
    textAlign: "center",
    transition: "box-shadow 0.3s",
  },
  bookButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  formContainer: {
    padding: "6px", // Reduced padding for a tighter look
    border: "1px solid #ddd",
    borderRadius: "12px", // Subtle rounded corners
    backgroundColor: "#f9f9f9", // Light background
    marginTop: "12px", // Smaller margin for closer placement
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // Softer shadow for a minimal feel
    transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
    ":hover": {
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // Slightly stronger shadow on hover
      transform: "scale(1.02)", // Slightly less scaling for a subtle effect
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Reduced gap for tighter grouping
    animation: "fadeIn 0.8s ease-out", // Smooth fade-in animation
  },
  input: {
    padding: "10px", // Reduced padding for a smaller input
    border: "1px solid #ccc",
    borderRadius: "8px", // Slightly rounded edges
    width: "100%",
    fontSize: "14px", // Smaller font size for compactness
    transition: "border 0.3s ease, box-shadow 0.3s ease", // Smooth transition on focus
    boxSizing: "border-box", // Ensures padding doesn't affect width
    ":focus": {
      border: "1px solid #4A90E2", // Blue border on focus
      boxShadow: "0 0 10px rgba(74, 144, 226, 0.5)", // Blue shadow effect
      outline: "none", // Cleaner appearance
      transform: "scale(1.02)", // Slight scale effect on focus
    }
  },
  textarea: {
    padding: "10px", // Reduced padding for smaller textarea
    border: "1px solid #ccc",
    borderRadius: "8px", // Rounded edges to match the input
    width: "100%",
    height: "80px", // Reduced height for better space management
    fontSize: "14px", // Smaller font size for consistency
    transition: "border 0.3s ease, box-shadow 0.3s ease", // Smooth transition on focus
    resize: "vertical", // Vertical resizing for flexibility
    boxSizing: "border-box", // Ensures padding doesn't affect overall size
    ":focus": {
      border: "1px solid #4A90E2", // Blue border on focus
      boxShadow: "0 0 10px rgba(74, 144, 226, 0.5)", // Blue shadow effect
      outline: "none", // Cleaner appearance
      transform: "scale(1.02)", // Slight scale effect on focus
    }
  },
  submitButton: {
    backgroundColor: "#007BFF", // Primary blue color
    color: "#fff", // White text
    padding: "6px 10px", // Reduced padding for smaller button
    height: "40px", // Height of the button
    width: "130px", // Width of the button
    border: "none", // No border
    borderRadius: "10px", // Slightly rounded corners for a sleek look
    cursor: "pointer", // Pointer cursor on hover
    fontSize: "18px", // Smaller font size for compactness
    transition: "all 0.2s ease", // Faster transition for smoother interaction
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)", // Softer shadow for a more subtle effect
    textAlign: "center", // Ensure text is centered
    display: "block", // Ensure it behaves as a block element
    margin: "0 auto", // Center the button horizontally
    
    ":hover": {
      backgroundColor: "#0056b3", // Darker blue on hover
      transform: "scale(1.02)", // Slight scaling effect on hover
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow on hover
    },
    
    ":active": {
      backgroundColor: "#004085", // Even darker blue when clicked
      transform: "scale(1.01)", // Small scale on click for feedback
    }
  },
  
  
  
  alert: {
    backgroundColor: "green",
    color: "white",
    padding: "30px",
    border: "1px solid #c3e6cb",
    borderRadius: "5px",
    marginTop: "20px",
    textAlign: "center",
  },
};

export default DiseaseDetail;





