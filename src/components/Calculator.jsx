import React, { useState } from 'react'

export function Calculator() {
  // States
  const [display, setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState('')
  const [operator, setOperator] = useState(null)
  const [secondOperand, setSecondOperand] = useState('')

  // event handler functions

  // Clear button click handler
  function clickClearButton(event) {
    setDisplay('0')
    setFirstOperand('')
    setOperator(null)
    setSecondOperand('')
  }

  // Digit and decimal click handler
  // Includes logic to limit to one decimal entry and determine which operand
  // is being affected.
  function clickDigit(digit) {
    if (operator === null) {
      if (firstOperand.includes('.') && digit === '.') {
        // Do Nothing
      } else {
        setFirstOperand(`${firstOperand}${digit}`)
        setDisplay(`${firstOperand}${digit}`)
      }
    } else {
      if (secondOperand.includes('.') && digit === '.') {
        // Do Nothing
      } else {
        setSecondOperand(`${secondOperand}${digit}`)
        setDisplay(`${secondOperand}${digit}`)
      }
    }
  }

  // Operator button click handler
  function clickOperator(chosenOperator) {
    setOperator(chosenOperator)
    console.log(chosenOperator)
  }

  // Equal button even handler
  function clickEquals() {
    let result

    if (operator === '+') {
      result = Number(firstOperand) + Number(secondOperand)
    }

    if (operator === '-') {
      result = Number(firstOperand) - Number(secondOperand)
    }

    if (operator === '*') {
      result = Number(firstOperand) * Number(secondOperand)
    }

    if (operator === '/') {
      result = Number(firstOperand) / Number(secondOperand)
    }

    setDisplay(parseFloat(result.toFixed(8)).toString())
  }

  // Main component (keypad)
  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn ac" onClick={clickClearButton}>
            AC
          </button>
          <button
            className="button op"
            onClick={() => {
              clickOperator('/')
            }}
          >
            &#247;
          </button>
          <button className="button" onClick={() => clickDigit(7)}>
            7
          </button>
          <button className="button" onClick={() => clickDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickDigit(9)}>
            9
          </button>
          <button
            className="button op"
            onClick={() => {
              clickOperator('*')
            }}
          >
            &#215;
          </button>
          <button className="button" onClick={() => clickDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickDigit(6)}>
            6
          </button>
          <button
            className="button op"
            onClick={() => {
              clickOperator('-')
            }}
          >
            &#8722;
          </button>
          <button className="button" onClick={() => clickDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickDigit(3)}>
            3
          </button>
          <button
            className="button op"
            onClick={() => {
              clickOperator('+')
            }}
          >
            &#43;
          </button>
          <button className="button x2" onClick={() => clickDigit(0)}>
            0
          </button>
          <button className="button" onClick={() => clickDigit('.')}>
            .
          </button>
          <button className="button op" onClick={clickEquals}>
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
