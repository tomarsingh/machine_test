
import React from 'react'

export default function ChildOne({onIncrement,onDecrement}) {
  return (
    <>

    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    
      
    </>
  )
}
