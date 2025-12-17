import React from 'react';
import Counter from './Counter';
import Calculator from './Calculator';

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
    </div>
  );
}

export default App;
