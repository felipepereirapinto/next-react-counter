import { useState } from 'react'
import Button from './Button'

function Counter() {
  const [counter, setCounter] = useState(1)

  const addCounter = () => setCounter(counter + 1)
  const subCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <div>
        <Button onClick={subCounter} icon={'-'} />
        <Button onClick={resetCounter} icon={'0'} />
        <Button onClick={addCounter} icon={'+'} />
      </div>
    </>
  )
}

export default Counter