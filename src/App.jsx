import React from 'react';
import Counter from './Counter';
import Calculator from './Calculator';
import MessageCard from './MessageCard';
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', backgroundColor: '#4CAF50', color: 'white', padding: '20px', margin: '0' }}>
        React Assignment - All Questions
      </h1>
      
      {/* Q1: Counter */}
      <div style={{ border: '3px solid #4CAF50', margin: '20px', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#4CAF50' }}>Q1: Counter Using useState</h2>
        <Counter />
      </div>
      
      {/* Q2: Calculator */}
      <div style={{ border: '3px solid #2196F3', margin: '20px', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#2196F3' }}>Q2: Basic Calculator Component</h2>
        <Calculator />
      </div>
      
      {/* Q3: Message Cards */}
      <div style={{ border: '3px solid #FF9800', margin: '20px', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#FF9800' }}>Q3: Reusable Component with Props</h2>
        <MessageCard 
          title="Welcome!" 
          message="This is the first message card." 
        />
        <MessageCard 
          title="Hello React" 
          message="This is the second message card with different content." 
        />
        <MessageCard 
          title="Props Example" 
          message="Each card receives different props." 
        />
        <MessageCard 
          title="Reusable Components" 
          message="This component can be used multiple times!" 
        />
      </div>
      
      {/* Q4: Parent-Child Components */}
      <div style={{ border: '3px solid #9C27B0', margin: '20px', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#9C27B0' }}>Q4: Parent-Child Components</h2>
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
