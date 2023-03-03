import React, { useState, useEffect } from 'react';
import './State.css';

function State() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='stateHolder'>
      <h1>Infinite Counter</h1>
      <h3>{count}</h3>
    </div>
  );
}

export default State;
