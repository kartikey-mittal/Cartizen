import React from "react";
import { FaUserCircle, FaPhone, FaCheckCircle } from "react-icons/fa";

const RideLeft = () => {
  // Example rider data
  const riders = [
    { name: "John Doe", number: "+1234567890" },
    { name: "Jane Smith", number: "+0987654321" },
    { name: "Mike Johnson", number: "+1122334455" },
  ];

  return (
    <div
      style={{
        borderRadius: "2rem",
        backgroundColor: "white",
        padding: "2rem",
        margin: "2rem",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", width: "80%" }}>Riders</h1>
      
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: '0.2rem',
        }}
      >
        {riders.map((rider, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "0.7rem",
              backgroundColor: "#f4f4f4",
              padding: '0.8rem',
              marginBottom: '0.5rem',
              gap: '1rem',
            }}
          >
            {/* First Column: Circle */}
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
              }}
            >
              {/* <FaUserCircle /> Uncomment and add image later */}
            </div>

            {/* Second Column: Name and Number */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {rider.name}
              </div>
              <div style={{ fontSize: "1rem", color: "gray" }}>
                {rider.number}
              </div>
            </div>

            {/* Third Column: Green Circle */}
            <div
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
              }}
            >
              {/* <FaCheckCircle /> Uncomment and add icon later */}
            </div>
          </div>
        ))}
      </div>

      {/* Full-Width Button */}
      <button
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "1rem",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "auto",
        }}
      >
        VIEW
      </button>
    </div>
  );
};

export default RideLeft;
