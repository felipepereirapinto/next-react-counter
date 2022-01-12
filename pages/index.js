import { useState } from 'react'


function Counter() {
  const [counter, setCounter] = useState(1)

  function addCounter() {
    setCounter(counter + 1)
  }

  function subCounter() {
    setCounter(counter - 1)
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={addCounter}>+</button>
      <button onClick={subCounter}>-</button>
    </div>
  )
}

function Home() {
  return <Counter />
}


export default Home