import React from "react";

const UserMainR = () => {
  // Array of items
  const items = [
    { name: "MAGGI 20 GM", quantity: 2, price: 10 },
    { name: "BISCUITS 10 PKT", quantity: 3, price: 15 },
    { name: "CHIPS 5 PKT", quantity: 4, price: 20 },
    { name: "SOFT DRINK 2 L", quantity: 1, price: 25 }
  ];

  // Calculate total price
  const total = items.reduce((acc, item) => acc + item.price, 0);

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
        <h1 style={{ fontSize: "2rem", width: "80%" }}>ID 807678</h1>
        <div
          style={{
            backgroundColor: "#58b34e",
            borderRadius: "100%",
            height: "30px",
            width: "30px",
          }}
        ></div>
      </div>

      {/* Adjusted ZEPTO styling */}
      <span
        style={{
          backgroundColor: "red",
          color: "wheat",
          borderRadius: "1rem",
          padding: "0.4rem 1rem",  // Horizontal padding only
          border: "1px solid black",
          display: "inline-block",  // Fit background to text
          marginBottom: "1rem",
          width:'20%',textAlign:'center'
        }}
      >
        ZEPTO
      </span>

      <div style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Name</span>
          <span style={{ fontSize: "1.2rem" }}>Kartikey Mittal</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Phone</span>
          <span style={{ fontSize: "1.2rem" }}>+1234567890</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Address</span>
          <span style={{ fontSize: "1.2rem" }}>123 Main St, City, Country</span>
        </div>
      </div>

      {/* Item List */}
      <div
        style={{
          margin: "0.2rem",
          borderRadius: "1rem",
          backgroundColor: "#f4f4f4",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "0.5rem", fontSize: "1rem" }}>{item.name}</span>
            <span style={{ marginRight: "auto", marginLeft: "1rem", fontSize: "0.8rem" }}>
              X {item.quantity}
            </span>
            <span>₹ {item.price}</span>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            borderTop: "1px solid #ddd",
            paddingTop: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
      </div>

      {/* Full-Width Button */}
      <button
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "1rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default UserMainR;
