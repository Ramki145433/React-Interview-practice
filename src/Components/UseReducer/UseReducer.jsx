import React, {useReducer } from 'react'

export const UseReducer = () => {
    let initialValue = 0;
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT" :
                return (state + 1)
            case "DECREMENT" :
                return (state - 1)
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <div className='counter'>
      <button onClick={() => dispatch({type : "INCREMENT", payload : initialValue})}>Increment</button>
      <p>{state}</p>
      <button onClick={() => dispatch({type : "DECREMENT", payload : initialValue})}>Decrement</button>
    </div>
  )
}

export default UseReducer
