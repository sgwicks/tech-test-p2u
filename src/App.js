import React, { useEffect, useState } from 'react';
import './App.css';
import {getValue} from './utils/api'
import Dropdown from './components/Dropdown';

function App() {
  const [value, updateValue] = useState(0)


  useEffect(() => {
    
  }, [])

  const handleCalculation = () => {
    return getValue('GBP', 'USD')
    .then(value => updateValue(value))
  }

  return (
    <div className="App">
      Convert
        <Dropdown />
        <Dropdown />
      <form>
        <label>From: <input /></label>
        <label>To: <input /></label>
      </form>
      <p>Value: {value}</p>
      <button onClick={handleCalculation}>Calculate value</button>
    </div>
  );
}

export default App;
