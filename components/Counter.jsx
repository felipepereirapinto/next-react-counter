import { useState } from 'react'
import Button from './Button'

function Counter() {
  const [counter, setCounter] = useState(1)

  function addCounter() {
    setCounter(counter + 1)
  }

  function subCounter() {
    setCounter(counter - 1)
  }
  
  function resetCounter() {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <Button onClick={subCounter}>-</Button>
        <Button onClick={resetCounter}>0</Button>
        <Button onClick={addCounter}>+</Button>
      </div>
    </>
  )
}

export default Counter