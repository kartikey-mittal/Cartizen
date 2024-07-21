import React from "react";
import MapHome from "./MapHome";
const UserHome = () => {
  const data = [
    { count: 6, title: 'RIDERS', color: ['#212121', '#212121'] },
    { count: `4.4 KM`, title: 'DISTANCE', color: ['#212121', '#212121'] },
    { count: 18, title: 'PENDING', color: ['#212121', '#212121'] },
    { count: 15, title: 'FAILED', color: ['#212121', '#212121'] },
  ];

  return (
    <div style={{ height: '85.5vh', width: "82vw", backgroundColor: 'pink', display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: "20%", height: '100%', backgroundColor: 'red' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#000',
            padding: '0 2rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: "100%",
            paddingTop: '0.2rem'
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                background: `linear-gradient(to right, ${item.color[0]}, ${item.color[1]})`,
                padding: '.5rem 1rem',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                cursor: "pointer",
                width: '100%',
                height: '22%',
                margin: '1% 0',
              }}
            >
              <span style={{ fontSize: '2.2rem', color: 'white', textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                {item.count}
              </span>
              <span
                style={{
                  fontSize: '.8rem',
                  background: `linear-gradient(to right, ${item.color[0]}, ${item.color[1]})`,
                  padding: '0.5rem 1rem',
                  borderRadius: '.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{width:'80%',height: '100%', backgroundColor: '#f2f2f2'}}>
<MapHome/>
      </div>
    </div>
  );
};

export default UserHome;
