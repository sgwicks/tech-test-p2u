import React, { useEffect, useState } from 'react';
import './App.css';
import {getValue} from './utils/api'

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
      Value: {value}
      <button onClick={handleCalculation}>Calculate value</button>
    </div>
  );
}

export default App;
