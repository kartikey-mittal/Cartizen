import React from "react";

const CompanyMainR = () => {
  // Array of items
  const items = [
    { name: "MAGGI 20 GM", quantity: 2, price: 10 },
 
  ];

  // Calculate total price
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      style={{
        borderRadius: "2rem",
        backgroundColor: "white",
        padding: "1.2rem",
        margin: "0rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",boxShadow: '0 2px 5px rgba(0, 0, 0, .5)',
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", width: "80%",fontWeight:'500' }}>ID 807678</h1>
        <div
          style={{
            backgroundColor: "#58b34e",
            borderRadius: "10rem",padding:"0.5rem 2rem"
           ,fontSize:"0.8REM",color:"white"
          }}
        >ACCEPTED</div>
      </div>

      {/* Adjusted ZEPTO styling */}
      <span
        style={{
          backgroundColor: "white",
          color: "black",
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
          <span style={{ fontSize: "1.2rem" }}>+917678416005</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Address</span>
          <span style={{ fontSize: "1.2rem" }}>SUPERTECH ECO VILLAGE 1,NOIDA,UTTAR PRADESH</span>
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
          backgroundColor: "black",
          color: "white",
          border: "none",
          fontSize: "1rem",
          cursor: "pointer",fontWeight:"500"
        }}
      >
        DONE
      </button>
    </div>
  );
};

export default CompanyMainR;
