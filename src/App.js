import React, { useState } from 'react';
import './App.css';
import {getValue} from './utils/api'
import Dropdown from './components/Dropdown';

function App() {
  const [value, updateValue] = useState(0)
  const [c_from, update_c_from] = useState('GBP')
  const [c_to, update_c_to] = useState('USD')

  const handleCalculation = () => {
    return getValue('GBP', 'USD')
    .then(value => updateValue(value))
  }

  return (
    <div className="App">
      Convert
        <Dropdown updateFn={update_c_from} />
        <Dropdown updateFn={update_c_to} />
      <form>
        <label>From: {c_from}</label>
        <label>To: {c_to}</label>
      </form>
      <p>Value: {value}</p>
      <button onClick={handleCalculation}>Calculate value</button>
    </div>
  );
}

export default App;
