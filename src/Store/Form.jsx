import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Store.css"
import { deposit, withdraw, updateName, updateMobile, reset } from './Actions.js'

const Form = () => {
    const [amount, setAmount] =  useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    let dispatch = useDispatch();
  return (
    <div style={{padding : "2rem"}}>
      <div className="first">
        <input type="number" placeholder='Enter Amount' 
        value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => {
            dispatch(deposit(amount));
            setAmount("")
        }} >Deposit</button>
        <button onClick={() => {
            dispatch(withdraw(amount));
            setAmount("")
        }}>Withdraw</button>
      </div>

      <div className="name">
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name}/>
        <button onClick={() => {
            dispatch(updateName(name));
            setName("")
        }}>Add Name</button>
      </div>

      <div className="mobile">
        <input type="tel" placeholder='Enter Mobile Number' onChange={(e) => setMobile(e.target.value)} value={mobile}/>
        <button onClick={() => {
            dispatch(updateMobile(mobile));
            setMobile("")
        }}>Add Mobile</button>
      </div>

      <div><button onClick={() => dispatch(reset())}>Reset</button></div>
    </div>
  )
}

export default Form
