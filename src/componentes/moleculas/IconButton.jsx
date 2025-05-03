import React from 'react';

const IconButton = ({ icon, label, onClick }) => (
  <button onClick={onClick} style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }}>
    <span>{icon}</span>
    <span>{label}</span>
  </button>
);

export default IconButton;
