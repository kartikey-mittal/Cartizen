import React from "react";
import { FaUserCircle, FaPhone, FaCheckCircle } from "react-icons/fa";

const RideLeft = () => {
  // Example rider data
  const riders = [
    { name: "Amit", number: "UP16AB2003" },
    { name: "Pankaj", number: "UP16AB2004" },
    { name: "Rahul", number: "UP16AB2005" },
    { name: "Mohan", number: "UP16AB2006" },
    { name: "Akash", number: "UP16AB2007" },
  ];

  return (
    <div
      style={{
        borderRadius: "2rem",
        backgroundColor: "#f1f1f1",
        padding: "2rem",
        margin: "2rem",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
              backgroundColor: "#f8f8f8",
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
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem",
    backgroundImage: "url('https://img.freepik.com/premium-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
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

            {/* Third Column: #58b34e Circle */}
            <div
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#58b34e",
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
     
    </div>
  );
};

export default RideLeft;
