import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Store.css"
import { deposit, withdraw, updateName, updateMobile, reset, addTransaction } from './Actions.js'

const Form = () => {
    const [amount, setAmount] =  useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [transId, setTransId] = useState(1)
    let dispatch = useDispatch();
  return (
    <div style={{padding : "2rem"}}>
      <div className="first">
        <input type="number" placeholder='Enter Amount' 
        value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => {
            setTransId(transId + 1)
            dispatch(deposit(amount));
            dispatch(addTransaction(transId, amount, "credit", new Date()))
            setAmount("")
        }} >Deposit</button>
        <button onClick={() => {
            setTransId(transId + 1)
            dispatch(withdraw(amount));
            dispatch(addTransaction(transId, amount, "debit", new Date()))
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
