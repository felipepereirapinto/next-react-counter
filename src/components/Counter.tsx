import { useState } from 'react'
import Button from './Button'

function Counter() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => setCounter(counter + 1)
  const subCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <div 
      className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center'
    >
      <h1 className='text-center h1'>Counter</h1>

      <p 
        className='text-center display-1 m-5'
      >
        {counter}
      </p>
      
      <div 
        className='row' 
      >
        <Button onClick={subCounter} icon={'-'} className='btn-danger col mx-1' />
        <Button onClick={resetCounter} icon={'0'} className='btn-primary col mx-1' />
        <Button onClick={addCounter} icon={'+'} className='btn-success col mx-1' />
      </div>
    </div>
  )
}

export default Counter