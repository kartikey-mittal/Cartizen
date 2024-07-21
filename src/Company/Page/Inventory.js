import React, { useEffect, useState } from 'react';

const initialCardData = [
  { id: 1, title: 'Maggi', stock: '1', price: "20", imgsrc: "https://5.imimg.com/data5/SELLER/Default/2022/7/MU/PJ/SD/5742893/maggi-noodles.jpg" },
  { id: 2, title: 'Ashrivad Atta', stock: '2', price: "200", imgsrc: "https://m.media-amazon.com/images/I/61BEhM3G1JL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, title: 'Zebronics Headphones', stock: '3', price: "500", imgsrc: "https://shop.zebronics.com/cdn/shop/files/Zeb-Thunder-pic5.jpg?v=1702966217&width=1200" },
  { id: 4, title: 'Cadbury Dairy Milk', stock: '6', price: "50", imgsrc: "https://images-cdn.ubuy.co.in/63df4369c8cbe2490914bae6-cadbury-dairy-milk-bar-360g-by.jpg" },
];

const newItems = {
  11: [{ id: 5, title: 'Biscuit', stock: '5', price: "50", imgsrc: "https://m.media-amazon.com/images/I/81c0jxRWx3L.jpg" }],
  12: [
    { id: 5, title: 'Biscuit', stock: '5', price: "50", imgsrc: "https://m.media-amazon.com/images/I/81c0jxRWx3L.jpg" },
    { id: 6, title: 'Namkeen', stock: '10', price: "30", imgsrc: "https://m.media-amazon.com/images/I/91+yVKanvjL.jpg" }
  ],
  13: [
    { id: 5, title: 'Biscuit', stock: '5', price: "50", imgsrc: "https://m.media-amazon.com/images/I/81c0jxRWx3L.jpg" },
    { id: 6, title: 'Namkeen', stock: '10', price: "30", imgsrc: "https://m.media-amazon.com/images/I/91+yVKanvjL.jpg" },
    { id: 7, title: 'Chocolate', stock: '20', price: "100", imgsrc: "https://www.bigbasket.com/media/uploads/p/xxl/40018532_8-nestle-chocolate-classic.jpg" }
  ]
};

const Inventory = ({ itemKey }) => {
  const [cardData, setCardData] = useState(initialCardData);

  useEffect(() => {
    const storedCardData = localStorage.getItem('cardData');
    if (storedCardData) {
      setCardData(JSON.parse(storedCardData));
    }
  }, []);

  useEffect(() => {
    if (itemKey && newItems[itemKey]) {
      setCardData((prevCardData) => {
        const newItemsToAdd = newItems[itemKey].filter(
          newItem => !prevCardData.some(card => card.id === newItem.id)
        );
        if (newItemsToAdd.length > 0) {
          const updatedCardData = [...prevCardData, ...newItemsToAdd];
          localStorage.setItem('cardData', JSON.stringify(updatedCardData));
          return updatedCardData;
        }
        return prevCardData;
      });
    }
  }, [itemKey]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingLeft: "2rem", paddingTop: "2rem" }}>
      {cardData.map((card) => (
        <div key={card.id} style={{
          width: "13vw",
          minWidth: "150px",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: ".5rem"
        }}>
          <div style={{
            width: "100%",
            height: "10rem",
            backgroundImage: `url(${card.imgsrc})`, 
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundColor: "#f0f0f0",backgroundRepeat:'no-repeat'
          }}></div>
          <span style={{ textAlign: "left", margin: "0", alignSelf: "flex-start", marginLeft: "1.1rem", marginTop: ".3rem", fontSize: "1.2rem", fontWeight: "600" ,color:'white'}}>{card.title}</span>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "0", marginTop: ".2rem", padding: "0rem 1rem" }}>
            <div style={{ margin: "0", display: "flex", flexDirection: "row" }}><span style={{ fontSize: "1.5rem", color: "#58b34e" }}>₹</span><span style={{ fontSize: "1.5rem", color: "darkgreen", position: "relative", bottom: ".1rem", marginLeft: ".2rem" }}>{card.price}</span> </div>
            <p style={{
              margin: "0",
              borderRadius: "1rem",
              border: "1px solid black",
              padding: ".1rem 1.3rem",
              backgroundColor: card.stock < 5 ? "red" : "#58b34e",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem"
            }}>{card.stock}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Inventory;
