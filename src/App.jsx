import React, { useState } from 'react'

function handleClick(event) {
  console.log('click')
}

function App() {
  const [result, setResult] = useState(0)
  const [firstOperandArray, setFirstOperandArray] = useState([])
  const [secondOperandArray, setSecondOperandArray] = useState([])
  const [enableSecondOperandArray, setEnableSecondOperandArray] = useState(
    false
  )
  const [operators, setOperators] = useState([])
  const [display, setDisplay] = useState(0)
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const operatorButtons = ['/', '*', '-', '+']

  return (
    <div>
      <ul className="calculatorDisplay">
        <li className="readout">{display}</li>
        <li className="clear">AC</li>
        <li className="operatorButton">/</li>
        <li className="digitButton">
          <input type="button" onClick={handleClick} />
        </li>
        <li className="digitButton">8</li>
        <li className="digitButton">9</li>
        <li className="operatorButton">*</li>
        <li className="digitButton">4</li>
        <li className="digitButton">5</li>
        <li className="digitButton">6</li>
        <li className="operatorButton">-</li>
        <li className="digitButton">1</li>
        <li className="digitButton">2</li>
        <li className="digitButton">3</li>
        <li className="operatorButton">+</li>
        <li className="zeroButton">0</li>
        <li className="digitButton">.</li>
        <li className="operatorButton">=</li>
      </ul>
    </div>
  )
}

export default App
