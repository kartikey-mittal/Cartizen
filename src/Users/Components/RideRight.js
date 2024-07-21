import React, { useState } from "react";
import { FaMapMarkerAlt, FaRuler, FaStore, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import RideMap from "./RideMap";

const RideRight = () => {
  // Array of card data (up to 3 orders)
  const orders = [
    { id: "ODID001", address: "A-1401,French Apartment,Sec 16B", distance: "2.5 KM", shop: "BlinkMart" },
    { id: "ODID002", address: "C-302,French Apartment,Sec 16B", distance: "3.2 KM", shop: "Zepso" },
    // { id: "ODID003", address: "789 Oak St, Uptown", distance: "1.8 KM", shop: "SpeedyShop" },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div
      style={{
        borderRadius: "2rem",
        backgroundColor: "#f2f2f2",
        padding: "2rem",
        margin: "2rem",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", width: "80%" }}>Batch Found!</h1>
        <div
          style={{
            backgroundColor: "#58b34e",
            borderRadius: "10rem",
            padding: "0.5rem 2rem",
            fontSize: "0.8rem",
            color: "white",
          }}
        >
          ACCEPTED
        </div>
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
              backgroundColor: "#fff",
              padding: '0.5rem',
              marginBottom: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
          
              <span style={{ fontSize: "1.5rem" ,fontWeight:'800'}}>{order.id}</span>
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
        onClick={openModal}
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

      {/* Modal Component */}
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Rider Details"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              padding: '2rem',
              overflow: 'hidden',
            },
          }}
        >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              fontSize: "2rem",
              color: "black",
              cursor: "pointer",
            }}
          >
            <FaTimes />
          </button>

          <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
<RideMap/>
          </div>
         
        </div>
      </Modal>
    </div>
  );
};

export default RideRight;
