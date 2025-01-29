import React from 'react';
import './AboutPage.css'
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Doctro</h1>
          <p>Your trusted healthcare companion</p>
        </div>
        <img src="/images/Healthcare.avif" alt="Healthcare Hero" className="hero-image" />
      </section>

      {/* Our Mission */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>At Doctro, we aim to revolutionize the healthcare industry by providing an all-in-one platform that connects patients with the best healthcare professionals, hospitals, and services, all with just a few clicks.</p>
      </section>

      {/* Why Choose Doctro */}
      <section className="why-choose">
        <h2>Why Choose Doctro?</h2>
        <div className="features">
          <div className="feature">
            <img src="/images/Comprehensive Health Services.avif" alt="Comprehensive Health Services" />
            <h3>Comprehensive Health Services</h3>
            <p>From doctor consultations to emergency ambulance bookings, we cover all your medical needs.</p>
          </div>
          <div className="feature">
            <img src="/images/Real-time Tracking.avif" alt="Real-time Tracking" />
            <h3>Real-time Tracking</h3>
            <p>Track your doctor’s availability, queue times, and ambulance ETAs to ensure timely care.</p>
          </div>
          <div className="feature">
            <img src="/images/Emergency Support.avif" alt="Emergency Support" />
            <h3>Emergency Support</h3>
            <p>Access SOS alerts and emergency bookings for ambulances, ensuring help is always on the way.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member 1" />
            <h3>Dr. John Doe</h3>
            <p>Founder & Chief Medical Officer</p>
            <p>With over 15 years of experience in healthcare, Dr. Doe is passionate about bridging the gap between technology and healthcare.</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Product Manager</p>
            <p>Jane leads the development of innovative features on the Doctro platform, ensuring users have an exceptional experience.</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member 3" />
            <h3>Michael Johnson</h3>
            <p>Lead Developer</p>
            <p>Michael oversees all technical aspects of Doctro’s platform, ensuring the app runs smoothly and securely for all users.</p>
          </div>
        </div>
      </section>

      {/* How Doctro Works */}
      <section className="how-it-works">
        <h2>How Doctro Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/images/Sign Up.avif" alt="Step 1" />
            <h3>Step 1: Sign Up</h3>
            <p>Sign up as a patient or doctor to create your personalized profile.</p>
          </div>
          <div className="step">
            <img src="/images/Search for Services.avif" alt="Step 2" />
            <h3>Step 2: Search for Services</h3>
            <p>Find the best doctors, hospitals, and health services tailored to your needs.</p>
          </div>
          <div className="step">
            <img src="/images/Book and Consult.avif" alt="Step 3" />
            <h3>Step 3: Book and Consult</h3>
            <p>Book appointments and consult with doctors online or in person.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Doctro has transformed the way I manage my health. It's easy to use and I can always find a doctor when I need one!"</p>
            <h4>- Sarah, Patient</h4>
          </div>
          <div className="testimonial-card">
            <p>"As a doctor, Doctro has been a game-changer in managing my appointments and providing virtual consultations!"</p>
            <h4>- Dr. Mike, Doctor</h4>
          </div>
        </div>
      </section>

      {/* Join Us / Call to Action */}
      <section className="join-us">
        <h2>Join the Doctro Family</h2>
        <p>Become a part of the growing Doctro community and help us make healthcare more accessible. Whether you're a doctor, hospital, or patient, we invite you to join us today!</p>
        
      </section>
    </div>
  );
};

export default AboutUs;
