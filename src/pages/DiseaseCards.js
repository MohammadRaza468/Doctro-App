import React from "react";
import { useNavigate } from "react-router-dom";

const diseases = [

  { id: 1, name: "Diabetes", img: "/images/DiabetesTreatment.avif" },
  { id: 2, name: "Asthma", img: "/images/Asthma.avif" },
  { id: 3, name: "Hypertension", img: "/images/Hypertension.avif" },
  { id: 4, name: "Cancer", img: "/images/Cancer.avif" },
  { id: 5, name: "Pneumonia", img: "/images/Pneumonia.avif" },
  { id: 6, name: "Migraine", img: "/images/Migraine.avif" },
//   { id: 7, name: "Allergies", img: "/images/allergies.jpg" },
//   { id: 8, name: "Chronic Pain", img: "/images/ChronicPain.avif" },
];

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
    padding: "20px",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "15px",
    cursor: "pointer",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    background: "white",
  },
  cardHover: {
    transform: "scale(1.1)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px 15px 0 0",
    transition: "transform 0.4s ease",
  },
  imageHover: {
    transform: "scale(1.15)",
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    opacity: "0",
    transition: "opacity 0.4s ease",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  overlayHover: {
    opacity: "1",
  },
};

const DiseaseCards = () => {
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transform = styles.cardHover.transform;
    card.style.boxShadow = styles.cardHover.boxShadow;

    const img = card.querySelector("img");
    img.style.transform = styles.imageHover.transform;

    const overlay = card.querySelector(".overlay");
    overlay.style.opacity = styles.overlayHover.opacity;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "";
    card.style.boxShadow = "";

    const img = card.querySelector("img");
    img.style.transform = "";

    const overlay = card.querySelector(".overlay");
    overlay.style.opacity = "";
  };

  return (
    <div style={styles.grid}>
 <h2
  style={{
    fontSize: "2.8rem",
    fontWeight: "bold",
    textAlign: "center",
    margin: "1.5rem 0",
    color: "#333",
    textShadow: "#333",
    boxShadow: "#333",
    display: "inline-block",
    padding: "10px 20px",
    borderRadius: "10px",
    animation: "heartbeat 1.5s ease-in-out infinite",
  }}
>
  Find Best Doctors For You
</h2>




      {diseases.map((disease) => (
        <div
          key={disease.id}
          style={styles.card}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate(`/disease/${disease.id}`)}
        >
          <img src={disease.img} alt={disease.name} style={styles.image} />
          <div className="overlay" style={styles.overlay}>
            {disease.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiseaseCards;
