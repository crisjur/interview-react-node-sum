import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { sumNumbers } from './service/api';

function App() {
  const [numbers, setNumbers] = useState({
    num1: 0,
    num2: 0,
  })
  const [sum, setSum] = useState(0)

  const onChangeInput = useCallback(
    (e: any) => {
      if (e.target.validity.valid) {
        const { name, value } = e.target;
        setNumbers(num => ({...num, [name]: parseInt(value ? value : 0)}))
      }
    },
    [setNumbers],
  )

  const onSubmit = useCallback(
    () => {
      sumNumbers(numbers)
      .then(res => {
        const { sum } = res.data;
        setSum(sum);
      })
      .catch(e => console.log(e))
    },
    [numbers],
  )
  return (
    <div className="container">
      <div className="card">
        <div className="header">CALCULATOR</div>
        <div className="form-wrapper">
          <div className="form">
            <div className="label">Enter the numbers</div>
            <input
              className="input"
              pattern="[0-9]*"
              name="num1"
              value={numbers?.num1}
              onChange={onChangeInput}
              placeholder="number 1"
            />
            <input
              className="input"
              name="num2"
              value={numbers?.num2}
              onChange={onChangeInput}
              placeholder="number 1"
            />
            <div className="btn-sum" onClick={onSubmit}>Sum</div>
            <div className="divider" />
            <div className="label">Results</div>
            <input value={sum} readOnly className="input sum-result" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
