import React, { useEffect, useState } from 'react';
import './App.css';
import {getValue} from './utils/api'

function App() {
  const [value, updateValue] = useState()

  useEffect(() => {
    getValue('GBP', 'USD')
      .then(value => updateValue(value))
  }, [])

  return (
    <div className="App">
      Value: {value}
    </div>
  );
}

export default App;
