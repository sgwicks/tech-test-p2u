import React, { useState } from 'react';
import './App.css';
import {getValue, postLog} from './utils/api'
import Dropdown from './components/Dropdown';

function App() {
  const [value, updateValue] = useState(0)
  const [c_from, update_c_from] = useState('GBP')
  const [c_to, update_c_to] = useState('USD')
  const [fromValue, updateFromValue] = useState(0)
  const [total, updateTotal] = useState(0)

  const handleCalculation = () => {
    return getValue(c_from, c_to)
    .then(value => {
      const newTotal = fromValue * value
      updateTotal(newTotal)
      updateValue(value)
      postLog(c_from, c_to, value, fromValue, newTotal)
    })
  }

  const handleInput = (input, updateFn) => {
    updateFn(input)
  }

  return (
    <div className="App">
      Convert<br />
      Amount: <input value={fromValue} onChange={(event) => handleInput(event.target.value, updateFromValue)} /><br />
      From: {c_from} <Dropdown updateFn={update_c_from} c_default={'GBP'} /><br />
      To: {c_to} <Dropdown updateFn={update_c_to} c_default={'USD'} />
      <p>Value: {total}</p>
      <button onClick={handleCalculation}>Calculate value</button>
    </div>
  );
}

export default App;
