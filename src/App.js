import React, { useState, useEffect, useRef, useContext } from 'react';
import './App.css';
import { CounterContext } from './CounterContext';

function App() {
  const { count, setCount } = useContext(CounterContext);
  const inputRef = useRef();

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => {
    setCount(0);
    inputRef.current.focus();
  };

  const handleIncrementByInput = () => {
    const value = parseInt(inputRef.current.value);
    if (!isNaN(value)) setCount(prev => prev + value);
  };

  return (
    <div className="app">
      <h1>React Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement}>➖ Decrement</button>
        <button onClick={handleReset}>🔄 Reset</button>
      </div>
      <div className="input-section">
        <input type="number" ref={inputRef} placeholder="Enter number" />
        <button onClick={handleIncrementByInput}>Add to Counter</button>
      </div>
    </div>
  );
}

export default App;
