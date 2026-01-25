import React, { useContext } from 'react'
import useCount from '../context/countercontext'
function Counter() {
  const {count, setCount} = useCount();
  return (
    <div>
        <button onClick={() => setCount(count + 1)} >increment</button>
        <button onClick={() => setCount(count - 1)} >decrement</button>
    </div>
  )
}

export default Counter