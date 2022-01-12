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
  
  return (
    <>
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <Button onClick={addCounter}>+</Button>
        <Button onClick={subCounter}>-</Button>
      </div>
    </>
  )
}

export default Counter