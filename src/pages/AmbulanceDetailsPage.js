// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import './AmbulanceDetailsPage.css';

// const AmbulanceDetailsPage = () => {
//   const { ambulanceId } = useParams();
//   const ambulance = ambulanceData.find((a) => a.id === parseInt(ambulanceId));
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [showMap, setShowMap] = useState(false); // Added showMap state
//   const [destination, setDestination] = useState(null);
//   const mapRef = useRef(null); // Ref for the map container

//   // Step 1: Load Google Maps API script
//   useEffect(() => {
//     if (window.google) {
//       initMap();
//       return;
//     }

//     const loadGoogleMaps = () => {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`; // Use your actual API key here
//       script.async = true;
//       script.defer = true;
//       script.onload = () => initMap(); // Initialize map once the script loads
//       script.onerror = (error) => console.error('Google Maps script failed to load:', error);
//       document.body.appendChild(script);
//     };

//     loadGoogleMaps(); // Load the script when the component mounts

//     // Cleanup: Remove the script from the body when the component unmounts
//     return () => {
//       const script = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js?key="]`);
//       if (script) {
//         script.remove();
//       }
//     };
//   }, []);

//   const initMap = () => {
//     if (!window.google) {
//       console.error('Google Maps API not loaded');
//       return;
//     }

//     // Create a new Google Map
//     const map = new google.maps.Map(mapRef.current, {
//       center: { lat: ambulance.location.lat, lng: ambulance.location.lng }, // Use ambulance's location
//       zoom: 12,
//     });

//     // Create a marker for the ambulance
//     const ambulanceStart = new google.maps.LatLng(ambulance.location.lat, ambulance.location.lng);
//     const ambulanceMarker = new google.maps.Marker({
//       position: ambulanceStart,
//       map: map,
//       title: 'Ambulance Location',
//       icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
//     });

//     // If destination is set, create a route
//     if (destination) {
//       const directionsService = new google.maps.DirectionsService();
//       const directionsRenderer = new google.maps.DirectionsRenderer();
//       directionsRenderer.setMap(map);

//       const destinationLatLng = new google.maps.LatLng(destination.lat, destination.lng);

//       // Request directions to destination
//       directionsService.route(
//         {
//           origin: ambulanceStart,
//           destination: destinationLatLng,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             directionsRenderer.setDirections(result);
//           } else {
//             console.error('Directions request failed:', status);
//           }
//         }
//       );
//     }
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     setBookingSuccess(true);
//     setTimeout(() => {
//       setBookingSuccess(false);
//     }, 3000); // Show success message for 3 seconds
//   };

//   const handleTrackButtonClick = () => {
//     setDestination({ lat: 12.9716, lng: 77.6356 }); // Example destination coordinates
//     setShowMap(true); // Show map when "Track Ambulance" button is clicked
//   };

//   if (!ambulance) {
//     return <h1>Ambulance not found!</h1>;
//   }

//   return (
//     <div className="ambulance-details-page">
//       <h1 className="ambulance-name">{ambulance.name}</h1>

//       <div className="ambulance-images">
//         <img src={ambulance.image1} alt={`${ambulance.name} view 1`} className="ambulance-image" />
//         <img src={ambulance.image2} alt={`${ambulance.name} view 2`} className="ambulance-image" />
//       </div>

//       <p className="ambulance-contact">
//         <strong>Contact:</strong> {ambulance.contact}
//       </p>
//       <p className="ambulance-location">
//         <strong>Location:</strong> {ambulance.location}
//       </p>

//       <h2 className="section-heading">Facilities</h2>
//       <ul className="ambulance-facilities">
//         <li>24/7 Availability</li>
//         <li>Emergency Medical Assistance</li>
//         <li>Equipped with Oxygen Cylinders</li>
//         <li>First Aid Kits</li>
//         <li>Basic and Advanced Life Support</li>
//       </ul>

//       <h2 className="section-heading">Book Ambulance</h2>
//       <form className="booking-form" onSubmit={handleBookingSubmit}>
//         <label>
//           Name:
//           <input type="text" required />
//         </label>
//         <label>
//           Contact:
//           <input type="text" required />
//         </label>
//         <label>
//           Address:
//           <input type="text" required />
//         </label>
//         <button type="submit">Submit</button>

//         <button
//           type="button"
//           className="track-location-button"
//           onClick={handleTrackButtonClick} // Trigger map and marker movement
//         >
//           Track Ambulance
//         </button>
//       </form>

//       {showMap && (
//         <div className="map-preview">
//           <h3>Ambulance Location</h3>
//           <div ref={mapRef} className="map-container" style={{ width: '100%', height: '300px' }}></div>
//         </div>
//       )}

//       {bookingSuccess && <div className="alert">Ambulance service request submitted!</div>}
//     </div>
//   );
// };

// export default AmbulanceDetailsPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ambulanceData } from './Ambulancedata';
import './AmbulanceDetailsPage.css';

const AmbulanceDetailsPage = () => {
  const { ambulanceId } = useParams();
  const ambulance = ambulanceData.find((a) => a.id === parseInt(ambulanceId));
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState('');

  // Example array of time options
  const times = ["20 min", "35 min", "28 min", "50 min", "60 min"];

  // Shuffle the time every 3 seconds using useEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const shuffleTime = () => {
      const randomTime = times[Math.floor(Math.random() * times.length)];
      setEstimatedTime(randomTime);
    };

    shuffleTime(); // Initial call to set the time
    const interval = setInterval(shuffleTime, 3000); // Shuffle every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, ); // No need to include `times` since it's constant

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setIsTrackingEnabled(true);

    // Auto-hide success alert after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };

  const handleTrackButtonClick = () => {
    setShowAlert(true);

    // Auto-hide tracking alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!ambulance) {
    return <h1>Ambulance not found!</h1>;
  }

  return (
    <div className="ambulance-details-page">
      <h1 className="ambulance-name">{ambulance.name}</h1>

      {/* Ambulance Images */}
      <div className="ambulance-images">
        <img src={ambulance.image1} alt={`${ambulance.name} view 1`} className="ambulance-image" />
        <img src={ambulance.image2} alt={`${ambulance.name} view 2`} className="ambulance-image" />
      </div>

      {/* Ambulance Info */}
      <p className="ambulance-contact">
        <strong>Contact:</strong> {ambulance.contact}
      </p>
      <p className="ambulance-location">
        <strong>Location:</strong> {ambulance.location}
      </p>

      <h2 className="section-heading">Facilities</h2>
      <ul className="ambulance-facilities">
        <li>24/7 Availability</li>
        <li>Emergency Medical Assistance</li>
        <li>Equipped with Oxygen Cylinders</li>
        <li>First Aid Kits</li>
        <li>Basic and Advanced Life Support</li>
      </ul>

      {/* Booking Form */}
      <h2 className="section-heading">Book Ambulance</h2>
      <form className="booking-form" onSubmit={handleBookingSubmit}>
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
          <input
            type="text"
            required
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Track Ambulance Location Button */}
      <button
        type="button"
        className={`track-location-button ${isTrackingEnabled ? 'enabled' : 'disabled'}`}
        onClick={handleTrackButtonClick}
        disabled={!isTrackingEnabled}
      >
        🚑 Track Ambulance
      </button>

      {/* Estimated Time Display */}
      <div id="time-display" className="estimated-time">
        Estimated Arrival Time: {estimatedTime}
      </div>

      {/* Tracking Alert Pop-up */}
      {showAlert && (
        <div className="popup-alert">
          <div className="popup-content">
            <h3>🚨 Ambulance is On Its Way! 🚨</h3>
            <p><strong>Starting Point:</strong> {ambulance.location}</p>
            <p><strong>Your Location:</strong> {userAddress}</p>
            <p><strong>Estimated Arrival Time:</strong> {estimatedTime}</p>
            <button onClick={closeAlert} className="popup-close">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {bookingSuccess && (
        <div className="popup-alert success">
          <div className="popup-content">
            <h3>✅ Booking Confirmed!</h3>
            <p>Ambulance service request submitted successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmbulanceDetailsPage;
