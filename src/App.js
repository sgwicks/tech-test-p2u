import React, { useEffect, useState } from 'react';
import './App.css';
import getGreeting from './utils/api'

function App() {
  const [greeting, updateGreeting] = useState('')

  useEffect(() => {
    getGreeting()
      .then((newGreeting) => updateGreeting(newGreeting))
  }, [])

  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
