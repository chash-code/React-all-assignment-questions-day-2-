import React from 'react';

function UserInfo({ name, age }) {
  return (
    <div style={{
      backgroundColor: '#e3f2fd',
      padding: '15px',
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}
