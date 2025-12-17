import React from 'react';
import Counter from './Counter';
import Calculator from './Calculator';
import MessageCard from './MessageCard';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Assignment</h1>
      
      <div style={{ border: '2px solid #ccc', margin: '20px', padding: '20px' }}>
        <h2>Q1: Counter</h2>
        <Counter />
      </div>
      
      <div style={{ border: '2px solid #ccc', margin: '20px', padding: '20px' }}>
        <h2>Q2: Calculator</h2>
        <Calculator />
      </div>
      
      <div style={{ border: '2px solid #ccc', margin: '20px', padding: '20px' }}>
        <h2>Q3: Message Cards</h2>
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
    </div>
  );
}

