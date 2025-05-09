import React, { useReducer } from 'react'

const Reducer = () => {
    let initialValue = 0;
    function reducer(state, action) {
        switch(action.type) {
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            default:
                return state
        }
    }
    const[state, dispatch] = useReducer(reducer, initialValue)
   return (
    <div>
      <button onClick={() => dispatch({type : "INCREMENT"})}>+</button>
      <p>{state}</p>
      <button onClick={() => dispatch({type : "DECREMENT"})}>-</button>
    </div>
  )
}

export default Reducer
