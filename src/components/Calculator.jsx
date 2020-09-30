import React, { useState } from 'react'

export function Calculator() {
  // States
  const [display, setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState('')
  const [operator, setOperator] = useState(null)
  const [secondOperand, setSecondOperand] = useState('')

  // event handler functions

  function clickClearButton(event) {
    setDisplay('0')
    setFirstOperand('')
    setOperator(null)
    setSecondOperand('')
  }

  function clickDigit(digit) {
    if (operator === null) {
      setFirstOperand(`${firstOperand}${digit}`)
      setDisplay(`${firstOperand}${digit}`)
    } else {
      setSecondOperand(`${secondOperand}${digit}`)
      setDisplay(`${secondOperand}${digit}`)
    }
  }

  function clickOperator(chosenOperator) {
    setOperator(chosenOperator)
    console.log(chosenOperator)
  }

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

    setDisplay(result.toString())
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
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
          <button className="button">.</button>
          <button className="button op" onClick={clickEquals}>
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
