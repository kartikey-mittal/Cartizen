import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import OrdersMap from "./OrdersMap";
import CompanyMainR from "./CompanyMainR";

const initialRiders = [
  { name: "ORDERID 102", number: "KARTIKEY", price: "Rs 2100" },
  { name: "ORDERID 103", number: "AVIRAL", price: "Rs 1800" },
  { name: "ORDERID 104", number: "LASKHAY", price: "Rs 2500" },
];

const newOrders = {
  11: [{ name: "ORDERID 105", number: "NEW RIDER", price: "Rs 1500" }],
  12: [{ name: "ORDERID 106", number: "ANOTHER RIDER", price: "Rs 1600" }],
  13: [{ name: "ORDERID 107", number: "YET ANOTHER RIDER", price: "Rs 1700" }],
};

const CompanyLeft = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);
  const [riders, setRiders] = useState([]);
  const [itemKey, setItemKey] = useState(null);

  useEffect(() => {
    const itemKey = localStorage.getItem('itemKey');
    setItemKey(itemKey);
  }, []);

  useEffect(() => {
    // Load existing orders from local storage
    const storedRiders = localStorage.getItem('companyOrders');
    if (storedRiders) {
      setRiders(JSON.parse(storedRiders));
    } else {
      setRiders(initialRiders);
    }
  }, []);

  useEffect(() => {
    if (itemKey && newOrders[itemKey]) {
      setRiders(prevRiders => {
        const newOrdersToAdd = newOrders[itemKey].filter(
          newOrder => !prevRiders.some(rider => rider.name === newOrder.name)
        );
        if (newOrdersToAdd.length > 0) {
          // Add new orders to the top
          const updatedRiders = [...newOrdersToAdd, ...prevRiders];
          localStorage.setItem('companyOrders', JSON.stringify(updatedRiders));
          return updatedRiders;
        }
        return prevRiders;
      });
    }
  }, [itemKey]);

  const openModal = (rider) => {
    setSelectedRider(rider);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRider(null);
  };

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
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", width: "80%" ,fontWeight:'800'}}>Ongoing Orders</h1>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0.2rem",
        }}
      >
        {riders.map((rider, index) => (
          <div
            key={index}
            onClick={() => openModal(rider)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "0.7rem",
              backgroundColor: "#f4f4f4",
              padding: "0.8rem",
              marginBottom: "0.5rem",
              gap: "1rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdAhF4g8noUwT14Mi8dI8lwyJgrj54JLKh0pFTSRO0huGL3oPwX4F9mUV-0Kathl3SoQ&usqp=CAU')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <FaUserCircle /> Uncomment and add image later */}
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span style={{ fontSize: "1rem", color: "gray" }}>{rider.name}</span>
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
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {/* <FaCheckCircle /> Uncomment and add icon later */}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span style={{ fontSize: "1rem", color: "gray" }}>{rider.number}</span>
                <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{rider.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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

      {selectedRider && (
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
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <button onClick={closeModal} style={{ fontSize: "1.5rem", cursor: "pointer" }}>X</button>
          </div>
          <div style={{ display: "flex", height: "95%" }}>
            <div style={{ width: "50%", backgroundColor: "white", padding: "0rem", marginRight: "0.5rem",borderRadius:"21rem" }}>
              <OrdersMap />
            </div>
            <div style={{ width: "50%", backgroundColor: "white", padding: "0rem", marginLeft: "0.5rem" }}>
              <CompanyMainR />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CompanyLeft;
