import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  const performAction = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    if (operation === 'Add') {
      result = n1 + n2;
    } else if (operation === 'Subtract') {
      result = n1 - n2;
    } else if (operation === 'Multiply') {
      result = n1 * n2;
    }

    const newResult = `${n1} ${operation} ${n2} = ${result}`;
    setResults([...results, newResult]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Calculator</h2>
      
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      >
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      
      <button
        onClick={performAction}
        style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Perform Action
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Results:</h3>
        {results.map((result, index) => (
          <div key={index} style={{ padding: '5px', borderBottom: '1px solid #ddd' }}>
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
