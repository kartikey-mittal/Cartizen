import React from 'react';

const data = [
  { count: 46, title: 'ONGOING', color: ['#007bff', '#00bcd4'] },
  { count: 12, title: 'COMPLETED', color: ['#4caf50', '#8bc34a'] },
  { count: 18, title: 'PENDING', color: ['#ff9800', '#ffc107'] },
  { count: 15, title: 'FAILED', color: ['#f44336', '#e91e63'] },
  { count: 255, title: 'FAILED', color: ['#f44336', '#e91e63'] },
];

function Upper() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: '#000',
        padding: '0 2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0.5rem',
            borderRadius: '1rem',
            background: `linear-gradient(to right, ${item.color[0]}, ${item.color[1]})`,
            padding: '.01rem 3rem',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor:"pointer",
            '&:hover': {
              transform: 'translateY(-5px)',
            },
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
  );
}

export default Upper;