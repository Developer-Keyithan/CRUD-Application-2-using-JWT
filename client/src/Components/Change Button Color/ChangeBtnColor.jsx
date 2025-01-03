import React, { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  
  useEffect(() => {
    const handleButtonClick = (e) => {
      if (e.target.name === 'increase') {
        setNumber(prev => prev + 1);
      } else if (e.target.name === 'decrease') {
        setNumber(prev => prev - 1);
      }
    };

    document.querySelectorAll('.btn').forEach(button =>
      button.addEventListener('click', handleButtonClick)
    );

    return () => {
      document.querySelectorAll('.btn').forEach(button =>
        button.removeEventListener('click', handleButtonClick)
      );
    };
  }, []); 

  return (
    <div>
      <h1>Number: {number}</h1>
      {number === 3 && <p>Your Number is 3</p> }
      {number > 3 && <p>Your Number is Greater-than 3</p> }
      <button className="btn" name="decrease" disabled={number === 0}>-</button>
      <button className="btn" name="increase">+</button>
    </div>
  );
}

export default App;
