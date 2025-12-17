import React from 'react';

function MessageCard({ title, message }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ color: '#333', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#666' }}>{message}</p>
    </div>
  );
}

export default MessageCard;
