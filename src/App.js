import React, { useState, useEffect } from 'react';
import './App.css';
import {getValue, postLog, getLogs} from './utils/api'
import Dropdown from './components/Dropdown';

function App() {
  const [value, updateValue] = useState(0)
  const [c_from, update_c_from] = useState('GBP')
  const [c_to, update_c_to] = useState('USD')
  const [fromValue, updateFromValue] = useState(0)
  const [total, updateTotal] = useState(0)
  const [logs, updateLogs] = useState([{user_id: 'test',
  currency_from: 'GBP',
  currency_to: 'EUR',
  exchange_rate: 0.6,
  amount_given: 100,
  amount_received: 60,
  date: '2019-02-03'}])
  const [dateFrom, updateDateFrom] = useState()
  const [dateTo, updateDateTo] = useState()

  const sanityCheck = (num) => {
    const sanity = parseFloat(num).toFixed(2)
    return isNaN(sanity) ? 0 : sanity
  }

  const handleCalculation = () => {
    const sanityValue = sanityCheck(fromValue)
    return getValue(c_from, c_to)
    .then(value => {
      const newTotal = sanityCheck(sanityValue * value)
      updateTotal(newTotal)
      updateValue(value)
      postLog(c_from, c_to, value, sanityValue, newTotal)
      .then(() => {
        getLogs().then((logs) => {
          updateLogs(logs)
        })
      })
    })
    
  }

  const handleInput = (input, updateFn) => {
    updateFn(input)
  }

  const handleDates = () => {
    getLogs(dateFrom, dateTo).then((logs) => {
      updateLogs(logs)
    })
  }

  useEffect(() => {
    getLogs().then((logs) => {
      updateLogs(logs)
    })
  }, [])

  return (
    <div className="App">
      <h2>Convert</h2>
      Amount: <input value={fromValue} onChange={(event) => handleInput(event.target.value, updateFromValue)} /><br />
      From: {c_from} <Dropdown updateFn={update_c_from} c_default={'GBP'} /><br />
      To: {c_to} <Dropdown updateFn={update_c_to} c_default={'USD'} />
      <p>Value: {total}</p>
      <button onClick={handleCalculation}>Calculate value</button>
      <h2>Audit Logs</h2>
      <table>
        <tbody>
        <tr>
          <th>Log ID</th>
          <th>User ID</th>
          <th>Currency Given</th>
          <th>Currency Received</th>
          <th>Exchange Rate</th>
          <th>Amount Given</th>
          <th>Amount Received</th>
          <th>Date</th>
        </tr>
        {logs.map((entry, i) => {
          const {
            log_id,
            user_id,
            currency_from,
            currency_to,
            exchange_rate,
            amount_given,
            amount_received,
            date
          } = entry
          return (
            <tr key={`tr${i}`}>
              <td>{log_id}</td>
              <td>{user_id}</td>
              <td>{currency_from}</td>
              <td>{currency_to}</td>
              <td>{exchange_rate}</td>
              <td>{amount_given}</td>
              <td>{amount_received}</td>
              <td>{date.slice(0, 10)}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <label>Date from: <input type={'date'} onChange={(event) => handleInput(event.target.value, updateDateFrom)} /></label><br />
      <label>Date to: <input type={'date'} onChange={(event) => handleInput(event.target.value, updateDateTo)} /></label><br />
      <button onClick={handleDates}>Search</button>
    </div>
  );
}

export default App;
