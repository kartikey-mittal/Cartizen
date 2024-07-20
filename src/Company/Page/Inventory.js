import React from 'react';

const cardData = [
  { id: 1, title: 'Card 1', stock: '1', price: "20", imgsrc: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(420,420)" },
  { id: 2, title: 'Card 2', stock: '2', price: "20", imgsrc: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(420,420)" },
  { id: 3, title: 'Card 3', stock: '3', price: "20", imgsrc: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(420,420)" },
  { id: 4, title: 'Card 4', stock: '6', price: "20", imgsrc: "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(420,420)" },
];

const Inventory = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" ,paddingLeft:"2rem",paddingTop:"2rem"}}>
      {cardData.map((card) => (
        <div key={card.id} style={{
          width: "13vw",
          minWidth: "150px", // Ensures a minimum width for smaller screens
          padding: "0", // Set padding to 0
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center align items
          paddingBottom:".rem"
        }}>
          <div style={{
            width: "100%",
            height: "10rem",
            background: `url(${card.imgsrc})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}></div>
          <span style={{ textAlign: "left", margin: "0", alignSelf: "flex-start", marginLeft: "1.1rem", marginTop: ".3rem",fontSize:"1.2rem",fontWeight:"600" }}>{card.title}</span>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "0", marginTop: ".2rem",padding:"0rem 1rem" }}>
            <div style={{ margin: "0" ,display:"flex",flexDirection:"row"}}><span style={{fontSize:"1.5rem",color:"green"}}>₹</span><span style={{fontSize:"1.5rem",color:"darkgreen",position:"relative",bottom:".1rem",marginLeft:".2rem"}}>{card.price}</span> </div>
            <p style={{
              margin: "0",
              borderRadius: "1rem",
              border: "1px solid black",
              padding: ".1rem 1.3rem",
              backgroundColor: card.stock < 5 ? "red" : "green",
              color: "white",
              cursor:"pointer",
              fontSize:"1rem"
        //       position:"relative",bottom:".1rem"
            }}>{card.stock}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Inventory;