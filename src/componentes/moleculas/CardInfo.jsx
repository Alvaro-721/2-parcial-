import React from 'react';

const CardInfo = ({ title, description }) => (
  <div style={{
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    margin: '10px 0'
  }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default CardInfo;