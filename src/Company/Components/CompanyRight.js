import React from "react";
import { FaMapMarkerAlt, FaRuler, FaStore } from "react-icons/fa";

const CompanyRight = () => {
  // Array of card data (up to 3 orders)
  const orders = [
    { id: "ODID001", address: "123 Main St, City Center", distance: "2.5 KM", shop: "ShopEasy" },
    { id: "ODID002", address: "456 Elm St, Downtown", distance: "3.2 KM", shop: "QuickMart" },
    // { id: "ODID003", address: "789 Oak St, Uptown", distance: "1.8 KM", shop: "SpeedyShop" },
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
        <h1 style={{ fontSize: "2rem", width: "80%" }}>Batch Found!</h1>
        <div
          style={{
            backgroundColor: "#58b34e",
            borderRadius: "100%",
            height: "30px",
            width: "30px",
          }}
        ></div>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: '0.2rem',
        }}
      >
        {orders.map((order, index) => (
          <div
            key={index}
            style={{
              borderRadius: "0.7rem",
              backgroundColor: "yellow",
              padding: '0.5rem',
              marginBottom: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ color: "black", marginRight: "0.5rem" }} />
              <span style={{ fontSize: "1.5rem" }}>{order.id}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ color: "black", marginRight: "0.5rem" }} />
              <span>{order.address}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRuler style={{ color: "black", marginRight: "0.5rem" }} />
              <span>{order.distance}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaStore style={{ color: "black", marginRight: "0.5rem" }} />
              <span>{order.shop}</span>
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

export default CompanyRight;
