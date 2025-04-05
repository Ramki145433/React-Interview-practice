import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Thunk = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => {
        return state
    })
    console.log(data)
    async function fetchData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        let data = await res.json()
        dispatch({type : "middleware", payload : data})
    }
  return (
    <div>
      <button onClick={() => dispatch(fetchData)}>Get Details</button>
      <p>id : {data.middleware.id}</p>
      <h3>title : {data.middleware.title}</h3>
      <p>body : {data.middleware.body}</p>
    </div>
  )
}

export default Thunk
