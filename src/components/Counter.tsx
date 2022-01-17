import { useState } from 'react'

import Container from './Container'
import Title from './Title'
import Display from './Display'
import Button from './Button'

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const addCounter = () => setCounter(counter + 1)
  const subCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <Container>
      <Title>Counter</Title>
      <Display>{counter}</Display>

      <div>
        <Button onClick={subCounter} icon={'-'} color='danger' />
        <Button onClick={resetCounter} icon={'0'} color='primary' />
        <Button onClick={addCounter} icon={'+'} color='success' />
      </div>
    </Container>
  )
}

export default Counter