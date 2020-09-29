import React, { useState } from 'react'

function handleOperandClick(props) {}

function App() {
  const [result, setResult] = useState(0)
  const [operands, setOperands] = useState([])
  const [operators, setOperators] = useState([])

  return (
    <div>
      <ul className="calculatorDisplay">
        <li className="readout">{result}</li>
        <li className="clear">AC</li>
        <li className="operatorButton" operatorValue="/">
          /
        </li>
        <li
          className="digitButton"
          onClick="handleOperandClick"
          operandValue="7"
        >
          7
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
