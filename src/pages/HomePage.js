// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { hospitalData } from './data';
// import { ambulanceData } from './Ambulancedata';
// import './HomePage.css'; // Styles specific to HomePage

// const HomePage = () => {
//   const [selectedHospital, setSelectedHospital] = useState('');
//   const [selectedAmbulance, setSelectedAmbulance] = useState('');
//   const navigate = useNavigate();

//   const handleHospitalDropdownChange = (e) => {
//     setSelectedHospital(e.target.value);
//   };

//   const handleAmbulanceDropdownChange = (e) => {
//     setSelectedAmbulance(e.target.value);
//   };

//   const handleHospitalSearchSubmit = (e) => {
//     e.preventDefault();
//     const hospital = hospitalData.find(
//       (h) => h.name.toLowerCase() === selectedHospital.toLowerCase()
//     );
//     if (hospital) {
//       navigate(`/details/${hospital.id}`);
//     } else {
//       alert('Hospital not found. Please select a valid hospital.');
//     }
//   };

//   const handleAmbulanceSearchSubmit = (e) => {
//     e.preventDefault();
//     const ambulance = ambulanceData.find(
//       (a) => a.name.toLowerCase() === selectedAmbulance.toLowerCase()
//     );
//     if (ambulance) {
//       navigate(`/ambulance/details/${ambulance.id}`);
//     } else {
//       alert('Ambulance not found. Please select a valid ambulance.');
//     }
//   };

//   return (
//     <div className="home-page">
//       {/* Hospital Section */}
//       {/* Hospital Section */}
// <div className="card-container">
//   <div className="card">
//     <img
//       src="/images/ChandanHospital1.jpeg"
//       alt="Search for hospitals"
//       className="hospital-img"
//     />
//     <p>Search for hospitals from our list</p>
//   </div>

//   {/* Hospital Search Section */}
//   <div className="search-section">
//     <div className="scroll-text">
//       <span>Find Hospitals & Doctors</span>
//     </div>
//     <form className="search-container" onSubmit={handleHospitalSearchSubmit}>
//       <select
//         className="hospital-dropdown"
//         value={selectedHospital}
//         onChange={handleHospitalDropdownChange}
//       >
//         <option value="" disabled>
//           Choose a hospital
//         </option>
//         {hospitalData.map((hospital) => (
//           <option key={hospital.id} value={hospital.name}>
//             {hospital.name}
//           </option>
//         ))}
//       </select>
//       <button type="submit" className="search-button">
//         Search
//       </button>
//     </form>
//   </div>
// </div>

// {/* Ambulance Section */}
// <div className="ambulancecard-container">
//   <div className="card">
//     <img
//       src="images/ambulancecoverrr.webp"
//       alt="Search for ambulances"
//       className="ambulance-img"
//     />
//     <p>Search for ambulances from our list</p>
//   </div>

//   {/* Ambulance Search Section */}
//   <div className="search-section">
//     <div className="scroll-text">
//       <span>Find Ambulances & Emergency Services</span>
//     </div>
//     <form className="search-container" onSubmit={handleAmbulanceSearchSubmit}>
//       <select
//         className="ambulance-dropdown"
//         value={selectedAmbulance}
//         onChange={handleAmbulanceDropdownChange}
//       >
//         <option value="" disabled>
//           Choose an ambulance
//         </option>
//         {ambulanceData.map((ambulance) => (
//           <option key={ambulance.id} value={ambulance.name}>
//             {ambulance.name}
//           </option>
//         ))}
//       </select>
//       <button type="submit" className="search-button">
//         Search
//       </button>
//     </form>
//   </div>
// </div>


//       {/* Our Services Section */}
//       <div className="about-us" id="services">
//         <h1 className="page-title">Our Services</h1>

//         {/* Services Section */}
//         <section className="services">
//           <div className="card-container">
//             <div className="service-card">
//               <img src="images/meeting.png" alt="Appointment Booking" />
//               <h3>Appointment Booking</h3>
            
//             </div>
//             <div className="service-card">
//               <img src="images/live-tracking.png" alt="Live Tracking" />
//               <h3>Live Tracking</h3>
              
//             </div>
//             <div className="service-card">
//               <img src="images/ambulance.png" alt="Ambulance" />
//               <h3>Ambulance with Live Tracking</h3>
              
//             </div>
//             <div className="service-card">
//               <img src="images/emergency-button.png" alt="Emergency Button" />
//               <h3>Emergency Button</h3>
              
//             </div>
//             <div className="service-card">
//               <img src="images/scooter.png" alt="Medicine Delivery" />
//               <h3>Medicine Delivery</h3>
             
//             </div>
//             <div className="service-card">
//               <img src="images/intermittent-fasting.png" alt="Meal Planner" />
//               <h3>Meal Planner</h3>
              
//             </div>
//           </div>
//         </section>

//         {/* Treatments Section */}
//         <section className="treatments" id="about-us">
//           <h2 className="treatment-title">Treatments We Provide</h2>
//           <div className="card-container treatments-container">
//             <div className="treatment-card">
//               <img src="images/medical-assistance.png" alt="General Consultation" />
//               <p>General Consultation</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/pediatrician.png" alt="Pediatric Care" />
//               <p>Pediatric Care</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/emergency.png" alt="Emergency Care" />
//               <p>Emergency Care</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/heart.png" alt="Cardiology" />
//               <p>Cardiology</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/orthopedics.png" alt="Orthopedics" />
//               <p>Orthopedics</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/neurology.png" alt="Neurology" />
//               <p>Neurology</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/psychiatrist.png" alt="Psychiatry" />
//               <p>Psychiatry</p>
//             </div>
//             <div className="treatment-card">
//               <img src="images/physical-therapy.png" alt="Physiotherapy" />
//               <p>Physiotherapy</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hospitalData } from './data';
import { ambulanceData } from './Ambulancedata';
import DiseaseCards from "./DiseaseCards";
import './HomePage.css'; // Styles specific to HomePage


const HealthTips = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const healthTipsData = [
    {
      id: 1,
      title: "Bone Health",
      description: "Tips for strengthening bones.",
      image: "/images/BoneHealth.jpg",
      symptoms: ["Bone pain", "Fractures", "Weakness"],
      precautions: [
        "Consume calcium-rich foods like milk.",
        "Get regular exposure to sunlight for vitamin D.",
        "Do weight-bearing exercises.",
      ],
      dailyRoutine: [
        "Morning: 15 minutes of sunlight exposure.",
        "Afternoon: Weight training or brisk walking.",
        "Evening: Calcium supplement, if required.",
      ],
      mealPlan: {
        breakfast: "Milk with fortified cereal.",
        lunch: "Spinach and tofu salad.",
        dinner: "Grilled salmon with roasted vegetables.",
        snacks: "Cheese or yogurt.",
      },
    },
    {
      id: 2,
      title: "Heart Health",
      description: "Improve cardiovascular health.",
      image: "/images/HeartHealth.jpg",
      symptoms: ["Chest pain", "Shortness of breath", "Irregular heartbeat"],
      precautions: [
        "Eat a balanced diet rich in vegetables and fruits.",
        "Avoid trans fats and reduce sodium intake.",
        "Maintain a regular exercise routine.",
      ],
      dailyRoutine: [
        "Morning: 20 minutes of cardio exercise.",
        "Afternoon: Healthy lunch with lean proteins.",
        "Evening: Meditation or stress management activities.",
      ],
      mealPlan: {
        breakfast: "Whole-grain toast with avocado.",
        lunch: "Grilled salmon with spinach salad.",
        dinner: "Vegetable stir-fry with brown rice.",
        snacks: "Nuts or seeds like almonds and sunflower seeds.",
      },
    },
    {
      id: 3,
      title: "Lung Health",
      description: "Tips for maintaining healthy lungs.",
      image: "/images/LungHealth.jpg",
      symptoms: ["Shortness of breath", "Persistent cough", "Wheezing"],
      precautions: [
        "Avoid smoking and secondhand smoke.",
        "Practice deep breathing exercises.",
        "Stay hydrated to maintain mucus clearance.",
      ],
      dailyRoutine: [
        "Morning: Breathing exercises or yoga.",
        "Afternoon: Avoid exposure to pollutants.",
        "Evening: Relaxation and mindfulness exercises.",
      ],
      mealPlan: {
        breakfast: "Smoothie with spinach and fruits.",
        lunch: "Grilled turkey with mixed greens.",
        dinner: "Steamed vegetables with quinoa.",
        snacks: "Almonds or walnuts.",
      },
    },
    {
      id: 4,
      title: "Mental Health",
      description: "Tips for managing stress.",
      image: "/images/MentalHealth.jpg",
      symptoms: ["Anxiety", "Fatigue", "Irritability"],
      precautions: [
        "Practice mindfulness and meditation.",
        "Stay connected with loved ones.",
        "Get enough sleep and exercise.",
      ],
      dailyRoutine: [
        "Morning: Yoga or meditation for 15 minutes.",
        "Afternoon: Nutritious meal and a short walk.",
        "Evening: Journal and relax with a hobby.",
      ],
      mealPlan: {
        breakfast: "Smoothie with bananas and nuts.",
        lunch: "Grilled fish with sweet potatoes.",
        dinner: "Vegetable soup with whole-grain bread.",
        snacks: "Greek yogurt with honey.",
      },
    },
   
    {
      id: 5,
      title: "Diabetes Care",
      description: "Tips for managing blood sugar levels.",
      image: "/images/Diabities.png",
      symptoms: ["Frequent urination", "Excessive thirst", "Fatigue"],
      precautions: [
        "Monitor your blood sugar regularly.",
        "Avoid sugary drinks and processed foods.",
        "Maintain a healthy weight.",
      ],
      dailyRoutine: [
        "Morning: Walk for 30 minutes.",
        "Afternoon: Balanced meal with low carbs.",
        "Evening: Light exercise or yoga.",
      ],
      mealPlan: {
        breakfast: "Oatmeal with nuts and seeds.",
        lunch: "Grilled chicken with vegetables.",
        dinner: "Quinoa salad with avocado.",
        snacks: "Fresh fruits like apples or berries.",
      },
    },

    {
      id: 6,
      title: "Skin Care",
      description: "Tips for healthy and glowing skin.",
      image: "/images/SkinCare.jpg",
      symptoms: ["Dryness", "Acne", "Uneven tone"],
      precautions: [
        "Hydrate and drink plenty of water.",
        "Use sunscreen daily.",
        "Avoid excessive use of harsh cosmetics.",
      ],
      dailyRoutine: [
        "Morning: Cleanse and moisturize skin.",
        "Afternoon: Drink water and avoid direct sun.",
        "Evening: Night cream and relaxation.",
      ],
      mealPlan: {
        breakfast: "Green smoothie with spinach and avocado.",
        lunch: "Grilled chicken and steamed broccoli.",
        dinner: "Salmon with quinoa and veggies.",
        snacks: "Fresh fruits like papaya or oranges.",
      },
    },
       
  ];

  const handleCardClick = (id) => {
    console.log("Card clicked with ID:", id);
    setSelectedCard(id);
  };
  
  const handleCloseModal = () => {
    console.log("Modal closed");
    setSelectedCard(null);
  };
  

  return (
    <div className="health-tips-section">
      <h2 className="section-title">Health Tips</h2>
      <div className="tips-container">
        {healthTipsData.map((tip) => (
          <div
            key={tip.id}
            className="tip-card"
            onClick={() => handleCardClick(tip.id)}
            style={{
              backgroundImage: `url(${tip.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{healthTipsData[selectedCard - 1].title}</h2>
            <img
              src={healthTipsData[selectedCard - 1].image}  //from here we can remove the img from the pop up 
              alt={healthTipsData[selectedCard - 1].title}
            />
            <p>{healthTipsData[selectedCard - 1].description}</p>
            <h4>Symptoms:</h4>
            <ul>
              {healthTipsData[selectedCard - 1].symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
            <h4>Precautions:</h4>
            <ul>
              {healthTipsData[selectedCard - 1].precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
            <h4>Daily Routine:</h4>
            <ul>
              {healthTipsData[selectedCard - 1].dailyRoutine.map((routine, index) => (
                <li key={index}>{routine}</li>
              ))}
            </ul>
            <h4>Meal Plan:</h4>
            <p>
              <strong>Breakfast:</strong> {healthTipsData[selectedCard - 1].mealPlan.breakfast}
            </p>
            <p>
              <strong>Lunch:</strong> {healthTipsData[selectedCard - 1].mealPlan.lunch}
            </p>
            <p>
              <strong>Dinner:</strong> {healthTipsData[selectedCard - 1].mealPlan.dinner}
            </p>
            <p>
              <strong>Snacks:</strong> {healthTipsData[selectedCard - 1].mealPlan.snacks}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};



const Advertisement = () => {
  return (
    <div className="advertisement">
      <div className="ad-container">
        {/* Slide 1 */}
        <div className="ad-content">
          <div className="ad-text">
            <h2>Welcome to Doctro - Your Trusted Healthcare Companion</h2>
            <p>
              Doctro is more than just a healthcare platform – it’s a complete solution for your medical needs.
              With a simple, user-friendly interface, Doctro connects you with the best doctors, hospitals, and health services.
            </p>
          </div>
          <img
            src="/images/ambulance12.jpg"
            alt="Health Records Management"
            className="ad-image"
          />
        </div>

        {/* Slide 2 */}
        <div className="ad-content">
          <div className="ad-text">
            <h3>Why Choose Doctro?</h3>
            <ul>
              <li>
                <strong>Comprehensive Health Services:</strong> Book appointments, consult doctors virtually, manage health records, and more.
              </li>
              <li>
                <strong>Real-time Tracking:</strong> Track your doctor’s availability, queue times, and ETA.
              </li>
              <li>
                <strong>Emergency Support:</strong> Quickly book ambulances and receive SOS alerts.
              </li>
            </ul>
          </div>
          <img
            src="/images/Migraine.avif"
            alt="Ambulance Service"
            className="ad-image"
          />
        </div>

        {/* Slide 3 */}
        <div className="ad-content">
          <div className="ad-text">
            <h3>Why Doctro is Better than Others?</h3>
            <p>
              Doctro combines technology with top-notch healthcare expertise. We empower you to take control of your health with:
            </p>
            <ul>
              <li>
                <strong>24/7 Availability:</strong> Get assistance anytime, anywhere.
              </li>
              <li>
                <strong>Doctor & Hospital Ratings:</strong> See real reviews from other patients.
              </li>
              <li>
                <strong>All-in-One Platform:</strong> From booking appointments to health management.
              </li>
            </ul>
          </div>
          <img
            src="/images/Hypertension.avif"
            alt="Doctor Consultation"
            className="ad-image"
          />
        </div>
      </div>
    </div>
  );
};
      
          
       


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Doctro</h3>
          <p>Your Health, Our Priority</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:support@doctro.com">support@doctro.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Address: 123 Health St., Wellness City</li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Doctro. All Rights Reserved.</p>
        <p>Made with 💙 by Doctro Team</p>
      </div>
    </footer>
  );
}




const HomePage = () => {
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedAmbulance, setSelectedAmbulance] = useState('');
  const [emergencyDetails, setEmergencyDetails] = useState({
    name: '',
    age: '',
    gender: '',
    number: '',
    address: '',
    issue: '',
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleEmergencyDetailsChange = (e) => {
    setEmergencyDetails({ ...emergencyDetails, [e.target.name]: e.target.value });
  };

  // Open/Close the Emergency Form
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    setIsFormSubmitted(false); // Reset form submission state when closing the form
  };

  // Handle emergency form submission
  const handleEmergencyFormSubmit = (e) => {
    e.preventDefault();
  
    if (
      emergencyDetails.name &&
      emergencyDetails.age &&
      emergencyDetails.gender &&
      emergencyDetails.number &&
      emergencyDetails.address &&
      emergencyDetails.issue
    ) {
      // Form is valid
      setIsFormSubmitted(true);
  
      // Simulate an estimated time for arrival (in minutes)
      const estimatedTime = Math.floor(Math.random() * 10) + 5; // Random time between 5 and 15 minutes
      setEstimatedTime(`Estimated time: ${estimatedTime} minutes`);
  
      // Reset the form fields after submission
      setEmergencyDetails({
        name: '',
        age: '',
        gender: '',
        number: '',
        address: '',
        issue: '',
      });
  
      // Close the form automatically after submission
      setTimeout(() => {
        setIsFormOpen(false);
      }, 2000); // Close the form after 2 seconds
    } else {
      alert('Please fill out all the fields.');
    }
  };

  


  const handleHospitalDropdownChange = (e) => {
    setSelectedHospital(e.target.value);
  };

  const handleAmbulanceDropdownChange = (e) => {
    setSelectedAmbulance(e.target.value);
  };

  const handleHospitalSearchSubmit = (e) => {
    e.preventDefault();
    const hospital = hospitalData.find(
      (h) => h.name.toLowerCase() === selectedHospital.toLowerCase()
    );
    if (hospital) {
      navigate(`/details/${hospital.id}`);
    } else {
      alert('Hospital not found. Please select a valid hospital.');
    }
  };

  const handleAmbulanceSearchSubmit = (e) => {
    e.preventDefault();
    const ambulance = ambulanceData.find(
      (a) => a.name.toLowerCase() === selectedAmbulance.toLowerCase()
    );
    if (ambulance) {
      navigate(`/ambulance/details/${ambulance.id}`);
    } else {
      alert('Ambulance not found. Please select a valid ambulance.');
    }
  };

  return (
    <div className="home-page">
      {/* Emergency Button */}
      <button className="emergency-button" onClick={toggleForm}>
        Emergency!
        
      </button>

      {/* Emergency Form Popup */}
      {isFormOpen && (
        <div className="emergency-form-popup">
          <div className="emergency-form-container">
            <h2>Emergency Form</h2>
            <form onSubmit={handleEmergencyFormSubmit} className="emergency-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={emergencyDetails.name}
                onChange={handleEmergencyDetailsChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={emergencyDetails.age}
                onChange={handleEmergencyDetailsChange}
                required
              />
              <select
                name="gender"
                value={emergencyDetails.gender}
                onChange={handleEmergencyDetailsChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={emergencyDetails.number}
                onChange={handleEmergencyDetailsChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={emergencyDetails.address}
                onChange={handleEmergencyDetailsChange}
                required
              />
              <textarea
                name="issue"
                placeholder="Medical Issue"
                value={emergencyDetails.issue}
                onChange={handleEmergencyDetailsChange}
                required
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>

            {/* Close Form Button */}
            <button className="close-button" onClick={toggleForm}>Close</button>

            {/* Alert after Form Submission */}
           {/* Alert after Form Submission (Visible on Page) */}
{isFormSubmitted && (
  <div className="submission-alert">
    <p>Your emergency has been successfully submitted. A nearby hospital and ambulance are on their way!
      Keep Calm & Pray To God !
    </p>
    <p>{estimatedTime}</p>
  </div>
)}

          </div>
        </div>
      )}

      {/* Hospital Search Section */}
      <div className="card-container">
        <div className="card">
          <img
            src="/images/ChandanHospital1.jpeg"
            alt="Search for hospitals"
            className="hospital-img"
          />
          <p>Search for hospitals from our list</p>
        </div>

        <div className="search-section">
          <div className="scroll-text">
            <span>Find Hospitals & Doctors</span>
          </div>
          <form className="search-container" onSubmit={handleHospitalSearchSubmit}>
            <select
              className="hospital-dropdown"
              value={selectedHospital}
              onChange={handleHospitalDropdownChange}
            >
              <option value="" disabled>
                Choose a hospital
              </option>
              {hospitalData.map((hospital) => (
                <option key={hospital.id} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
            </select>
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>

      {/* Ambulance Search Section */}
      <div className="ambulancecard-container">
        <div className="card">
          <img
            src="images/ambulancecoverrr.webp"
            alt="Search for ambulances"
            className="ambulance-img"
          />
          <p>Search for ambulances from our list</p>
        </div>

        <div className="search-section">
          <div className="scroll-text">
            <span>Find Ambulances & Emergency Services</span>
          </div>
          <form className="search-container" onSubmit={handleAmbulanceSearchSubmit}>
            <select
              className="ambulance-dropdown"
              value={selectedAmbulance}
              onChange={handleAmbulanceDropdownChange}
            >
              <option value="" disabled>
                Choose an ambulance
              </option>
              {ambulanceData.map((ambulance) => (
                <option key={ambulance.id} value={ambulance.name}>
                  {ambulance.name}
                </option>
              ))}
            </select>
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>

<DiseaseCards />

 {/* Health Tips Section */}
      <HealthTips />
      

      {/* Our Services Section */}
      <div className="about-us" id="services">
        <h1 className="page-title">Our Services</h1>
        <section className="services">
          <div className="card-container">
            <div className="service-card">
              <img src="images/meeting.png" alt="Appointment Booking" />
              <h3>Appointment Booking</h3>
            </div>
            <div className="service-card">
              <img src="/images/Hospital Booking.png" alt="Hospital Booking" />
              <h3>Hospital Booking</h3>
            </div>
            <div className="service-card">
              <img src="images/ambulance.png" alt="Ambulance with Live Tracking" />
              <h3>Ambulance with Live Tracking</h3>
            </div>
            <div className="service-card">
              <img src="images/emergency-button.png" alt="Emergency Button" />
              <h3>Emergency Button</h3>
            </div>
            <div className="service-card">
              <img src="images/live-tracking.png" alt="Live Tracking" />
              <h3>Live Tracking</h3>
            </div>
            <div className="service-card">
              <img src="images/intermittent-fasting.png" alt="Meal Planner" />
              <h3> Health Tips & Meal Planner</h3>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="treatments" id="about-us">
          <h2 className="treatment-title">Treatments We Provide</h2>
          <div className="card-container treatments-container">
            <div className="treatment-card">
              <img src="images/medical-assistance.png" alt="General Consultation" />
              <p>General Consultation</p>
            </div>
            <div className="treatment-card">
              <img src="images/pediatrician.png" alt="Pediatric Care" />
              <p>Pediatric Care</p>
            </div>
            <div className="treatment-card">
              <img src="images/emergency.png" alt="Emergency Care" />
              <p>Emergency Care</p>
            </div>
            <div className="treatment-card">
              <img src="images/heart.png" alt="Cardiology" />
              <p>Cardiology</p>
            </div>
            <div className="treatment-card">
              <img src="images/orthopedics.png" alt="Orthopedics" />
              <p>Orthopedics</p>
            </div>
            <div className="treatment-card">
              <img src="images/neurology.png" alt="Neurology" />
              <p>Neurology</p>
            </div>
            <div className="treatment-card">
              <img src="images/psychiatrist.png" alt="Psychiatry" />
              <p>Psychiatry</p>
            </div>
            <div className="treatment-card">
              <img src="images/physical-therapy.png" alt="Physiotherapy" />
              <p>Physiotherapy</p>
            </div>
          </div>
        </section>
      </div>
      <Advertisement />
      <Footer />
    </div>

    
  );
 
};

export default HomePage;








