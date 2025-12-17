
import React from 'react';
import UserInfo from './UserInfo';

function UserProfile() {
  const userName = "John Doe";
  const userAge = 25;

  return (
    <div style={{
      border: '2px solid #2196F3',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h3 style={{ color: '#2196F3' }}>User Profile</h3>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}
